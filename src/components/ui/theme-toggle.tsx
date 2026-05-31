import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

function getInitialTheme(): "dark" | "light" {
  if (typeof document !== "undefined") {
    return document.documentElement.className === "light" ? "light" : "dark"
  }
  return "dark"
}

export function ThemeToggle() {
  const [theme, setThemeState] = useState<"dark" | "light">(getInitialTheme)

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark"
    document.documentElement.className = next
    localStorage.setItem("theme", next)
    setThemeState(next)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun className="hidden dark:block" />
      <Moon className="block dark:hidden" />
    </Button>
  )
}
