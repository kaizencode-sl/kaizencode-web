"use client"

import { ThemeProvider } from "next-themes"
import { ThemeTogglerButton as AnimateThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler"
import type { ThemeTogglerButtonProps } from "@/components/animate-ui/components/buttons/theme-toggler"

export function ThemeTogglerButton(props: ThemeTogglerButtonProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" storageKey="theme">
      <AnimateThemeTogglerButton {...props} />
    </ThemeProvider>
  )
}
