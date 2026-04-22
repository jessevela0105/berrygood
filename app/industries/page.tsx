import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Plane,
  ShoppingCart,
  Landmark,
  Heart,
  Factory,
  Briefcase,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Industries | BerryGood Consulting",
  description:
    "Deep industry expertise across aerospace, consumer goods & retail, financial services, healthcare, manufacturing, private equity, and technology.",
}

const industries = [
  {
    icon: Plane,
    title: "Aerospace & Defense",
    description:
      "Create sustainable strategies to address complex regulatory compliance, achieve cost efficiencies, and optimize processes in one of the world's most demanding sectors.",
    expertise: ["Regulatory Compliance", "Supply Chain Optimization", "Program Management", "Technology Integration"],
    slug: "aerospace-defense",
  },
  {
    icon: ShoppingCart,
    title: "Consumer Goods & Retail",
    description:
      "Tackle challenges with rapid, sustainable strategies that address rising costs and evolving customer preferences in the fast-paced retail landscape.",
    expertise: ["Omnichannel Strategy", "Customer Experience", "Supply Chain", "Digital Commerce"],
    slug: "consumer-goods-retail",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description:
      "Adapt to market shifts, encourage innovation, and evolve for sustained growth across fintech, banking, and insurance sectors.",
    expertise: ["Digital Banking", "Risk Management", "RegTech Solutions", "Customer Analytics"],
    slug: "financial-services",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Delivering holistic solutions that make healthcare more effective by integrating strategy, technology, and leadership for better patient outcomes.",
    expertise: ["Digital Health", "Clinical Operations", "Revenue Cycle", "Population Health"],
    slug: "healthcare",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Address supply chain disruptions and capacity constraints through strategic solutions that drive growth and operational excellence.",
    expertise: ["Smart Manufacturing", "Supply Chain", "Lean Operations", "Industry 4.0"],
    slug: "manufacturing",
  },
  {
    icon: Briefcase,
    title: "Private Equity",
    description:
      "Maximize value, accelerate growth, and strengthen leadership teams at every stage of the deal lifecycle.",
    expertise: ["Due Diligence", "Value Creation", "Portfolio Optimization", "Exit Strategy"],
    slug: "private-equity",
  },
  {
    icon: Cpu,
    title: "Technology",
    description:
      "Scale systems, processes, and teams to excel during pivotal moments like expansion and regulatory shifts.",
    expertise: ["Product Development", "Go-to-Market", "Scaling Operations", "M&A Integration"],
    slug: "technology",
  },
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Industries We Serve</span>
          <h1 className="mt-2 text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Deep Expertise Across
            <br />
            Key Sectors
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground text-pretty">
            Our industry specialists bring decades of experience and cross-sector insights to deliver tailored solutions that
            drive real results.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Card
                key={industry.slug}
                className="group bg-card border-border/50 text-left hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">{industry.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 space-y-2">
                    {industry.expertise.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    Explore {industry.title}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Don&apos;t See Your Industry?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We work across many sectors. Let&apos;s discuss how we can help your organization succeed.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
