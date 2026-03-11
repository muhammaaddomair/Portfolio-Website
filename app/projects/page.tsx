import { Header } from "@/components/layout/header";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { featuredProjects } from "@/lib/site";

export default function ProjectsPage() {
  return (
    <section className="p-5">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] pb-20">
        <Header />
        <Container className="pt-28">
          <PageHero
            eyebrow="Projects"
            title="Selected architecture and systems work"
            description="A focused set of project examples showing platform thinking, technical direction, and execution quality across product systems and automation infrastructure."
          />
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <article key={project.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f0a35f]">Project</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">{project.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-white/68">{project.summary}</p>
                <p className="mt-6 text-sm font-medium text-white/88">{project.impact}</p>
              </article>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
