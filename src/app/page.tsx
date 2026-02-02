import Hero3D from "@/components/hero/Hero3D"
import QualitySection from "@/components/sections/QualitySection"
import ImportSection from "@/components/sections/ImportSection"
import ProductsSection from "@/components/sections/ProductsSection"
import ContactSection from "@/components/sections/ContactSection"
import TextileShowcase from "@/components/sections/TextileShowcase"

export default function Home() {
  return (
    <main>
      <div id="home">
        <Hero3D />
      </div>

      <TextileShowcase />
      
    </main>
  )
}
