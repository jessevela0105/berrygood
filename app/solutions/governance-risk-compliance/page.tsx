"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Scale, AlertTriangle, FileCheck, Lock, Eye, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const capabilities = [
  {
    icon: Shield,
    title: "Risk Management",
    description: "Develop comprehensive risk management frameworks to identify, assess, and mitigate business risks."
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description: "Ensure compliance with industry regulations and standards through robust compliance programs."
  },
  {
    icon: AlertTriangle,
    title: "Internal Audit",
    description: "Strengthen internal audit capabilities to provide assurance and drive continuous improvement."
  },
  {
    icon: FileCheck,
    title: "Policy Management",
    description: "Develop and implement policies and procedures that support governance objectives."
  },
  {
    icon: Lock,
    title: "Cybersecurity GRC",
    description: "Integrate cybersecurity into your GRC framework to protect critical assets."
  },
  {
    icon: Eye,
    title: "Third-Party Risk",
    description: "Manage third-party risks through comprehensive vendor assessment and monitoring."
  }
]

const benefits = [
  "Reduce compliance costs through automation",
  "Minimize risk exposure across the organization",
  "Strengthen corporate governance practices",
  "Improve audit outcomes and reduce findings",
  "Enhance stakeholder confidence and trust",
  "Build a resilient and compliant organization"
]

export default function GRCPage() {
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
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Governance, Risk & Compliance
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              Secure, compliant, and resilient. We help organizations build robust GRC frameworks that protect value, ensure compliance, and enable sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/contact">
                  Strengthen Your GRC
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
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=800&fit=crop"
              alt="Governance Risk Compliance"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              GRC Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for governance, risk, and compliance
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

      {/* Benefits Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Build a Resilient Organization
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our GRC solutions help organizations navigate complexity while maintaining strong governance and control.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
                alt="Risk Management"
                fill
                className="object-cover"
              />
            </div>
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
                Ready to Strengthen GRC?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help you build a robust governance, risk, and compliance program.
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
