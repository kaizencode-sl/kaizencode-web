"use client"

import { useCallback } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { languages, type Lang } from "@/i18n/ui"
import { getAlternatePath, localizePath } from "@/i18n/utils"

interface LanguageSelectorProps {
  currentLang: Lang
}

export function LanguageSelector({ currentLang }: LanguageSelectorProps) {
  const navigate = useCallback((value: Lang) => {
    // Spanish-only city landings fall back to the generic web design page
    window.location.href =
      getAlternatePath(window.location.pathname, value) ??
      localizePath(value, "/diseno-web/")
  }, [])

  return (
    <ToggleGroup
      type="single"
      value={currentLang}
      onValueChange={(value) => {
        if (value) navigate(value as Lang)
      }}
      variant="outline"
      size="sm"
      spacing={0}
    >
      {(Object.entries(languages) as [Lang, string][]).map(([code, label]) => (
        <ToggleGroupItem
          key={code}
          value={code}
          aria-label={label}
          className="font-mono text-xs"
        >
          {code.toUpperCase()}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
