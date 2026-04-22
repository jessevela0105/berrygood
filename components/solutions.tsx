import Image from "next/image"
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
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const solutions = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Unlock the power and potential of artificial intelligence to drive innovation and efficiency.",
    slug: "artificial-intelligence",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: TrendingUp,
    title: "Business Transformation",
    description: "Enhance your agility and accelerate key results with strategic transformation initiatives.",
    slug: "business-transformation",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Database,
    title: "Data",
    description: "Maximize the full potential of your company's information with advanced data strategies.",
    slug: "data",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Monitor,
    title: "Digital",
    description: "Reimagine the future of your business with cutting-edge digital solutions.",
    slug: "digital",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Settings,
    title: "Enterprise Applications",
    description: "Harness technology for data, insights, security, and operational efficiency.",
    slug: "enterprise-applications",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Users,
    title: "Executive Search",
    description: "Secure the right leaders for long-term growth and organizational success.",
    slug: "executive-search",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Calculator,
    title: "Finance & Accounting",
    description: "Navigate complexity with a nimble, customized approach to financial management.",
    slug: "finance-accounting",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Shield,
    title: "Governance, Risk & Compliance",
    description: "Reduce risks and drive value through robust governance frameworks.",
    slug: "governance-risk-compliance",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Handshake,
    title: "Transaction Advisory",
    description: "Navigate deals and integrations with disciplined execution and clear insight.",
    slug: "transaction-advisory",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    description: "Build resilient, efficient supply networks aligned to customer and cost goals.",
    slug: "supply-chain-management",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Offer
          </span>
          <h2 className="mt-2 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Comprehensive Solutions for Your Success
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Seize opportunities and tackle change with confidence through our global, collaborative approach
            that combines strategy, execution, and talent.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {solutions.map((solution) => (
            <Card
              key={solution.slug}
              className="group flex flex-col overflow-hidden bg-card border-border/50 text-left hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/50">
                <Image
                  src={solution.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <CardHeader className="pb-2">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <solution.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-semibold leading-snug text-card-foreground">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col pt-0">
                <CardDescription className="flex-1 text-sm text-muted-foreground leading-relaxed">
                  {solution.description}
                </CardDescription>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
          >
            View All Solutions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
