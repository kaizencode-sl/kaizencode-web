import { ExternalLink, Heart } from "lucide-react"

import { cn } from "@/lib/utils"
import { ui, defaultLang, type Lang } from "@/i18n/ui"

// Plain inline text, so words are spaced and wrap like the rest of the copy
function DevelopedByKaizencode({
  lang = defaultLang,
  className,
  ...props
}: React.ComponentProps<"p"> & { lang?: Lang }) {
  const t = (
    key: "footer.developed.with" | "footer.developed.by" | "a11y.newTab"
  ) =>
    ui[lang]?.[key] ?? ui[defaultLang][key]

  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {t("footer.developed.with")}{" "}
      <Heart className="inline size-3.5 fill-current align-[-0.125em] text-red-500" />{" "}
      {t("footer.developed.by")}{" "}
      <a
        href={
          lang === defaultLang
            ? "https://www.kaizencode.es/"
            : `https://www.kaizencode.es/${lang}/`
        }
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-0.5 font-medium whitespace-nowrap text-foreground transition-colors hover:text-primary pointer-coarse:-my-3 pointer-coarse:py-3"
      >
        Kaizencode
        <ExternalLink className="size-3" />
        <span className="sr-only">{t("a11y.newTab")}</span>
      </a>
    </p>
  )
}

export { DevelopedByKaizencode }
