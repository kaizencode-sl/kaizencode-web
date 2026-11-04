import type { ReactNode } from "react"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"

export function Title({ children }: { children: ReactNode }) {
  return (
    <h3 className="px-4 pt-3 text-[30px] leading-tight font-bold tracking-tight">
      {children}
    </h3>
  )
}

export function Group({
  header,
  detail,
  muted,
  children,
}: {
  header?: string
  detail?: string
  muted?: boolean
  children: ReactNode
}) {
  return (
    <section className="px-4 pt-4">
      {header && (
        <div
          className={cn(
            "flex items-baseline justify-between px-4 pb-1.5 text-[13px] font-semibold text-ios-secondary",
            muted && "font-normal"
          )}
        >
          <span>{header}</span>
          {detail && <span className="font-normal tabular-nums">{detail}</span>}
        </div>
      )}
      <div className="divide-y divide-ios-separator overflow-hidden rounded-2xl bg-ios-card">
        {children}
      </div>
    </section>
  )
}

export function Row({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "flex min-h-11 items-center justify-between gap-3 px-4 py-2.5",
        className
      )}
    >
      {children}
    </div>
  )
}

export function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <p className="text-[13px] text-ios-secondary">{label}</p>
      <p
        key={value}
        className="animate-in text-[28px] font-bold tabular-nums fade-in"
      >
        {value}
      </p>
    </div>
  )
}

export function PaidBadge({ label }: { label: string }) {
  return (
    <Badge className="animate-in zoom-in-75 fade-in">
      <Check data-icon="inline-start" />
      {label}
    </Badge>
  )
}

export function Segmented({
  value,
  onChange,
  items,
}: {
  value: string
  onChange: (v: string) => void
  items: [string, string][]
}) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(v) => v && onChange(v)}
      spacing={0}
      className="w-full rounded-full bg-ios-fill p-0.5"
    >
      {items.map(([v, label]) => (
        <ToggleGroupItem
          key={v}
          value={v}
          size="sm"
          className="flex-1 rounded-full! text-[13px] data-[state=on]:bg-ios-card data-[state=on]:shadow-sm"
        >
          {label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
