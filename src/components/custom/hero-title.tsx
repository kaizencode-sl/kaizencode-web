import { cn } from "@/lib/utils"

interface HeroTitleProps extends Omit<
  React.ComponentProps<"span">,
  "children"
> {
  text: string
  duration?: number
  delay?: number
  staggerDelay?: number
  /** Extra classes for the text of each word, e.g. a gradient effect */
  wordClassName?: string
}

// CSS-driven blur-in (see `.blur-in` in global.css), so the title is in the
// server-rendered HTML and stays visible without JavaScript
export function HeroTitle({
  text,
  className,
  duration = 0.8,
  delay = 0.2,
  staggerDelay = 0.08,
  wordClassName,
  ...props
}: HeroTitleProps) {
  const words = text.split(" ")
  return (
    <span className={cn("block", className)} {...props}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block blur-in"
          style={{
            animationDuration: `${duration}s`,
            animationDelay: `${delay + index * staggerDelay}s`,
          }}
        >
          <span className={wordClassName}>{word}</span>
          {index < words.length - 1 && " "}
        </span>
      ))}
    </span>
  )
}
