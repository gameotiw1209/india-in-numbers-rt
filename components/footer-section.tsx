"use client"

import { useEffect, useState, type FormEvent } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Quote, Clock } from "lucide-react"
import { AshokaChakra } from "@/components/ashoka-chakra"

const QUOTES = [
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    text: "A nation's culture resides in the hearts and in the soul of its people.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    author: "A. P. J. Abdul Kalam",
  },
  {
    text: "At the stroke of the midnight hour, India will awake to life and freedom.",
    author: "Jawaharlal Nehru",
  },
]

function ReflectiveQuote() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % QUOTES.length)
    }, 5500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative overflow-hidden px-6 py-24 sm:py-28">
      {/* Faint Ashoka Chakra backdrop */}
      <AshokaChakra
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-india-white opacity-[0.08]"
        strokeWidth={0.75}
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-india-saffron">
          In Their Words
        </span>

        <Quote
          className="mt-6 h-8 w-8 text-india-saffron/70"
          aria-hidden="true"
        />

        <div className="mt-4 flex min-h-[180px] items-center justify-center sm:min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="mx-auto max-w-[700px]"
            >
              <p className="text-balance font-serif text-2xl italic leading-relaxed text-india-white sm:text-3xl md:text-4xl">
                {`"${QUOTES[index].text}"`}
              </p>
              <footer className="mt-6 text-sm font-medium text-india-saffron sm:text-base">
                {`— ${QUOTES[index].author}`}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex items-center gap-2.5">
          {QUOTES.map((q, i) => (
            <button
              key={q.author + i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show quote ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-india-saffron"
                  : "w-2 bg-india-white/25 hover:bg-india-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail("")
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <div className="px-6 pb-24">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-india-white sm:text-3xl">
          Stay Informed on India&apos;s Global Standing
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-india-white/60">
          Get monthly updates when India&apos;s rankings shift across key global indices.
        </p>

        <div className="mt-8 w-full">
          <AnimatePresence mode="wait">
            {subscribed ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="flex items-center justify-center gap-2 rounded-full border border-india-green/40 bg-india-green/10 px-6 py-3.5 text-sm font-medium text-india-green"
              >
                Thanks for subscribing!
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full flex-1 rounded-full border border-india-white/15 bg-india-white/5 px-5 py-3 text-sm text-india-white placeholder:text-india-white/40 outline-none transition-colors focus:border-india-saffron/60 focus:bg-india-white/10"
                />
                <button
                  type="submit"
                  className="rounded-full bg-india-saffron px-7 py-3 text-sm font-semibold text-india-navy-deep transition-transform duration-200 hover:scale-[1.03] active:scale-95"
                >
                  Subscribe
                </button>
              </motion.form>
            )}
          </AnimatePresence>
          <p className="mt-3 text-xs text-india-white/40">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  )
}

function LiveClock() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    const update = () => setTime(formatter.format(new Date()))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const syncDate = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date())

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="flex items-center gap-2 text-india-white/70">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-india-green opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-india-green" />
        </span>
        <Clock className="h-4 w-4 text-india-white/50" aria-hidden="true" />
        <span className="font-mono text-sm tabular-nums">
          {time ? `${time} IST` : "-- IST"}
        </span>
      </div>
      <p className="text-xs text-india-white/40">{`Data last synced: ${syncDate}`}</p>
    </div>
  )
}

function FooterBar() {
  return (
    <div className="border-t border-india-white/10 px-6 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 text-center md:grid-cols-3 md:text-left">
        {/* Left */}
        <div className="flex flex-col items-center gap-3 md:items-start">
          <p className="text-sm text-india-white/50">India Global Watch © 2026</p>
          <span className="inline-flex items-center gap-2 rounded-full border border-india-white/15 px-3 py-1 text-xs text-india-white/70 transition-colors hover:border-india-saffron/50">
            <span className="flex h-3 w-4 overflow-hidden rounded-[2px]" aria-hidden="true">
              <span className="h-full w-1/3 bg-india-saffron" />
              <span className="h-full w-1/3 bg-india-white" />
              <span className="h-full w-1/3 bg-india-green" />
            </span>
            Made in India
          </span>
        </div>

        {/* Center */}
        <div className="flex justify-center">
          <LiveClock />
        </div>

        {/* Right */}
        <nav className="flex items-center justify-center gap-3 text-sm text-india-white/50 md:justify-end">
          <a href="#dashboard" className="transition-colors hover:text-india-white">
            Data Sources
          </a>
          <span className="text-india-white/20">·</span>
          <a href="#" className="transition-colors hover:text-india-white">
            About
          </a>
          <span className="text-india-white/20">·</span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-india-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0024 12.5C24 5.87 18.63.5 12 .5z" />
            </svg>
            GitHub
          </a>
        </nav>
      </div>
    </div>
  )
}

export function FooterSection() {
  return (
    <footer className="relative bg-india-navy-deep">
      {/* Saffron-to-green divider */}
      <div
        className="h-px w-full bg-gradient-to-r from-india-saffron/30 via-india-white/10 to-india-green/30 opacity-70"
        aria-hidden="true"
      />
      <ReflectiveQuote />
      <Newsletter />
      <FooterBar />
    </footer>
  )
}
