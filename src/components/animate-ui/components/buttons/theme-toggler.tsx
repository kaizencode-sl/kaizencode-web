"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Monitor, Moon, Sun } from "lucide-react"
import type { VariantProps } from "class-variance-authority"

import {
  ThemeToggler as ThemeTogglerPrimitive,
  type ThemeTogglerProps as ThemeTogglerPrimitiveProps,
  type ThemeSelection,
  type Resolved,
} from "@/components/animate-ui/primitives/effects/theme-toggler"
import { buttonVariants } from "@/components/animate-ui/components/buttons/icon"
import { cn } from "@/lib/utils"

const getIcon = (
  effective: ThemeSelection,
  resolved: Resolved,
  modes: ThemeSelection[],
  animate: boolean
) => {
  const theme = modes.includes("system") ? effective : resolved
  // Keyed so the incoming icon remounts and spins in on every switch, but
  // only once the user has toggled: the first render (page load) stays still
  const enter = animate
    ? "animate-in fade-in spin-in-90 zoom-in-50 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:animate-none"
    : undefined
  return theme === "system" ? (
    <Monitor key="system" className={enter} />
  ) : theme === "dark" ? (
    <Sun key="dark" className={enter} />
  ) : (
    <Moon key="light" className={enter} />
  )
}

const getNextTheme = (
  effective: ThemeSelection,
  modes: ThemeSelection[]
): ThemeSelection => {
  const i = modes.indexOf(effective)
  if (i === -1) return modes[0]
  return modes[(i + 1) % modes.length]
}

type ThemeTogglerButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    modes?: ThemeSelection[]
    onImmediateChange?: ThemeTogglerPrimitiveProps["onImmediateChange"]
    direction?: ThemeTogglerPrimitiveProps["direction"]
  }

function ThemeTogglerButton({
  variant = "default",
  size = "default",
  modes = ["light", "dark", "system"],
  direction = "ltr",
  onImmediateChange,
  onClick,
  className,
  ...props
}: ThemeTogglerButtonProps) {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [toggled, setToggled] = React.useState(false)

  return (
    <ThemeTogglerPrimitive
      theme={theme as ThemeSelection}
      resolvedTheme={resolvedTheme as Resolved}
      setTheme={setTheme}
      direction={direction}
      onImmediateChange={onImmediateChange}
    >
      {({ effective, resolved, toggleTheme }) => (
        <button
          data-slot="theme-toggler-button"
          className={cn(buttonVariants({ variant, size, className }))}
          onClick={(e) => {
            onClick?.(e)
            setToggled(true)
            const rect = e.currentTarget.getBoundingClientRect()
            toggleTheme(getNextTheme(effective, modes), {
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2,
            })
          }}
          {...props}
        >
          {getIcon(effective, resolved, modes, toggled)}
        </button>
      )}
    </ThemeTogglerPrimitive>
  )
}

export { ThemeTogglerButton, type ThemeTogglerButtonProps }
