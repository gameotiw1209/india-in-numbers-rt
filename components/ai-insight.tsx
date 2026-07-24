"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Sparkles, Loader2 } from "lucide-react"
import {
  type Category,
  type Country,
  indiaLeads,
  formatValue,
} from "@/lib/comparison-data"

type AiInsightProps = {
  category: Category
  country: Country
}

function buildInsight(category: Category, country: Country): string {
  const wins = category.indicators.filter((i) => indiaLeads(i, country.code))
  const losses = category.indicators.filter((i) => !indiaLeads(i, country.code))

  const leadNames = wins.map((i) => i.name.toLowerCase())
  const trailNames = losses.map((i) => i.name.toLowerCase())

  const list = (arr: string[]) =>
    arr.length <= 1 ? arr[0] : `${arr.slice(0, -1).join(", ")} and ${arr[arr.length - 1]}`

  const parts: string[] = []
  parts.push(
    `Across ${category.label}, India ${
      wins.length >= losses.length ? "holds a competitive edge over" : "trails"
    } ${country.name} on ${wins.length} of ${category.indicators.length} indicators.`,
  )

  if (wins.length > 0) {
    parts.push(`India performs strongly on ${list(leadNames)}.`)
  }
  if (losses.length > 0) {
    parts.push(
      `${country.name} maintains an advantage in ${list(trailNames)}, highlighting areas where India continues to close the gap.`,
    )
  }

  const growth = category.indicators.find((i) => i.id === "gdp-growth")
  if (growth) {
    parts.push(
      `Notably, India's growth momentum (${formatValue(growth.india, growth)}) outpaces most advanced economies, signalling long-term upside.`,
    )
  }

  return parts.join(" ")
}

export function AiInsight({ category, country }: AiInsightProps) {
  const [loading, setLoading] = useState(false)
  const [insight, setInsight] = useState<string | null>(null)

  const generate = () => {
    setLoading(true)
    setInsight(null)
    // Simulated generation delay for a realistic AI feel.
    window.setTimeout(() => {
      setInsight(buildInsight(category, country))
      setLoading(false)
    }, 1100)
  }

  return (
    <div className="rounded-2xl border border-india-white/10 bg-gradient-to-br from-india-navy to-india-navy-deep p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-india-saffron/15 text-india-saffron ring-1 ring-india-saffron/30">
            <Sparkles className="size-5" />
          </span>
          <h3 className="text-lg font-semibold text-india-white">AI Insight</h3>
        </div>

        <button
          type="button"
          onClick={generate}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-full border border-india-saffron px-5 py-2.5 text-sm font-semibold text-india-saffron transition-colors hover:bg-india-saffron hover:text-india-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-india-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-india-navy-deep disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="size-4" />
              Generate Insight
            </>
          )}
        </button>
      </div>

      <div className="mt-4 min-h-16">
        <AnimatePresence mode="wait">
          {insight ? (
            <motion.p
              key="insight"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-pretty leading-relaxed text-india-white/80"
            >
              {insight}
            </motion.p>
          ) : (
            <p key="placeholder" className="text-pretty leading-relaxed text-india-white/50">
              {loading
                ? "Analyzing indicators..."
                : `Click "Generate Insight" to get an AI-powered summary comparing India and ${country.name} across this category.`}
            </p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
