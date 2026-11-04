"use client"

import { useSyncExternalStore } from "react"
import {
  ThemeTogglerButton as AnimateThemeTogglerButton,
  buttonVariants,
  type ThemeTogglerButtonProps,
} from "@/components/animate-ui/components/buttons/theme-toggler"

const noop = () => () => {}

export function ThemeTogglerButton(props: ThemeTogglerButtonProps) {
  // false on the server and during hydration, true once in the browser:
  // the theme is only known client-side
  const mounted = useSyncExternalStore(
    noop,
    () => true,
    () => false
  )

  // Hold the button's space until the theme is known, so the header doesn't shift
  if (!mounted)
    return (
      <span
        aria-hidden
        className={buttonVariants({
          variant: props.variant,
          size: props.size,
          className: props.className,
        })}
      />
    )

  return <AnimateThemeTogglerButton {...props} />
}
