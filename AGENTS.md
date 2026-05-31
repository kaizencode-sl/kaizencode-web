# OpenCode Agent Instructions

## Project Overview
This is an Astro.js project with React, TypeScript, and shadcn/ui components for Kaizencode, a software company. The project uses:
- Astro v6.4.2
- React 19.2.6
- TypeScript 6.x
- Tailwind CSS v4
- shadcn/ui components

## Key Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Run TypeScript checks

## Project Structure
- Components: `src/components/`
- Pages: `src/pages/`
- Layouts: `src/layouts/`
- Utilities: `src/lib/`, `src/hooks/`

## Framework Details
- Uses Astro's React integration (`@astrojs/react`)
- Component paths are aliased via `@/*` in tsconfig.json
- Tailwind CSS is configured through `@tailwindcss/vite`
- shadcn/ui components are installed and can be added with `npx shadcn@latest add <component>`

## Development Workflow
1. Run `npm run dev` to start the dev server
2. Make changes to components or pages in `src/`
3. Code is automatically reloaded during development
4. Use `npm run lint` before committing to check for issues
5. Run `npm run typecheck` to verify TypeScript types

## Important Notes
- The project uses strict TypeScript configuration from `astro/tsconfigs/strict`
- Component imports use the `@/` alias path
- The project is configured to run with Node.js >=22.12.0

## Component Usage Guidelines
- Always prefer using shadcn and animate-ui components instead of crafting them manually
- When composing new components using shadcn or animate-ui primitives, place them under the `src/components/custom/` folder (e.g., `animated-code-display.tsx`)
- Always prefer animated components from animate-ui over static alternatives (e.g., use `ThemeTogglerButton` over a plain `ThemeToggle`)

## Text & Copy Guidelines
- Use sentence case for all text content: only the first word and proper nouns are capitalized (e.g., "Software company" not "Software Company", "Custom solutions" not "Custom Solutions")