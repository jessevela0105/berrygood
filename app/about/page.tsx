import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Target, Users, Lightbulb, Heart, Award, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | BerryGood Consulting",
  description: "Learn about BerryGood's mission, values, and commitment to driving business success through strategic consulting.",
}

const values = [
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "We prioritize your success above all, building lasting partnerships based on trust, transparency, and measurable results.",
  },
  {
    icon: Users,
    title: "Collaborative Excellence",
    description: "Our team works alongside yours, combining expertise to achieve shared goals and transfer knowledge for lasting impact.",
  },
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Decades of experience across industries, delivering transformative solutions backed by deep domain knowledge.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Mindset",
    description: "We embrace new technologies and methodologies to solve complex challenges in creative and effective ways.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every engagement is designed to deliver measurable outcomes that drive real business value.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Our worldwide network enables us to bring diverse insights and best practices to every client engagement.",
  },
]

const milestones = [
  { year: "2008", title: "Founded", description: "BerryGood was founded with a mission to deliver client-centric consulting." },
  { year: "2012", title: "National Expansion", description: "Expanded to serve clients across the United States." },
  { year: "2016", title: "Digital Practice", description: "Launched our Digital Transformation practice area." },
  { year: "2020", title: "AI & Data", description: "Established dedicated AI and Data Solutions capabilities." },
  { year: "2024", title: "Global Reach", description: "Serving clients in over 50 countries worldwide." },
]

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "95%", label: "Client Retention" },
  { value: "50+", label: "Industries" },
  { value: "20+", label: "Years Experience" },
  { value: "1000+", label: "Projects Completed" },
  { value: "98%", label: "Satisfaction Rate" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            About BerryGood
          </span>
          <h1 className="mt-2 text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Driving Growth Through<br />Strategic Excellence
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground text-pretty">
            We combine strategy, talent, and execution with a collaborative approach 
            to create practical solutions tailored to your organization&apos;s unique needs.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                To empower organizations to achieve transformative growth by combining 
                world-class strategy, exceptional talent, and flawless execution.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We believe that every business has the potential to achieve extraordinary 
                results when equipped with the right guidance, tools, and partnerships. 
                Our role is to unlock that potential and help our clients succeed.
              </p>
              
              <div className="mt-10 space-y-4">
                {[
                  "Delivering measurable business outcomes",
                  "Building long-term client partnerships",
                  "Combining global expertise with local insight",
                  "Fostering innovation and continuous improvement"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3" />
              <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-border/50">
                <div className="grid grid-cols-2 gap-6">
                  {stats.slice(0, 4).map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-2xl bg-primary/10">
                      <span className="text-3xl font-bold text-primary">{stat.value}</span>
                      <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Values
            </span>
            <h2 className="mt-2 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              What Drives Us
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Our core values guide everything we do and define how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div 
                key={value.title} 
                className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Journey
            </span>
            <h2 className="mt-2 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Key Milestones
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border" />
            
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Ready to Partner with Us?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Let&apos;s discuss how BerryGood can help you achieve your business goals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/leadership">
                Meet Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
