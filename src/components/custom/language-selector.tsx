'use client'

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { languages, type Lang } from "@/i18n/ui"

interface LanguageSelectorProps {
  currentLang: Lang
}

export function LanguageSelector({ currentLang }: LanguageSelectorProps) {
  const base = import.meta.env.BASE_URL

  return (
    <ToggleGroup
      type="single"
      value={currentLang}
      onValueChange={(value) => {
        if (value) window.location.href = `${base}${value}/`
      }}
      variant="outline"
      size="sm"
      spacing={0}
    >
      {(Object.entries(languages) as [Lang, string][]).map(([code, label]) => (
        <ToggleGroupItem key={code} value={code} aria-label={label} className="font-mono text-xs">
          {code.toUpperCase()}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
