---
name: Kaizencode
description: A three-partner software studio's site, set like a developer's terminal after hours.
colors:
  night: "oklch(0.145 0 0)"
  graphite: "oklch(0.205 0 0)"
  slate: "oklch(0.269 0 0)"
  ash: "oklch(0.556 0 0)"
  fog: "oklch(0.708 0 0)"
  chalk: "oklch(0.922 0 0)"
  paper: "oklch(0.985 0 0)"
  hairline: "oklch(1 0 0 / 10%)"
  shine-blue: "oklch(0.78 0.15 255)"
  shine-cyan: "oklch(0.85 0.12 195)"
  error-red: "oklch(0.704 0.191 22.216)"
typography:
  display:
    fontFamily: "JetBrains Mono Variable, monospace"
    fontSize: "4.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "JetBrains Mono Variable, monospace"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "JetBrains Mono Variable, monospace"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "-0.025em"
  title:
    fontFamily: "JetBrains Mono Variable, monospace"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "JetBrains Mono Variable, monospace"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "JetBrains Mono Variable, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  label:
    fontFamily: "JetBrains Mono Variable, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: "0.1em"
  tag:
    fontFamily: "JetBrains Mono Variable, monospace"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.05em"
rounded:
  tile: "14px"
  control: "18px"
  card: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "44px"
    typography: "{typography.body-sm}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "44px"
    typography: "{typography.body-sm}"
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    size: "32px"
  card:
    backgroundColor: "oklch(0.269 0 0 / 30%)"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "20px"
  card-sm:
    backgroundColor: "oklch(0.269 0 0 / 30%)"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "16px"
  badge-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "2px 12px"
    typography: "{typography.label}"
  tag:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "2px 8px"
    typography: "{typography.tag}"
  icon-tile:
    backgroundColor: "oklch(0.922 0 0 / 10%)"
    textColor: "{colors.chalk}"
    rounded: "{rounded.tile}"
    size: "40px"
---

# Design System: Kaizencode

## Overview

**Creative North Star: "The night shift terminal"**

The site reads like a developer's screen after hours: near-black, set entirely in a monospace face, quiet, and a little wry. The studio's whole pitch is that you talk to the people who write the code, so the interface looks like where that code gets written. Section labels are code comments (`// nuestros proyectos`), the hero carries a shell-script joke, and a field of slow, faint stars drifts behind everything, nudged toward the cursor.

Density is calm and editorial rather than dashboard-tight: one column of sections, generous vertical gaps (96px between sections), short measure for prose (max 42rem), and cards that sit on the stars as translucent glass instead of opaque panels. Color is almost absent. The only hue on the page is a single blue-to-cyan light sweep that crosses the "Kaizencode" wordmark once on load; project screenshots carry the rest of the color.

Dark is the canonical theme and the default (`<html class="dark">`, stored in `localStorage.theme`). A light theme exists via the toggle but is secondary and not yet tuned; design and review against dark first.

**Key Characteristics:**
- Monospace everywhere: JetBrains Mono for display, headings, body and labels.
- Strict grayscale UI on a near-black canvas; color only from the logo shine and real screenshots.
- Translucent glass cards (30% slate, backdrop blur, hairline ring) floating over a star field.
- Developer-flavoured microcopy as ornament: `// label`, numbered `01` steps, tabular stats.
- Motion that settles once, all on GSAP (`src/lib/animations.ts`): staggered blur-in entrance, a single shine sweep, scroll reveals that move but never fade. All gated by `prefers-reduced-motion`.

## Colors

A strict grayscale ramp in OKLCH (zero chroma), with one decorative blue-cyan pair and a red reserved for errors.

### Primary
- **Chalk** (`{colors.chalk}`): the primary action in dark mode, the filled "Pide presupuesto" button, and the 10% tint behind icon tiles. Light enough to be the brightest surface on the page, which is what makes it the call to action without needing a hue.

### Tertiary
- **Shine blue** and **Shine cyan** (`{colors.shine-blue}`, `{colors.shine-cyan}`): only inside the hero wordmark's one-time light sweep (`.hero-shine`), as a narrow band in a 110° gradient between two stops of foreground. Never a fill, border, text color or hover state.

### Neutral
- **Night** (`{colors.night}`): page background in dark mode, and text on the primary button in light mode.
- **Graphite** (`{colors.graphite}`): opaque card and popover surface, and text on chalk buttons.
- **Slate** (`{colors.slate}`): secondary/muted surface. Used at 30% under glass cards, process steps and the contact panel; solid on tags.
- **Ash** (`{colors.ash}`): focus ring base (applied at 30–50% alpha).
- **Fog** (`{colors.fog}`): muted text: supporting paragraphs, card descriptions, nav links at rest, section labels, stat labels.
- **Paper** (`{colors.paper}`): primary text and headings.
- **Hairline** (`{colors.hairline}`): borders and dividers, usually further softened to 50% (`border-border/50`).

