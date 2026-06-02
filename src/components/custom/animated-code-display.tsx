import { Terminal } from "lucide-react"
import {
  Code,
  CodeBlock,
  CodeHeader,
} from "@/components/animate-ui/components/animate/code"
import { cn } from "@/lib/utils"

interface AnimatedCodeDisplayProps {
  filename?: string
  code: string
  lang?: string
  duration?: number
  delay?: number
  theme?: "light" | "dark"
  themes?: { light: string; dark: string }
  className?: string
}

export function AnimatedCodeDisplay({
  filename = "script.sh",
  code,
  lang = "bash",
  duration = 2500,
  delay = 300,
  theme,
  themes = {
    light: "min-light",
    dark: "min-dark",
  },
  className,
}: AnimatedCodeDisplayProps) {
  return (
    <Code
      key={filename}
      className={cn(
        "h-[260px] w-full",
        "[&_.shiki_.line]:!text-foreground [&_.shiki_.line_span]:!text-foreground",
        className
      )}
      code={code}
    >
      <CodeHeader icon={Terminal} copyButton>
        {filename}
      </CodeHeader>
      <CodeBlock
        cursor={true}
        lang={lang}
        writing={true}
        duration={duration}
        delay={delay}
        theme={theme}
        themes={themes}
      />
    </Code>
  )
}
