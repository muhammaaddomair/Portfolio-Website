"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

const experienceItems = [
  {
    role: "Senior Full Stack & Automation Engineer",
    company: "PrimeHive Digital",
    period: "July 2024 - Present",
    points: [
      "Designed and shipped full-stack web applications across frontend, backend, and operational workflows.",
      "Built automation services and internal tooling that improved business process efficiency.",
      "Developed REST APIs and scalable backend integrations for production systems.",
      "Worked closely with stakeholders to convert business needs into durable technical architecture.",
      "Improved deployment reliability, application performance, and production readiness."
    ]
  },
  {
    role: "AI / LLM Engineer",
    company: "Codup",
    period: "February 2024 - August 2024",
    points: [
      "Worked on LLM-enabled systems with a focus on prompt design, orchestration, and applied AI delivery.",
      "Implemented LangChain pipelines for structured multi-step AI workflows.",
      "Designed RAG systems using vector retrieval and context-aware generation.",
      "Integrated AI features into backend products and service layers through APIs.",
      "Optimized AI-assisted product flows for practical real-world usage."
    ]
  }
];

const skillGroups = [
  {
    title: "Full Stack",
    items: "React, Next.js, Node.js, Express.js, MongoDB, REST APIs"
  },
  {
    title: "AI & LLM",
    items: "LangChain, RAG, Vector Databases, LLaMA, Prompt Engineering"
  },
  {
    title: "Automation",
    items: "Backend Automation, Workflow Design, API Integration"
  },
  {
    title: "Web & CMS",
    items: "WordPress, Elementor, Performance Optimization"
  },
  {
    title: "Tools",
    items: "Git, GitHub, Postman, Deployment Platforms"
  },
  {
    title: "Core Strengths",
    items: "Clean Architecture, Scalable Systems, Product Thinking"
  }
];

export default function CVPage() {
  const retinalProject = projects.find((project) => project.id === "retinal-ai-screening-platform");
  const clientWebsiteProjects = projects.filter((project) => project.category === "Website Development");
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
          <h1 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl md:text-5xl">{siteConfig.name}</h1>
          <p className="mt-3 text-base text-gray-400 sm:text-lg">{siteConfig.title}</p>
          <p className="mt-3 text-sm leading-6 text-gray-500 sm:leading-7">
            DHA Phase 2, Karachi • {siteConfig.phone} • {siteConfig.email}
          </p>
        </section>

        <div className="mt-10 grid gap-10 md:mt-12 md:gap-12 lg:mt-14 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="border-b border-white/10 pb-2 text-2xl font-semibold">Summary</h2>
              <p className="leading-7 text-gray-300">
                Full Stack and AI Engineer with hands-on experience building scalable web applications, intelligent
                automation systems, and LLM-enabled products across agency, freelance, and internal delivery
                environments.
              </p>
              <p className="leading-7 text-gray-300">
                My work spans frontend platforms, backend services, AI pipelines, and operational software with a focus
                on clean architecture, performance, and business usefulness.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="border-b border-white/10 pb-2 text-2xl font-semibold">Work Experience</h2>
              <div className="space-y-8">
                {experienceItems.map((item) => (
                  <div key={`${item.company}-${item.role}`}>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      <p className="text-sm text-[#FE5A37]">
                        {item.company} • {item.period}
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

            <section className="space-y-5">
              <h2 className="border-b border-white/10 pb-2 text-2xl font-semibold">Education</h2>
              <div>
                <h3 className="text-lg font-semibold">Bachelor of Science in Artificial Intelligence</h3>
                <p className="mt-1 text-sm text-gray-400">Graduated: April 2023</p>
              </div>
            </section>
          </div>

          <div className="space-y-12">
            <section className="space-y-5">
              <h2 className="border-b border-white/10 pb-2 text-2xl font-semibold">Projects</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold">Retinal Disease Detection System</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {retinalProject?.subtitle}
                    {retinalProject?.liveUrl ? (
                      <>
                        {" "}•{" "}
                        <Link
                          href={retinalProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#FE5A37] underline underline-offset-4"
                        >
                          Live Link
                        </Link>
                      </>
                    ) : null}
                  </p>
                  <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                    <li>Built an AI retinal image analysis workflow for diabetic retinopathy screening.</li>
                    <li>Implemented real-time severity classification with explainable Grad-CAM outputs.</li>
                    <li>Added biomarker extraction and visual interpretation inside one interactive application.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">AI Recipe & Nutrition Generator</h3>
                  <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                    <li>Built a recipe and nutrition generation workflow driven by intelligent retrieval and AI prompting.</li>
                    <li>Implemented semantic search and context-aware generation for ingredient-based responses.</li>
                    <li>Designed the system for practical user-facing recommendations and scalable feature growth.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Client Websites & Business Platforms</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {clientWebsiteProjects.map((project, index) => {
                      let hostname = project.liveUrl ?? "";

                      try {
                        hostname = project.liveUrl ? new URL(project.liveUrl).hostname.replace(/^www\./, "") : "";
                      } catch {
                        hostname = project.liveUrl ?? "";
                      }

                      return project.liveUrl ? (
                        <span key={project.id}>
                          {index > 0 ? " | " : null}
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#FE5A37] underline underline-offset-4"
                          >
                            {hostname}
                          </Link>
                        </span>
                      ) : null;
                    })}
                    {" | "}
                    <Link
                      href="https://impactvanguard.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#FE5A37] underline underline-offset-4"
                    >
                      impactvanguard.com
                    </Link>
                    {" | "}
                    <Link
                      href="https://safztech.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#FE5A37] underline underline-offset-4"
                    >
                      safztech.com
                    </Link>
                  </p>
                  <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                    <li>Developed business and product websites using modern frontend architecture and strong UX framing.</li>
                    <li>Built sites for medical billing, legal services, AI products, and brand positioning.</li>
                    <li>Focused on responsiveness, conversion pathways, clarity of messaging, and performance.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="border-b border-white/10 pb-2 text-2xl font-semibold">Skills</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-base font-semibold text-white">{group.title}</h3>
                    <p className="mt-2 leading-7 text-gray-300">{group.items}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
