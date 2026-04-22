import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

const footerLinks = {
  solutions: [
    { name: "Artificial Intelligence", href: "/solutions/artificial-intelligence" },
    { name: "Business Transformation", href: "/solutions/business-transformation" },
    { name: "Data", href: "/solutions/data" },
    { name: "Digital", href: "/solutions/digital" },
    { name: "Enterprise Applications", href: "/solutions/enterprise-applications" },
    { name: "Executive Search", href: "/solutions/executive-search" },
    { name: "Finance & Accounting", href: "/solutions/finance-accounting" },
    { name: "Governance, Risk & Compliance", href: "/solutions/governance-risk-compliance" },
    { name: "Transaction Advisory", href: "/solutions/transaction-advisory" },
    { name: "Supply Chain Management", href: "/solutions/supply-chain-management" },
  ],
  industries: [
    { name: "Aerospace & Defense", href: "/industries/aerospace-defense" },
    { name: "Consumer Goods & Retail", href: "/industries/consumer-goods-retail" },
    { name: "Financial Services", href: "/industries/financial-services" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Private Equity", href: "/industries/private-equity" },
    { name: "Technology", href: "/industries/technology" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 text-left">
            <Image src="/images/logo.png" alt="BerryGood" width={160} height={48} className="h-10 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              BerryGood combines strategy, talent, and execution with a collaborative approach to create practical
              solutions tailored to your organization.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Solutions</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors leading-snug"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Industries</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors leading-snug"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors leading-snug"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} BerryGood. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 sm:justify-end">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
