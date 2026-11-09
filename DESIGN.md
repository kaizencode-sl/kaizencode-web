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
    fontSize: "0.6875rem"
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
  card-icon:
    textColor: "{colors.fog}"
    size: "20px"
---

# Design System: Kaizencode

## Overview

**Creative North Star: "The night shift terminal"**

The site reads like a developer's screen after hours: near-black, set entirely in a monospace face, quiet, and a little wry. The studio's whole pitch is that you talk to the people who write the code, so the interface looks like where that code gets written. The hero carries a shell-script joke, and a field of slow, faint stars drifts behind everything, nudged toward the cursor.

Density is calm and editorial rather than dashboard-tight: one column of sections, generous vertical gaps (96px between sections), short measure for prose (max 42rem), and cards that sit on the stars as translucent glass instead of opaque panels. Color is almost absent. The UI itself carries no hue; project screenshots carry all the color.

Dark is the canonical theme and the default (`<html class="dark">`, stored in `localStorage.theme`). A light theme, the "day shift", sits behind the toggle: design against dark first, then check light.

**Key Characteristics:**
- Monospace everywhere: JetBrains Mono for display, headings, body and labels.
- Strict grayscale UI on a near-black canvas; color only from real screenshots.
- Translucent glass cards (30% slate, backdrop blur, hairline ring) floating over a star field.
- Developer-flavoured microcopy: numbered `01` steps, tabular stats. Headlines stand on their own, with no label above them.
- Motion that settles once: a staggered blur-in entrance in CSS (it starts on first paint, never waiting for JavaScript), then GSAP (`src/lib/animations.ts`) for scroll reveals that move but never fade, the scrubbed services stack and the stat count-up, with Lenis easing wheel scrolling (touch stays native). Never animate `border-radius`, `filter` or text on large surfaces while scrubbing: they repaint every frame; animate transform and opacity. Scrubbed animations use a 1.1s catch-up (`SCRUB`). All gated by `prefers-reduced-motion`, including the star field, which holds still.

## Colors

A strict grayscale ramp in OKLCH (zero chroma), with a red reserved for errors.

### Primary
- **Chalk** (`{colors.chalk}`): the primary action in dark mode, the filled "Pide presupuesto" button. Light enough to be the brightest surface on the page, which is what makes it the call to action without needing a hue.

### Neutral
- **Night** (`{colors.night}`): page background in dark mode, and text on the primary button in light mode.
- **Graphite** (`{colors.graphite}`): opaque card and popover surface, and text on chalk buttons.
- **Slate** (`{colors.slate}`): secondary/muted surface. Used at 30% under glass cards, process steps and the contact panel; solid on tags.
- **Ash** (`{colors.ash}`): focus ring base (applied at 30–50% alpha).
- **Fog** (`{colors.fog}`): muted text: supporting paragraphs, card descriptions, nav links at rest, stat labels.
- **Paper** (`{colors.paper}`): primary text and headings.
- **Hairline** (`{colors.hairline}`): borders and dividers, usually further softened to 50% (`border-border/50`).

### Semantic
- **Error red** (`{colors.error-red}`): destructive and `aria-invalid` states only. The home page has none.

### Light theme (the day shift)
The same zero-chroma ramp, inverted. The page is a soft paper grey (`oklch(0.975 0 0)`), and cards are white at 70% with blur, so they lift off the paper instead of sinking into it. Hairlines are the dark theme's idea mirrored: night at 10% (borders) and 8% (card rings). Muted text is `oklch(0.48 0 0)`, at least 5.4:1 on every light surface. The stars become graphite specks (night at 50%) with no glow, because a dark glow on paper reads as smudges; `--stars-glow` on the star field's container (0 in light, 1 in dark) controls this.

### Named Rules
**The Monochrome Rule.** UI chrome is grayscale. Hierarchy comes from lightness (paper → fog → slate), never from hue. If a new element seems to need a color, it needs contrast or size instead.


## Typography

**Display Font:** JetBrains Mono Variable (with monospace)
**Body Font:** JetBrains Mono Variable (with monospace)
**Label/Mono Font:** JetBrains Mono Variable (with monospace)

**Character:** One monospace family does every job, so hierarchy is carried by size, weight and tracking alone. Large sizes are tracked tight (-0.05em) to keep the mono grid from feeling loose; small labels are tracked wide and uppercased so they read as code annotations. `font-sans` is mapped to JetBrains Mono too, so no utility can fall back to a second face.

