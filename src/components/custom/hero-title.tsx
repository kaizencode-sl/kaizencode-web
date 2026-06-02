"use client"

import { motion, type HTMLMotionProps } from "motion/react"
import { cn } from "@/lib/utils"

interface HeroTitleProps extends Omit<HTMLMotionProps<"h1">, "children"> {
  text: string
  duration?: number
  delay?: number
  staggerDelay?: number
}

export function HeroTitle({
  text,
  className,
  duration = 0.8,
  delay = 0.2,
  staggerDelay = 0.08,
  ...props
}: HeroTitleProps) {
  const words = text.split(" ")
  return (
    <motion.h1 className={cn(className)} {...props}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration,
            delay: delay + index * staggerDelay,
          }}
          style={{ display: "inline-block" }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.h1>
  )
}
