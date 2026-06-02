"use client"

import { TextWordCarousel } from "@/components/word-carousel"
import { cn } from "@/lib/utils"

interface HeroTextCarouselProps {
  prefix: string
  words: string[]
  suffix: string
  className?: string
}

export function HeroTextCarousel({
  prefix,
  words,
  suffix,
  className,
}: HeroTextCarouselProps) {
  return (
    <span className={cn(className)}>
      {prefix}{" "}
      <TextWordCarousel words={words} interval={2.5} />
      {" "}{suffix}
    </span>
  )
}
