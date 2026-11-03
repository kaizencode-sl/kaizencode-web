import { ui, defaultLang, type Lang, type UiKey } from "./ui"

// Local landings that only exist in Spanish (e.g. /diseno-web-cuenca/)
const spanishOnlyPath = /^\/diseno-web-[^/]+\/?$/

export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split("/").filter(Boolean)[0]
  return first === "en" ? "en" : defaultLang
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key]
  }
}

// Builds a site path for a language: Spanish at the root, English under /en/
export function localizePath(lang: Lang, path = "/"): string {
  return lang === defaultLang ? path : `/${lang}${path}`
}

// Path of the current page without its language prefix
export function stripLang(pathname: string): string {
  return pathname.replace(/^\/en(?=\/|$)/, "") || "/"
}

// Equivalent of `pathname` in `lang`, or null when that version doesn't exist
export function getAlternatePath(pathname: string, lang: Lang): string | null {
  const path = stripLang(pathname)
  if (lang !== "es" && spanishOnlyPath.test(path)) return null
  return localizePath(lang, path)
}
