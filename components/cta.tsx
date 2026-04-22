import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white mb-6">
          <Sparkles className="h-4 w-4" />
          Transform Your Business Today
        </div>
        
        <h2 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance leading-snug sm:leading-relaxed">
          Ready to Achieve Your Full Potential?
        </h2>
        
        <p className="mt-6 text-lg leading-relaxed text-white/90 max-w-2xl mx-auto text-pretty">
          Partner with BerryGood and discover how our expertise can help you navigate 
          complexity, drive innovation, and achieve sustainable growth.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            variant="secondary" 
            asChild 
            className="min-w-[180px] bg-white text-primary hover:bg-white/90"
          >
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="min-w-[180px] border-white text-white hover:bg-white/10"
          >
            <Link href="/case-studies">
              View Our Work
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
