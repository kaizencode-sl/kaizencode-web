'use client'

import { ThemeTogglerButton } from '@/components/custom/theme-toggler-button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href={import.meta.env.BASE_URL} className="text-lg font-bold tracking-tighter no-underline">
          {`/{`}
        </a>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href={import.meta.env.BASE_URL}
            className="text-foreground transition-colors hover:text-muted-foreground"
          >
            Home
          </a>
          <a href={import.meta.env.BASE_URL} className="transition-colors hover:text-foreground">
            Services
          </a>
          <a href={import.meta.env.BASE_URL} className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
        <ThemeTogglerButton
          variant="ghost"
          size="sm"
          direction="ltr"
          modes={["light", "dark"]}
        />
      </div>
    </header>
  )
}
