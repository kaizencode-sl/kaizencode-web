import { toggleVariants } from "@/components/ui/toggle"
import { languages, type Lang } from "@/i18n/ui"
import { getAlternatePath, localizePath } from "@/i18n/utils"
import { cn } from "@/lib/utils"

interface LanguageSelectorProps {
  currentLang: Lang
  path: string
}

// Real links, styled like shadcn's joined outline toggle group: switching
// language is navigation, so it works without JS and opens in a new tab
export function LanguageSelector({ currentLang, path }: LanguageSelectorProps) {
  return (
    <div className="flex w-fit rounded-2xl">
      {(Object.entries(languages) as [Lang, string][]).map(([code, label]) => (
        <a
          key={code}
          // Spanish-only city landings fall back to the generic web design page
          href={
            getAlternatePath(path, code) ?? localizePath(code, "/diseno-web/")
          }
          hrefLang={code}
          lang={code}
          aria-label={label}
          aria-current={code === currentLang ? "page" : undefined}
          className={cn(
            toggleVariants({ variant: "outline", size: "sm" }),
            "relative rounded-none px-2 font-mono text-xs no-underline not-first:border-l-0 after:absolute after:inset-x-0 after:-inset-y-2 first:rounded-l-2xl last:rounded-r-2xl focus-visible:z-10 aria-[current=page]:bg-muted"
          )}
        >
          {code.toUpperCase()}
        </a>
      ))}
    </div>
  )
}
