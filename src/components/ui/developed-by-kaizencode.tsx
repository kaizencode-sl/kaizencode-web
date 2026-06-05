import { ExternalLink, Heart } from "lucide-react"

import { cn } from "@/lib/utils"
import { ui, defaultLang, type Lang } from "@/i18n/ui"

function DevelopedByKaizencode({ lang = defaultLang, className, ...props }: React.ComponentProps<"div"> & { lang?: Lang }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-1 text-sm text-muted-foreground sm:gap-x-1.5",
        className
      )}
      {...props}
    >
      <span>{ui[lang]?.["footer.developed.with"] ?? ui[defaultLang]["footer.developed.with"]}</span>
      <Heart className="size-3.5 fill-current text-red-500 sm:size-4" />
      <span>{ui[lang]?.["footer.developed.by"] ?? ui[defaultLang]["footer.developed.by"]}</span>
      <a
        href="https://kaizencode.es"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-0.5 font-medium text-foreground transition-colors hover:text-primary"
      >
        Kaizencode
        <ExternalLink className="size-3 sm:size-3.5" />
      </a>
    </div>
  )
}

export { DevelopedByKaizencode }
