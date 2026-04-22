"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Stethoscope, LineChart, Shield, Users, Cpu, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const capabilities = [
  {
    icon: Heart,
    title: "Patient Experience",
    description: "Transform patient journeys and improve outcomes through digital innovation."
  },
  {
    icon: Stethoscope,
    title: "Clinical Operations",
    description: "Optimize clinical workflows and enhance care delivery efficiency."
  },
  {
    icon: LineChart,
    title: "Revenue Cycle",
    description: "Improve revenue cycle management and financial performance."
  },
  {
    icon: Shield,
    title: "Compliance & Privacy",
    description: "Navigate HIPAA and other regulatory requirements with confidence."
  },
  {
    icon: Users,
    title: "Workforce Solutions",
    description: "Address staffing challenges and optimize workforce management."
  },
  {
    icon: Cpu,
    title: "Health IT",
    description: "Implement and optimize healthcare information systems."
  }
]

const stats = [
  { value: "150+", label: "Healthcare Organizations" },
  { value: "25%", label: "Average Cost Reduction" },
  { value: "40%", label: "Efficiency Improvement" },
  { value: "10M+", label: "Patients Impacted" }
]

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Industries</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Healthcare
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              Transforming patient care. We partner with healthcare organizations to improve patient outcomes, enhance operational efficiency, and navigate the complexities of modern healthcare delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/contact">
                  Transform Healthcare
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-card" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=800&fit=crop"
              alt="Healthcare"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Healthcare Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions for healthcare organizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <capability.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Ready to Improve Patient Care?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help you transform healthcare delivery.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
