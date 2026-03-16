"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const livePreviewLinks: Record<string, string> = {
  "axemail-platform": "https://example.com/axemail-platform",
  "ai-workflow-engine": "https://example.com/ai-workflow-engine",
  "analytics-dashboard": "https://example.com/analytics-dashboard",
  "saas-billing-system": "https://example.com/saas-billing-system",
  "infrastructure-monitoring": "https://example.com/infrastructure-monitoring"
};

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

  const previewHref = livePreviewLinks[activeProject.id] ?? "#";

  return (
    <section className="bg-white px-5 pb-24 pt-6">
      <Container>
        <div className="space-y-8 text-center md:space-y-10">
          <Reveal>
            <h2 className="pp-mono text-4xl font-black  uppercase  text-black md:text-6xl">
              Explore Projects
            </h2>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-black">
              A refined project dashboard built as a premium dark showcase for selected product and systems work.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="mt-12">
          <div className="relative isolate z-10 mx-auto h-[820px] max-w-[1400px] overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.08)] bg-[#050505] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
            <div className="flex h-full min-h-0 flex-col overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_22%),linear-gradient(180deg,#0b0b0b_0%,#050505_100%)]">
              <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-3 backdrop-blur-xl md:px-6 md:py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="hidden items-center gap-3 md:flex">
                  <span className="pp-mono rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[#d1d5db]">
                    Premium Project Dashboard
                  </span>
                </div>
              </div>

              <div className="border-b border-[rgba(255,255,255,0.08)] px-4 py-4 md:px-6">
                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                  {projectCategories.map((category) => (
                    <Button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      active={activeCategory === category}
                      size="sm"
                      className="pointer-events-auto relative z-20 px-4 py-2 text-xs font-medium normal-case tracking-normal md:text-sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid min-h-0 flex-1 md:grid-cols-[285px,minmax(0,1fr)]">
                <aside className="min-h-0 border-b border-r border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.025)] md:border-b-0">
                  <div className="flex h-full min-h-0 flex-col p-3 md:p-4">
                    <div className="min-h-0 flex-1 space-y-2.5 overflow-y-auto pr-1 [scrollbar-color:#FE5A37_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#FE5A37] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-[6px]">
                      {filteredProjects.map((project) => {
                        const isActive = project.id === activeProject.id;

                        return (
                          <Button
                            key={project.id}
                            onClick={() => setActiveProjectId(project.id)}
                            active={isActive}
                            fullWidth
                            className={cn(
                              "pointer-events-auto relative z-20 rounded-[1.1rem] p-0 text-left normal-case tracking-normal",
                              !isActive && "bg-[#f2ece4]"
                            )}
                          >
                            <div className="w-full rounded-[calc(1.1rem-1px)] px-3.5 py-3">
                              <p className="text-[17px] font-semibold leading-[1.2] text-[#111111]">{project.title}</p>
                            </div>
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </aside>

                <div className="relative z-10 min-h-0 overflow-y-auto p-4 md:p-6 [scrollbar-color:#FE5A37_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#FE5A37] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-[6px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.id}
                      initial={false}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="space-y-6"
                    >
                      <motion.div
                        whileHover={{ y: -4, scale: 1.005 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="rounded-[1.7rem] bg-[linear-gradient(135deg,rgba(254,90,55,0.82),rgba(254,90,55,0.44),rgba(255,255,255,0.08))] p-[1px] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
                      >
                        <div className="rounded-[calc(1.7rem-1px)] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-4 backdrop-blur-2xl">
                          <div className="group relative overflow-hidden rounded-[1.3rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]">
                            {isRenderableImage(activeProject.image) ? (
                              <Image
                                src={activeProject.image}
                                alt={activeProject.title}
                                width={1400}
                                height={900}
                                className="h-[320px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] md:h-[500px]"
                              />
                            ) : (
                              <div className="flex h-[320px] items-end bg-[radial-gradient(circle_at_top_left,rgba(254,90,55,0.2),transparent_26%),linear-gradient(135deg,#16100f_0%,#050505_100%)] p-6 md:h-[500px] md:p-8">
                                <div className="max-w-xl space-y-4">
                                  <span className="pp-mono inline-flex rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[#d1d5db]">
                                    Project Screenshot
                                  </span>
                                  <div>
                                    <p className="text-3xl font-semibold text-white md:text-5xl">{activeProject.title}</p>
                                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#d1d5db] md:text-base">
                                      Replace the current asset in `data/projects.ts` with a real project screenshot to
                                      complete this showcase.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>

                      <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_18px_40px_rgba(10,15,31,0.28)] backdrop-blur-xl">
                        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                          <div className="max-w-2xl">
                            <h3 className="text-3xl font-semibold text-white md:text-4xl">{activeProject.title}</h3>
                            <p className="mt-3 text-base leading-7 text-[#d1d5db]">{activeProject.description}</p>
                          </div>

                          <Button href={previewHref} target="_blank" rel="noreferrer" className="pointer-events-auto relative z-20 px-6 py-3 normal-case tracking-normal">
                            View Project
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
