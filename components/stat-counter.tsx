"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useReducedMotion } from "motion/react"

interface StatCounterProps {
  value: number
  label: string
  suffix?: string
  delay?: number
}

export function StatCounter({ value, label, suffix = "", delay = 0 }: StatCounterProps) {
  const [display, setDisplay] = useState(0)
  const nodeStarted = useRef(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (nodeStarted.current) return
    nodeStarted.current = true

    if (reduceMotion) {
      setDisplay(value)
      return
    }

    const controls = animate(0, value, {
      duration: 1.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })

    return () => controls.stop()
  }, [value, delay, reduceMotion])

  return (
    <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
      <span className="font-sans text-3xl font-bold tabular-nums tracking-tight text-india-white sm:text-4xl">
        {display}
        {suffix}
      </span>
      <span className="mt-1 text-sm font-medium text-india-white/60">{label}</span>
    </div>
  )
}
