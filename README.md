# kaizencode-web

Kaizencode company website — built with Astro, React, TypeScript, and shadcn/ui.

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro](https://astro.build) v6.4 |
| UI library | [React](https://react.dev) 19 |
| Language | [TypeScript](https://www.typescriptlang.org) 6 |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Components | [shadcn/ui](https://ui.shadcn.com) |
| Animations | [motion](https://motion.dev), [animate-ui](https://www.animate-ui.com) |
| Icons | [Lucide](https://lucide.dev) |

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4321/kaizencode-web](http://localhost:4321/kaizencode-web).

## Commands

| Command | Description |
|---------|------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format with Prettier |
| `pnpm typecheck` | Run Astro type check |

## Project structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui primitives
│   ├── custom/      # Composed components using shadcn/animate-ui
│   └── animate-ui/  # animate-ui component library
├── pages/           # Astro page routes
├── layouts/         # Layout components
├── lib/             # Utilities
└── hooks/           # React hooks
```

## Adding shadcn/ui components

```bash
pnpm dlx shadcn@latest add button
```

## Developing with opencode

This project is configured for [opencode](https://opencode.ai) — an AI-powered coding assistant for the terminal.

### MCP servers

The following MCPs are available when working on this project:

| MCP | Scope | Purpose |
|-----|-------|---------|
| **shadcn** | Project-level (`opencode.json`) | Add and discover shadcn/ui components |
| **Astro docs** | Project-level (`opencode.json`) | Query Astro framework documentation |
| **context7** | Global (`~/.config/opencode/opencode.json`) | Query docs for any library (React, Tailwind, motion, etc.) |

### Using MCPs with opencode

Ask opencode to use these tools directly in conversation:

- *"Add a card component with shadcn"* — uses the shadcn MCP to discover and add components
- *"How do I use Astro's image optimization?"* — fetches docs from the Astro docs MCP
- *"Show me React 19 use() hook examples"* — queries context7 for library docs and examples

The `AGENTS.md` file contains project-specific instructions for opencode, including conventions for component placement, text casing, and development workflow.
