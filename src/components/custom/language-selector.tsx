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
    const rest = segments[0] === "es" ? segments.slice(1) : segments
    const path = rest.length ? rest.join("/") + "/" : ""
    window.location.href = value === "en" ? "/" + path : `/${value}/` + path
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
