export type ProjectCategory =
  | "All Projects"
  | "SaaS Platforms"
  | "Website Development"
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
  liveUrl?: string;
  repoUrl?: string;
};

export const projectCategories: ProjectCategory[] = [
  "All Projects",
  "SaaS Platforms",
  "Website Development",
  "AI Automation",
  "Infrastructure",
  "Data Systems"
];

export const projects: ProjectItem[] = [
  {
    id: "axemail-platform",
    title: "Axemail Platform",
    category: "SaaS Platforms",
    subtitle: "Self-Hosted Bulk Email Platform",
    description:
      "A self-hosted bulk email platform running on my own VPS server, built to reliably send more than 300,000 emails per day with full operational control.",
    client: "Internal Build",
    solution: "Self-hosted bulk email infrastructure",
    result: "High-volume outbound delivery on controlled infrastructure",
    techStack: ["Linux", "Postfix", "REST API", "Contabo", "PM2", "Next.js"],
    features: ["High-volume sending", "Self-hosted delivery", "Operational control"],
    image: "/portfolio-images/axemail-img.png",
    liveUrl: "https://axemail.cloud",
    repoUrl: "https://github.com/muhammaaddomair/axemail-sender"
  },
  {
    id: "salon-invoice-system",
    title: "Salon Invoice System",
    category: "Data Systems",
    subtitle: "Hair Salon Invoicing Software",
    description:
      "A desktop salon invoice system built for offline billing, package and service management, invoice generation, and long-term customer record keeping.",
    client: "Local Hair Salon",
    solution: "Offline desktop billing and invoice management",
    result: "Faster invoicing, better record storage, and smoother salon operations",
    techStack: ["Python", "Tkinter", "SQLite3"],
    features: ["Invoice and PDF generation", "Service package and voucher management", "Stored customer and invoice records"],
    image: "/portfolio-images/salon-invoice-system-img.png",
    repoUrl: "https://github.com/muhammaaddomair/Salon-Invoice-App"
  },
  {
    id: "solux-global-website",
    title: "Solux Global Website",
    category: "Website Development",
    subtitle: "Medical Billing Company Website",
    description:
      "A conversion-focused business website for a medical billing company, built to present revenue cycle services, trust signals, and clear lead-generation pathways for healthcare providers.",
    client: "Solux Global",
    solution: "Healthcare services marketing website",
    result: "Clear service positioning, trust-led messaging, and stronger inquiry flow",
    techStack: ["Next.js", "Tailwind CSS", "shadcn/ui", "Node.js", "TypeScript"],
    features: ["Medical billing service pages", "Trust and authority sections", "Lead-focused CTA flow"],
    image: "/backgrounds/hero1.mp4",
    liveUrl: "https://soluxglobal.com/"
  },
  {
    id: "neural-rank-website",
    title: "Neural Rank Website",
    category: "Website Development",
    subtitle: "AI SEO Product Marketing Website",
    description:
      "A polished product website for an AI-powered SEO platform, designed to explain ranking workflows, showcase predictive insights, and turn product visitors into qualified leads.",
    client: "Neural Rank",
    solution: "AI product storytelling and conversion website",
    result: "Sharper product communication, stronger trust, and clearer conversion journeys",
    techStack: ["Next.js", "Tailwind CSS", "shadcn/ui", "Node.js", "TypeScript"],
    features: ["AI SEO product pages", "Feature and process storytelling", "Conversion-focused landing experience"],
    image: "/backgrounds/hero2.mp4",
    liveUrl: "https://neuralrank.co/",
    repoUrl: "https://github.com/muhammaaddomair/Neural-Rank-Website"
  },
  {
    id: "pharma-erp-system",
    title: "Pharmaceutical ERP System",
    category: "Data Systems",
    subtitle: "Ongoing Business Operations Platform",
    description:
      "An ongoing ERP platform for a pharmaceutical import, export, and manufacturing company, built to unify inventory, sales, purchasing, billing, production, and operational reporting in one system.",
    client: "Pharmaceutical Operations",
    solution: "End-to-end ERP workflow centralization",
    result: "Ongoing implementation focused on improving visibility, coordination, and operational efficiency",
    techStack: ["React", "Node.js", "TypeScript"],
    features: ["Inventory and stock movement management", "Sales billing and customer workflows", "Procurement and production tracking"],
    image: "/backgrounds/hero1.mp4",
    repoUrl: "https://github.com/muhammaaddomair/United-Agencies-karachi-Erp-App"
  },
  {
    id: "retinal-ai-screening-platform",
    title: "Retinal AI Screening Platform",
    category: "AI Automation",
    subtitle: "Diabetic Retinopathy Analysis System",
    description:
      "An AI-driven retinal image analysis platform for diabetic retinopathy screening, severity classification, biomarker extraction, and explainable visual interpretation through an interactive Streamlit interface.",
    client: "Research and Clinical AI Prototype",
    solution: "End-to-end intelligent retinal screening workflow",
    result: "Real-time prediction, Grad-CAM explainability, and biomarker analytics in one deployment-ready application",
    techStack: ["Streamlit", "PyTorch", "timm", "EfficientNet", "OpenCV", "scikit-image"],
    features: ["Multi-class severity classification", "Grad-CAM explainability", "Retinal biomarker extraction"],
    image: "/backgrounds/hero2.mp4",
    liveUrl: "https://blank-app-emv41mjm1k.streamlit.app/",
    repoUrl: "https://github.com/muhammaaddomair/diabetes-retinal-disease-detection"
  },
  {
    id: "yohanan-mateus-law-website",
    title: "Yohanan Mateus Law Website",
    category: "Website Development",
    subtitle: "Law Firm Website",
    description:
      "A professional law firm website built to present legal services, establish credibility, and guide potential clients toward direct consultation and contact.",
    client: "Yohanan Mateus Law",
    solution: "Professional legal services website",
    result: "Clearer digital presence, stronger trust, and better client inquiry flow",
    techStack: ["Next.js", "Tailwind CSS", "shadcn/ui", "Node.js", "TypeScript"],
    features: ["Attorney and service presentation", "Professional credibility sections", "Consultation-focused contact flow"],
    image: "/backgrounds/hero1.mp4",
    liveUrl: "https://yohananmateuslaw.com/",
    repoUrl: "https://github.com/muhammaaddomair/yohana-mateus-law"
  },
  {
    id: "zentro-solutions-website",
    title: "Zentro Solutions Website",
    category: "Website Development",
    subtitle: "Business Website",
    description:
      "A modern business website built to present services clearly, strengthen brand credibility, and guide visitors toward direct inquiries and conversion paths.",
    client: "Zentro Solutions",
    solution: "Business website with clear service positioning",
    result: "Stronger digital presence, clearer offer communication, and improved lead readiness",
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "TypeScript"],
    features: ["Service presentation", "Business credibility sections", "Lead-focused conversion flow"],
    image: "/backgrounds/hero2.mp4",
    liveUrl: "https://zentrosolutions.co/"
  }
];
