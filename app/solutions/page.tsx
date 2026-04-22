import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Brain,
  TrendingUp,
  Database,
  Monitor,
  Settings,
  Users,
  Calculator,
  Shield,
  Handshake,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions | BerryGood Consulting",
  description:
    "Comprehensive consulting solutions including AI, business transformation, data, digital, enterprise applications, and more.",
}

const solutions = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Unlock the power and potential of artificial intelligence to drive innovation and efficiency across your organization.",
    features: ["AI Strategy Development", "Machine Learning Implementation", "Process Automation", "Predictive Analytics"],
    slug: "artificial-intelligence",
  },
  {
    icon: TrendingUp,
    title: "Business Transformation",
    description:
      "Enhance your agility and accelerate key results with strategic transformation initiatives tailored to your goals.",
    features: ["Strategic Planning", "Change Management", "Operational Excellence", "Performance Optimization"],
    slug: "business-transformation",
  },
  {
    icon: Database,
    title: "Data",
    description: "Maximize the full potential of your company's information with advanced data strategies and analytics.",
    features: ["Data Architecture", "Business Intelligence", "Data Governance", "Analytics Platforms"],
    slug: "data",
  },
  {
    icon: Monitor,
    title: "Digital",
    description: "Reimagine the future of your business with cutting-edge digital solutions and modern technology adoption.",
    features: ["Digital Strategy", "Technology Modernization", "Cloud Migration", "Customer Experience"],
    slug: "digital",
  },
  {
    icon: Settings,
    title: "Enterprise Applications",
    description: "Harness technology for data, insights, security, and operational efficiency across your enterprise.",
    features: ["ERP Implementation", "CRM Solutions", "Integration Services", "Custom Development"],
    slug: "enterprise-applications",
  },
  {
    icon: Users,
    title: "Executive Search",
    description: "Secure the right leaders for long-term growth and organizational success with our talent solutions.",
    features: ["C-Suite Recruitment", "Leadership Assessment", "Succession Planning", "Talent Mapping"],
    slug: "executive-search",
  },
  {
    icon: Calculator,
    title: "Finance & Accounting",
    description: "Navigate complexity with a nimble, customized approach to financial management and accounting excellence.",
    features: ["Financial Planning", "Risk Management", "Compliance", "Cost Optimization"],
    slug: "finance-accounting",
  },
  {
    icon: Shield,
    title: "Governance, Risk & Compliance",
    description: "Reduce risks and drive value through robust governance frameworks and regulatory compliance.",
    features: ["Risk Assessment", "Policy Development", "Audit Support", "Regulatory Compliance"],
    slug: "governance-risk-compliance",
  },
  {
    icon: Handshake,
    title: "Transaction Advisory",
    description: "Support for deals, integrations, and carve-outs with disciplined diligence and execution planning.",
    features: ["Due Diligence", "Integration Planning", "Value Creation", "Post-close Operations"],
    slug: "transaction-advisory",
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    description: "Design resilient networks, improve visibility, and align cost, service, and inventory objectives.",
    features: ["Network Design", "Sourcing & Procurement", "Logistics Optimization", "Resilience Planning"],
    slug: "supply-chain-management",
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Solutions</span>
          <h1 className="mt-2 text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Comprehensive Solutions for
            <br />
            Your Business Success
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground text-pretty">
            Seize opportunities and tackle change with confidence through our global, collaborative approach that combines
            strategy, execution, and talent.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {solutions.map((solution) => (
              <Card
                key={solution.slug}
                className="group bg-card border-border/50 text-left hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <solution.icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-xl font-semibold text-card-foreground">{solution.title}</CardTitle>
                      <CardDescription className="mt-2 text-muted-foreground leading-relaxed">
                        {solution.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 grid grid-cols-2 gap-2">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    Learn more about {solution.title}
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
            Ready to Transform Your Business?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Let&apos;s discuss how our solutions can help you achieve your goals.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Schedule a Consultation
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
