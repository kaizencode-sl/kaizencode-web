import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label: string
  title: string
  className?: string
}

export function SectionHeader({
  label,
  title,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        {label}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}
