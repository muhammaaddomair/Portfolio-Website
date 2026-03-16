"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const techLogos = [
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Framer", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
];

const marqueeLogos = [...techLogos, ...techLogos];

type ServiceTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  icon: "screen" | "cms" | "desktop" | "backend" | "automation";
};

const serviceTabs: ServiceTab[] = [
  {
    id: "saas",
    label: "SaaS Platforms",
    title: "Web Platforms & SaaS Applications",
    description:
      "Custom web platforms, dashboards, SaaS systems, and scalable digital products designed for serious growth environments.",
    details: ["Product architecture", "User dashboards", "Billing-ready flows"],
    image: "/images/imac-png.png",
    icon: "screen"
  },
  {
    id: "cms",
    label: "CMS Systems",
    title: "CMS & Business Systems",
    description:
      "Custom CMS systems and internal operational tools tailored to structured workflows, content governance, and team execution.",
    details: ["Admin systems", "Operational tooling", "Content workflows"],
    image: "/images/imac-png.png",
    icon: "cms"
  },
  {
    id: "desktop",
    label: "Desktop Apps",
    title: "Desktop & Executable Applications",
    description:
      "Cross-platform desktop software and executable applications engineered for real operations, internal tooling, and controlled environments.",
    details: ["Windows executables", "Cross-platform tools", "Workflow software"],
    image: "/images/imac-png.png",
    icon: "desktop"
  },
  {
    id: "backend",
    label: "Infrastructure",
    title: "Backend & Infrastructure Systems",
    description:
      "API architecture, database systems, cloud deployment, and scalable backend infrastructure built for reliability and long-term maintenance.",
    details: ["APIs and services", "Database architecture", "Deployment systems"],
    image: "/images/imac-png.png",
    icon: "backend"
  },
  {
    id: "automation",
    label: "AI Automation",
    title: "AI & Automation Systems",
    description:
      "Automation pipelines, AI-powered tools, workflow engines, and intelligent integrations that remove friction and create leverage.",
    details: ["Workflow engines", "Automation pipelines", "AI integrations"],
    image: "/images/imac-png.png",
    icon: "automation"
  }
];

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const }
  }
};

function ServiceIcon({ kind }: { kind: ServiceTab["icon"] }) {
  if (kind === "screen") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="5" width="17" height="11.5" rx="2.5" />
        <path d="M7.5 9h9" />
        <path d="M8.5 19h7" />
        <path d="M12 16.5V19" />
      </svg>
    );
  }

  if (kind === "cms") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 8.5h8" />
        <path d="M8 12h8" />
        <path d="M8 15.5h5" />
        <path d="M6.8 8.5h.1" />
      </svg>
    );
  }

  if (kind === "desktop") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4.5" width="16" height="10.5" rx="2.2" />
        <path d="M9.5 19h5" />
        <path d="M12 15.5V19" />
        <path d="M7.5 8.5h9" />
      </svg>
    );
  }

  if (kind === "backend") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6.5" rx="6.5" ry="2.7" />
        <path d="M5.5 6.5v5c0 1.5 2.9 2.7 6.5 2.7s6.5-1.2 6.5-2.7v-5" />
        <path d="M5.5 11.5v5c0 1.5 2.9 2.7 6.5 2.7s6.5-1.2 6.5-2.7v-5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3.8" />
      <path d="M12 2.8v3.4" />
      <path d="M12 17.8v3.4" />
      <path d="m4.9 7 3 1.7" />
      <path d="m16.1 15.3 3 1.7" />
      <path d="m4.9 17 3-1.7" />
      <path d="m16.1 8.7 3-1.7" />
    </svg>
  );
}

