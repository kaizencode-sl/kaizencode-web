"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function BackToTop({ label }: { label: string }) {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    // Appears once a fifth of the page has scrolled past
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setShown(window.scrollY > max * 0.2)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed right-6 bottom-6 z-40 transition-[opacity,visibility] duration-300",
        // Invisible also means out of the tab order
        shown ? "visible opacity-100" : "invisible opacity-0"
      )}
    >
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-background/80 backdrop-blur-sm pointer-coarse:size-11"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={label}
      >
        <ArrowUp className="size-4" />
      </Button>
    </div>
  )
}
