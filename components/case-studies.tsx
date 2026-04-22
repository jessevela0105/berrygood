import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { caseStudies } from "@/lib/case-studies-data"

const featured = caseStudies.slice(0, 4)

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Success Stories</span>
          <h2 className="mt-2 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Helping You Keep Up with the Speed of Change
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Discover how BerryGood is transforming businesses globally through innovative solutions and measurable results.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {featured.map((study) => {
            const Icon = study.icon
            return (
              <Card
                key={study.slug}
                className="group overflow-hidden bg-card border-border/50 text-left hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="relative aspect-[2/1] w-full overflow-hidden border-b border-border/50">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {study.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-right">
                      <div>
                        <span className="block text-2xl font-bold text-primary">{study.metric}</span>
                        <span className="text-xs text-muted-foreground">{study.metricLabel}</span>
                      </div>
                      <Icon className="h-8 w-8 text-primary/30" />
                    </div>
                  </div>
                  <CardTitle className="mt-4 text-xl font-semibold leading-tight text-card-foreground">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">{study.description}</CardDescription>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    Read full case study
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
          >
            View All Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
