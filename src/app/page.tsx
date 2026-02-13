import Hero3D from "@/components/hero/Hero3D"
import HeroSection from "@/components/sections/HeroSection"
import ProductsSection from "@/components/sections/ProductsSection"
import BranchesSection from "@/components/sections/BranchesSection"
import StatsSection from "@/components/sections/StatsSection"
import AboutSection from "@/components/sections/AboutSection"
import ContactSection from "@/components/sections/ContactSection"
import FooterSection from "@/components/sections/FooterSection"
import ScrollToTop from "@/components/ui/ScrollToTop"

export default function Home() {
  return (
    <main>
      <div id="home">
        <Hero3D />
      </div>

      <HeroSection />
      <ProductsSection />
      <BranchesSection />
      <StatsSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
      <ScrollToTop />
    </main>
  )
}
