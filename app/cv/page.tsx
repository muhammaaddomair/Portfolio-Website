"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";

const coreExpertise = [
  {
    title: "Systems & Backend Engineering",
    items: "Node.js, REST APIs, scalable architecture, server-side systems"
  },
  {
    title: "Frontend & Product Development",
    items: "React, Next.js, TypeScript"
  },
  {
    title: "Infrastructure & Delivery",
    items: "Linux servers, VPS deployment, PM2, SMTP systems, Postfix"
  },
  {
    title: "AI Systems (Applied)",
    items: "RAG pipelines, LangChain workflows, LLM integrations"
  },
  {
    title: "Automation & Workflows",
    items: "Business process automation, API integrations, internal tools"
  }
];

const experienceItems = [
  {
    role: "Senior Full Stack & Automation Engineer",
    company: "PrimeHive Digital",
    period: "July 2024 - Present",
    points: [
      "Designed and deployed full-stack systems across frontend, backend, and operational workflows",
      "Built internal automation tools improving business efficiency and reducing manual processes",
      "Developed scalable REST APIs and backend services for production use",
      "Translated business requirements into system architecture and technical execution",
      "Improved deployment stability, performance, and system reliability"
    ]
  },
  {
    role: "AI / LLM Engineer",
    company: "Codup",
    period: "February 2024 - August 2024",
    points: [
      "Built LLM-powered systems using structured prompt workflows and orchestration",
      "Developed RAG pipelines with vector retrieval and context-aware generation",
      "Integrated AI capabilities into backend services via APIs",
      "Optimized AI workflows for practical product usage and performance"
    ]
  }
];

const selectedProjects = [
  {
    title: "Axemail - Bulk Email Infrastructure System",
    summary: "Self-hosted high-volume email delivery system running on VPS architecture",
    points: [
      "Designed system capable of sending large-scale outbound email campaigns",
      "Implemented Postfix-based delivery with full operational control",
      "Built API layer for managing sending workflows and system control"
    ]
  },
  {
    title: "Pharmaceutical ERP System",
    summary: "End-to-end ERP platform for business operations",
    points: [
      "Centralized inventory, sales, procurement, and production workflows",
      "Built scalable backend architecture for operational visibility",
      "Designed system to improve coordination and business efficiency"
    ]
  },
  {
    title: "Business Automation Suite (Payroll & Billing Systems)",
    summary: "Desktop-based operational tools for small businesses",
    points: [
      "Automated invoice and payslip PDF generation",
      "Implemented local data storage using SQLite",
      "Integrated SMTP-based email delivery for documents",
      "Used in real business environments for daily operations"
    ]
  },
  {
    title: "Lead Management & Outreach System (SaaS Architecture)",
    summary: "Product-style lead management and campaign tracking platform",
    points: [
      "Built CMS dashboard for managing leads and campaigns",
      "Implemented bulk sending workflow and real-time tracking system",
      "Designed scalable architecture for outreach automation"
    ]
  }
];

const strengths = [
  "System architecture and backend design",
  "Building software for real business workflows",
  "Automation and operational efficiency",
  "Product-focused engineering mindset"
];

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-black px-4 py-10 text-white sm:px-6 sm:py-12 md:px-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <section>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:justify-end">
            <Link
              href="/"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white transition-colors hover:border-[#FE5A37] hover:text-[#FE5A37]"
            >
              Back to Website
            </Link>
            <button
              type="button"
              onClick={handlePrint}
              className="rounded-full bg-[#f2ece4] px-5 py-2.5 text-sm text-[#111111] transition-colors hover:bg-[#FE5A37] hover:text-white"
            >
              Download PDF
            </button>
          </div>
        </section>

        <section className="text-center">
          <h1 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl md:text-5xl">Muhammad Omair</h1>
          <p className="mt-3 text-base text-gray-400 sm:text-lg">
            Backend Systems Engineer - Automation Architect - SaaS Builder
          </p>
          <p className="mt-3 text-sm leading-6 text-gray-500 sm:leading-7">
            Karachi, Pakistan - {siteConfig.phone} -{" "}
            <Link href={`mailto:${siteConfig.email}`} className="text-[#FE5A37] underline underline-offset-4">
              {siteConfig.email}
            </Link>
          </p>
        </section>

        <div className="mt-10 grid gap-10 md:mt-12 md:gap-12 lg:mt-14 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="border-b border-white/10 pb-2 text-2xl font-semibold">Summary</h2>
              <p className="leading-7 text-gray-300">
                Backend-focused systems engineer specializing in building scalable business software, automation
                platforms, and SaaS-style applications.
              </p>
              <p className="leading-7 text-gray-300">
                Experienced in designing and deploying production systems including ERP platforms, bulk email
                infrastructure, and operational tools used by real businesses. Strong focus on system architecture,
                performance, and solving practical business problems through software.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="border-b border-white/10 pb-2 text-2xl font-semibold">Core Expertise</h2>
              <div className="grid gap-5">
                {coreExpertise.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-base font-semibold text-white">{group.title}</h3>
                    <p className="mt-2 leading-7 text-gray-300">{group.items}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="border-b border-white/10 pb-2 text-2xl font-semibold">Work Experience</h2>
              <div className="space-y-8">
                {experienceItems.map((item) => (
                  <div key={`${item.company}-${item.role}`}>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      <p className="text-sm text-[#FE5A37]">
                        {item.company} - {item.period}
                      </p>
                    </div>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-12">
            <section className="space-y-5">
              <h2 className="border-b border-white/10 pb-2 text-2xl font-semibold">Selected Projects</h2>
              <div className="space-y-8">
                {selectedProjects.map((project) => (
                  <div key={project.title}>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{project.summary}</p>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="border-b border-white/10 pb-2 text-2xl font-semibold">Education</h2>
              <div>
                <h3 className="text-lg font-semibold">Bachelor of Science in Artificial Intelligence</h3>
                <p className="mt-1 text-sm text-gray-400">Iqra University</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="border-b border-white/10 pb-2 text-2xl font-semibold">Additional Work</h2>
              <p className="leading-7 text-gray-300">
                Developed multiple business and product websites across industries including medical, legal, and AI
                platforms, focusing on performance, UX, and conversion optimization.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="border-b border-white/10 pb-2 text-2xl font-semibold">Strengths</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {strengths.map((strength) => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
