# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Small and local businesses in Spain** (shops, bars, pharmacies, academies, clinics) that need a website or online store that brings in customers. Usually non-technical owners deciding who to trust with their first or a replacement site.
- **Mid-size companies with a running platform or a costly process**: B2B e-commerce that needs a team to take it over and keep evolving it (e.g. SAP Commerce), or teams losing hours on repetitive work that can be automated with AI.

Spanish-speaking first; English is a full second locale, also serving international customers of Costa del Sol businesses.

## Product Purpose

Kaizencode is a three-partner software studio (Omar in Cuenca, Misha in Málaga, José María in Valencia). The site exists to win projects: it explains the three services and moves visitors to get in touch for a quote.

Services:

1. **Online stores**: Shopify or fully custom, informed by enterprise e-commerce work.
2. **Custom software and AI**: n8n workflows, custom agents, API integrations.
3. **Websites for businesses**: fast, custom-coded, built to rank on Google and convert visits into calls, bookings or orders.

Success: a qualified visitor sends an email asking for a quote.

## Positioning

Every page keeps these two claims:

- **You talk directly to the developers.** The people who code the project are the people you deal with; no salespeople, no middlemen.
- **No templates.** Every site is coded from scratch: no WordPress, no plugin dependency, which is why the sites are fast.

Supporting facts (true, usable, but not mandatory on every page): 10+ years of experience including enterprise e-commerce on SAP Commerce Cloud and Adobe Experience Manager; a partner you can meet in person in Cuenca, Valencia or Málaga; remote work anywhere in Spain.

## Operating Context

- Visitors arrive mostly from Google searches, including local ones ("diseño web Cuenca"). SEO is a core product requirement, not an add-on: city landing pages exist for Cuenca, Valencia and Málaga (Spanish only).
- Evaluation is trust-driven: visitors look at past work and case studies, then decide whether to write.
- Contact is **email only**: `contact@kaizencode.es`. Pricing is never published; every quote is personalised.

## Capabilities and Constraints

- Astro static site with React islands, Tailwind v4, shadcn/ui and animate-ui; deployed to `www.kaizencode.es`.
- Bilingual: Spanish is the default locale at the root, English under `/en/`. All copy ships in both languages (`src/i18n/ui.ts`); city landings are the one Spanish-only exception.
- Copy uses sentence case.
- Light and dark themes are both supported.
- Pages: home, web design service page, three city landings, case studies (`/proyectos/<slug>/`, `/en/projects/<slug>/`), 404.

## Brand Commitments

- Name: **Kaizencode** (lowercase `kaizencode` in footer and code-flavoured contexts).
- Voice: plain, warm, direct, first-person plural ("we"), no jargon aimed at non-technical owners. A light developer humour is part of the identity (`// section` labels, the `kaizencode.sh` "works on my machine" snippet).
- Partners are shown by name, city, role and LinkedIn, with real avatars.

## Evidence on Hand

- **Projects** with screenshots in `public/projects/`: Centauro (B2B SAP Commerce store, 2+ years of support), Ágora Academy (ranks first on Google for maths academies in Cuenca), Farmacia Ortopedia Albiñana in Bétera (bilingual, SEO), Taberna Jovi (cocktail bar in Cuenca since 1977, 3+ years working together).
- **Case studies**: Centauro and Taberna Jovi (`src/lib/case-studies.ts`); Jovi includes Google Lighthouse scores measured November 2026.
- **Headline stats**: 10+ years of experience, 20+ projects shipped, 3 developers.
- **Absent, do not fabricate or display**: testimonials, client logos beyond the projects above, prices or rate cards, WhatsApp, call booking. WhatsApp and call booking are dropped, not pending; the empty stubs in `home-content.astro` can be removed.

## Product Principles

1. **Show the people.** The direct relationship with the builders is the differentiator; real names and faces beat generic studio language.
2. **Proof over promises.** Lead with real projects, rankings and measured results; never claim what can't be pointed to.
3. **The site is the portfolio.** It must itself be fast, accessible, custom-built and well ranked, or the "no templates, truly fast" claim falls apart.
4. **One clear next step.** Every page ends in an easy way to write to us; no pricing gates or forms to fill.
5. **Speak to both buyers.** A bar owner and an e-commerce manager should each find their service and proof without wading through the other's.