### Hierarchy
- **Display** (700, line-height 1, -0.05em): the "Kaizencode" wordmark in the hero at `min(15vw, 12.5rem)`, sized to span the column, and the service titles in the services stack at `min(13vw, 15svh, 11rem)` (`min(11vw, 16svh, 11rem)` from `lg`, line-height 1.1). Nothing else.
- **Lead** (600, 1.25rem → 1.5rem, -0.025em): the hero's descriptive heading under the wordmark and the "about" highlight line. Paper at 90%.
- **Headline** (600, 1.5rem → 1.875rem, -0.025em): every section `h2`.
- **Title** (500, 1rem): card titles (`h3`) and FAQ questions (600).
- **Body** (400, 1rem → 1.125rem, line-height ~1.55): hero support text and section intros, in fog, max width 42rem.
- **Body small** (400, 0.875rem): card descriptions, step text, links inside cards.
- **Label** (0.75rem, uppercase, 0.1em tracking): project type and hero badge. Fog.
- **Tag** (500, 0.6875rem (11px, the legibility floor), uppercase, 0.05em tracking): tech/service tags inside cards.

### Named Rules
**The One Family Rule.** Everything is JetBrains Mono. Hierarchy is size, weight, tracking and lightness; never introduce a second display or body face.

**The Bare Headline Rule.** A section opens with its headline and nothing above it: no `// label`, no eyebrow, no kicker. The `// comment` labels were removed as redundant with the headline they sat over; don't bring them back in any form.

## Layout

A single centered column, `max-width: 72rem` (1152px) with 24px side gutters, shared by the sticky header and the main content. Sections stack vertically with a 96px gap; inside a section, the header and content are 32px apart. The hero is left-aligned, not centered, and so is every section header.

Grids are simple and collapse to one column on mobile: services and team in 3 columns from `md`/`sm`, process steps 2 → 4 columns, all with 16–24px gaps. The projects and services break out of the column to full width. Anchored sections offset by 96px (`scroll-mt-24`) to clear the sticky header.

Breakpoints are Tailwind defaults: `sm` 640px, `md` 768px, `lg` 1024px. The nav collapses to a full-width sheet below `md`.

## Elevation & Depth

