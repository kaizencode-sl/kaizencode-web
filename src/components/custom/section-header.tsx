import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  className?: string
}

export function SectionHeader({ title, className }: SectionHeaderProps) {
  return (
    <h2
      className={cn(
        "text-2xl font-semibold tracking-tight text-balance sm:text-3xl",
        className
      )}
    >
      {title}
    </h2>
  )
}
