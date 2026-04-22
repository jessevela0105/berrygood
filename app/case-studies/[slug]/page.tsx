import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies-data"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) return { title: "Case Study | BerryGood" }
  return {
    title: `${study.title} | BerryGood`,
    description: study.description,
  }
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) notFound()

  const Icon = study.icon

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-28 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All case studies
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-primary/15 text-primary hover:bg-primary/20 border-0">{study.category}</Badge>
            <Badge variant="outline" className="text-muted-foreground border-border">
              {study.industry}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-foreground text-balance leading-tight">
            {study.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">{study.description}</p>

          <div className="mt-10 flex flex-wrap items-center gap-8 rounded-2xl border border-border bg-card/80 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key outcome</p>
              <p className="mt-1 text-3xl font-bold text-primary">{study.metric}</p>
              <p className="text-sm text-muted-foreground">{study.metricLabel}</p>
            </div>
            <Icon className="h-14 w-14 text-primary/25 hidden sm:block" aria-hidden />
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl px-6 lg:px-8">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-border">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl px-6 lg:px-8 space-y-12">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Approach</h2>
            <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Results</h2>
            <ul className="space-y-3">
              {study.results.map((r) => (
                <li key={r} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="pt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Discuss a similar engagement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
