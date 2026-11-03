import { ui, defaultLang, type Lang, type UiKey } from "./ui"

// Local landings that only exist in Spanish (e.g. /diseno-web-cuenca/)
const spanishOnlyPath = /^\/diseno-web-[^/]+\/?$/

// Sections whose slug changes in English (Spanish path → English path)
const englishSlugs: [string, string][] = [["/proyectos/", "/projects/"]]

export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split("/").filter(Boolean)[0]
  return first === "en" ? "en" : defaultLang
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key]
  }
}

// Builds a site path for a language from its Spanish path: Spanish at the
// root, English under /en/ with translated slugs
export function localizePath(lang: Lang, path = "/"): string {
  if (lang === defaultLang) return path
  const slug = englishSlugs.find(([es]) => path.startsWith(es))
  return `/${lang}${slug ? slug[1] + path.slice(slug[0].length) : path}`
}

// Spanish path of the current page, without language prefix or translated slugs
export function stripLang(pathname: string): string {
  const path = pathname.replace(/^\/en(?=\/|$)/, "") || "/"
  if (path === pathname) return path
  const slug = englishSlugs.find(([, en]) => path.startsWith(en))
  return slug ? slug[0] + path.slice(slug[1].length) : path
}

// Equivalent of `pathname` in `lang`, or null when that version doesn't exist
export function getAlternatePath(pathname: string, lang: Lang): string | null {
  const path = stripLang(pathname)
  if (lang !== "es" && spanishOnlyPath.test(path)) return null
  return localizePath(lang, path)
}
