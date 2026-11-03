import * as React from "react"
import { gsap } from "gsap"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FaqAccordionProps {
  faqs: { q: string; a: string }[]
}

// shadcn Accordion with GSAP opening and closing the panels. Panels are always
// rendered (forceMount) so the answers are in the HTML for search engines
export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [open, setOpen] = React.useState<string[]>([])
  const previous = React.useRef<string[]>([])
  const panels = React.useRef(new Map<string, HTMLElement>())

  // Runs before paint, so a closing panel never flashes collapsed
  React.useLayoutEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches
    const opened = open.filter((v) => !previous.current.includes(v))
    const closed = previous.current.filter((v) => !open.includes(v))
    previous.current = open

    // The chevron points up while its answer is open
    const rotate = (value: string, rotation: number) => {
      const icon = panels.current
        .get(value)
        ?.closest("[data-slot=accordion-item]")
        ?.querySelector("[data-slot=accordion-trigger-icon]")
      if (!icon) return
      gsap.to(icon, {
        rotation,
        duration: reduce ? 0 : 0.35,
        ease: "back.out(2)",
        overwrite: true,
      })
    }
    opened.forEach((value) => rotate(value, 180))
    closed.forEach((value) => rotate(value, 0))

    opened.forEach((value) => {
      const el = panels.current.get(value)
      if (!el || reduce) return
      gsap.fromTo(
        el,
        { height: 0 },
        {
          height: el.scrollHeight,
          duration: 0.35,
          ease: "power3.out",
          overwrite: true,
          clearProps: "height",
        }
      )
    })
    closed.forEach((value) => {
      const el = panels.current.get(value)
      if (!el || reduce) return
      // Stay visible while collapsing; the closed-state classes take over after
      gsap.fromTo(
        el,
        { height: el.scrollHeight, visibility: "visible" },
        {
          height: 0,
          duration: 0.3,
          ease: "power3.inOut",
          overwrite: true,
          clearProps: "height,visibility",
        }
      )
    })
  }, [open])

  return (
    <Accordion
      type="multiple"
      value={open}
      onValueChange={setOpen}
      className="border-border/50 bg-card/70 backdrop-blur-sm dark:bg-secondary/30"
    >
      {faqs.map(({ q, a }, i) => {
        const value = `faq-${i}`
        return (
          <AccordionItem
            key={value}
            value={value}
            className="border-border/50 transition-colors duration-300 hover:bg-muted/30"
          >
            <AccordionTrigger className="px-5 py-4 text-base font-semibold hover:no-underline">
              {q}
            </AccordionTrigger>
            <AccordionContent
              forceMount
              ref={(el) => {
                if (el) panels.current.set(value, el)
              }}
              className="max-w-3xl px-1 text-base text-muted-foreground"
            >
              {a}
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