### Semantic
- **Error red** (`{colors.error-red}`): destructive and `aria-invalid` states only. The home page has none.

### Named Rules
**The Monochrome Rule.** UI chrome is grayscale. Hierarchy comes from lightness (paper → fog → slate), never from hue. If a new element seems to need a color, it needs contrast or size instead.

**The One Spark Rule.** The blue-cyan shine appears once per page, on the wordmark, and plays once. A second spark makes it decoration instead of a signature.

## Typography

**Display Font:** JetBrains Mono Variable (with monospace)
**Body Font:** JetBrains Mono Variable (with monospace)
**Label/Mono Font:** JetBrains Mono Variable (with monospace)

**Character:** One monospace family does every job, so hierarchy is carried by size, weight and tracking alone. Large sizes are tracked tight (-0.05em) to keep the mono grid from feeling loose; small labels are tracked wide and uppercased so they read as code annotations. Inter Variable is installed and mapped to `font-sans` but `html` sets `font-heading` (mono), so Inter does not render anywhere on the home page.

### Hierarchy
- **Display** (700, 3rem → 4.5rem at `sm`, line-height 1.25, -0.05em): the "Kaizencode" wordmark in the hero, and nothing else.
- **Lead** (600, 1.25rem → 1.5rem, -0.025em): the hero's descriptive heading under the wordmark and the "about" highlight line. Paper at 90%.
- **Headline** (600, 1.5rem → 1.875rem, -0.025em): every section `h2`.
- **Title** (500, 1rem): card titles (`h3`) and FAQ questions (600).
- **Body** (400, 1rem → 1.125rem, line-height ~1.55): hero support text and section intros, in fog, max width 42rem.
- **Body small** (400, 0.875rem): card descriptions, step text, links inside cards.
- **Label** (0.75rem, uppercase, 0.1em tracking): section labels written as `// comments`, project type, hero badge. Fog.
- **Tag** (500, 0.625rem, uppercase, 0.05em tracking): tech/service tags inside cards.

### Named Rules
**The One Family Rule.** Everything is JetBrains Mono. Hierarchy is size, weight, tracking and lightness; never introduce a second display or body face.

**The Comment Label Rule.** Every section opens with a lowercase-in-copy, uppercase-rendered `// label` above its headline. It's the system's signature; don't drop it or swap it for an eyebrow pill.

## Layout

A single centered column, `max-width: 72rem` (1152px) with 24px side gutters, shared by the sticky header and the main content. Sections stack vertically with a 96px gap; inside a section, the header and content are 32px apart. The hero is left-aligned, not centered, and so is every section header.

Grids are simple and collapse to one column on mobile: services and team in 3 columns from `md`/`sm`, process steps 2 → 4 columns, all with 16–24px gaps. Projects use a native scroll-snap carousel that bleeds to the viewport gutter (`-mx-6`), with cards at 85% width on mobile, ~1.6 per view at `sm` and ~2.6 at `lg`; the trailing card fades out with a mask so it reads as scrollable. Anchored sections offset by 96px (`scroll-mt-24`) to clear the sticky header.

Breakpoints are Tailwind defaults: `sm` 640px, `md` 768px, `lg` 1024px. The nav collapses to a full-width sheet below `md`.

## Elevation & Depth

