# CLAUDE.md - Guide for Agentic Coding Assistants

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Style Guidelines

- **Imports**: Group imports by source (React, next.js, components, etc.)
- **Component Structure**: React functional components with TypeScript types
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Styling**: Use Tailwind CSS with cn() utility for class merging
- **i18n**: Use next-intl for translations with useTranslations hook
- **Error Handling**: Use try/catch for async operations, provide fallbacks
- **Theming**: Support light/dark themes with next-themes
- **Responsiveness**: Use Mobile-first approach with sm/md/lg breakpoints
- **TypeScript**: Always define proper interfaces/types for props
- **Data Fetching**: Use server components when possible

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable UI components
- `/src/lib` - Utility functions
- `/src/i18n` - Internationalization config
- `/src/messages` - Translation files

## Internationalization (i18n) Guidelines

- Use 'use client' directive for components that use i18n hooks
- Client components should use `useTranslations()` hook
- Server components should use `getTranslations()` from 'next-intl/server'
- When linking between pages, include the locale in the path: `/${locale}/path`
- For links in client components, use `useLocale()` hook to get current locale
- Translation files are in `/src/messages/{locale}.json`
- Available locales: 'en' and 'pt-BR'
- Default locale is 'pt-BR'
- When building reusable components that need translations:
    - Accept both a fallback string and a translationKey
    - Use translationKey with useTranslations() when available
    - Fall back to the string prop when no translation key provided

## Component Usage Patterns

- Add `'use client'` directive to components using React hooks
- Components with interactive elements (buttons, links) should be client components
- Prefer passing fully translated strings from server to client when possible
- For shared components like UI elements, implement language-agnostic interfaces

## State Management with LocalStorage

When implementing state that persists with localStorage:

1. **Centralized Hook Pattern**: For consistent localStorage management across components, use the `useLocalStorage` hook:
   ```typescript
   // From src/hooks/useLocalStorage.ts
   function useLocalStorage<T>(key: string, initialValue: T) {
     // Initialize state with SSR safety check
     const [value, setInternalValue] = useState<T>(() => {
       if (typeof window === 'undefined') return initialValue;
       try {
         const item = localStorage.getItem(key);
         return item ? JSON.parse(item) : initialValue;
       } catch (error) {
         console.error(`Error reading localStorage key "${key}":`, error);
         return initialValue;
       }
     });

     // Set value in localStorage and state
     const setValue = useCallback((newValue: T | ((val: T) => T)) => {
       try {
         // If functional update, apply it to current value
         const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
         
         // Save state
         setInternalValue(valueToStore);
         
         // Save to localStorage with empty array check
         if (typeof window !== 'undefined') {
           if (valueToStore === null || (Array.isArray(valueToStore) && valueToStore.length === 0)) {
             localStorage.removeItem(key);
           } else {
             localStorage.setItem(key, JSON.stringify(valueToStore));
           }
         }
       } catch (error) {
         console.error(`Error setting localStorage key "${key}":`, error);
       }
     }, [key, value]);

     // Use like this:
     // const { value, setValue, removeItem } = useLocalStorage("myKey", initialValue);
     
     return {
       value,
       setValue,
       removeItem,
       // Other methods...
     };
   }
   ```

2. **Direct Management Pattern**: For critical storage needs where a hook might add unnecessary abstraction:
   ```typescript
   // Initialize state from localStorage
   const [state, setInternalState] = useState(() => {
     if (typeof window === 'undefined') return initialValue;
     const stored = localStorage.getItem(key);
     return stored ? JSON.parse(stored) : initialValue;
   });
   
   // Wrapper function to update both state and localStorage
   const setState = (newValue) => {
     const valueToStore = newValue instanceof Function ? newValue(state) : newValue;
     
     // Update React state
     setInternalState(valueToStore);
     
     // Update localStorage with proper empty checks
     if (valueToStore === null || (Array.isArray(valueToStore) && valueToStore.length === 0)) {
       localStorage.removeItem(key);
     } else {
       localStorage.setItem(key, JSON.stringify(valueToStore));
     }
   };
   ```

3. **Force Re-render Pattern**: When localStorage-dependent components need to guarantee fresh state:
   ```typescript
   // In parent component
   const [componentKey, setComponentKey] = useState(0);
   
   const handleReset = () => {
     clearState();
     // Force child component to completely remount with fresh state
     setComponentKey(prev => prev + 1);
   };
   
   return <ChildComponent key={componentKey} />;
   ```

