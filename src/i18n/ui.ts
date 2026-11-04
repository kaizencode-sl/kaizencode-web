import { site } from "./messages/site"
import { webdesign } from "./messages/webdesign"
import { ecommerce } from "./messages/ecommerce"
import { automation } from "./messages/automation"
import { caseStudy } from "./messages/case"
import { demo } from "./messages/demo"

export const languages = {
  en: "English",
  es: "Español",
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = "es"

// Messages live in ./messages, one file per area of the site
export const ui = {
  en: {
    ...site.en,
    ...webdesign.en,
    ...ecommerce.en,
    ...automation.en,
    ...caseStudy.en,
    ...demo.en,
  },
  es: {
    ...site.es,
    ...webdesign.es,
    ...ecommerce.es,
    ...automation.es,
    ...caseStudy.es,
    ...demo.es,
  },
} as const

export type UiKey = keyof (typeof ui)[typeof defaultLang]

// Compile-time parity: English must define every key Spanish does
ui.en satisfies Record<UiKey, string>
