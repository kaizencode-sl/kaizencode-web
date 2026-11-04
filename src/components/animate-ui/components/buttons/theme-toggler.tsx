"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Monitor, Moon, Sun } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import {
  ThemeToggler as ThemeTogglerPrimitive,
  type ThemeTogglerProps as ThemeTogglerPrimitiveProps,
  type ThemeSelection,
  type Resolved,
} from "@/components/animate-ui/primitives/effects/theme-toggler"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "flex shrink-0 items-center justify-center rounded-md transition-[box-shadow,_color,_background-color,_border-color,_outline-color,_text-decoration-color,_fill,_stroke] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        accent: "bg-accent text-accent-foreground shadow-xs hover:bg-accent/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "size-9",
        xs: "size-7 rounded-md [&_svg:not([class*='size-'])]:size-3.5",
        sm: "size-8 rounded-md",
        lg: "size-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

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

export { ThemeTogglerButton, buttonVariants, type ThemeTogglerButtonProps }
