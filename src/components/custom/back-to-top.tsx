"use client"

import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackToTop() {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  const opacity = useTransform(smoothProgress, [0.15, 0.3], [0, 1])

  return (
    <motion.div
      className="fixed right-6 bottom-6 z-40"
      style={{ opacity }}
    >
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-background/80 backdrop-blur-sm"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp className="size-4" />
      </Button>
    </motion.div>
  )
}
