import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { Industries } from "@/components/industries"
import { CaseStudies } from "@/components/case-studies"
import { About } from "@/components/about"
import { Leadership } from "@/components/leadership"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <Industries />
      <CaseStudies />
      <About />
      <Leadership />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
