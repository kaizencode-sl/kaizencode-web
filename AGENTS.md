# OpenCode Agent Instructions

## Project Overview
This is an Astro.js project with React, TypeScript, Tailwind CSS v4, and shadcn/ui components for Kaizencode, a software company.

## Framework Details
- Component paths are aliased via `@/*` in tsconfig.json
- Tailwind CSS is configured through `@tailwindcss/vite`
- Uses strict TypeScript config from `astro/tsconfigs/strict`
- shadcn/ui components can be added with `pnpm dlx shadcn@latest add <component>`
- Node.js >=22.12.0 required
- Use pnpm (not npm) for all package management commands

## Key Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm typecheck` - Run TypeScript checks

## Project Structure
- Components: `src/components/`
- Pages: `src/pages/`
- Layouts: `src/layouts/`
- Utilities: `src/lib/`, `src/hooks/`

## Development Workflow
1. Run `pnpm dev` to start the dev server
2. Make changes to components or pages in `src/`
3. Code is automatically reloaded during development
4. Use `pnpm lint` before committing to check for issues
5. Run `pnpm typecheck` to verify TypeScript types

## Component Usage Guidelines
- Before creating a new component, always check if shadcn or animate-ui already provides one that serves the purpose — avoid custom components when an existing one suffices
- When composing new components using shadcn or animate-ui primitives, place them under `src/components/custom/` (e.g., `animated-code-display.tsx`)
- Prefer animated components from animate-ui over static alternatives (e.g., `ThemeTogglerButton` over a plain `ThemeToggle`)

## Internationalization (i18n)
- The project uses Astro's built-in i18n with `en` and `es` locales, configured in `astro.config.mjs`
- All text content must be provided in **both English (`en`) and Spanish (`es`)** — never add text in only one language
- Translations live in `src/i18n/ui.ts` as a single dictionary with flat, dot-separated keys (e.g., `'hero.tagline'`)
- The `Lang` type (`'en' | 'es'`) flows from Astro route params → layout → components via props
- Use `useTranslations(lang)` from `@/i18n/utils` in Astro components to look up translated strings
- In React client components (`'use client'`), receive translated strings as props or re-implement the inline lookup pattern from `header.tsx`
- The type-safe `UiKey` type (derived from `defaultLang` keys) ensures all translations are accounted for

## Text & Copy Guidelines
- Use sentence case for all text content: only the first word and proper nouns are capitalized (e.g., "Software company" not "Software Company", "Custom solutions" not "Custom Solutions")
