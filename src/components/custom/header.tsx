'use client'

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeTogglerButton } from "@/components/custom/theme-toggler-button"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href={import.meta.env.BASE_URL}
          className="text-lg font-bold tracking-tighter no-underline"
        >
          {`/{`}
        </a>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeTogglerButton
            variant="ghost"
            size="sm"
            direction="ltr"
            modes={["light", "dark"]}
          />

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon-sm" aria-label="Menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="!w-full border-none sm:max-w-sm"
            >
              <div className="flex h-full flex-col gap-14 p-8">
                <div className="flex items-center justify-between">
                  <a
                    href={import.meta.env.BASE_URL}
                    className="text-lg font-bold tracking-tighter no-underline"
                  >
                    {`/{`}
                  </a>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon-sm" aria-label="Close menu">
                      <X className="size-5" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-8">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <a
                        href={link.href}
                        className="text-3xl font-semibold tracking-tight text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