Depth comes from translucency, not shadow. Cards and panels are 30% slate with a backdrop blur, so the star field shows through, edged by a 1px hairline ring (white at 10% in dark). The only shadows are the card default (`shadow-sm`, nearly invisible on black) and a hover lift on every card (`shadow-lg` tinted with primary at 5%). The sticky header is the same idea at higher strength: 90% background with a light blur and a 50% hairline bottom border.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`): default card.
- **Lift** (`box-shadow: 0 10px 15px -3px oklch(0.922 0 0 / 5%), 0 4px 6px -4px oklch(0.922 0 0 / 5%)` + `translateY(-4px)`, 300ms): every `Card` on hover, built into the component; card icons brighten from fog to paper. The contact panel opts out, and reduced motion drops the movement.

### Named Rules
**The Glass Over Stars Rule.** Surfaces that sit on the page are translucent (slate 30% + blur + hairline), never opaque fills. The stars must stay faintly visible through every card. The services stack is the one exception, because a panel must hide the title of the panel it covers (see Services stack).

## Shapes

Soft, consistent rounding derived from one base radius (`--radius: 0.625rem`). Two steps are in use: 18px for controls (buttons and badges, which read as near-pills at their heights), and 24px for every card and panel. Avatars are fully round. Project screenshots sit flush at the top of their card, clipped by its 24px top corners, with a hairline under them. Borders are always 1px hairlines, never heavier.

## Components

### Buttons
Quiet and confident: rounded, compact, no hue.
- **Shape:** near-pill corners (18px), 44px tall in the hero (`h-11`), 32px default.
- **Primary:** chalk fill with graphite text, 24px horizontal padding, trailing arrow icon. Hover drops the fill to 80%.
- **Outline:** transparent with a paper-at-20% border; hover adds a faint input-tinted fill.
- **Focus / Active:** 3px ring in ash at 30% plus ring-colored border; pressing nudges the button down 1px.

### Chips (badges and tags)
- **Hero badge:** outline, 12px mono, 0.1em tracking, 12px horizontal padding.
- **Tags:** solid slate, 11px uppercase mono, inside project and service cards, listing tech or service (`SHOPIFY | PERSONALIZADO`).

### Cards / Containers
- **Corner Style:** 24px.
- **Background:** slate at 30% with backdrop blur, built into the `Card` component itself, so every card is glass without extra classes. Small tiles (process steps, case-study facts and scores, the city contact) are `Card size="sm"` too; never hand-style a tile.
- **Blur blockers:** never put `mask-image`, `filter` or a filter animation (`hero-in`) on an ancestor of a glass surface; it cuts the blur off from the stars. Fade edges with a gradient overlay instead.
- **Shadow Strategy:** rest shadow; every card lifts on hover (see Elevation).
- **Border:** 1px ring, paper at 10%.
- **Internal Padding:** 20px (default) or 16px (`size="sm"`), 16–20px vertical gaps between header and content.
- **Structure:** optional flush screenshot (16:10, top-anchored), mono label, title (feature cards set a 20px fog icon inline before it, never in a tile above it), fog description, tags pushed to the bottom with `mt-auto`, then text links with arrow or external-link icons that underline on hover.

### Navigation
- **Header:** sticky, 90% night with a light blur (a heavy one recomposites all the scrolling content), 50% hairline bottom border, a 2px chalk scroll-progress bar along its bottom edge.
- **Links:** 14px fog; hover turns paper. No underline.
- **Right cluster:** EN/ES toggle group and the animated theme toggler.
- **Mobile:** below 768px a menu button opens a full-width sheet with 30px semibold links in fog.

### Section header
`SectionHeader` is just the section `h2`: 30px semibold (24px on mobile), balanced, left-aligned, 32px above the content.

### Process steps
`ProcessSteps` (`src/components/custom/process-steps.astro`), on every service page: from `lg` a side column with the `/{` mark and a short list of who we are, then the title at display size and one row per step, divided by hairlines: small mono number, short name, muted sentence. Numbers are labels here, never display type. The mark turns in space with the scroll (scrubbed); the title's letters and each row's line and cells play once as they arrive (`animateProcess`). Never mask this text: a row caught mid-scroll looks cut off. With reduced motion or no JavaScript everything is simply visible.

### Intro
On the home page only, once per visit: a full-screen `.site-intro` with the wordmark faint at first, its letters lighting up one by one in step with a progress line, and a developer joke; after about two seconds it wipes upward (a clip) while the hero's entrance starts behind it. CSS only, with no fake percentage and no waiting on assets. Skipped with reduced motion or without JavaScript.

### Statement and marquee
The home page has one statement between hero and projects, which deciphers itself left to right on its own, once, when it comes into view (never tied to scroll: a sentence should not cost screens), and one decorative line of service names (hidden from assistive tech) that travels with the scroll. One of each: they stop working if repeated.

### Team
Full-width rows with hairlines, one per partner: large round photo, display-size name sliding in from alternating sides, role, city and LinkedIn.

### FAQ
`FaqSection` (`src/components/custom/faq-section.astro`) around `FaqAccordion` (`src/components/custom/faq-accordion.tsx`): full width, the title at display size holding on the left (sticky from `lg`) and the questions on the right as hairline rows, no card and no radius. Questions are semibold and step in slightly on hover, with one chevron per row. Several answers can be open at once. GSAP animates the panel height and turns the chevron 180° with a small overshoot (`back.out`); panels stay in the HTML (`forceMount`) so the answers stay indexable, and closed ones are hidden from assistive tech.

### Mobile rhythm
Below `md` nothing is stretched to fill the screen for its own sake: sections are as tall as their content and closer together (64px instead of 96px). The exception is the services stack, whose panels stay full height to keep the stacking; there the photograph takes up the space the title and text leave.

### Inner pages
Service, city and case study pages share the home page's language without its one-off set pieces (intro, stacked panels, deciphering statement, travelling type stay on the home page). They are built from `page-hero` (way back, display title, then tag, intro and actions under a hairline), `feature-rows` (numbered hairline rows instead of cards), `wide-section` and `split-section` (display title on top, or held on the left). Everything runs edge to edge on the same side padding as the home page. Case studies keep their screenshots in colour, because the work is the subject there; everywhere else they are black and white until pointed at. Phone screens keep their rounded corners because they depict a device.

### Project index
The work reads as an index in the same language as the process and FAQ: a display-size title, then one hairline row per project (zero-padded number, type, name at display size, one real result, link to the site; the whole row opens the case study) beside a single whole 16:10 screenshot of exactly the same height, so the section fits one screen with no crop and no leftover space, that changes with the row in use (`initProjectIndex` in `src/lib/animations.ts`). Screenshots are black and white and take their colour only while a project is pointed at or focused; the other rows step back to 40%. No text over images, no gradients. Rows draw in once, like the process. Below `lg` each row carries its own greyscale image (`<slug>-mobile.webp` under 768px). Results must be true and provable: no invented numbers.

### Services stack
On the home page, one edge-to-edge panel per service, as tall as the viewport under the header, with its display-size title and zero-padded number on top, and below a hairline a four-column grid that fills the panel: the service tag, description and link, what's included, and a black and white photograph (`public/services/`). These are atmosphere, not proof: decorative, uncaptioned, never shown as client work, with no invented projects on any screen; real work belongs in the project index. The grid takes all the height the title leaves, so the visual grows instead of leaving a gap. The included list is dropped below `md`, where a panel has no room for it, and below `lg` the visual moves to a full-width band that takes the height left over. Each panel is CSS `position: sticky` at the header's bottom edge, so the next slides over it. Panels are opaque and step down a lightness ladder: foreground (inverted, the only inverted surface on the site), secondary, card, background.

The motion is scrubbed to scroll in `animateServicesStack` (`src/lib/animations.ts`): the title's lines rise out of a mask (SplitText) while the number and text move up with it, and the covered panel shrinks to 92% and darkens. Sticky and motion apply only with motion allowed; sticky also needs a viewport at least 700px tall, so a panel is never cut off. Without JavaScript the panels are complete and still stack.

### Demo phone (the one hue and type exception)
The interactive app demo (`app-demo.tsx`) is a device, not site chrome: it keeps iOS's own palette (`.ios` in `global.css`, light and dark following the site theme), the system font and its own size steps (13px, 15px, 17px, 20–28px), and a near-black bezel with a black Dynamic Island. Nothing from it leaks out: the "live" badge and tap hint around it stay on site tokens, the 11px tag size is still the floor, and the hint settles in once instead of bouncing.

### Contact panel
Every page closes with the same block, `ContactSection` (`src/components/custom/contact-section.astro`, anchored at `#contacto`): a full-screen inverted panel that grows into place on scroll, with the page-specific headline at display size, the intro, the email button, and the address spelled out large. Pages vary only the copy and the email subject, never the layout. Email is the only channel.

## Do's and Don'ts

### Do:
- **Do** design and review in dark mode first; it is the default and the reference.
- **Do** set every new piece of text in JetBrains Mono and build hierarchy from size, weight (400–700), tracking and lightness.
- **Do** open every section with the `SectionHeader` headline, left-aligned, with no label above it.
- **Do** put content surfaces on glass: slate at 30%, backdrop blur, 1px hairline, 24px corners, through shadcn `Card`.
- **Do** keep the page entrance (`.stars-in`, `.blur-in`, `.hero-in`, staggered by `--i`) in CSS in `src/styles/global.css`, with `backwards` fill so no `filter` lingers. Animate everything else with GSAP (and ScrollTrigger for scroll), adding new effects to `src/lib/animations.ts` keyed by a class name. Gate both with `prefers-reduced-motion`, and keep content fully visible without JS. Small enter effects inside React islands use `tw-animate-css` classes with `motion-reduce:animate-none`; don't pull in motion/react for them, it is the single largest script on the page. Reveals move content 32px and never fade it, so text never fails contrast mid-animation. Hover micro-transitions stay in CSS.
- **Do** keep prose to a max width of 42rem and supporting text in fog.

### Don't:
- **Don't** add hue to UI chrome: no colored buttons, links, borders, icon tints or section backgrounds (The Monochrome Rule).
- **Don't** introduce a second typeface.
- **Don't** make surfaces opaque over the star field, or stack heavy drop shadows; depth is translucency.
- **Don't** center-align section headers or the hero.
- **Don't** reuse dark-mode glass in light: in light, cards are white at 70% (`bg-card/70`) on paper, not slate at 30%, which turns flat grey there.
