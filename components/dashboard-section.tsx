"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { CATEGORIES, COUNTRIES, INDIA, type Country } from "@/lib/comparison-data"
import { FlagIcon } from "@/components/flag-icon"
import { CountrySelect } from "@/components/country-select"
import { ComparisonCard } from "@/components/comparison-card"
import { AiInsight } from "@/components/ai-insight"

export function DashboardSection() {
  const [country, setCountry] = useState<Country>(COUNTRIES[0]) // United States by default
  const [categoryId, setCategoryId] = useState(CATEGORIES[0].id)

  const activeCategory = CATEGORIES.find((c) => c.id === categoryId) ?? CATEGORIES[0]

  return (
    <section id="dashboard" className="w-full bg-india-navy-deep px-6 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-india-white/15 bg-india-navy/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-india-saffron">
            Compare Rankings
          </span>
          <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-india-white sm:text-4xl">
            See Where India Stands
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-india-white/60 sm:text-lg">
            Select a country to compare against India across key global categories.
          </p>
        </div>

        {/* Country selector row */}
        <div className="mt-12 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          {/* India — fixed */}
          <div className="flex w-full items-center gap-3 rounded-2xl border border-india-white/10 bg-india-navy px-5 py-4">
            <FlagIcon code={INDIA.code} name={INDIA.name} className="h-6 w-9 rounded-sm object-cover ring-1 ring-india-white/15" />
            <span className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-india-white/40">Baseline</span>
              <span className="text-base font-semibold text-india-white">India</span>
            </span>
          </div>

          {/* VS badge */}
          <div className="mx-auto grid size-11 shrink-0 place-items-center rounded-full border border-india-saffron/40 bg-india-saffron/10 text-sm font-bold uppercase tracking-wider text-india-saffron">
            VS
          </div>

          {/* Comparison country */}
          <CountrySelect selected={country} onSelect={setCountry} />
        </div>

        {/* Category tabs */}
        <div className="mt-10 flex snap-x gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
          {CATEGORIES.map((cat) => {
            const active = cat.id === categoryId
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategoryId(cat.id)}
                aria-pressed={active}
                className={`shrink-0 snap-start rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-india-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-india-navy-deep ${
                  active
                    ? "bg-india-saffron text-india-navy-deep"
                    : "border border-india-white/15 text-india-white/70 hover:border-india-white/35 hover:text-india-white"
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Comparison cards grid */}
        <motion.div
          key={`${categoryId}-${country.code}`}
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {activeCategory.indicators.map((indicator) => (
            <ComparisonCard key={indicator.id} indicator={indicator} country={country} />
          ))}
        </motion.div>

        {/* AI insight */}
        <div className="mt-8">
          <AiInsight category={activeCategory} country={country} />
        </div>
      </div>
    </section>
  )
}
