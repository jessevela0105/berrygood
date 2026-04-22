import { Linkedin, Mail, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const leaders = [
  {
    name: "Paulo Muniz",
    role: "Chief Executive Officer",
    bio: "With over 20 years of experience in strategic consulting and business transformation, Paulo leads BerryGood with a vision for client-centric excellence and sustainable growth.",
    initials: "PM",
  },
  {
    name: "Oscar Jimenez",
    role: "Vice President",
    bio: "Oscar brings deep expertise in operational excellence and talent solutions, driving innovation across our service offerings and ensuring exceptional delivery for clients.",
    initials: "OJ",
  },
  {
    name: "Edwin Mendez",
    role: "Project Manager",
    bio: "Edwin oversees complex transformation projects with precision and care, ensuring seamless execution and measurable outcomes for organizations worldwide.",
    initials: "EM",
  },
]

export function Leadership() {
  return (
    <section id="leadership" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Team
          </span>
          <h2 className="mt-2 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Meet Our Leadership
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Experienced professionals dedicated to driving your success through 
            strategic insight and collaborative partnership.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {leaders.map((leader) => (
            <Card 
              key={leader.name} 
              className="group relative overflow-hidden bg-card border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 text-center"
            >
              <CardContent className="pt-8 pb-8">
                <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-primary-foreground shadow-lg group-hover:scale-105 transition-transform">
                  {leader.initials}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{leader.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{leader.role}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {leader.bio}
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <Link 
                    href="#" 
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

        <div className="mt-12 text-center">
          <Link 
            href="/leadership"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
          >
            View Full Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
