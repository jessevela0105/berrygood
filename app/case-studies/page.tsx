import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle } from "lucide-react"
import { caseStudies } from "@/lib/case-studies-data"

export const metadata: Metadata = {
  title: "Case Studies | BerryGood Consulting",
  description: "Success stories and client case studies showcasing our transformative consulting solutions.",
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Success Stories</span>
          <h1 className="mt-2 text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Transforming Businesses
            <br />
            Around the World
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground text-pretty">
            Discover how BerryGood helps organizations overcome challenges, seize opportunities, and achieve measurable results.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {caseStudies.map((study) => {
              const Icon = study.icon
              return (
                <Card
                  key={study.slug}
                  className="group bg-card border-border/50 text-left hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {study.category}
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground">
                          {study.industry}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-right">
                        <div>
                          <span className="block text-2xl font-bold text-primary">{study.metric}</span>
                          <span className="text-xs text-muted-foreground">{study.metricLabel}</span>
                        </div>
                        <Icon className="h-8 w-8 text-primary/30" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold leading-tight text-card-foreground">{study.title}</CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground leading-relaxed">{study.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {study.results.map((result) => (
                        <span
                          key={result}
                          className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-1 text-xs text-muted-foreground"
                        >
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {result}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
                    >
                      Read full case study
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Ready to Write Your Success Story?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Let&apos;s discuss how we can help transform your business.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Start Your Transformation
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
