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