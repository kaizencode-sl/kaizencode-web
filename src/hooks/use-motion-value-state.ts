import { useState, useEffect } from "react"
import type { MotionValue } from "motion/react"

export function useMotionValueState(motionValue: MotionValue<number>): number {
  const [state, setState] = useState(motionValue.get())

  useEffect(() => {
    const unsubscribe = motionValue.on("change", setState)
    return unsubscribe
  }, [motionValue])

  return state
}
