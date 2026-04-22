"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Building2,
  Globe
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Headquarters",
    details: ["Building 128, Brooklyn Navy Yard", "Brooklyn, NY 11205"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["1 212 239 5050", "1 212 239 5317"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@berrygood.com", "support@berrygood.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9AM - 6PM EST", "Saturday: 10AM - 2PM EST"],
  },
]

const offices = [
  { city: "New York", country: "United States", type: "Headquarters" },
  { city: "San Francisco", country: "United States", type: "Regional Office" },
  { city: "London", country: "United Kingdom", type: "Regional Office" },
  { city: "Singapore", country: "Singapore", type: "Regional Office" },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Get In Touch
          </span>
          <h1 className="mt-2 text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Let&apos;s Start a Conversation
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground text-pretty">
            Ready to transform your business? Our team is here to help you navigate 
            challenges and seize opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              
              <Card className="bg-card border-border/50 shadow-xl">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-card-foreground">Thank You!</h3>
                      <p className="mt-2 text-muted-foreground">
                        We&apos;ve received your message and will get back to you within 24 hours.
                      </p>
                      <Button 
                        className="mt-6" 
                        variant="outline"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-card-foreground">First Name *</Label>
                          <Input id="firstName" placeholder="John" required className="bg-background border-border" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-card-foreground">Last Name *</Label>
                          <Input id="lastName" placeholder="Doe" required className="bg-background border-border" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-card-foreground">Email *</Label>
                        <Input id="email" type="email" placeholder="john@company.com" required className="bg-background border-border" />
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-card-foreground">Company</Label>
                          <Input id="company" placeholder="Your Company Name" className="bg-background border-border" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-card-foreground">Phone</Label>
                          <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-background border-border" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-card-foreground">Subject *</Label>
                        <Input id="subject" placeholder="How can we help?" required className="bg-background border-border" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-card-foreground">Message *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your project, challenges, or goals..."
                          rows={5}
                          required
                          className="bg-background border-border"
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      
                      <p className="text-center text-xs text-muted-foreground">
                        By submitting this form, you agree to our{" "}
                        <Link href="/privacy" className="text-primary hover:underline">privacy policy</Link>
                        {" "}and{" "}
                        <Link href="/terms" className="text-primary hover:underline">terms of service</Link>.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      {item.details.map((detail, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Global Offices */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Global Offices
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {offices.map((office) => (
                    <div 
                      key={office.city} 
                      className="p-4 rounded-xl bg-secondary/50 border border-border/50"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Building2 className="h-4 w-4 text-primary" />
                        <span className="font-medium text-foreground">{office.city}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{office.country}</p>
                      <p className="text-xs text-primary">{office.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="aspect-[21/9] rounded-2xl bg-card border border-border/50 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive map coming soon</p>
              <p className="text-sm text-muted-foreground mt-1">Building 128, Brooklyn Navy Yard, Brooklyn, NY 11205</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
