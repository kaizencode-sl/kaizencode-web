import { cn } from "@/lib/utils"

interface HeroTitleProps extends Omit<
  React.ComponentProps<"span">,
  "children"
> {
  text: string
}

// Each word is a `.blur-in` target, revealed in turn by the CSS entrance in
// src/styles/global.css; it starts on first paint and needs no JavaScript
export function HeroTitle({ text, className, ...props }: HeroTitleProps) {
  const words = text.split(" ")
  return (
    <span className={cn("block", className)} {...props}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block blur-in"
          style={{ "--i": index } as React.CSSProperties}
        >
          {word}
          {index < words.length - 1 && " "}
        </span>
      ))}
    </span>
  )
}
