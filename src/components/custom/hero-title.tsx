import { cn } from "@/lib/utils"

interface HeroTitleProps extends Omit<
  React.ComponentProps<"span">,
  "children"
> {
  text: string
  /** Extra classes for the text of each word, e.g. a gradient effect */
  wordClassName?: string
}

// Each word is a `.blur-in` target that GSAP reveals in turn (see
// src/lib/animations.ts); the title is in the server-rendered HTML and stays
// visible without JavaScript
export function HeroTitle({
  text,
  className,
  wordClassName,
  ...props
}: HeroTitleProps) {
  const words = text.split(" ")
  return (
    <span className={cn("block", className)} {...props}>
      {words.map((word, index) => (
        <span key={index} className="inline-block blur-in">
          <span className={wordClassName}>{word}</span>
          {index < words.length - 1 && " "}
        </span>
      ))}
    </span>
  )
}
