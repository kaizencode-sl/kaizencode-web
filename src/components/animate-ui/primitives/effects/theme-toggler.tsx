"use client"

import * as React from "react"
import { flushSync } from "react-dom"

type ThemeSelection = "light" | "dark" | "system"
type Resolved = "light" | "dark"
type Direction = "btt" | "ttb" | "ltr" | "rtl"
// Viewport point the new theme grows from, as a circle (e.g. the button's center)
type Origin = { x: number; y: number }

type ChildrenRender =
  | React.ReactNode
  | ((state: {
      resolved: Resolved
      effective: ThemeSelection
      toggleTheme: (theme: ThemeSelection, origin?: Origin) => void
    }) => React.ReactNode)

function getSystemEffective(): Resolved {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function getClipKeyframes(direction: Direction): [string, string] {
  switch (direction) {
    case "ltr":
      return ["inset(0 100% 0 0)", "inset(0 0 0 0)"]
    case "rtl":
      return ["inset(0 0 0 100%)", "inset(0 0 0 0)"]
    case "ttb":
      return ["inset(0 0 100% 0)", "inset(0 0 0 0)"]
    case "btt":
      return ["inset(100% 0 0 0)", "inset(0 0 0 0)"]
    default:
      return ["inset(0 100% 0 0)", "inset(0 0 0 0)"]
  }
}

type ThemeTogglerProps = {
  theme: ThemeSelection
  resolvedTheme: Resolved
  setTheme: (theme: ThemeSelection) => void
  direction?: Direction
  onImmediateChange?: (theme: ThemeSelection) => void
  children?: ChildrenRender
}

function ThemeToggler({
  theme,
  resolvedTheme,
  setTheme,
  onImmediateChange,
  direction = "ltr",
  children,
  ...props
}: ThemeTogglerProps) {
  const fromProps = () => ({
    effective: theme,
    resolved:
      resolvedTheme ?? ((theme === "system" ? "light" : theme) as Resolved),
  })
  const [current, setCurrent] = React.useState<{
    effective: ThemeSelection
    resolved: Resolved
  }>(fromProps)

  // Follow the theme props when they change, during render rather than in an
  // effect (https://react.dev/learn/you-might-not-need-an-effect)
  const [prevProps, setPrevProps] = React.useState({ theme, resolvedTheme })
  if (prevProps.theme !== theme || prevProps.resolvedTheme !== resolvedTheme) {
    setPrevProps({ theme, resolvedTheme })
    setCurrent(fromProps())
  }

  const [fromClip, toClip] = getClipKeyframes(direction)

  const toggleTheme = React.useCallback(
    async (theme: ThemeSelection, origin?: Origin) => {
      const resolved = theme === "system" ? getSystemEffective() : theme

      setCurrent({ effective: theme, resolved })
      onImmediateChange?.(theme)

      if (theme === "system" && resolved === resolvedTheme) {
        setTheme(theme)
        return
      }

      if (!document.startViewTransition) {
        flushSync(() => {
          setCurrent({ effective: theme, resolved })
        })
        setTheme(theme)
        return
      }

      await document.startViewTransition(() => {
        flushSync(() => {
          setCurrent({ effective: theme, resolved })
          document.documentElement.classList.toggle("dark", resolved === "dark")
        })
      }).ready

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      let keyframes: Keyframe[] | PropertyIndexedKeyframes
      if (reduce) {
        keyframes = { opacity: [0, 1] }
      } else if (origin) {
        // Radius to the farthest viewport corner, so the circle covers everything
        const r = Math.hypot(
          Math.max(origin.x, window.innerWidth - origin.x),
          Math.max(origin.y, window.innerHeight - origin.y)
        )
        keyframes = {
          clipPath: [
            `circle(0px at ${origin.x}px ${origin.y}px)`,
            `circle(${r}px at ${origin.x}px ${origin.y}px)`,
          ],
        }
      } else {
        keyframes = { clipPath: [fromClip, toClip] }
      }

      document.documentElement
        .animate(keyframes, {
          duration: reduce ? 200 : 900,
          easing: reduce ? "ease" : "cubic-bezier(0.16, 1, 0.3, 1)",
          pseudoElement: "::view-transition-new(root)",
        })
        .finished.finally(() => {
          setTheme(theme)
        })
    },
    [onImmediateChange, resolvedTheme, fromClip, toClip, setTheme]
  )

  return (
    <React.Fragment {...props}>
      {typeof children === "function"
        ? children({
            effective: current.effective,
            resolved: current.resolved,
            toggleTheme,
          })
        : children}
      <style>{`::view-transition-old(root), ::view-transition-new(root){animation:none;mix-blend-mode:normal;}`}</style>
    </React.Fragment>
  )
}

export {
  ThemeToggler,
  type ThemeTogglerProps,
  type ThemeSelection,
  type Resolved,
  type Direction,
  type Origin,
}
