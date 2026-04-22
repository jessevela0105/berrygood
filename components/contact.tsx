"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Business Center Drive", "Suite 500", "New York, NY 10001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["contact@berrygood.com", "support@berrygood.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 2PM"],
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance leading-snug sm:leading-relaxed">
            Ready to Grow?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Let&apos;s work together to seize your next opportunity and solve your next challenge.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
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

          {/* Contact Form */}
          <Card className="lg:col-span-3 bg-card border-border/50 shadow-xl">
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
                      <Label htmlFor="firstName" className="text-card-foreground">First Name</Label>
                      <Input id="firstName" placeholder="John" required className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-card-foreground">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required className="bg-background border-border" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required className="bg-background border-border" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-card-foreground">Company</Label>
                    <Input id="company" placeholder="Your Company Name" className="bg-background border-border" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-card-foreground">How can we help?</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project or challenge..."
                      rows={4}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
