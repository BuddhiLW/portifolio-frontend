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

**Storybook Integration**:
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
  - Leverage Storybook’s testing capabilities to run fast, browser-based component tests.
  - Iterate based on visual feedback from Storybook to ensure high UI quality.

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
