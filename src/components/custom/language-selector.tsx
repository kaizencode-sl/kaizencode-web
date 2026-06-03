"use client"

import { useCallback } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { languages, type Lang } from "@/i18n/ui"

interface LanguageSelectorProps {
  currentLang: Lang
}

export function LanguageSelector({ currentLang }: LanguageSelectorProps) {
  const navigate = useCallback((value: Lang) => {
    const segments = window.location.pathname.split("/").filter(Boolean)
    segments[0] = value
    window.location.href = "/" + segments.join("/")
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
