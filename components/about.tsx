import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const values = [
  {
    title: "Client-First Approach",
    description: "We prioritize your success above all, building lasting partnerships based on trust and results.",
  },
  {
    title: "Collaborative Excellence",
    description: "Our team works alongside yours, combining expertise to achieve shared goals.",
  },
  {
    title: "Proven Expertise",
    description: "Decades of experience across industries, delivering transformative solutions.",
  },
  {
    title: "Sustainable Growth",
    description: "We focus on solutions that drive long-term value and competitive advantage.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About BerryGood
            </span>
            <h2 className="mt-2 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Your Business Requires Proven Expertise
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              We combine strategy, talent, and execution with a collaborative, client-first 
              approach to create practical solutions tailored to your organization&apos;s unique needs.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              With our expertise, we equip your business with the ability to seize pivotal 
              moments, overcome obstacles, and scale globally with confidence. We are committed 
              to shared results, so we succeed together.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3" />
            <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-border/50">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl bg-primary/10">
                  <span className="text-4xl font-bold text-primary">15+</span>
                  <p className="mt-2 text-sm text-muted-foreground">Years of Excellence</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-primary/10">
                  <span className="text-4xl font-bold text-primary">500+</span>
                  <p className="mt-2 text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-primary/10">
                  <span className="text-4xl font-bold text-primary">50+</span>
                  <p className="mt-2 text-sm text-muted-foreground">Expert Consultants</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-primary/10">
                  <span className="text-4xl font-bold text-primary">98%</span>
                  <p className="mt-2 text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground">
                <p className="text-lg font-medium italic">
                  &ldquo;Turn what if into what&apos;s next. The old way of doing business no 
                  longer works, so we reimagined it and created a smarter, agile way forward.&rdquo;
                </p>
                <p className="mt-4 text-sm opacity-90">- BerryGood Leadership Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
