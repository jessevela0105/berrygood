import Image from "next/image"
import {
  Plane,
  ShoppingCart,
  Landmark,
  Heart,
  Factory,
  Briefcase,
  Cpu,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const industries = [
  {
    icon: Plane,
    title: "Aerospace & Defense",
    description:
      "Create sustainable strategies to address complex regulatory compliance, achieve cost efficiencies, and optimize processes.",
    slug: "aerospace-defense",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: ShoppingCart,
    title: "Consumer Goods & Retail",
    description:
      "Tackle challenges with rapid, sustainable strategies that address rising costs and evolving customer preferences.",
    slug: "consumer-goods-retail",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description:
      "Adapt to market shifts, encourage innovation, and evolve for sustained growth across fintech, banking, and insurance.",
    slug: "financial-services",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c844a774e04?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Holistic solutions that make healthcare more effective by integrating strategy, technology, and leadership.",
    slug: "healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Address supply chain disruptions and capacity constraints through strategic solutions that drive growth.",
    slug: "manufacturing",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Briefcase,
    title: "Private Equity",
    description:
      "Maximize value, accelerate growth, and strengthen leadership teams at every stage of the deal lifecycle.",
    slug: "private-equity",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Cpu,
    title: "Technology",
    description:
      "Scale systems, processes, and teams to excel during pivotal moments like expansion and regulatory shifts.",
    slug: "technology",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80",
  },
]

export function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Industries We Serve
          </span>
          <h2 className="mt-2 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Expertise Across Key Sectors
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Deep industry knowledge combined with cross-sector insights enables us to deliver tailored solutions
            that drive real results.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card text-left hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 ${
                  index === 6 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative aspect-[2/1] w-full overflow-hidden">
                  <Image
                    src={industry.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <industry.icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {industry.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
          >
            View All Industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
