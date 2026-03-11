"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

function isRenderableImage(path: string) {
  return /\.(png|jpe?g|webp|avif|gif|svg)$/i.test(path);
}

export function ProjectsDashboard() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All Projects");
  const filteredProjects = useMemo(
    () => (activeCategory === "All Projects" ? projects : projects.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );
  const [activeProjectId, setActiveProjectId] = useState(projects[2].id);

  const activeProject =
    filteredProjects.find((project) => project.id === activeProjectId) ?? filteredProjects[0] ?? projects[0];

  useEffect(() => {
    if (activeProjectId !== activeProject.id) {
      setActiveProjectId(activeProject.id);
    }
  }, [activeProject.id, activeProjectId]);

  return (
    <section className="bg-black px-5 pb-24 pt-6">
      <Container>
        <div className="space-y-8 text-center md:space-y-10">
          <Reveal>
            <h2 className="pp-mono text-4xl font-normal uppercase tracking-[0.12em] text-white md:text-6xl">
              Explore Projects
            </h2>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-white">
              A look inside real systems, platforms, and infrastructure projects.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="mt-12">
          <div className="mx-auto h-[760px] max-w-[1400px] overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <div className="flex h-full min-h-0 flex-col overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 md:px-6 md:py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden h-9 items-center rounded-xl border border-slate-200 bg-slate-50 px-4 md:flex">
                    <span className="pp-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Projects Navigation
                    </span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[linear-gradient(135deg,#f0d6be,#8b6142)]" />
                </div>
              </div>

              <div className="flex h-full min-h-0 flex-col">
                <div className="border-b border-slate-200 bg-[#fbfbfd] px-4 py-3 md:px-6">
                  <div className="flex flex-wrap gap-4 md:gap-8">
                    {projectCategories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                          "border-b px-0 pb-2 text-[11px] transition-all duration-300 md:text-sm",
                          activeCategory === category
                            ? "border-[#b8962e] text-slate-900"
                            : "border-transparent text-slate-500 hover:text-slate-900"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                  <div className="grid min-h-full md:grid-cols-[0.72fr,1.45fr]">
                    <aside className="border-b border-r border-slate-200 bg-[#f8f9fc] md:border-b-0">
                      <div className="p-4 md:p-6">
                        <p className="mb-3 text-base font-semibold text-slate-900 md:mb-4 md:text-2xl">Projects</p>
                        <div className="space-y-1.5 md:space-y-2">
                          {filteredProjects.map((project) => {
                            const isActive = project.id === activeProject.id;

                            return (
                              <button
                                key={project.id}
                                type="button"
                                onClick={() => setActiveProjectId(project.id)}
                                className={cn(
                                  "w-full rounded-xl border px-3 py-2.5 text-left text-sm transition-all duration-300 md:px-4 md:py-3 md:text-base",
                                  isActive
                                    ? "border-slate-200 bg-white text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
                                    : "border-transparent bg-transparent text-slate-600 hover:border-slate-200 hover:bg-white/80"
                                )}
                              >
                                {project.title}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </aside>

                    <div className="bg-white p-4 md:p-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeProject.id}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="space-y-4 md:space-y-5"
                        >
                          <div className="border-b border-slate-200 pb-4">
                            <h3 className="text-2xl font-semibold text-slate-900 md:text-4xl">{activeProject.title}</h3>
                            <p className="mt-1 text-sm text-slate-500 md:text-lg">{activeProject.subtitle}</p>
                          </div>

                          <div className="grid gap-4 md:grid-cols-3">
                            <div>
                              <p className="pp-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 md:text-xs">
                                Client
                              </p>
                              <p className="mt-1 text-sm text-slate-700 md:text-base">{activeProject.client}</p>
                            </div>
                            <div className="md:border-l md:border-slate-200 md:pl-4">
                              <p className="pp-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 md:text-xs">
                                Solution
                              </p>
                              <p className="mt-1 text-sm text-slate-700 md:text-base">{activeProject.solution}</p>
                            </div>
                            <div className="md:border-l md:border-slate-200 md:pl-4">
                              <p className="pp-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 md:text-xs">
                                Result
                              </p>
                              <p className="mt-1 text-sm text-[#b8962e] md:text-base">{activeProject.result}</p>
                            </div>
                          </div>

                          <div className="overflow-hidden rounded-[1.3rem] border border-slate-200 bg-[#f8f9fc]">
                            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
                              <span className="text-sm font-medium text-slate-700">Project Preview</span>
                              <span className="pp-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                                Replace with your image
                              </span>
                            </div>
                            <div className="p-4">
                              {isRenderableImage(activeProject.image) ? (
                                <div className="overflow-hidden rounded-[1rem] border border-slate-200">
                                  <Image
                                    src={activeProject.image}
                                    alt={activeProject.title}
                                    width={1200}
                                    height={780}
                                    className="h-[260px] w-full object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="flex h-[260px] items-center justify-center rounded-[1rem] border border-dashed border-slate-300 bg-[linear-gradient(180deg,#ffffff_0%,#f3f6fb_100%)] p-6 text-center">
                                  <div className="space-y-3">
                                    <div className="mx-auto h-12 w-12 rounded-2xl bg-[#b8962e]/10" />
                                    <p className="text-base font-semibold text-slate-800">Import your project image</p>
                                    <p className="mx-auto max-w-md text-sm leading-6 text-slate-500">
                                      Replace the current `image` path in `data/projects.ts` with a real screenshot or
                                      product preview image.
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
                            <div className="rounded-[1.1rem] border border-slate-200 bg-[#fbfbfd] p-4">
                              <p className="text-base font-semibold text-slate-900">Project Overview</p>
                              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                                {activeProject.description}
                              </p>
                            </div>

                            <div className="rounded-[1.1rem] border border-slate-200 bg-[#fbfbfd] p-4">
                              <p className="text-base font-semibold text-slate-900">Technology Stack</p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {activeProject.techStack.map((item) => (
                                  <span
                                    key={item}
                                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="rounded-[1.1rem] border border-slate-200 bg-[#fbfbfd] p-4">
                            <p className="text-base font-semibold text-slate-900">Key Features</p>
                            <ul className="mt-4 grid gap-2 md:grid-cols-2">
                              {activeProject.features.map((feature) => (
                                <li key={feature} className="text-sm text-slate-600">
                                  {"\u2713"} {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