export function ServicesSkillsSection() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].id);
  const currentTab = serviceTabs.find((tab) => tab.id === activeTab) || serviceTabs[0];

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            className="bg-white"
          >
          <div className="px-6 py-10 md:px-10 md:py-12">
            <div className="flex flex-col items-center gap-8 text-center">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] text-[#666666] shadow-[0_12px_30px_rgba(17,17,17,0.05)]">
                  <span className="grid h-5 w-5 place-items-center rounded-full text-[#111111]">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m8 14 8-8" />
                      <path d="M10 6h6v6" />
                      <path d="M6 10v8h8" />
                    </svg>
                  </span>
                  Services & Capabilities
                </div>
                <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-[#111111] md:text-7xl">Our Services.</h2>
                <p className="mx-auto mt-6 max-w-3xl text-sm uppercase leading-7 tracking-[0.08em] text-[#666666] md:text-base">
                  Systems I design and build across SaaS platforms, CMS systems, desktop software, automation tools,
                  and backend infrastructure.
                </p>
              </div>

              <Button href="/contact" size="lg" className="gap-3 px-7 py-4 text-base normal-case tracking-normal">
                Explore More
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h12" />
                  <path d="m13 7 5 5-5 5" />
                </svg>
              </Button>
            </div>
          </div>

          <div className="px-6 py-5 md:px-10">
            <div className="flex flex-wrap justify-center gap-2.5">
              {serviceTabs.map((tab) => {
                const isActive = tab.id === activeTab;

                return (
                  <Button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    active={isActive}
                    size="sm"
                    className={cn("gap-2 px-3.5 py-2.5 normal-case tracking-normal", !isActive && "bg-[#f2ece4]")}
                  >
                    <div
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                        isActive
                          ? "bg-white text-[#FE5A37]"
                          : "bg-transparent text-[#6f655c]"
                      )}
                    >
                      <ServiceIcon kind={tab.icon} />
                    </div>
                    <span className="truncate text-sm font-semibold tracking-[-0.02em] md:text-[15px]">{tab.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid gap-8 rounded-[1.6rem] p-8 shadow-[0_20px_60px_rgba(17,17,17,0.05)] md:grid-cols-[1.15fr,0.85fr] md:p-10"
            >
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full text-[#111111]">
                    <ServiceIcon kind={currentTab.icon} />
                  </div>
                  <h3 className="mt-10 text-4xl font-semibold tracking-[-0.05em] text-[#111111] md:text-6xl">{currentTab.title}</h3>
                  <p className="mt-6 max-w-2xl text-base uppercase leading-8 tracking-[0.06em] text-[#666666]">
                    {currentTab.description}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {currentTab.details.map((item) => (
                    <span key={item} className="rounded-full px-4 py-2 text-sm text-[#47413b] shadow-[0_10px_24px_rgba(17,17,17,0.05)]">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10">
                  <Button href="/contact" className="gap-3 px-6 py-3 normal-case tracking-normal">
                    Let&apos;s Chat
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
                      <path d="M7 8.5h10" />
                      <path d="M7 12h6.5" />
                      <path d="M7 15.5h4" />
                      <path d="M5 5h14v10a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                    </svg>
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center md:pl-8">
                <div className="relative w-full max-w-[320px] overflow-hidden rounded-[1.6rem] p-3 shadow-[0_22px_44px_rgba(17,17,17,0.08)]">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_24%,transparent_76%,rgba(255,255,255,0.1))]" />
                  <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(90deg,transparent_0%,transparent_32%,rgba(255,255,255,0.45)_32.8%,rgba(255,255,255,0.45)_33.5%,transparent_34.2%,transparent_65.8%,rgba(255,255,255,0.45)_66.5%,rgba(255,255,255,0.45)_67.2%,transparent_68%)]" />
                  <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(180deg,transparent_0%,transparent_21%,rgba(255,255,255,0.45)_21.8%,rgba(255,255,255,0.45)_22.5%,transparent_23.2%,transparent_49%,rgba(255,255,255,0.45)_49.8%,rgba(255,255,255,0.45)_50.5%,transparent_51.2%,transparent_77%,rgba(255,255,255,0.45)_77.8%,rgba(255,255,255,0.45)_78.5%,transparent_79.2%)]" />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                    <Image
                      src={currentTab.image}
                      alt={currentTab.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, 300px"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_28%,transparent_68%,rgba(0,0,0,0.04))]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mt-8 w-full overflow-hidden py-6"
      >
        <div className="mb-5 px-5 text-center md:px-6">
          <p className="pp-mono text-[11px] uppercase tracking-[0.28em] text-[#8b8175]">Technologies I Work With</p>
        </div>

        <div className="logo-marquee">
          <div className="logo-marquee-track">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex min-w-[180px] items-center justify-center rounded-2xl bg-white px-6 py-5 shadow-[0_8px_24px_rgba(17,17,17,0.04)]"
              >
                <img
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                  width="40"
                  height="40"
                  className="h-10 w-10"
                />
                <span className="ml-3 text-sm font-medium text-[#252525]">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
