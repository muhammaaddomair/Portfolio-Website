export type ProjectCategory =
  | "All Projects"
  | "SaaS Platforms"
  | "AI Automation"
  | "Infrastructure"
  | "Data Systems";

export type ProjectItem = {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "All Projects">;
  subtitle: string;
  description: string;
  client: string;
  solution: string;
  result: string;
  techStack: string[];
  features: string[];
  image: string;
};

export const projectCategories: ProjectCategory[] = [
  "All Projects",
  "SaaS Platforms",
  "AI Automation",
  "Infrastructure",
  "Data Systems"
];

export const projects: ProjectItem[] = [
  {
    id: "axemail-platform",
    title: "Axemail Platform",
    category: "SaaS Platforms",
    subtitle: "Multi-Tenant Communication Platform",
    description:
      "A multi-tenant communication platform designed for campaign operations, account controls, and product-led growth workflows.",
    client: "GrowthCore Inc.",
    solution: "Product-led SaaS architecture",
    result: "29% improvement in campaign throughput",
    techStack: ["Next.js", "Node.js", "PostgreSQL"],
    features: ["Tenant-aware dashboards", "Usage analytics", "Role-based controls"],
    image: "/backgrounds/hero1.mp4"
  },
  {
    id: "ai-workflow-engine",
    title: "AI Workflow Engine",
    category: "AI Automation",
    subtitle: "Intelligent Operations Layer",
    description:
      "An orchestration layer for AI-assisted task routing, document processing, and decision workflows across internal operations.",
    client: "OpsMatrix",
    solution: "AI workflow orchestration",
    result: "41% reduction in manual review time",
    techStack: ["Python", "LangGraph", "Redis"],
    features: ["Automated task routing", "Human review states", "Prompt version controls"],
    image: "/backgrounds/hero2.mp4"
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    category: "Data Systems",
    subtitle: "Business Intelligence Dashboard",
    description:
      "A central reporting interface for leadership teams tracking operational throughput, growth metrics, and business performance.",
    client: "NorthPeak Analytics",
    solution: "Advanced BI & Reporting",
    result: "35% increase in operational efficiency",
    techStack: ["React", "Supabase", "Charting"],
    features: ["Executive KPIs", "Custom report slices", "Daily reporting automation"],
    image: "/backgrounds/hero1.mp4"
  },
  {
    id: "saas-billing-system",
    title: "SaaS Billing System",
    category: "SaaS Platforms",
    subtitle: "Billing Operations System",
    description:
      "A billing operations system covering plan controls, invoicing states, subscription events, and revenue reporting visibility.",
    client: "CloudLedger",
    solution: "Subscription infrastructure redesign",
    result: "Reduced billing support load by 24%",
    techStack: ["Next.js", "Stripe", "Prisma"],
    features: ["Subscription controls", "Invoice event logs", "Account revenue tracking"],
    image: "/backgrounds/hero2.mp4"
  },
  {
    id: "infrastructure-monitoring",
    title: "Infrastructure Monitoring",
    category: "Infrastructure",
    subtitle: "Reliability Monitoring Workspace",
    description:
      "A monitoring workspace for service health, deployment confidence, alert prioritization, and reliability signals.",
    client: "InfraPulse Systems",
    solution: "Unified infrastructure observability",
    result: "Faster incident response across core services",
    techStack: ["TypeScript", "OpenTelemetry", "Docker"],
    features: ["Service health views", "Alert grouping", "Deployment status timeline"],
    image: "/backgrounds/hero1.mp4"
  }
];