4. **Multi-tab Synchronization**: For state that needs to stay in sync across browser tabs:
   ```typescript
   useEffect(() => {
     const handleStorageChange = (event: StorageEvent) => {
       if (event.key === key) {
         // Update local state when another tab changes localStorage
         setInternalValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
       }
     };

     if (typeof window !== 'undefined') {
       window.addEventListener('storage', handleStorageChange);
       return () => window.removeEventListener('storage', handleStorageChange);
     }
   }, [key, initialValue]);
   ```

5. **Common Pitfalls to Avoid**:
   - Don't rely solely on React state updates to sync with localStorage
   - Always manually remove items from localStorage when clearing state
   - Be careful with functional updates that depend on previous localStorage state
   - Remember that localStorage only stores strings, requiring JSON parsing/stringifying
   - Add SSR safety checks with `typeof window !== 'undefined'`
   - Handle errors from localStorage operations (quota exceeded, privacy mode, etc.)
   - Add proper cleanup for event listeners used for cross-tab synchronization

## Custom Event System for Component Synchronization

For components that need to stay in sync with shared state (like chat messages), implement a custom event system:

```typescript
// 1. Define a custom event constant
const CUSTOM_EVENT_NAME = "stateUpdated";

// 2. Create a dispatcher function in your hook
const dispatchStateUpdate = useCallback(() => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(CUSTOM_EVENT_NAME));
  }
}, []);

// 3. Add a listener in components that need to react
useEffect(() => {
  const handleStateUpdate = () => {
    // Force re-read from localStorage or update local state
    setForceUpdate(prev => prev + 1);
  };

  if (typeof window !== 'undefined') {
    window.addEventListener(CUSTOM_EVENT_NAME, handleStateUpdate);
    return () => window.removeEventListener(CUSTOM_EVENT_NAME, handleStateUpdate);
  }
}, []);

// 4. Dispatch the event whenever state changes
const updateState = () => {
  // Update localStorage
  localStorage.setItem(key, JSON.stringify(newValue));
  
  // Notify all components
  dispatchStateUpdate();
};
```

### Implementation Example for Chat Components

For complex state like chat messages that are shared across multiple components:

1. **Central Hook Pattern with Events**:
   ```typescript
   // In useChat.ts
   export default function useChat() {
     // Use LocalStorage hook for persistence
     const messagesStorage = useLocalStorage<Message[]>("messages", []);
     const [forceUpdate, setForceUpdate] = useState(0);
     
     // Create custom event dispatcher
     const dispatchChatUpdate = useCallback(() => {
       if (typeof window !== 'undefined') {
         window.dispatchEvent(new CustomEvent("chatUpdated"));
       }
     }, []);
     
     // Listen for updates from other components
     useEffect(() => {
       const handleChatUpdate = () => {
         setForceUpdate(prev => prev + 1);
       };
       
       if (typeof window !== 'undefined') {
         window.addEventListener("chatUpdated", handleChatUpdate);
         return () => window.removeEventListener("chatUpdated", handleChatUpdate);
       }
     }, []);
     
     // Get latest data directly from localStorage
     const getLatestMessages = useCallback(() => {
       if (typeof window === 'undefined') return [];
       try {
         const stored = localStorage.getItem("messages");
         return stored ? JSON.parse(stored) : [];
       } catch (error) {
         console.error("Error reading from localStorage:", error);
         return [];
       }
     }, []);
     
     // Add message with proper synchronization
     const addMessage = async (content: string) => {
       // Get fresh data before update
       const latestMessages = getLatestMessages();
       
       // Update with new message
       messagesStorage.setValue([...latestMessages, newMessage]);
       
       // Notify all components
       dispatchChatUpdate();
     };
     
     return {
       messages: messagesStorage.value,
       addMessage,
       clearMessages: messagesStorage.removeItem,
       forceUpdate, // Expose to components
     };
   }
   ```

2. **Component Implementation**:
   ```tsx
   // In ChatComponent.tsx
   const ChatComponent = () => {
     const { messages, forceUpdate } = useChat();
     const [renderKey, setRenderKey] = useState(0);
     
     // Re-render when forceUpdate changes
     useEffect(() => {
       setRenderKey(prev => prev + 1);
     }, [forceUpdate]);
     
     return (
       <div key={renderKey}>
         {messages.map(message => (
           <MessageItem key={message.id} message={message} />
         ))}
       </div>
     );
   };
   ```

