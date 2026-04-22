import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Leadership | BerryGood Consulting",
  description: "Meet the experienced leadership team driving BerryGood's mission to deliver transformative business solutions.",
}

const executiveTeam = [
  {
    name: "Paulo Muniz",
    role: "Chief Executive Officer",
    bio: "With over 20 years of experience in strategic consulting and business transformation, Paulo leads BerryGood with a vision for client-centric excellence and sustainable growth. His expertise spans digital transformation, organizational change, and executive leadership.",
    initials: "PM",
    linkedin: "#",
  },
  {
    name: "Oscar Jimenez",
    role: "Vice President",
    bio: "Oscar brings deep expertise in operational excellence and talent solutions, driving innovation across our service offerings and ensuring exceptional delivery for clients. He has led numerous large-scale transformation initiatives across multiple industries.",
    initials: "OJ",
    linkedin: "#",
  },
  {
    name: "Edwin Mendez",
    role: "Project Manager",
    bio: "Edwin oversees complex transformation projects with precision and care, ensuring seamless execution and measurable outcomes for organizations worldwide. His project management expertise ensures on-time, on-budget delivery.",
    initials: "EM",
    linkedin: "#",
  },
]

const seniorAdvisors = [
  {
    name: "Sarah Chen",
    role: "Senior Advisor, Technology",
    bio: "Former CTO with 25+ years in enterprise technology and digital innovation. Advises clients on technology strategy and digital transformation.",
    initials: "SC",
  },
  {
    name: "Michael Torres",
    role: "Senior Advisor, Finance",
    bio: "Former CFO of Fortune 500 companies with expertise in financial transformation and M&A integration.",
    initials: "MT",
  },
  {
    name: "Jennifer Walsh",
    role: "Senior Advisor, Healthcare",
    bio: "Healthcare industry veteran with deep expertise in clinical operations and healthcare technology.",
    initials: "JW",
  },
  {
    name: "David Kim",
    role: "Senior Advisor, AI & Data",
    bio: "Former Chief Data Officer with expertise in AI strategy, data governance, and analytics transformation.",
    initials: "DK",
  },
]

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Team
          </span>
          <h1 className="mt-2 text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Meet Our Leadership
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground text-pretty">
            Experienced professionals dedicated to driving your success through 
            strategic insight, operational excellence, and collaborative partnership.
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">
              Executive Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our executive leaders bring decades of combined experience across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {executiveTeam.map((leader) => (
              <Card 
                key={leader.name} 
                className="group bg-card border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground shadow-lg group-hover:scale-105 transition-transform">
                    {leader.initials}
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground">{leader.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{leader.role}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {leader.bio}
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <Link 
                      href={leader.linkedin}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link 
                      href="/contact"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Advisors */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">
              Senior Advisors
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Industry veterans who bring specialized expertise to our client engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {seniorAdvisors.map((advisor) => (
              <Card 
                key={advisor.name} 
                className="group bg-card border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6 pb-6 text-center">
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {advisor.initials}
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">{advisor.name}</h3>
                  <p className="mt-1 text-xs font-medium text-primary">{advisor.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {advisor.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Join Our Team
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We&apos;re always looking for talented professionals who share our passion for 
            delivering exceptional results for our clients.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/careers">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
