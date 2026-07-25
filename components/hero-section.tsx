"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowDown } from "lucide-react"
import { AnimatedFlag } from "@/components/animated-flag"
import { StatCounter } from "@/components/stat-counter"

const stats = [
  { value: 80, suffix: "+", label: "Global Indicators" },
  { value: 30, suffix: "+", label: "Countries Compared" },
  { value: 10, suffix: "", label: "Categories" },
]

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  const scrollToDashboard = () => {
    document.getElementById("dashboard")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    })
  }

  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-india-navy-deep px-6 py-20">
      <AnimatedFlag />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-india-white/15 bg-india-navy/40 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-india-white/70 backdrop-blur-sm"
        >
          India in Numbers
        </motion.span>

        <motion.h1
          variants={item}
          className="text-balance font-sans text-5xl font-bold leading-[1.05] tracking-tight text-india-white sm:text-6xl md:text-7xl"
        >
          India on the{" "}
          <span className="bg-gradient-to-r from-india-saffron via-india-white to-india-green bg-clip-text text-transparent">
            Global Stage
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-india-white/70 md:text-xl"
        >
          Explore how India ranks across economy, governance, technology, education, and more —
          benchmarked against nations around the world.
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <button
            type="button"
            onClick={scrollToDashboard}
            className="group inline-flex items-center gap-2 rounded-full bg-india-saffron px-8 py-4 text-base font-semibold text-india-navy-deep shadow-lg shadow-india-saffron/20 transition-all hover:scale-[1.03] hover:shadow-india-saffron/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-india-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-india-navy-deep"
          >
            Explore the Data
            <ArrowDown className="size-5 transition-transform group-hover:translate-y-0.5" />
          </button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-14 grid w-full max-w-2xl grid-cols-1 gap-8 border-t border-india-white/10 pt-10 sm:grid-cols-3"
        >
          {stats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={0.6 + i * 0.15}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        onClick={scrollToDashboard}
        aria-label="Scroll to dashboard"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-india-white/50 transition-colors hover:text-india-white"
      >
        <motion.span
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="size-6" />
        </motion.span>
      </motion.button>
    </section>
  )
}
