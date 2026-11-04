"use client"

import { useState, type ReactNode } from "react"
import {
  CalendarDays,
  Pointer,
  House,
  Plus,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"
import { ui, defaultLang, type Lang, type UiKey } from "@/i18n/ui"

// A playable copy of the Ágora iPhone app with its demo fixtures
// (agora-dashboard/ios/Agora/Data/Fixtures.swift). Nothing leaves the browser.

import {
  HOURS,
  TODAY,
  CURRENT,
  students,
  active,
  fee,
  expectedIncome,
  expensesFor,
  type Slot,
  type Student,
} from "./app-demo-data"
import { Title, Group, Row, Stat, PaidBadge, Segmented } from "./app-demo-parts"

type Tab = "home" | "schedule" | "students" | "accounting"
const tabs: { id: Tab; icon: LucideIcon }[] = [
  { id: "home", icon: House },
  { id: "schedule", icon: CalendarDays },
  { id: "students", icon: Users },
  { id: "accounting", icon: Wallet },
]

export function AppDemo({ lang = defaultLang }: { lang?: Lang }) {
  const t = (key: UiKey) => ui[lang]?.[key] ?? ui[defaultLang][key]
  const list = (key: UiKey) => t(key).split(",")
  const euros = (n: number) =>
    new Intl.NumberFormat(lang === "es" ? "es-ES" : "en-IE", {
      style: "currency",
      currency: "EUR",
    }).format(n)

  const [tab, setTab] = useState<Tab>("home")
  const [paid, setPaid] = useState(() => new Set([1, 3, 5, 7])) // this month
  const [justPaid, setJustPaid] = useState<Set<number>>(new Set())
  const [day, setDay] = useState(TODAY)
  const [filter, setFilter] = useState("active")
  const [month, setMonth] = useState(CURRENT)
  // Coach marks until the first touch, so the phone doesn't read as a picture
  const [touched, setTouched] = useState(false)

  const numbers = list("demo.app.numbers")
  const name = (s: Student) => `${t("demo.app.student")} ${numbers[s.id - 1]}`
  const days = list("demo.app.days")
  const dayLetters = list("demo.app.dayLetters")
  const months = list("demo.app.months")
  const plural = (n: number) =>
    `${n} ${n === 1 ? t("demo.app.studentOne") : t("demo.app.studentMany")}`
  const at = (d: number, h: number) =>
    active.filter((s) => s.slots.some(([sd, sh]) => sd === d && sh === h))

  // Past months are fully paid, the next one hasn't started
  const isPaid = (s: Student, m: number) =>
    m < CURRENT || (m === CURRENT && paid.has(s.id))
  const incomeFor = (m: number) =>
    active.filter((s) => isPaid(s, m)).reduce((sum, s) => sum + fee(s), 0)
  const spentFor = (m: number) =>
    expensesFor(m).reduce((sum, e) => sum + e.amount, 0)
  const balance = (m: number) => incomeFor(m) - spentFor(m)
  const pending = active.filter((s) => !paid.has(s.id) || justPaid.has(s.id))
  const toCollect = active
    .filter((s) => !paid.has(s.id))
    .reduce((sum, s) => sum + fee(s), 0)

  const toggle = (s: Student, value: boolean) => {
    const edit = (set: Set<number>) => {
      const next = new Set(set)
      if (value) next.add(s.id)
      else next.delete(s.id)
      return next
    }
    setPaid(edit)
    setJustPaid(edit)
  }
  const goTo = (next: Tab) => {
    setTab(next)
    setJustPaid(new Set()) // like the app: "Undo" only lasts while you stay on Home
  }

  const slotLabel = ([d, h]: Slot, all: Slot[]) => {
    // Consecutive hours on the same day read as one block: "L 18-20h"
    const sameDay = all.filter(([sd]) => sd === d).map(([, sh]) => sh)
    if (sameDay.includes(h - 1)) return null
    let end = h + 1
    while (sameDay.includes(end)) end++
    return `${dayLetters[d - 1]} ${h}-${end}h`
  }

  const hourPanels = (d: number) =>
    HOURS.map((h) => {
      const here = at(d, h)
      return (
        <Group
          key={h}
          header={`${h}:00-${h + 1}:00`}
          detail={plural(here.length)}
          muted
        >
          {here.length === 0 ? (
            <Row>
              <span className="text-ios-secondary">{t("demo.app.nobody")}</span>
            </Row>
          ) : (
            here.map((s) => (
              <Row key={s.id}>
                <div>
                  <p>{name(s)}</p>
                  <p className="text-[13px] text-ios-secondary">
                    {s.course} · {s.school}
                  </p>
                </div>
              </Row>
            ))
          )}
        </Group>
      )
    })

  const screens: Record<Tab, ReactNode> = {
    home: (
      <>
        <Title>{days[TODAY - 1]}</Title>
        <div className="flex items-baseline justify-between px-4 pt-2 text-[20px] font-semibold">
          {t("demo.app.today")}
          <span className="text-[13px] font-normal text-ios-secondary">
            {plural(HOURS.reduce((n, h) => n + at(TODAY, h).length, 0))}
          </span>
        </div>
        {hourPanels(TODAY)}
        <Group
          header={t("demo.app.pending")}
          detail={`${euros(toCollect)} ${t("demo.app.toCollect")}`}
        >
          {pending.length === 0 ? (
            <Row>
              <span className="text-ios-secondary">
                {t("demo.app.allPaid")}
              </span>
            </Row>
          ) : (
            pending.map((s) => {
              const done = paid.has(s.id)
              return (
                <Row key={s.id}>
                  <div className="min-w-0">
                    <p className={cn("truncate", done && "text-ios-secondary")}>
                      {name(s)}
                    </p>
                    <p className="text-[13px] text-ios-secondary tabular-nums">
                      {euros(fee(s))}
                    </p>
                  </div>
                  {done ? (
                    <div className="flex shrink-0 animate-in items-center gap-1 zoom-in-75 fade-in">
                      <PaidBadge label={t("demo.app.paid")} />
                      <Button
                        variant="link"
                        size="xs"
                        className="px-1"
                        onClick={() => toggle(s, false)}
                      >
                        {t("demo.app.undo")}
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="shrink-0 rounded-full"
                      onClick={() => toggle(s, true)}
                    >
                      {t("demo.app.markPaid")}
                    </Button>
                  )}
                </Row>
              )
            })
          )}
        </Group>
        <Group header={months[CURRENT]}>{balanceView(CURRENT)}</Group>
      </>
    ),
    schedule: (
      <>
        <Title>{t("demo.app.tab.schedule")}</Title>
        <div className="px-4 pt-2">
          <Segmented
            value={String(day)}
            onChange={(v) => setDay(Number(v))}
            items={days.map((d, i) => [String(i + 1), d.slice(0, 3)])}
          />
        </div>
        <div className="flex items-baseline justify-between px-4 pt-4 text-[20px] font-semibold">
          {days[day - 1]}
          <span className="text-[13px] font-normal text-ios-secondary">
            {plural(HOURS.reduce((n, h) => n + at(day, h).length, 0))}
          </span>
        </div>
        {hourPanels(day)}
      </>
    ),
    students: (
      <>
        <Title>{t("demo.app.tab.students")}</Title>
        <div className="mx-4 mt-2 grid grid-cols-2 gap-4 rounded-2xl bg-ios-card p-4">
          <Stat label={t("demo.app.activeStudents")} value={active.length} />
          <Stat
            label={t("demo.app.pendingMonth")}
            value={active.filter((s) => !paid.has(s.id)).length}
          />
        </div>
        <div className="px-4 pt-4">
          <Segmented
            value={filter}
            onChange={setFilter}
            items={[
              ["active", list("demo.app.filters")[0]],
              ["inactive", list("demo.app.filters")[1]],
              ["all", list("demo.app.filters")[2]],
            ]}
          />
        </div>
        <Group>
          {students
            .filter((s) =>
              filter === "all" ? true : s.active === (filter === "active")
            )
            .map((s) => (
              <Row key={s.id} className="flex-col items-stretch gap-1.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className={cn(!s.active && "text-ios-secondary")}>
                      {name(s)}
                    </p>
                    <p className="text-[13px] text-ios-secondary">
                      {s.course} · {s.school}
                    </p>
                  </div>
                  {s.active &&
                    (paid.has(s.id) ? (
                      <PaidBadge label={t("demo.app.paid")} />
                    ) : (
                      <Badge variant="destructive">
                        {t("demo.app.pendingOne")}
                      </Badge>
                    ))}
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {s.slots.map((slot) => {
                      const label = slotLabel(slot, s.slots)
                      return (
                        label && (
                          <Badge
                            key={label}
                            variant="outline"
                            className="tabular-nums"
                          >
                            {label}
                          </Badge>
                        )
                      )
                    })}
                  </div>
                  <span className="whitespace-nowrap tabular-nums">
                    {euros(fee(s))}
                  </span>
                </div>
              </Row>
            ))}
        </Group>
      </>
    ),
    accounting: (
      <>
        <Title>{t("demo.app.tab.accounting")}</Title>
        <div className="px-4 pt-2">
          <ToggleGroup
            type="single"
            value={String(month)}
            onValueChange={(v) => v && setMonth(Number(v))}
            spacing={2}
            className="w-full"
          >
            {months.map((m, i) => (
              <ToggleGroupItem
                key={m}
                value={String(i)}
                className="h-auto flex-1 flex-col gap-0 rounded-full bg-ios-fill py-1.5 text-[13px] data-[state=on]:bg-foreground data-[state=on]:text-background"
              >
                {m.slice(0, 3)}
                <span
                  className={cn(
                    "text-[11px] font-normal tabular-nums opacity-70",
                    balance(i) < 0 && "text-ios-red opacity-100"
                  )}
                >
                  {euros(balance(i)).replace(/[.,]00/, "")}
                </span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <Group>{balanceView(month)}</Group>
        <Group
          header={t("demo.app.income")}
          detail={euros(incomeFor(month))}
          muted
        >
          <Row>
            <div>
              <p>
                {t("demo.app.fees")}{" "}
                <Badge variant="secondary" className="ml-1 align-middle">
                  {t("demo.app.automatic")}
                </Badge>
              </p>
              <p className="text-[13px] text-ios-secondary">
                {t("demo.app.of")} {euros(expectedIncome)}{" "}
                {t("demo.app.expected")}
              </p>
            </div>
            <span className="whitespace-nowrap tabular-nums">
              {euros(incomeFor(month))}
            </span>
          </Row>
        </Group>
        <Group
          header={t("demo.app.expenses")}
          detail={euros(spentFor(month))}
          muted
        >
          {expensesFor(month).map((e) => (
            <Row key={e.key}>
              <div>
                <p>{list("demo.app.expenseNames")[e.key]}</p>
                <Badge variant="outline">
                  {e.monthly ? t("demo.app.monthly") : t("demo.app.once")}
                </Badge>
              </div>
              <span className="whitespace-nowrap tabular-nums">
                {euros(e.amount)}
              </span>
            </Row>
          ))}
          <Row>
            <span className="flex items-center gap-3">
              <Plus className="size-4" /> {t("demo.app.addExpense")}
            </span>
          </Row>
        </Group>
      </>
    ),
  }

  function balanceView(m: number) {
    const expected = expectedIncome - spentFor(m)
    return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 px-4 py-3">
        {money(t("demo.app.balance"), balance(m), true)}
        {money(t("demo.app.forecast"), expected, true)}
        {money(t("demo.app.income"), incomeFor(m))}
        {money(t("demo.app.expenses"), spentFor(m))}
      </div>
    )
  }

  function money(label: string, value: number, big = false) {
    return (
      <div>
        <p className="text-[13px] text-ios-secondary">{label}</p>
        <p
          key={value}
          className={cn(
            "animate-in font-semibold tabular-nums fade-in slide-in-from-bottom-1",
            big ? "text-[22px] tracking-tight" : "text-[17px]",
            big && value < 0 && "text-ios-red"
          )}
        >
          {euros(value)}
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto flex w-full max-w-[340px] flex-col items-center gap-4">
      <Badge
        variant="outline"
        className="h-auto gap-2 bg-background px-3 py-1 font-mono text-xs tracking-widest uppercase"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        {t("demo.live")}
      </Badge>
      <div
        role="group"
        aria-label={t("demo.app.label")}
        onClickCapture={() => setTouched(true)}
        onKeyDown={() => setTouched(true)}
        className="ios w-full rounded-[3.25rem] border-[10px] border-neutral-900 bg-neutral-900 shadow-2xl ring-1 ring-border transition-shadow hover:ring-4 hover:ring-primary/20 dark:border-neutral-800 dark:bg-neutral-800 [&_button]:cursor-pointer"
      >
        <div className="relative flex aspect-[1206/2622] flex-col overflow-hidden rounded-[2.6rem] bg-ios-bg text-[15px] text-ios-label">
          {/* Status bar and Dynamic Island */}
          <div className="flex h-11 shrink-0 items-center justify-between px-7 text-[14px] font-semibold">
            <span>9:41</span>
            <span
              aria-hidden
              className="absolute top-2.5 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-black"
            />
            <span className="flex items-center gap-1" aria-hidden>
              <span className="h-2.5 w-4 rounded-[3px] border border-current p-px">
                <span className="block h-full w-3/4 rounded-[1px] bg-current" />
              </span>
            </span>
          </div>

          <div
            key={tab}
            className="flex-1 animate-in [scrollbar-width:none] overflow-y-auto pb-24 fade-in"
          >
            {screens[tab]}
          </div>

          {/* Floating tab bar */}
          <nav className="absolute inset-x-3 bottom-3 flex rounded-full border border-black/5 bg-ios-card/80 p-1 shadow-lg backdrop-blur-xl dark:border-white/10">
            {tabs.map(({ id, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => goTo(id)}
                aria-current={tab === id ? "page" : undefined}
                className={cn(
                  "relative flex flex-1 flex-col items-center gap-0.5 rounded-full py-1.5 text-[10px] font-medium transition-colors hover:bg-ios-fill/60",
                  tab === id
                    ? "bg-ios-fill text-ios-label"
                    : "text-ios-label/80"
                )}
              >
                {!touched && id === "schedule" && (
                  // Anchored to the tab itself, so it can't fall back to the top of the screen
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-full left-1/2 mb-1 flex -translate-x-1/2 animate-in flex-col items-center gap-1 delay-700 fill-mode-both fade-in slide-in-from-bottom-2"
                  >
                    <span className="rounded-full bg-foreground px-3 py-1.5 text-[13px] font-semibold whitespace-nowrap text-background shadow-lg">
                      {t("demo.tap")}
                    </span>
                    <Pointer className="size-7 rotate-180 fill-ios-card text-ios-label motion-safe:animate-bounce" />
                  </span>
                )}
                {!touched && id === "schedule" && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full bg-ios-label/15 motion-safe:animate-ping"
                  />
                )}
                <Icon
                  className="size-5"
                  fill={tab === id ? "currentColor" : "none"}
                />
                {t(`demo.app.tab.${id}` as UiKey)}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        {t("demo.caption")}
      </p>
    </div>
  )
}
