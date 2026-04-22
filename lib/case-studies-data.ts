import type { LucideIcon } from "lucide-react"
import { Clock, TrendingDown, DollarSign, CheckCircle, Zap, Users, Target } from "lucide-react"

export type ApproachStep = {
  title: string
  description: string
}

export type CaseStudyEntry = {
  slug: string
  category: string
  title: string
  description: string
  challenge: string
  approach: ApproachStep[]
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
    challenge: "The client, a Fortune 100 retailer with over 10 million SKUs, struggled to scale their content review process. Manual review by a distributed team created bottlenecks, inconsistent quality standards, and delayed product launches by an average of 72 hours. Additionally, their existing ML models suffered from high false-positive rates, causing unnecessary escalations and reviewer fatigue.",
    approach: [
      {
        title: "Assessment & Discovery",
        description: "Conducted a comprehensive audit of existing content workflows, analyzing 50,000+ historical reviews to identify patterns in approval decisions, common rejection reasons, and reviewer variance. Mapped the end-to-end content pipeline from vendor submission to live publication."
      },
      {
        title: "Hybrid AI-Human Architecture",
        description: "Designed a tiered review system leveraging NLP models for initial content classification. Implemented confidence scoring thresholds: high-confidence approvals (>95%) auto-published, medium-confidence (70-95%) routed to junior reviewers, and low-confidence (<70%) escalated to senior specialists."
      },
      {
        title: "Active Learning Pipeline",
        description: "Built a continuous feedback loop where human corrections were ingested into the ML training pipeline in real-time. Implemented A/B testing framework to validate model improvements against baseline metrics before production deployment."
      },
      {
        title: "Quality Assurance Framework",
        description: "Established automated quality gates with statistical sampling of approved content. Deployed anomaly detection to flag unusual patterns and potential model drift. Created dashboards for real-time monitoring of accuracy, throughput, and reviewer productivity metrics."
      }
    ],
    results: ["40% faster processing time", "95% accuracy rate", "50% cost reduction", "Reduced time-to-market from 72 hours to under 24 hours"],
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
    challenge: "The client operated a sprawling data ecosystem with 47 distinct data stores across on-premises and multi-cloud environments. Redundant ETL pipelines consumed 60% of their data engineering capacity, while inconsistent schemas made cross-functional analytics nearly impossible. Annual infrastructure costs exceeded $12M with declining ROI.",
    approach: [
      {
        title: "Data Landscape Mapping",
        description: "Performed comprehensive data lineage analysis using automated discovery tools. Cataloged 2,300+ data assets, documenting ownership, usage patterns, refresh frequencies, and downstream dependencies. Identified 340+ redundant datasets and 78 orphaned pipelines consuming resources without active consumers."
      },
      {
        title: "Architecture Rationalization",
        description: "Developed a target-state architecture centered on a lakehouse paradigm using Delta Lake. Designed domain-oriented data mesh with clear ownership boundaries while maintaining central governance. Created migration scoring matrix weighing data criticality, transformation complexity, and business impact."
      },
      {
        title: "Incremental Migration Strategy",
        description: "Implemented strangler fig pattern to gradually redirect workloads without disrupting operations. Built unified semantic layer using dbt for consistent business logic across all consumption patterns. Established data contracts between producers and consumers to prevent schema-related incidents."
      },
      {
        title: "Governance & Observability",
        description: "Deployed automated data quality monitoring with Great Expectations. Implemented column-level access controls and PII detection using ML classifiers. Created self-service data catalog with business glossary integration, reducing data discovery time by 80%."
      }
    ],
    results: ["30% cost reduction", "60% faster queries", "100% data accessibility", "Reduced data engineering maintenance overhead by 45%"],
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
    challenge: "A private equity firm acquired a regional healthcare provider with 12 clinic locations and needed rapid operational improvements to meet aggressive EBITDA targets. Legacy financial systems couldn't produce consolidated reporting, month-end close required 18 days, and inconsistent coding practices created revenue leakage estimated at $2.4M annually.",
    approach: [
      {
        title: "Financial Process Diagnostic",
        description: "Deployed experienced healthcare finance operators to conduct rapid assessment across all locations. Identified 23 distinct process variations in revenue cycle management. Documented critical path bottlenecks in month-end close including 8 manual reconciliation steps requiring 120+ combined hours."
      },
      {
        title: "Chart of Accounts Standardization",
        description: "Designed unified chart of accounts aligned with PE reporting requirements and healthcare industry benchmarks. Mapped existing GL codes to new structure using automated transformation rules. Implemented location-level cost center hierarchy enabling granular profitability analysis."
      },
      {
        title: "Revenue Cycle Optimization",
        description: "Standardized coding workflows across all locations using evidence-based charge capture protocols. Implemented automated charge reconciliation between EMR and billing systems. Deployed denial management dashboard with root cause analytics and automated appeal generation."
      },
      {
        title: "Close Process Automation",
        description: "Built automated consolidation workbooks with elimination entries and intercompany reconciliation. Implemented rolling forecast model with driver-based assumptions. Created executive dashboard suite delivering real-time visibility into KPIs including patient volume, revenue per visit, and payer mix."
      }
    ],
    results: ["70% under budget", "5-week delivery", "3x ROI in Year 1", "Month-end close reduced from 18 days to 5 days"],
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
    challenge: "A national nonprofit organization relied on legacy SOAP-based integrations that created friction in donor experiences. Mobile giving conversions lagged 40% behind industry benchmarks, corporate matching gift processing required manual intervention, and API documentation gaps caused 6+ month partner onboarding cycles.",
    approach: [
      {
        title: "API Strategy Development",
        description: "Conducted stakeholder interviews across fundraising, technology, and partner teams to document current-state pain points. Benchmarked against leading nonprofit API implementations. Developed API-first product roadmap prioritizing high-impact donor journeys and partner integrations."
      },
      {
        title: "RESTful API Design",
        description: "Designed resource-oriented API architecture following OpenAPI 3.0 specification. Implemented consistent error handling, pagination, and filtering patterns. Built comprehensive developer portal with interactive documentation, code samples in 6 languages, and sandbox environment for testing."
      },
      {
        title: "Security & Compliance Implementation",
        description: "Deployed OAuth 2.0 with PKCE for secure authentication across web and mobile clients. Implemented PCI DSS compliant payment tokenization. Built rate limiting and anomaly detection to protect against abuse while ensuring legitimate high-volume partners weren't throttled."
      },
      {
        title: "Partner Enablement Program",
        description: "Created self-service onboarding workflow reducing partner integration time from months to days. Built webhook infrastructure for real-time event notifications. Developed integration health monitoring dashboard providing partners visibility into API performance and error rates."
      }
    ],
    results: ["100% compliance", "75% faster onboarding", "2x donor engagement", "Mobile giving conversions increased 65%"],
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
    challenge: "A global industrial manufacturer faced mounting supply chain challenges with operations spanning 14 countries and 200+ suppliers. Recent disruptions caused $45M in expedited shipping costs and lost sales. Demand forecasting accuracy hovered at 62%, leading to both stockouts and excess inventory carrying costs exceeding $8M annually.",
    approach: [
      {
        title: "Supply Chain Network Analysis",
        description: "Built digital twin of end-to-end supply chain using historical transaction data. Modeled material flows, lead times, and capacity constraints across all tiers. Identified 12 critical single-source dependencies and 8 logistics bottlenecks creating systemic vulnerability."
      },
      {
        title: "Demand Sensing Implementation",
        description: "Deployed ML-based demand forecasting incorporating external signals including economic indicators, weather data, and social sentiment. Implemented hierarchical forecasting reconciling bottom-up SKU predictions with top-down category plans. Established forecast value-add metrics to continuously measure improvement."
      },
      {
        title: "Inventory Optimization",
        description: "Implemented multi-echelon inventory optimization balancing service levels against carrying costs. Designed dynamic safety stock calculations responding to demand volatility and supplier reliability. Built postponement strategies for configurable products reducing finished goods inventory by 35%."
      },
      {
        title: "Control Tower Deployment",
        description: "Launched centralized supply chain control tower with real-time visibility across all nodes. Implemented exception-based management with automated alerts for potential disruptions. Built scenario planning capabilities enabling rapid response to demand shifts or supply constraints."
      }
    ],
    results: ["45% reduced lead time", "25% inventory reduction", "99% on-time delivery", "Forecast accuracy improved from 62% to 87%"],
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
    challenge: "A high-growth B2B SaaS company with $40M ARR needed to transition from founder-led operations to a scalable executive team. The board required experienced leadership across finance, sales, product, and operations to execute on an aggressive growth plan targeting $150M ARR and IPO readiness within 36 months.",
    approach: [
      {
        title: "Leadership Assessment",
        description: "Conducted comprehensive organizational assessment evaluating current leadership capabilities against target-state requirements. Facilitated board and founder alignment sessions to define ideal candidate profiles, compensation philosophy, and cultural non-negotiables. Mapped required competencies for each role against stage-appropriate benchmarks."
      },
      {
        title: "Market Intelligence & Sourcing",
        description: "Developed detailed market maps of relevant executive talent across 200+ comparable companies. Identified passive candidates through proprietary network and strategic referral campaigns. Engaged 150+ potential candidates with personalized outreach emphasizing the unique opportunity and growth trajectory."
      },
      {
        title: "Rigorous Evaluation Process",
        description: "Designed structured interview process incorporating behavioral assessments, case studies, and reference deep-dives. Facilitated working sessions between finalists and existing leadership to evaluate collaboration dynamics. Conducted thorough background verification including performance validation with former boards and investors."
      },
      {
        title: "Onboarding & Integration",
        description: "Developed 100-day plans for each executive aligned with board expectations and company OKRs. Facilitated executive team offsites to accelerate trust-building and strategic alignment. Established coaching relationships and feedback mechanisms to ensure successful integration and early wins."
      }
    ],
    results: ["5 executives placed", "6-month completion", "Successful Series C", "100% retention at 18-month mark"],
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
    challenge: "A mid-size property and casualty insurer processed 500,000+ claims annually with fraud losses exceeding $35M. Manual review processes created 14-day average cycle times, while special investigation unit capacity limited fraud investigations to only 3% of flagged claims. Customer satisfaction scores suffered due to legitimate claim delays.",
    approach: [
      {
        title: "Data Foundation & Feature Engineering",
        description: "Aggregated claims data from 12 source systems including policy administration, call center transcripts, and external fraud databases. Engineered 400+ predictive features spanning claimant behavior, loss characteristics, and network relationships. Built graph database to identify connected claims and repeat actors across policies."
      },
      {
        title: "Model Development & Validation",
        description: "Developed ensemble model combining gradient boosting, neural networks, and anomaly detection algorithms. Implemented model explainability using SHAP values to provide adjusters with interpretable fraud indicators. Validated performance against historical investigation outcomes ensuring 85%+ precision at target recall levels."
      },
      {
        title: "Workflow Integration",
        description: "Designed claims triage workflow routing cases based on predicted fraud probability and complexity scores. Built adjuster workbench surfacing relevant risk factors and suggested investigation steps. Implemented feedback loop capturing investigation outcomes to continuously retrain and improve model performance."
      },
      {
        title: "Straight-Through Processing",
        description: "Deployed automated decisioning for low-risk claims meeting defined criteria. Implemented real-time scoring API integrated with digital FNOL channels. Built guardrails including random sampling, model monitoring, and escalation triggers to maintain quality and regulatory compliance."
      }
    ],
    results: ["60% fraud reduction", "80% faster processing", "$10M annual savings", "Customer satisfaction improved 25 points"],
    metric: "60%",
    metricLabel: "Fraud Reduction",
    icon: Target,
    industry: "Financial Services",
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudyEntry | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
