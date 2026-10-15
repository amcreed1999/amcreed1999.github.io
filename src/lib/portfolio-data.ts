export interface ImpactMetric {
  value: string;
  label: string;
  context: string;
}

export interface CaseStudy {
  id: string;
  category: "Production" | "Applied AI" | "Independent product";
  title: string;
  summary: string;
  impact: string;
  impactLabel: string;
  description: string;
  outcomes: string[];
  technologies: string[];
  image?: string;
  imageAlt?: string;
  website?: string;
  signal: string[];
}

export interface CapabilityStage {
  index: string;
  title: string;
  description: string;
  tools: string[];
}

export interface CareerEntry {
  period: string;
  role: string;
  organisation: string;
  description: string;
}

export interface EngineeringRoot {
  title: string;
  context: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

/** What Adam wants next — drives hero lede and contact CTA. */
export const hiringThesis =
  "I want production platforms where leading still means architecture, reviews and incidents — applied AI where it fits.";

export const personalArc =
  "Ireland first: postgraduate research at University College Cork and industrial R&D at Liebherr. Then Melbourne — shipping distributed AWS systems at FreightCyber and stepping into hands-on technical leadership for a 13-person engineering team.";

export const contactInvite = {
  eyebrow: "Open for the right problem",
  headline: "Need a hands-on lead for systems that have to hold up?",
  supporting:
    "AWS platforms, distributed backends, reliability, or applied AI that stays accountable in production — start a conversation.",
  stubId: "AC/CTA.01",
};

export const impactMetrics: ImpactMetric[] = [
  {
    value: "52% → 12%",
    label: "Engineering time spent on bugs",
    context: "Six months of testing, observability and root-cause discipline",
  },
  {
    value: "1,000+",
    label: "Jobs initiated in under six seconds",
    context: "Outbox invoicing that replaced a ~15-minute synchronous path",
  },
  {
    value: "30s → <1s",
    label: "Live vehicle update latency",
    context: "Roughly 1K concurrently active trucks",
  },
  {
    value: "≈4 hrs",
    label: "Saved every week with ToothNotes",
    context: "AI-assisted clinical documentation in production use",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "platform-reliability",
    category: "Production",
    title: "A platform the team can trust",
    summary:
      "Leading a 13-person engineering team at FreightCyber while staying close to architecture, code review, incidents and delivery.",
    impact: "52% → 12%",
    impactLabel: "time spent on bugs in six months",
    description:
      "I strengthened testing, review practices, deployment discipline and root-cause analysis, and improved visibility with OpenTelemetry, Grafana, Prometheus and CloudWatch. In parallel I led a brownfield AWS migration to Terraform and moved workloads from predominantly Lambda toward ECS/Fargate.",
    outcomes: [
      "Engineering standards that scale beyond individual contributors",
      "Repeatable AWS infrastructure and stronger operational ownership",
      "Faster diagnosis across distributed services and integrations",
    ],
    technologies: [
      "AWS",
      "ECS/Fargate",
      "Terraform",
      "OpenTelemetry",
      "Grafana",
      "Prometheus",
      "CloudWatch",
    ],
    signal: ["Observe", "Diagnose", "Standardise", "Improve"],
  },
  {
    id: "financial-workflows",
    category: "Production",
    title: "Financial workflows that fail safely",
    summary:
      "Replaced a fragile synchronous invoicing process with an asynchronous outbox workflow designed around retries, isolation and reconciliation.",
    impact: "1,000+",
    impactLabel: "jobs initiated in under six seconds",
    description:
      "The previous path could take around 15 minutes near 100 invoices. The outbox redesign initiates 1,000+ jobs in under six seconds with retries, failure isolation and reconciliation. A related MYOB integration processes about A$2M in customer invoices each month — coordinated sequencing, targeted retries, database fallbacks and token-refresh locking.",
    outcomes: [
      "A slow, timeout-prone workflow became fast and observable",
      "Individual failures no longer hold the entire batch hostage",
      "Reconciliation makes recovery explicit, not hopeful",
    ],
    technologies: [
      "TypeScript",
      "PostgreSQL",
      "SQS",
      "Outbox pattern",
      "MYOB",
      "Automated testing",
    ],
    signal: ["Commit", "Queue", "Process", "Reconcile"],
  },
  {
    id: "real-time-tracking",
    category: "Production",
    title: "Real-time means real-time",
    summary:
      "Reworked FreightCyber's vehicle tracking path to keep live and historical state consistent without making operators wait.",
    impact: "<1 second",
    impactLabel: "updates, down from 30 seconds",
    description:
      "The new flow supports roughly 1K concurrently active trucks, treating consistency, connection behaviour and production diagnosis as first-class concerns — not frontend polish.",
    outcomes: [
      "Operators see meaningful movement as it happens",
      "Live and historical views stay aligned",
      "The update path is easier to observe and debug",
    ],
    technologies: ["WebSockets", "TypeScript", "AWS", "Redis", "PostgreSQL"],
    signal: ["Vehicle", "Ingest", "State", "Dispatch"],
  },
  {
    id: "toothnotes",
    category: "Applied AI",
    title: "AI that gives clinicians time back",
    summary:
      "Designed and shipped ToothNotes, an AI-assisted dental documentation product shaped by feedback from a real clinician.",
    impact: "≈4 hours",
    impactLabel: "saved for its primary user each week",
    description:
      "ToothNotes turns consultation information into editable clinical notes. I owned the path from problem discovery and product design through AWS architecture, Amazon Bedrock and production use.",
    outcomes: [
      "A useful workflow, not an AI demo looking for a problem",
      "Editable output keeps the clinician in control",
      "Taken independently from idea to production",
    ],
    technologies: ["Amazon Bedrock", "AWS", "Python", "TypeScript", "Product discovery"],
    signal: ["Consult", "Structure", "Review", "Record"],
  },
  {
    id: "driver-assignment",
    category: "Applied AI",
    title: "AI explanations, deterministic decisions",
    summary:
      "Built a production driver-assignment workflow that keeps operational decisions testable while using AI where it adds clarity.",
    impact: "Rules + AI",
    impactLabel: "deterministic scoring with useful explanations",
    description:
      "Explicit operational rules and automated scoring tests own the decision. Amazon Bedrock turns the result into a human-readable explanation, keeping generative AI off the correctness-critical path.",
    outcomes: [
      "Operational decisions stay deterministic and testable",
      "Users get a clear explanation instead of an opaque score",
      "AI improves comprehension without owning correctness",
    ],
    technologies: ["Amazon Bedrock", "TypeScript", "Automated testing", "Decision systems"],
    signal: ["Score", "Test", "Explain", "Assign"],
  },
  {
    id: "club-fundraiser",
    category: "Independent product",
    title: "Software that raised real money",
    summary:
      "A configurable fundraising platform that grew from a local-club need into a reusable product.",
    impact: "€100k+",
    impactLabel: "processed for community clubs",
    description:
      "Campaign pages, payments, email and administration in one flow. It started as a practical fix for my own community and became something other clubs could reuse.",
    outcomes: [
      "Processed more than €100k in payments",
      "Each fundraiser configurable without rebuilding",
      "Product, payments and community operations in one system",
    ],
    technologies: ["Next.js", "TypeScript", "Stripe", "Firebase", "Vercel", "Mailgun"],
    image: "/Images/Projects/Club_Fundraiser.png",
    imageAlt: "Club Fundraiser platform homepage",
    website: "https://www.club-fundraiser.com",
    signal: ["Campaign", "Payment", "Notify", "Report"],
  },
];

export const capabilityStages: CapabilityStage[] = [
  {
    index: "01",
    title: "Architecture and backend",
    description:
      "Distributed services and integrations designed for concurrency, partial failure and clear boundaries — with Amazon Bedrock only where AI earns its place.",
    tools: [
      "TypeScript",
      "Python",
      "PostgreSQL",
      "REST APIs",
      "WebSockets",
      "SQS",
      "Amazon Bedrock",
    ],
  },
  {
    index: "02",
    title: "Platform and reliability",
    description:
      "AWS infrastructure and production services built to be observable, repeatable and safe to change.",
    tools: ["AWS", "ECS/Fargate", "Lambda", "Terraform", "CI/CD", "OpenTelemetry", "Grafana"],
  },
  {
    index: "03",
    title: "Leadership and delivery",
    description:
      "Ambiguous customer and operational problems turned into clear technical direction and shipped software for a 13-person team.",
    tools: [
      "Architecture",
      "Mentoring",
      "Code review",
      "Incident response",
      "Product discovery",
      "Engineering standards",
    ],
  },
];

export const engineeringRoots: EngineeringRoot[] = [
  {
    title: "M2EEG-VR",
    context: "Sensors · MEngSc · University College Cork",
    description:
      "First-author peer-reviewed paper on multi-modal EEG visualisation and AI-assisted sonification in VR for neonatal seizure detection — Unity, C#, Python and OpenXR.",
    href: "https://doi.org/10.3390/s26134167",
    linkLabel: "Sensors · DOI",
  },
  {
    title: "Remote environmental monitoring",
    context: "Undergraduate project · Peatland IoT",
    description:
      "Connected remote sensing equipment to AWS through LoRa and an edge gateway. Context for how I think about distributed systems — not my current role.",
  },
  {
    title: "Industrial R&D",
    context: "Liebherr · GPS and condition monitoring",
    description:
      "GPS positioning and condition-monitoring work in Python, C/C++ and networked embedded systems before moving fully into production software.",
  },
];

export const careerEntries: CareerEntry[] = [
  {
    period: "Jan 2026 — now",
    role: "Engineering Team Lead",
    organisation: "FreightCyber · Melbourne",
    description:
      "Hiring, mentoring and technical direction for a 13-person engineering team across web, mobile and backend AWS services — still hands-on in architecture, reviews and incidents. FreightCyber builds FCX, an enterprise OS for Australian transport and logistics.",
  },
  {
    period: "Apr 2025 — Jan 2026",
    role: "Full Stack Engineer",
    organisation: "FreightCyber · Melbourne",
    description:
      "Distributed financial, fleet and operational systems in TypeScript, Python, PostgreSQL and AWS — invoicing, MYOB integration and live tracking for ~1K concurrent trucks.",
  },
  {
    period: "Oct 2024 — Mar 2025",
    role: "Travel / relocation",
    organisation: "Ireland → Melbourne",
    description:
      "Career break travelling while relocating from Ireland to Melbourne.",
  },
  {
    period: "Jul 2023 — Oct 2024",
    role: "Postgraduate Researcher",
    organisation: "University College Cork",
    description:
      "Clinician-focused 3D EEG visualisation in Unity, C#, Python and OpenXR with the Embedded Systems Research Group — published as first author in Sensors (M2EEG-VR).",
  },
  {
    period: "Summer 2023",
    role: "R&D Engineering Intern",
    organisation: "Liebherr Ireland",
    description:
      "GPS positioning, condition monitoring, software and networked embedded systems.",
  },
];
