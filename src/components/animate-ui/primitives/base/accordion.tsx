"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { AnimatePresence, motion, type HTMLMotionProps } from "motion/react"

import { getStrictContext } from "@/lib/get-strict-context"
import { useControlledState } from "@/hooks/use-controlled-state"

type AccordionContextType = {
  value: string[] | undefined
  setValue: (value: string[]) => void
}

type AccordionItemContextType = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const [AccordionProvider, useAccordion] =
  getStrictContext<AccordionContextType>("AccordionContext")

const [AccordionItemProvider, useAccordionItem] =
  getStrictContext<AccordionItemContextType>("AccordionItemContext")

type AccordionProps = {
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  children?: React.ReactNode
  disabled?: boolean
  hiddenUntilFound?: boolean
  keepMounted?: boolean
  loopFocus?: boolean
  multiple?: boolean
  orientation?: "horizontal" | "vertical"
  className?: string
  style?: React.CSSProperties
  id?: string
  "data-slot"?: string
}

function Accordion(props: AccordionProps) {
  const [value, setValue] = useControlledState<string[]>({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: props.onValueChange,
  })

  return (
    <AccordionProvider value={{ value, setValue }}>
      <AccordionPrimitive.Root
        data-slot="accordion"
        value={value}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        hiddenUntilFound={props.hiddenUntilFound}
        keepMounted={props.keepMounted}
        loopFocus={props.loopFocus}
        multiple={props.multiple}
        orientation={props.orientation}
        className={props.className}
        style={props.style}
        id={props.id}
        onValueChange={(next, _details) => {
          setValue(next as string[])
          props.onValueChange?.(next as string[])
        }}
      >
        {props.children}
      </AccordionPrimitive.Root>
    </AccordionProvider>
  )
}

type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item>

function AccordionItem(props: AccordionItemProps) {
  const { value } = useAccordion()
  const [isOpen, setIsOpen] = React.useState(
    value?.includes(props?.value) ?? false
  )

  React.useEffect(() => {
    setIsOpen(value?.includes(props?.value) ?? false)
  }, [value, props?.value])

  return (
    <AccordionItemProvider value={{ isOpen, setIsOpen }}>
      <AccordionPrimitive.Item data-slot="accordion-item" {...props} />
    </AccordionItemProvider>
  )
}

type AccordionHeaderProps = React.ComponentProps<
  typeof AccordionPrimitive.Header
>

function AccordionHeader(props: AccordionHeaderProps) {
  return <AccordionPrimitive.Header data-slot="accordion-header" {...props} />
}

type AccordionTriggerProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
>

function AccordionTrigger(props: AccordionTriggerProps) {
  return <AccordionPrimitive.Trigger data-slot="accordion-trigger" {...props} />
}

type AccordionPanelProps = Omit<
  React.ComponentProps<typeof AccordionPrimitive.Panel>,
  "keepMounted" | "render"
> &
  HTMLMotionProps<"div"> & {
    keepRendered?: boolean
  }

function AccordionPanel({
  transition = { duration: 0.35, ease: "easeInOut" },
  hiddenUntilFound,
  keepRendered = false,
  ...props
}: AccordionPanelProps) {
  const { isOpen } = useAccordionItem()

  return (
    <AnimatePresence>
      {keepRendered ? (
        <AccordionPrimitive.Panel
          hidden={false}
          hiddenUntilFound={hiddenUntilFound}
          keepMounted
          render={
            <motion.div
              key="accordion-panel"
              data-slot="accordion-panel"
              initial={{ height: 0, opacity: 0, "--mask-stop": "0%", y: 20 }}
              animate={
                isOpen
                  ? { height: "auto", opacity: 1, "--mask-stop": "100%", y: 0 }
                  : { height: 0, opacity: 0, "--mask-stop": "0%", y: 20 }
              }
              transition={transition}
              style={{
                maskImage:
                  "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
                WebkitMaskImage:
                  "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
                overflow: "hidden",
              }}
              {...props}
            />
          }
        />
      ) : (
        isOpen && (
          <AccordionPrimitive.Panel
            hidden={false}
            hiddenUntilFound={hiddenUntilFound}
            keepMounted
            render={
              <motion.div
                key="accordion-panel"
                data-slot="accordion-panel"
                initial={{ height: 0, opacity: 0, "--mask-stop": "0%", y: 20 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  "--mask-stop": "100%",
                  y: 0,
                }}
                exit={{ height: 0, opacity: 0, "--mask-stop": "0%", y: 20 }}
                transition={transition}
                style={{
                  maskImage:
                    "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
                  WebkitMaskImage:
                    "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
                  overflow: "hidden",
                }}
                {...props}
              />
            }
          />
        )
      )}
    </AnimatePresence>
  )
}

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
  useAccordionItem,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionHeaderProps,
  type AccordionTriggerProps,
  type AccordionPanelProps,
  type AccordionItemContextType,
}
