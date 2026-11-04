# kaizencode-web

Source of [www.kaizencode.es](https://www.kaizencode.es), the Kaizencode company website. It's a static, bilingual (Spanish/English) site built with Astro, React, TypeScript and shadcn/ui, and deployed to GitHub Pages.

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro](https://astro.build) 7 |
| UI library | [React](https://react.dev) 19 |
| Language | [TypeScript](https://www.typescriptlang.org) 6 |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 (via `@tailwindcss/vite`) |
| Components | [shadcn/ui](https://ui.shadcn.com), [animate-ui](https://www.animate-ui.com) |
| Animations | [motion](https://motion.dev), [GSAP](https://gsap.com) |
| Icons | [Lucide](https://lucide.dev) |
| SEO | [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) |

## Getting started

Requirements: Node.js `>=22.12.0` and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321). The English version is at [http://localhost:4321/en/](http://localhost:4321/en/).

## Commands

| Command | Description |
|---------|------------|
| `pnpm dev` | Start dev server on port 4321 |
| `pnpm build` | Build the static site into `dist/` |
| `pnpm preview` | Preview the production build |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format with Prettier |
| `pnpm format:check` | Check formatting without writing |
| `pnpm typecheck` | Run `astro check` |

## Project structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui primitives
│   ├── custom/      # Composed components using shadcn/animate-ui
│   └── animate-ui/  # animate-ui component library
├── pages/           # Routes: Spanish at the root, English under en/
├── layouts/         # Layout components
├── i18n/            # Translations (ui.ts) and helpers (utils.ts)
├── styles/          # Global CSS
├── lib/             # Utilities
└── hooks/           # React hooks
public/              # Static assets, CNAME, robots.txt, OG images
```

## Internationalization

Spanish (`es`) is the default locale and is served without a prefix. English (`en`) lives under `/en/`.

| Spanish | English |
|---------|---------|
| `/` | `/en/` |
| `/diseno-web/` | `/en/diseno-web/` |
| `/automatizacion-ia/` | `/en/automatizacion-ia/` |
| `/proyectos/<slug>/` (`centauro`, `jovi`, `albinana`, `app-agora`) | `/en/projects/<slug>/` |

All UI text lives in `src/i18n/ui.ts` as flat, dot-separated keys and must be provided in both languages. Old `/es/...` URLs redirect to the root (see `redirects` in `astro.config.mjs`).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with `withastro/action` and deploys it to GitHub Pages. The custom domain comes from `public/CNAME`.

## Adding shadcn/ui components

```bash
pnpm dlx shadcn@latest add button
```

## Developing with Claude Code

This project is configured for [Claude Code](https://claude.com/claude-code).

### MCP servers

The following MCPs are available when working on this project:

| MCP | Scope | Purpose |
|-----|-------|---------|
| **shadcn** | Project-level (`.mcp.json`) | Add and discover shadcn/ui components |
| **astro-docs** | Project-level (`.mcp.json`) | Query Astro framework documentation |
| **context7** | Plugin / user-level | Query docs for any library (React, Tailwind, motion, etc.) |

### Skills

Agent skills live in `.agents/skills/` (symlinked into `.claude/skills/`) and are pinned in `skills-lock.json`. Claude loads them automatically when a task matches.

| Skill | Source | Purpose |
|-------|--------|---------|
| **gsap-core** | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | Core GSAP API: tweens, easing, stagger, `matchMedia` |
| **gsap-timeline** | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | Sequencing animations with timelines |
| **gsap-scrolltrigger** | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | Scroll-linked animations, pinning, scrub |
| **gsap-plugins** | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | Flip, Draggable, SplitText, SVG and other plugins |
| **gsap-react** | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | `useGSAP`, refs and cleanup in React |
| **gsap-frameworks** | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | GSAP in Vue, Svelte and other frameworks |
| **gsap-performance** | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | Smooth 60fps animation, avoiding layout thrashing |
| **gsap-utils** | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | `gsap.utils` helpers: clamp, mapRange, snap, wrap |
| **impeccable** | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Design, critique, audit and polish frontend UI |
| **web-design-guidelines** | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Review UI against web interface guidelines |

### Using MCPs with Claude Code

Ask Claude to use these tools directly in conversation:

- *"Add a card component with shadcn"* — uses the shadcn MCP to discover and add components
- *"How do I use Astro's image optimization?"* — fetches docs from the Astro docs MCP
- *"Show me React 19 use() hook examples"* — queries context7 for library docs and examples

The `AGENTS.md` file contains project-specific instructions, including conventions for component placement, text casing, and development workflow.
