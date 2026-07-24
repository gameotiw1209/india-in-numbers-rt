"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ExternalLink, Info } from "lucide-react"
import {
  INDIA,
  type Country,
  type Indicator,
  formatValue,
  indiaLeads,
  indiaShare,
} from "@/lib/comparison-data"
import { FlagIcon } from "@/components/flag-icon"

type ComparisonCardProps = {
  indicator: Indicator
  country: Country
}

export function ComparisonCard({ indicator, country }: ComparisonCardProps) {
  const [showTip, setShowTip] = useState(false)
  const share = indiaShare(indicator, country.code)
  const leads = indiaLeads(indicator, country.code)
  const otherValue = indicator.values[country.code]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group flex flex-col rounded-xl border border-india-white/10 bg-india-navy p-6 shadow-lg shadow-black/20 transition-colors hover:border-india-white/20"
    >
      {/* Indicator name + tooltip */}
      <div className="flex items-center gap-2">
        <h4 className="text-base font-semibold text-india-white">{indicator.name}</h4>
        <div className="relative">
          <button
            type="button"
            aria-label={`About ${indicator.name}`}
            onMouseEnter={() => setShowTip(true)}
            onMouseLeave={() => setShowTip(false)}
            onFocus={() => setShowTip(true)}
            onBlur={() => setShowTip(false)}
            className="grid place-items-center text-india-white/40 transition-colors hover:text-india-white/80"
          >
            <Info className="size-4" />
          </button>
          {showTip && (
            <span className="absolute bottom-full left-1/2 z-20 mb-2 w-56 -translate-x-1/2 rounded-lg border border-india-white/10 bg-india-navy-deep px-3 py-2 text-xs leading-relaxed text-india-white/80 shadow-xl">
              {indicator.tooltip}
            </span>
          )}
        </div>
      </div>

      {/* Two values side by side */}
      <div className="mt-6 flex items-end justify-between gap-4">
        <div className="flex flex-col items-center gap-2">
          <FlagIcon code={INDIA.code} name={INDIA.name} className="h-5 w-8 rounded-sm object-cover ring-1 ring-india-white/15" />
          <span className={`text-3xl font-bold tabular-nums sm:text-4xl ${leads ? "text-india-saffron" : "text-india-white"}`}>
            {formatValue(indicator.india, indicator)}
          </span>
          <span className="text-xs uppercase tracking-wider text-india-white/40">India</span>
        </div>

        <span className="mb-8 text-xs font-medium uppercase tracking-widest text-india-white/30">vs</span>

        <div className="flex flex-col items-center gap-2">
          <FlagIcon code={country.code} name={country.name} className="h-5 w-8 rounded-sm object-cover ring-1 ring-india-white/15" />
          <span className={`text-3xl font-bold tabular-nums sm:text-4xl ${!leads ? "text-india-white" : "text-india-white/60"}`}>
            {otherValue === undefined ? "—" : formatValue(otherValue, indicator)}
          </span>
          <span className="max-w-[7rem] truncate text-center text-xs uppercase tracking-wider text-india-white/40">
            {country.name}
          </span>
        </div>
      </div>

      {/* Relative position bar */}
      <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-india-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${share}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`h-full rounded-full ${leads ? "bg-india-saffron" : "bg-slate-500"}`}
        />
      </div>
      <p className="mt-2 text-xs text-india-white/45">
        {leads ? "India leads on this metric" : `${country.name} leads on this metric`}
      </p>

      {/* Source link */}
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="mt-5 inline-flex items-center gap-1.5 text-xs text-india-white/40 transition-colors hover:text-india-white/70"
      >
        Source: {indicator.source}
        <ExternalLink className="size-3" />
      </a>
    </motion.div>
  )
}
