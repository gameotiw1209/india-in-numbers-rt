import { HeroSection } from "@/components/hero-section"
import { DashboardSection } from "@/components/dashboard-section"
import { FooterSection } from "@/components/footer-section"

export default function Page() {
  return (
    <main className="bg-india-navy-deep">
      <HeroSection />
      <DashboardSection />
      <FooterSection />
    </main>
  )
}