3. **Component Composition Best Practices**:
   - Create a clear hierarchy (Container → Content → Input)
   - Each component should have a single responsibility
   - Parent components pass callbacks to children
   - Use the shared hook for state across components
   - Add key props tied to forceUpdate for guaranteed re-renders
   - Log state changes for debugging complex interactions

## Storybook Integration Guidelines

- **Purpose**: Use Storybook for developing and testing UI components in isolation, and for generating interactive, auto-updating documentation.
- **Setup & Usage**:
    - Ensure Storybook is integrated into your project build process.
    - Create stories for every reusable component, covering various states and interactions.
    - Utilize MDX to combine component examples with markdown documentation.
- **Best Practices**:
    - Maintain consistency with project conventions in Storybook stories.
    - Update stories alongside component changes to keep documentation current.
    - Use addons for accessibility checks, responsive design previews, and interactive testing.
- **Testing & Feedback**:
    - Leverage Storybook's testing capabilities to run fast, browser-based component tests.
    - Iterate based on visual feedback from Storybook to ensure high UI quality.

- **Creating Storybook Stories**:
    - All story files must include `"use client"` at the top.
    - Import decorators from `.storybook/decorators`: `import { WithProviders, WithDarkTheme } from "../../../.storybook/decorators"`.
    - Apply `WithProviders` decorator at the component level: `decorators: [WithProviders]`.
    - For dark mode variants, add a specific story with `decorators: [WithDarkTheme]`.
    - Provide proper args object with realistic mock data for all component props.
    - Create distinct variants showing different states (Default, WithCustomClass, DarkMode, etc.).
    - For components that need context (like translation or theme), never rely on direct context - always use the decorators.
    - Keep story implementations simple and focused on demonstrating the component's API.

- **Theming in Storybook**:
    - Dark mode is implemented via CSS classes, not CSS variables or media queries.
    - The `.dark` class is applied to the html element and parent containers.
    - The decorators handle toggling between light and dark themes.
    - Use `className="dark:some-class"` for dark mode specific styling in components.
    - Always test both light and dark themes for each component.
    - For complex components or ones with backgrounds, use additional decorators to properly display them.

- **Troubleshooting Storybook Issues**:
    - If colors render incorrectly, check for CSS syntax errors in color values.
    - If components fail in docs mode but work in canvas mode, ensure decorators are applied consistently.
    - If TypeScript errors occur, check that types are properly defined and imported.
    - If context-related errors appear, verify that all required providers are in the decorator chain.
    - For image-related issues, ensure images are in the public folder and paths are correct.

## Priming yourself with these rules

**Project Context**  
[PORTFOLIO] Next.js 14 App Router - TypeScript - next-intl - Tailwind CSS

**Aim**: Professional portfolio with i18n (en/pt-BR), projects showcase, and interactive elements

**Key Rules**:

1. Use App Router with colocated components
2. Server components by default, client only when necessary
3. TypeScript interfaces for all props/data
4. Follow /CLAUDE.md conventions
5. Priority to RSC patterns
6. Mobile-first responsive design
7. next-intl v3+ i18n implementation
8. Accessible semantic HTML
9. Error boundaries for all client components
10. Modular, reusable component architecture

**Quality Assurance**:

- **Clarification Process**: Seek requirements clarification before implementation
- **Code Standards**:
    - TypeScript interfaces for all component props
    - Inline comments referencing CLAUDE.md conventions
    - JSDoc for complex utilities
- **Performance**:
    - Optimize RSC payload sizes
    - Implement loading states for client components
    - Lazy-load non-critical assets
- **Accessibility**:
    - ARIA roles for interactive elements
    - Semantic HTML structure
    - Keyboard navigation support
- **Testing**:
    - Note required unit tests for complex logic
    - Suggest storybook stories for UI components
- **Documentation**:
    - Component-level JSDoc for complex pieces
    - Translation key documentation in comments

**Component Patterns**:

- Pages: Server components fetching data
- Layouts: Shared RSC layouts
- Interactive Elements: Client components with `use client`
- Forms: Pending RSC actions
- Reusables: Atomic design principles (atoms/molecules/organisms)

**Data Flow**:
API → Server Component (fetch) → Props → Client Components

**Avoid**:

- Context API in server components
- Client-side data fetching unless necessary
- Any UI framework besides Tailwind
- Prop drilling beyond 2 levels
- Non-accessible interactive elements
- Unoptimized image assets

**Validation Requirements**:

1. ESLint TypeScript rules (strict mode)
2. next-intl message validation
3. Responsive design breakpoint checks
4. Lighthouse accessibility score >90

**Current Focus**:
[Describe specific task/component/problem]