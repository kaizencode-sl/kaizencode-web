import {
  FileText,
  LifeBuoy,
  Palette,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import type { UiKey } from "@/i18n/ui"

export type CaseStudySlug = "centauro" | "jovi"

export interface CaseStudy {
  name: UiKey
  title: UiKey
  description: UiKey
  heading: UiKey
  intro: UiKey
  site: string
  visit: UiKey
  // Values are translation keys, or plain text when the value isn't translated
  facts: { label: UiKey; value: UiKey | { text: string } }[]
  challenge: UiKey[]
  work: { title: UiKey; text: UiKey; icon: LucideIcon }[]
  // Optional headline figures, shown above the value list
  stats?: { value: string; label: UiKey }[]
  statsNote?: UiKey
  valueTitle: UiKey
  value: UiKey[]
  cta: { title: UiKey; text: UiKey; button: UiKey; subject: UiKey }
}

// Case study pages live at /proyectos/<slug>/ (English: /en/projects/<slug>/)
export const caseStudyPath = (slug: CaseStudySlug) => `/proyectos/${slug}/`

export const caseStudies: Record<CaseStudySlug, CaseStudy> = {
  centauro: {
    name: "project.centauro",
    title: "case.centauro.title",
    description: "case.centauro.description",
    heading: "case.centauro.heading",
    intro: "case.centauro.intro",
    site: "https://shop.centauro.es/",
    visit: "case.visit",
    facts: [
      { label: "case.facts.client", value: "project.centauro" },
      { label: "case.facts.sector", value: "case.centauro.sector" },
      { label: "case.facts.platform", value: { text: "SAP Commerce" } },
      { label: "case.facts.services", value: "case.centauro.services" },
      { label: "case.facts.since", value: "case.centauro.since" },
    ],
    challenge: ["case.centauro.challenge.1", "case.centauro.challenge.2"],
    work: [
      {
        title: "case.centauro.work.support.title",
        text: "case.centauro.work.support.text",
        icon: LifeBuoy,
      },
      {
        title: "case.centauro.work.features.title",
        text: "case.centauro.work.features.text",
        icon: Sparkles,
      },
      {
        title: "case.centauro.work.design.title",
        text: "case.centauro.work.design.text",
        icon: Palette,
      },
    ],
    valueTitle: "case.value.title",
    value: [
      "case.centauro.value.1",
      "case.centauro.value.2",
      "case.centauro.value.3",
    ],
    cta: {
      title: "case.cta.title",
      text: "case.cta.text",
      button: "case.cta.button",
      subject: "case.cta.subject",
    },
  },
  jovi: {
    name: "project.jovi",
    title: "case.jovi.title",
    description: "case.jovi.description",
    heading: "case.jovi.heading",
    intro: "case.jovi.intro",
    site: "https://www.tabernajovi.es/",
    visit: "case.visit.web",
    facts: [
      { label: "case.facts.client", value: "project.jovi" },
      { label: "case.facts.sector", value: "case.jovi.sector" },
      { label: "case.facts.location", value: { text: "Cuenca" } },
      { label: "case.facts.services", value: "case.jovi.services" },
      { label: "case.facts.since", value: "case.jovi.since" },
    ],
    challenge: ["case.jovi.challenge.1", "case.jovi.challenge.2"],
    work: [
      {
        title: "case.jovi.work.design.title",
        text: "case.jovi.work.design.text",
        icon: Palette,
      },
      {
        title: "case.jovi.work.menu.title",
        text: "case.jovi.work.menu.text",
        icon: FileText,
      },
      {
        title: "case.jovi.work.seo.title",
        text: "case.jovi.work.seo.text",
        icon: Search,
      },
    ],
    stats: [
      { value: "100", label: "case.jovi.stats.seo" },
      { value: "100", label: "case.jovi.stats.practices" },
      { value: "99", label: "case.jovi.stats.performance" },
    ],
    statsNote: "case.jovi.stats.note",
    valueTitle: "case.results.title",
    value: ["case.jovi.value.1", "case.jovi.value.2", "case.jovi.value.3"],
    cta: {
      title: "webdesign.cta.title",
      text: "webdesign.cta.text",
      button: "webdesign.cta.button",
      subject: "webdesign.cta.subject",
    },
  },
}