Depth comes from translucency, not shadow. Cards and panels are 30% slate with a backdrop blur, so the star field shows through, edged by a 1px hairline ring (white at 10% in dark). The only shadows are the card default (`shadow-sm`, nearly invisible on black) and a hover lift on every card (`shadow-lg` tinted with primary at 5%). The sticky header is the same idea at higher strength: 60% background with a heavy blur and a 50% hairline bottom border.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`): default card.
- **Lift** (`box-shadow: 0 10px 15px -3px oklch(0.922 0 0 / 5%), 0 4px 6px -4px oklch(0.922 0 0 / 5%)` + `translateY(-4px)`, 300ms): every `Card` on hover, built into the component; icon tiles inside brighten from 10% to 20% chalk. The contact panel opts out, and reduced motion drops the movement.

### Named Rules
**The Glass Over Stars Rule.** Surfaces that sit on the page are translucent (slate 30% + blur + hairline), never opaque fills. The stars must stay faintly visible through every card.

## Shapes

Soft, consistent rounding derived from one base radius (`--radius: 0.625rem`). Three steps are in use: 14px for icon tiles, 18px for controls (buttons and badges, which read as near-pills at their heights), and 24px for every card and panel. Avatars and carousel dots are fully round; the active dot stretches into a 24px pill. Project screenshots sit flush at the top of their card, clipped by its 24px top corners, with a hairline under them. Borders are always 1px hairlines, never heavier.

## Components

### Buttons
Quiet and confident: rounded, compact, no hue.
- **Shape:** near-pill corners (18px), 44px tall in the hero (`h-11`), 32px default.
- **Primary:** chalk fill with graphite text, 24px horizontal padding, trailing arrow icon. Hover drops the fill to 80%.
- **Outline:** transparent with a paper-at-20% border; hover adds a faint input-tinted fill.
- **Icon:** 32px square outline buttons for the carousel arrows; disabled at 50% opacity.
- **Focus / Active:** 3px ring in ash at 30% plus ring-colored border; pressing nudges the button down 1px.

### Chips (badges and tags)
- **Hero badge:** outline, 12px mono, 0.1em tracking, 12px horizontal padding.
- **Tags:** solid slate, 10px uppercase mono, inside project and service cards, listing tech or service (`SHOPIFY | PERSONALIZADO`).

### Cards / Containers
- **Corner Style:** 24px.
- **Background:** slate at 30% with backdrop blur, built into the `Card` component itself, so every card is glass without extra classes. Small tiles (process steps, case-study facts and scores, the city contact) are `Card size="sm"` too; never hand-style a tile.
- **Blur blockers:** never put `mask-image`, `filter` or a filter animation (`hero-in`) on an ancestor of a glass surface; it cuts the blur off from the stars. Fade edges with a gradient overlay instead (see the projects carousel).
- **Shadow Strategy:** rest shadow; every card lifts on hover (see Elevation).
- **Border:** 1px ring, paper at 10%.
- **Internal Padding:** 20px (default) or 16px (`size="sm"`), 16–20px vertical gaps between header and content.
- **Structure:** optional flush screenshot (16:10, top-anchored), mono label, title, fog description, tags pushed to the bottom with `mt-auto`, then text links with arrow or external-link icons that underline on hover.

### Navigation
- **Header:** sticky, 60% night with heavy blur, 50% hairline bottom border, a 2px chalk scroll-progress bar along its bottom edge.
- **Links:** 14px fog; hover turns paper. No underline.
- **Right cluster:** EN/ES toggle group and the animated theme toggler.
- **Mobile:** below 768px a menu button opens a full-width sheet with 30px semibold links in fog.

### Section header (signature)
A `// label` in 12px uppercase fog mono, 8px above a 30px semibold headline. Every section starts with it, left-aligned.

### Process steps
A 4-up grid of small `Card`s, each with a zero-padded mono index (`01`) in fog above 14px text.

### FAQ
`FaqAccordion` (`src/components/custom/faq-accordion.tsx`): shadcn `Accordion` on glass (slate 30%, blur, hairline, rounded) with semibold questions and one chevron per row. Rows tint on hover (muted at 30%). Several answers can be open at once. GSAP animates the panel height and turns the chevron 180° with a small overshoot (`back.out`); panels stay in the HTML (`forceMount`) so the answers stay indexable, and closed ones are hidden from assistive tech.

### Projects carousel
Native horizontal scroll-snap list of project cards with arrow buttons (desktop), mouse drag, and a dot pager below whose active dot stretches into a 24px paper pill. Works with no JS.

### Contact panel
Every page closes with the same block, `ContactSection` (`src/components/custom/contact-section.astro`, anchored at `#contacto`): one shadcn `Card` (glass, 24px corners) with the `// contacto` label, a page-specific headline and intro, the primary email button, and the address spelled out underneath in fog with a paper link. Pages vary only the copy and the email subject, never the layout. Email is the only channel.

## Do's and Don'ts

### Do:
- **Do** design and review in dark mode first; it is the default and the reference.
- **Do** set every new piece of text in JetBrains Mono and build hierarchy from size, weight (400–700), tracking and lightness.
- **Do** open every section with the `SectionHeader` (`// label` + headline), left-aligned.
- **Do** put content surfaces on glass: slate at 30%, backdrop blur, 1px hairline, 24px corners, through shadcn `Card`.
- **Do** animate with GSAP (and ScrollTrigger for scroll), adding new effects to `src/lib/animations.ts` keyed by a class name. Gate them with `gsap.matchMedia("(prefers-reduced-motion: no-preference)")`, keep content fully visible without JS, and clear `filter` when an entrance ends. Reveals move content 32px and never fade it, so text never fails contrast mid-animation. Hover micro-transitions stay in CSS.
- **Do** keep prose to a max width of 42rem and supporting text in fog.

### Don't:
- **Don't** add hue to UI chrome: no colored buttons, links, borders, icon tints or section backgrounds (The Monochrome Rule).
- **Don't** reuse the blue-cyan shine anywhere but the hero wordmark, or let it loop (The One Spark Rule).
- **Don't** introduce a second typeface, including Inter, which is installed but intentionally unused.
- **Don't** make surfaces opaque over the star field, or stack heavy drop shadows; depth is translucency.
- **Don't** center-align section headers or the hero.
- **Don't** treat the current light theme as a reference; its glass cards turn flat grey and need their own pass before light mode is designed against.
