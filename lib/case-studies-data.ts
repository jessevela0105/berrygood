import type { LucideIcon } from "lucide-react"
import { Clock, TrendingDown, DollarSign, CheckCircle, Zap, Users, Target } from "lucide-react"

export type CaseStudyEntry = {
  slug: string
  category: string
  title: string
  description: string
  challenge: string
  solution: string
  results: string[]
  metric: string
  metricLabel: string
  icon: LucideIcon
  industry: string
}

export const caseStudies: CaseStudyEntry[] = [
  {
    slug: "content-review-fortune-100",
    category: "Managed Services",
    title: "Content Review & Validation for Fortune 100 Retailer",
    description:
      "Accelerated training of machine learning models for approving website product descriptions, resulting in faster time-to-market and improved accuracy.",
    challenge: "The client needed to rapidly scale their content review process while maintaining quality standards.",
    solution: "Implemented an AI-assisted review workflow with human oversight to train and validate machine learning models.",
    results: ["40% faster processing time", "95% accuracy rate", "50% cost reduction"],
    metric: "40%",
    metricLabel: "Faster Processing",
    icon: Clock,
    industry: "Retail",
  },
  {
    slug: "data-architecture-efficiency",
    category: "Data Solutions",
    title: "Simplifying Data Architecture for Enhanced Efficiency",
    description:
      "Informed decision-making to save 30% on architecture costs while ensuring no migration of sunken costs and improved data accessibility.",
    challenge: "Complex legacy systems were creating data silos and increasing operational costs.",
    solution: "Designed and implemented a modern data architecture with clear governance and optimized workflows.",
    results: ["30% cost reduction", "60% faster queries", "100% data accessibility"],
    metric: "30%",
    metricLabel: "Cost Reduction",
    icon: TrendingDown,
    industry: "Technology",
  },
  {
    slug: "pe-healthcare-transformation",
    category: "Finance & Accounting",
    title: "Transforming Operations for PE-Backed Healthcare",
    description:
      "Completed a data transformation project in five weeks at approximately 30% of anticipated cost while establishing scalable processes.",
    challenge: "Post-acquisition integration required rapid operational improvements and cost synergies.",
    solution: "Deployed a lean transformation team with deep healthcare expertise to accelerate integration.",
    results: ["70% under budget", "5-week delivery", "3x ROI in Year 1"],
    metric: "70%",
    metricLabel: "Under Budget",
    icon: DollarSign,
    industry: "Healthcare",
  },
  {
    slug: "donor-engagement-apis",
    category: "Digital Transformation",
    title: "Improved Donor Engagement with Streamlined APIs",
    description:
      "APIs now meet both internal and industry standards, with streamlined client onboarding and improved donor experience.",
    challenge: "Legacy systems were hindering donor engagement and creating compliance risks.",
    solution: "Modernized API infrastructure with focus on security, compliance, and user experience.",
    results: ["100% compliance", "75% faster onboarding", "2x donor engagement"],
    metric: "100%",
    metricLabel: "Compliance",
    icon: CheckCircle,
    industry: "Nonprofit",
  },
  {
    slug: "supply-chain-optimization",
    category: "Business Transformation",
    title: "Global Supply Chain Optimization for Manufacturer",
    description: "Redesigned supply chain operations to reduce lead times and improve resilience against disruptions.",
    challenge: "Supply chain disruptions were causing significant revenue loss and customer dissatisfaction.",
    solution: "Implemented end-to-end visibility and predictive analytics across the supply chain network.",
    results: ["45% reduced lead time", "25% inventory reduction", "99% on-time delivery"],
    metric: "45%",
    metricLabel: "Reduced Lead Time",
    icon: Zap,
    industry: "Manufacturing",
  },
  {
    slug: "csuite-transformation",
    category: "Executive Search",
    title: "C-Suite Transformation for Technology Startup",
    description: "Recruited and onboarded a complete executive leadership team to scale from Series B to IPO readiness.",
    challenge: "Rapid growth required experienced leadership to navigate scaling challenges and prepare for public markets.",
    solution: "Conducted comprehensive talent mapping and recruited 5 C-level executives within 6 months.",
    results: ["5 executives placed", "6-month completion", "Successful Series C"],
    metric: "5",
    metricLabel: "Executives Placed",
    icon: Users,
    industry: "Technology",
  },
  {
    slug: "predictive-analytics-insurance",
    category: "AI & Analytics",
    title: "Predictive Analytics for Insurance Claims",
    description: "Developed AI-powered claims prediction system to reduce fraud and improve processing efficiency.",
    challenge: "Manual claims processing was slow, expensive, and prone to fraud.",
    solution: "Built machine learning models to predict claim validity and automate routine processing.",
    results: ["60% fraud reduction", "80% faster processing", "$10M annual savings"],
    metric: "60%",
    metricLabel: "Fraud Reduction",
    icon: Target,
    industry: "Financial Services",
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudyEntry | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
