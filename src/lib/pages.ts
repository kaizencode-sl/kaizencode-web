import { caseStudies, type CaseStudySlug } from "@/lib/case-studies"
import { cities, type City } from "@/lib/team"
import type { UiKey } from "@/i18n/ui"

// Every page of the site, keyed by its Spanish path. Spanish lives at the
// root, English under /en/ (see localizePath); city pages are Spanish-only.
export type Page = {
  title: UiKey
  description: UiKey
  city?: City
  slug?: CaseStudySlug
}
export const pages: Record<string, Page> = {
  "/": { title: "site.title", description: "site.description" },
  "/diseno-web/": {
    title: "webdesign.title",
    description: "webdesign.description",
  },
  "/automatizacion-ia/": {
    title: "automation.title",
    description: "automation.description",
  },
  "/tiendas-online/": {
    title: "ecommerce.title",
    description: "ecommerce.description",
  },
  ...Object.fromEntries(
    cities.map((city) => [
      `/desarrollo-software-${city}/`,
      {
        title: `city.${city}.title`,
        description: `city.${city}.description`,
        city,
      },
    ])
  ),
  ...Object.fromEntries(
    Object.entries(caseStudies).map(([slug, s]) => [
      `/proyectos/${slug}/`,
      { title: s.title, description: s.description, slug },
    ])
  ),
}
