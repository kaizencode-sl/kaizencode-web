import {
  CalendarClock,
  FileText,
  Mail,
  PencilLine,
  LifeBuoy,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Wallet,
  Wand2,
  type LucideIcon,
} from "lucide-react"
import type { UiKey } from "@/i18n/ui"

export type CaseStudySlug =
  | "centauro"
  | "jovi"
  | "albinana"
  | "agora"
  | "app-agora"

export interface CaseStudy {
  name: UiKey
  title: UiKey
  description: UiKey
  heading: UiKey
  intro: UiKey
  // Optional: projects without a public website (e.g. a private app) skip the visit button
  site?: string
  visit?: UiKey
  imageAlt?: UiKey
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
  // Optional gallery of phone screens: a looping video and screenshots under /projects/<slug>/
  screens?: {
    video?: { src: string; poster: string; label: UiKey }
    images: { src: string; alt: UiKey }[]
  }
  // Shows the interactive app demo (custom/app-demo.tsx) after the work section
  demo?: boolean
  // Optional links to the service pages this case study illustrates
  services?: { href: string; label: UiKey }[]
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
      { label: "case.facts.location", value: { text: "Barcelona" } },
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
    services: [{ href: "/tiendas-online/", label: "case.ecommerce.link" }],
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
      { label: "case.facts.platform", value: { text: "Astro" } },
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
    services: [{ href: "/diseno-web/", label: "case.webdesign.link" }],
  },
  albinana: {
    name: "project.albinana",
    title: "case.albinana.title",
    description: "case.albinana.description",
    heading: "case.albinana.heading",
    intro: "case.albinana.intro",
    site: "https://www.farmaciaalbinana.es/",
    visit: "case.visit.web",
    facts: [
      { label: "case.facts.client", value: "project.albinana" },
      { label: "case.facts.sector", value: "case.albinana.sector" },
      { label: "case.facts.location", value: { text: "Bétera (Valencia)" } },
      {
        label: "case.facts.platform",
        value: { text: "Astro · n8n · Telegram · email" },
      },
      { label: "case.facts.services", value: "case.albinana.services" },
      { label: "case.facts.since", value: "case.albinana.since" },
    ],
    challenge: ["case.albinana.challenge.1", "case.albinana.challenge.2"],
    work: [
      {
        title: "case.albinana.work.messages.title",
        text: "case.albinana.work.messages.text",
        icon: Mail,
      },
      {
        title: "case.albinana.work.layout.title",
        text: "case.albinana.work.layout.text",
        icon: Wand2,
      },
      {
        title: "case.albinana.work.edit.title",
        text: "case.albinana.work.edit.text",
        icon: PencilLine,
      },
    ],
    valueTitle: "case.value.title",
    value: [
      "case.albinana.value.1",
      "case.albinana.value.2",
      "case.albinana.value.3",
    ],
    cta: {
      title: "case.albinana.cta.title",
      text: "case.albinana.cta.text",
      button: "case.cta.button",
      subject: "case.albinana.cta.subject",
    },
    services: [
      { href: "/automatizacion-ia/", label: "case.automation.link" },
      { href: "/diseno-web/", label: "case.webdesign.link" },
    ],
  },
  agora: {
    name: "project.agora",
    title: "case.agora.title",
    description: "case.agora.description",
    heading: "case.agora.heading",
    intro: "case.agora.intro",
    site: "https://www.agoraacademy.es/",
    visit: "case.visit.web",
    facts: [
      { label: "case.facts.client", value: "project.agora" },
      { label: "case.facts.sector", value: "case.agora.sector" },
      { label: "case.facts.location", value: { text: "Cuenca" } },
      { label: "case.facts.platform", value: { text: "Web · IA · PDF" } },
      { label: "case.facts.services", value: "case.agora.services" },
      { label: "case.facts.since", value: "case.agora.since" },
    ],
    challenge: ["case.agora.challenge.1", "case.agora.challenge.2"],
    work: [
      {
        title: "case.agora.work.describe.title",
        text: "case.agora.work.describe.text",
        icon: Sparkles,
      },
      {
        title: "case.agora.work.publish.title",
        text: "case.agora.work.publish.text",
        icon: FileText,
      },
      {
        title: "case.agora.work.seo.title",
        text: "case.agora.work.seo.text",
        icon: Search,
      },
    ],
    valueTitle: "case.value.title",
    value: ["case.agora.value.1", "case.agora.value.2", "case.agora.value.3"],
    cta: {
      title: "case.agora.cta.title",
      text: "case.agora.cta.text",
      button: "case.cta.button",
      subject: "case.agora.cta.subject",
    },
    services: [
      { href: "/automatizacion-ia/", label: "case.automation.link" },
      { href: "/diseno-web/", label: "case.webdesign.link" },
    ],
  },
  "app-agora": {
    name: "project.appAgora",
    title: "case.appAgora.title",
    description: "case.appAgora.description",
    heading: "case.appAgora.heading",
    intro: "case.appAgora.intro",
    imageAlt: "project.appAgora.image.alt",
    facts: [
      { label: "case.facts.client", value: "project.agora" },
      { label: "case.facts.sector", value: "case.appAgora.sector" },
      { label: "case.facts.location", value: { text: "Cuenca" } },
      {
        label: "case.facts.platform",
        value: { text: "iOS · SwiftUI · Supabase" },
      },
      { label: "case.facts.services", value: "case.appAgora.services" },
      { label: "case.facts.since", value: "case.appAgora.since" },
    ],
    challenge: ["case.appAgora.challenge.1", "case.appAgora.challenge.2"],
    work: [
      {
        title: "case.appAgora.work.today.title",
        text: "case.appAgora.work.today.text",
        icon: CalendarClock,
      },
      {
        title: "case.appAgora.work.money.title",
        text: "case.appAgora.work.money.text",
        icon: Wallet,
      },
      {
        title: "case.appAgora.work.native.title",
        text: "case.appAgora.work.native.text",
        icon: ShieldCheck,
      },
    ],
    demo: true,
    screens: {
      video: {
        src: "/projects/app-agora/demo.mp4",
        poster: "/projects/app-agora/demo-poster.webp",
        label: "case.appAgora.screens.video",
      },
      images: [
        {
          src: "/projects/app-agora/students.webp",
          alt: "case.appAgora.screens.students",
        },
        {
          src: "/projects/app-agora/student.webp",
          alt: "case.appAgora.screens.student",
        },
        {
          src: "/projects/app-agora/accounting.webp",
          alt: "case.appAgora.screens.accounting",
        },
      ],
    },
    valueTitle: "case.value.title",
    value: [
      "case.appAgora.value.1",
      "case.appAgora.value.2",
      "case.appAgora.value.3",
    ],
    cta: {
      title: "case.appAgora.cta.title",
      text: "case.appAgora.cta.text",
      button: "case.cta.button",
      subject: "case.appAgora.cta.subject",
    },
  },
}
