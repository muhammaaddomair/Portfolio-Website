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
    <section className="bg-[var(--color-bg-soft)] px-5 pb-24 pt-6">
      <Container>
        <div className="space-y-8 text-center md:space-y-10">
          <Reveal>
            <h2 className="pp-mono text-4xl font-normal uppercase tracking-[0.12em] text-[var(--color-text)] md:text-6xl">
              Explore Projects
            </h2>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
              A look inside real systems, platforms, and infrastructure projects.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="mt-12">
          <div className="mx-auto h-[760px] max-w-[1400px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] shadow-[0_32px_100px_rgba(0,0,0,0.34)]">
            <div className="flex h-full min-h-0 flex-col overflow-hidden bg-[radial-gradient(circle_at_top,rgba(240,163,95,0.12),transparent_24%),linear-gradient(180deg,#0b0b0b_0%,#050505_100%)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3 backdrop-blur-xl md:px-6 md:py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden h-9 items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 md:flex">
                    <span className="pp-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
                      Projects Navigation
                    </span>
                  </div>
                  <div className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-[linear-gradient(135deg,#f3d4a8,#9d693d)] text-[10px] font-semibold text-[#22160f] shadow-[0_10px_30px_rgba(240,163,95,0.18)]">
                    MO
                  </div>
                </div>
              </div>

              <div className="flex h-full min-h-0 flex-col">
                <div className="border-b border-white/10 bg-[rgba(255,255,255,0.02)] px-4 py-3 md:px-6">
                  <div className="flex flex-wrap gap-4 md:gap-8">
                    {projectCategories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                          "border-b px-0 pb-2 text-[11px] transition-all duration-300 md:text-sm",
                          activeCategory === category
                            ? "border-[#f0a35f] text-white"
                            : "border-transparent text-white/48 hover:text-white/82"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                  <div className="grid min-h-full md:grid-cols-[0.72fr,1.45fr]">
                    <aside className="border-b border-r border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] md:border-b-0">
                      <div className="p-4 md:p-6">
                        <div className="mb-5 flex items-end justify-between gap-4">
                          <div>
                            <p className="pp-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Portfolio Index</p>
                            <p className="mt-2 text-base font-semibold text-white md:text-2xl">Projects</p>
                          </div>
                          <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#f0a35f]">
                            {filteredProjects.length} Active
                          </div>
                        </div>
                        <div className="space-y-1.5 md:space-y-2">
                          {filteredProjects.map((project) => {
                            const isActive = project.id === activeProject.id;

                            return (
                              <button
                                key={project.id}
                                type="button"
                                onClick={() => setActiveProjectId(project.id)}
                                className={cn(
                                  "w-full rounded-[1.1rem] border px-3 py-3 text-left text-sm transition-all duration-300 md:px-4 md:py-3.5 md:text-base",
                                  isActive
                                    ? "border-[#f0a35f]/35 bg-[linear-gradient(135deg,rgba(240,163,95,0.16),rgba(255,255,255,0.06))] text-white shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                                    : "border-transparent bg-transparent text-white/60 hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                                )}
                              >
                                <span className="block font-medium">{project.title}</span>
                                <span className="mt-1 block text-xs text-inherit/70">{project.category}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </aside>

                    <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-4 md:p-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeProject.id}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="space-y-4 md:space-y-5"
                        >
                          <div className="border-b border-white/10 pb-4">
                            <div className="flex flex-wrap items-start justify-between gap-4">
                              <div>
                                <p className="pp-mono text-[10px] uppercase tracking-[0.22em] text-[#f0a35f]">Featured Build</p>
                                <h3 className="mt-3 text-2xl font-semibold text-white md:text-4xl">{activeProject.title}</h3>
                                <p className="mt-2 text-sm text-white/58 md:text-lg">{activeProject.subtitle}</p>
                              </div>
                              <div className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-right">
                                <p className="pp-mono text-[10px] uppercase tracking-[0.18em] text-white/45">Outcome</p>
                                <p className="mt-2 text-sm font-medium text-[#f3d4a8] md:text-base">{activeProject.result}</p>
                              </div>
                            </div>
                          </div>

                          <div className="grid gap-4 md:grid-cols-3">
                            <div>
                              <p className="pp-mono text-[10px] uppercase tracking-[0.18em] text-white/40 md:text-xs">
                                Client
                              </p>
                              <p className="mt-1 text-sm text-white/82 md:text-base">{activeProject.client}</p>
                            </div>
                            <div className="md:border-l md:border-white/10 md:pl-4">
                              <p className="pp-mono text-[10px] uppercase tracking-[0.18em] text-white/40 md:text-xs">
                                Solution
                              </p>
                              <p className="mt-1 text-sm text-white/82 md:text-base">{activeProject.solution}</p>
                            </div>
                            <div className="md:border-l md:border-white/10 md:pl-4">
                              <p className="pp-mono text-[10px] uppercase tracking-[0.18em] text-white/40 md:text-xs">
                                Result
                              </p>
                              <p className="mt-1 text-sm text-[#f0a35f] md:text-base">{activeProject.result}</p>
                            </div>
                          </div>

                          <div className="overflow-hidden rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                            <div className="flex items-center justify-between border-b border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3">
                              <span className="text-sm font-medium text-white/78">Project Preview</span>
                              <span className="pp-mono text-[10px] uppercase tracking-[0.18em] text-white/38">
                                Replace with your image
                              </span>
                            </div>
                            <div className="p-4">
                              {isRenderableImage(activeProject.image) ? (
                                <div className="overflow-hidden rounded-[1rem] border border-white/10 bg-black">
                                  <Image
                                    src={activeProject.image}
                                    alt={activeProject.title}
                                    width={1200}
                                    height={780}
                                    className="h-[260px] w-full object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="flex h-[260px] items-center justify-center rounded-[1rem] border border-dashed border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] p-6 text-center">
                                  <div className="space-y-3">
                                    <div className="mx-auto h-12 w-12 rounded-2xl bg-[#f0a35f]/12 shadow-[0_0_30px_rgba(240,163,95,0.14)]" />
                                    <p className="text-base font-semibold text-white">Import your project image</p>
                                    <p className="mx-auto max-w-md text-sm leading-6 text-white/52">
                                      Replace the current `image` path in `data/projects.ts` with a real screenshot or
                                      product preview image.
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
                            <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                              <p className="text-base font-semibold text-white">Project Overview</p>
                              <p className="mt-3 text-sm leading-7 text-white/62 md:text-base">
                                {activeProject.description}
                              </p>
                            </div>

                            <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                              <p className="text-base font-semibold text-white">Technology Stack</p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {activeProject.techStack.map((item) => (
                                  <span
                                    key={item}
                                    className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.04)] px-3 py-2 text-xs text-white/75"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                            <p className="text-base font-semibold text-white">Key Features</p>
                            <ul className="mt-4 grid gap-2 md:grid-cols-2">
                              {activeProject.features.map((feature) => (
                                <li key={feature} className="rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2 text-sm text-white/68">
                                  <span className="mr-2 text-[#f0a35f]">{"\u2713"}</span>
                                  {feature}
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
