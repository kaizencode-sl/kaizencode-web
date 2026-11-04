# Agent Instructions

## Project Overview
This is an Astro.js project with React, TypeScript, Tailwind CSS v4, and shadcn/ui components for Kaizencode, a software company.

## Framework Details
- Component paths are aliased via `@/*` in tsconfig.json
- Tailwind CSS is configured through `@tailwindcss/vite`
- Uses strict TypeScript config from `astro/tsconfigs/strict`
- shadcn/ui components can be added with `pnpm dlx shadcn@latest add <component>`
- Node.js >=22.23.4 required
- Use pnpm (not npm) for all package management commands

## Key Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm typecheck` - Run TypeScript checks
- `pnpm test` - Build and smoke-test `dist/`
- Keep TypeScript on 6.x until typescript-eslint and `@astrojs/check` support 7

## Project Structure
- Components: `src/components/`
- Pages: `src/pages/[...path].astro` renders every page in both languages from the table in `src/lib/pages.ts`; add a page by adding an entry there (no per-language files)
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
- When composing new components using shadcn or animate-ui primitives, place them under `src/components/custom/` (e.g., `faq-accordion.tsx`)
- Prefer animated components from animate-ui over static alternatives (e.g., `ThemeTogglerButton` over a plain `ThemeToggle`)

## Internationalization (i18n)
- The project uses Astro's built-in i18n with `en` and `es` locales, configured in `astro.config.mjs`
- All text content must be provided in **both English (`en`) and Spanish (`es`)** — never add text in only one language
- Translations live in `src/i18n/messages/*.ts` (one file per area, each with `en` and `es`), merged by `src/i18n/ui.ts`, with flat, dot-separated keys (e.g., `'hero.tagline'`); English must define every Spanish key (enforced by `satisfies`)
- The `Lang` type (`'en' | 'es'`) flows from Astro route params → layout → components via props
- Use `useTranslations(lang)` from `@/i18n/utils` in Astro components to look up translated strings
- In React client components (`'use client'`), receive translated strings as props or re-implement the inline lookup pattern from `header.tsx`
- The type-safe `UiKey` type (derived from `defaultLang` keys) ensures all translations are accounted for

## Text & Copy Guidelines
- Use sentence case for all text content: only the first word and proper nouns are capitalized (e.g., "Software company" not "Software Company", "Custom solutions" not "Custom Solutions")
