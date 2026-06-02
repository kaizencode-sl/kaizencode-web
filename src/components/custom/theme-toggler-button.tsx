"use client"

import { useEffect, useState } from "react"
import { ThemeTogglerButton as AnimateThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler"
import type { ThemeTogglerButtonProps } from "@/components/animate-ui/components/buttons/theme-toggler"

export function ThemeTogglerButton(props: ThemeTogglerButtonProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <AnimateThemeTogglerButton {...props} />
}
