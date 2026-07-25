"use client"

import { useEffect, useRef, useState } from "react"
import { Check, ChevronDown, Search } from "lucide-react"
import { COUNTRIES, type Country } from "@/lib/comparison-data"
import { FlagIcon } from "@/components/flag-icon"

type CountrySelectProps = {
  selected: Country
  onSelect: (country: Country) => void
}

export function CountrySelect({ selected, onSelect }: CountrySelectProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  const filtered = COUNTRIES.filter((c) => c.name.toLowerCase().includes(query.trim().toLowerCase()))

  return (
    <div ref={rootRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center gap-3 rounded-2xl border border-india-white/10 bg-india-navy px-5 py-4 text-left transition-colors hover:border-india-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-india-saffron"
      >
        <FlagIcon code={selected.code} name={selected.name} className="h-6 w-9 rounded-sm object-cover ring-1 ring-india-white/15" />
        <span className="flex min-w-0 flex-col">
          <span className="text-xs uppercase tracking-widest text-india-white/40">Compare with</span>
          <span className="truncate text-base font-semibold text-india-white">{selected.name}</span>
        </span>
        <ChevronDown className={`ml-auto size-5 shrink-0 text-india-white/50 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-india-white/10 bg-india-navy shadow-2xl shadow-black/50">
          <div className="flex items-center gap-2 border-b border-india-white/10 px-4 py-3">
            <Search className="size-4 shrink-0 text-india-white/40" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search countries..."
              className="w-full bg-transparent text-sm text-india-white placeholder:text-india-white/40 focus:outline-none"
            />
          </div>
          <ul role="listbox" className="max-h-64 overflow-y-auto py-1">
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-sm text-india-white/50">No countries found.</li>
            )}
            {filtered.map((country) => {
              const isSelected = country.code === selected.code
              return (
                <li key={country.code} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelect(country)
                      setOpen(false)
                      setQuery("")
                    }}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-india-white/5"
                  >
                    <FlagIcon code={country.code} name={country.name} className="h-5 w-8 rounded-sm object-cover ring-1 ring-india-white/15" />
                    <span className="truncate text-sm text-india-white/90">{country.name}</span>
                    {isSelected && <Check className="ml-auto size-4 text-india-saffron" />}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
