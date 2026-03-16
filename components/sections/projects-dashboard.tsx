"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const techLogos: Record<string, string> = {
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Postfix": "https://cdn.simpleicons.org/maildotru/168DE2",
  "REST API": "https://cdn.simpleicons.org/fastapi/009688",
  "Contabo": "https://cdn.simpleicons.org/contabo/1c4ed8",
  "PM2": "https://cdn.simpleicons.org/pm2/2b037a",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Tkinter": "https://cdn.simpleicons.org/python/3776AB",
  "SQLite3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  "Electron": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "shadcn/ui": "https://cdn.simpleicons.org/shadcnui/ffffff",
  "Streamlit": "https://cdn.simpleicons.org/streamlit/FF4B4B",
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "timm": "https://cdn.simpleicons.org/python/3776AB",
  "EfficientNet": "https://cdn.simpleicons.org/tensorflow/FF6F00",
  "OpenCV": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  "scikit-image": "https://cdn.simpleicons.org/scikitlearn/F7931E"
};

export function ProjectsDashboard() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All Projects");
  const filteredProjects = useMemo(
    () => (activeCategory === "All Projects" ? projects : projects.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  const activeProject =
    filteredProjects.find((project) => project.id === activeProjectId) ?? filteredProjects[0] ?? projects[0];

  useEffect(() => {
    if (activeProjectId !== activeProject.id) {
      setActiveProjectId(activeProject.id);
    }
  }, [activeProject.id, activeProjectId]);

  const previewHref = activeProject.liveUrl;
  const repoHref = activeProject.repoUrl ?? "#";

  return (
    <section className="bg-white px-5 pb-24 pt-14">
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
          <div className="relative isolate z-10 mx-auto h-[740px] max-w-[1400px] overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.08)] bg-[#050505] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
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

              <div className="grid min-h-0 flex-1 md:grid-cols-[340px,minmax(0,1fr)]">
                <aside className="min-h-0 border-b border-r border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.025)] md:border-b-0">
                  <div className="flex h-full min-h-0 flex-col p-5 md:p-6">
                    <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pr-2 [scrollbar-color:#FE5A37_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#FE5A37] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-[6px]">
                      {filteredProjects.map((project) => {
                        const isActive = project.id === activeProject.id;

                        return (
                          <Button
                            key={project.id}
                            onClick={() => setActiveProjectId(project.id)}
                            active={isActive}
                            fullWidth
                            className={cn(
                              "pointer-events-auto relative z-20 rounded-[0.95rem] border p-0 text-left normal-case tracking-normal",
                              isActive
                                ? "border-[#FE5A37] bg-transparent"
                                : "border-[rgba(255,255,255,0.12)] bg-transparent hover:border-[rgba(254,90,55,0.55)]"
                            )}
                          >
                            <div className="w-full rounded-[calc(0.95rem-1px)] px-1.5 py-2">
                              <p className={cn("whitespace-nowrap text-[18px] font-semibold leading-none", isActive ? "text-white" : "text-[#f3eee6]")}>
                                {project.title}
                              </p>
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
                      <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_18px_40px_rgba(10,15,31,0.28)] backdrop-blur-xl">
                        <div className="flex flex-col gap-5">
                          <div className="max-w-2xl">
                            <h3 className="text-3xl font-semibold text-white md:text-4xl">{activeProject.title}</h3>
                            <p className="mt-3 text-base leading-7 text-[#d1d5db]">{activeProject.description}</p>
                          </div>

                          <div className="space-y-4">
                            <p className="pp-mono text-[10px] uppercase tracking-[0.24em] text-[#d1d5db]/65">Technology Stack</p>
                            <div className="flex flex-wrap gap-3">
                              {activeProject.techStack.map((tech) => (
                                <div
                                  key={tech}
                                  className="inline-flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-2.5"
                                >
                                  {techLogos[tech] ? (
                                    <img
                                      src={techLogos[tech]}
                                      alt={`${tech} logo`}
                                      loading="lazy"
                                      width="18"
                                      height="18"
                                      className="h-[18px] w-[18px]"
                                    />
                                  ) : (
                                    <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-white/10 text-[9px] font-bold text-white">
                                      {tech.slice(0, 1)}
                                    </span>
                                  )}
                                  <span className="text-sm font-medium text-white">{tech}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-3">
                            {previewHref ? (
                              <Button
                                href={previewHref}
                                target="_blank"
                                rel="noreferrer"
                                className="pointer-events-auto relative z-20 px-6 py-3 normal-case tracking-normal"
                              >
                                Live Project
                              </Button>
                            ) : null}
                            <Button
                              href={repoHref}
                              target="_blank"
                              rel="noreferrer"
                              className="pointer-events-auto relative z-20 px-6 py-3 normal-case tracking-normal"
                            >
                              GitHub Repo
                            </Button>
                          </div>
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="grid gap-4 md:grid-cols-[0.9fr,1.1fr]"
                      >
                        <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.025)] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
                          <p className="pp-mono text-[10px] uppercase tracking-[0.24em] text-[#d1d5db]/65">Deployment Snapshot</p>
                          <div className="mt-5 space-y-4">
                            <div className="rounded-[1.1rem] bg-[rgba(255,255,255,0.03)] p-4">
                              <p className="text-[11px] uppercase tracking-[0.2em] text-[#d1d5db]/55">Client</p>
                              <p className="mt-2 text-lg font-semibold text-white">{activeProject.client}</p>
                            </div>
                            <div className="rounded-[1.1rem] bg-[rgba(255,255,255,0.03)] p-4">
                              <p className="text-[11px] uppercase tracking-[0.2em] text-[#d1d5db]/55">Solution</p>
                              <p className="mt-2 text-lg font-semibold text-white">{activeProject.solution}</p>
                            </div>
                            <div className="rounded-[1.1rem] bg-[rgba(255,255,255,0.03)] p-4">
                              <p className="text-[11px] uppercase tracking-[0.2em] text-[#d1d5db]/55">Result</p>
                              <p className="mt-2 text-lg font-semibold leading-7 text-white">{activeProject.result}</p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.025)] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
                          <p className="pp-mono text-[10px] uppercase tracking-[0.24em] text-[#d1d5db]/65">Key Capabilities</p>
                          <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            {activeProject.features.map((feature, index) => (
                              <div
                                key={feature}
                                className="rounded-[1.1rem] bg-[rgba(255,255,255,0.03)] p-4"
                              >
                                <p className="text-[11px] uppercase tracking-[0.2em] text-[#d1d5db]/45">0{index + 1}</p>
                                <p className="mt-3 text-base font-semibold leading-6 text-white">{feature}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
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
