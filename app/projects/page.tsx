import { Header } from "@/components/layout/header";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { featuredProjects } from "@/lib/site";

export default function ProjectsPage() {
  return (
    <section className="p-5">
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] pb-20">
        <Header />
        <Container className="pt-28">
          <PageHero
            eyebrow="Projects"
            title="Selected architecture and systems work"
            description="A focused set of project examples showing platform thinking, technical direction, and execution quality across product systems and automation infrastructure."
          />
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-[1.75rem] border border-[var(--color-border)] bg-[color:color-mix(in_srgb,var(--color-card)_82%,transparent)] p-8 md:p-10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">Project</p>
                <h2 className="mt-4 text-3xl font-semibold text-[var(--color-text)]">{project.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-text-muted)]">{project.summary}</p>
                <p className="mt-6 text-sm font-medium text-[var(--color-text)]">{project.impact}</p>
              </article>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
