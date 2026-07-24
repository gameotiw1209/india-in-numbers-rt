import { HeroSection } from "@/components/hero-section"

export default function Page() {
  return (
    <main className="bg-india-navy-deep">
      <HeroSection />

      {/* Placeholder dashboard target for the "Explore the Data" CTA */}
      <section
        id="dashboard"
        className="flex min-h-svh w-full flex-col items-center justify-center bg-india-navy px-6 py-24 text-center"
      >
        <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-india-white sm:text-4xl">
          The Dashboard
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-india-white/60">
          Rankings, indicators, and country comparisons will live here.
        </p>
      </section>
    </main>
  )
}
