import { ui, defaultLang, type Lang, type UiKey } from './ui'

export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.replace(/\/$/, '').split('/')
  const last = segments[segments.length - 1]
  if (last === 'en' || last === 'es') return last as Lang
  return defaultLang
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key]
  }
}
