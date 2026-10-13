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
}

/** What Adam wants next — drives hero lede and contact CTA. */
export const hiringThesis =
  "I want hard production platforms and applied AI systems where technical leadership still means staying close to the architecture.";

export const personalArc =
  "Ireland first: research at University College Cork and industrial R&D at Liebherr. Then Melbourne — shipping distributed systems at FreightCyber and stepping into hands-on technical leadership for a 13-person engineering team.";

export const contactInvite = {
  eyebrow: "Open for the right problem",
  headline: "Building something that has to hold up in production?",
  supporting:
    "If you need a hands-on technical lead for distributed platforms, reliability work, or applied AI that stays accountable to operators — start a conversation.",
  stubId: "AC/CTA.01",
};

export const impactMetrics: ImpactMetric[] = [
  {
    value: "52% → 12%",
    label: "Engineering time spent on bugs",
    context: "Testing, observability and root-cause discipline",
  },
  {
    value: "1,000+",
    label: "Jobs initiated in under six seconds",
    context: "Asynchronous invoicing with safe retries",
  },
  {
    value: "30s → <1s",
    label: "Live vehicle update latency",
    context: "Approximately 1000+ concurrently active vehicles",
  },
  {
    value: "≈4 hrs",
    label: "Saved every week with ToothNotes",
    context: "AI-assisted clinical documentation",
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
      "I strengthened automated testing, review practices, deployment discipline and root-cause analysis, then made the system easier to understand with tracing, metrics and actionable alerts. In parallel, I led a brownfield migration to Terraform and the evolution from predominantly Lambda workloads toward ECS/Fargate.",
    outcomes: [
      "Clearer engineering standards that scale beyond individual contributors",
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
      "The workflow protects financial correctness under concurrency, third-party rate limits and partial failure. A related MYOB integration processes approximately A$500k in customer invoices each month using coordinated sequencing, targeted retries, database fallbacks and token-refresh locking.",
    outcomes: [
      "A slow, timeout-prone workflow became fast and observable",
      "Individual failures no longer hold the entire batch hostage",
      "Reconciliation makes recovery explicit instead of hopeful",
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
      "The new flow supports roughly 1000+ concurrently active vehicles and treats consistency, connection behaviour and production diagnosis as first-class concerns rather than frontend polish.",
    outcomes: [
      "Operators see meaningful movement as it happens",
      "Live and historical views remain aligned",
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
      "ToothNotes turns consultation information into editable clinical notes. I owned the path from problem discovery and product design through AWS architecture, Amazon Bedrock integration and production use.",
    outcomes: [
      "A useful workflow, not an AI demo looking for a problem",
      "Editable output keeps the clinician in control",
      "A full product taken independently from idea to production",
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
      "The assignment engine uses explicit operational rules and automated scoring tests for the decision itself. Amazon Bedrock then turns the result into a human-readable explanation, keeping generative AI away from the correctness-critical path.",
    outcomes: [
      "Operational decisions remain deterministic and testable",
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
      "The platform brings campaign pages, payments, email and administration into one flow. It began as a practical solution for my own community and became a system other clubs could use.",
    outcomes: [
      "Processed more than €100k in payments",
      "Made each fundraiser configurable without rebuilding it",
      "Joined product, payments and community operations",
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
      "Distributed services and integrations designed around concurrency, partial failure and maintainable boundaries.",
    tools: ["TypeScript", "Python", "PostgreSQL", "REST APIs", "WebSockets", "SQS", "Redis"],
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
      "Turning ambiguous customer and operational problems into clear technical direction and shipped software.",
    tools: ["Architecture", "Mentoring", "Code review", "Incident response", "Product discovery", "Engineering standards"],
  },
];

export const engineeringRoots: EngineeringRoot[] = [
  {
    title: "EEG visualisation in VR",
    context: "MEngSc research · University College Cork",
    description:
      "Built a clinician-focused OpenXR environment using Unity, C# and Python — early proof that I can enter an unfamiliar domain and deliver a complete software system.",
  },
  {
    title: "Remote environmental monitoring",
    context: "Undergraduate project · Peatland IoT",
    description:
      "Connected remote sensing equipment to AWS through LoRa and an edge gateway. Useful context for how I think about distributed systems, not my current role.",
  },
  {
    title: "Industrial R&D",
    context: "Liebherr · GPS and condition monitoring",
    description:
      "Worked across positioning, networking and data analysis before moving fully into production software engineering.",
  },
];

export const careerEntries: CareerEntry[] = [
  {
    period: "Jan 2026 — now",
    role: "Engineering Team Lead",
    organisation: "FreightCyber · Melbourne",
    description:
      "Technical direction, architecture and production reliability for a 13-person engineering team, while remaining hands-on.",
  },
  {
    period: "Apr 2025 — Jan 2026",
    role: "Full Stack Engineer",
    organisation: "FreightCyber · Melbourne",
    description:
      "Built distributed financial, fleet and operational systems across TypeScript, Python, PostgreSQL and AWS.",
  },
  {
    period: "Jul 2023 — Oct 2024",
    role: "Postgraduate Researcher",
    organisation: "University College Cork",
    description:
      "Designed and tested clinician-focused 3D EEG visualisation using Unity, C#, Python and OpenXR.",
  },
  {
    period: "Summer 2023",
    role: "R&D Engineering Intern",
    organisation: "Liebherr Ireland",
    description:
      "Worked across GPS positioning, condition monitoring, software and networked embedded systems.",
  },
];
