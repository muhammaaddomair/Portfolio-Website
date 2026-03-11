import { Container } from "@/components/ui/container";
import { MotionGroup } from "@/components/ui/motion-group";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { caseStudies } from "@/lib/site";

export function CaseStudiesPreview() {
  return (
    <Container>
      <Section
        eyebrow="Selected Work"
        title="Systems designed to solve operational complexity, not just ship features"
        description="Illustrative project snapshots showing the type of business and infrastructure challenges addressed through architecture-led execution."
      >
        <MotionGroup className="space-y-8">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.05}>
              <article className="premium-card-strong card-hover group relative overflow-hidden p-8 md:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(184,150,46,0.08)_45%,transparent_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative grid gap-8 md:grid-cols-[1.2fr,1fr,1fr,1fr]">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wideish text-[var(--color-accent)]">Case Study</p>
                  <h3 className="mt-4 text-3xl font-semibold text-[var(--color-text)]">{study.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Architecture, delivery structure, and measurable outcome alignment.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wideish text-[var(--color-text-muted)]">Problem</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">{study.problem}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wideish text-[var(--color-text-muted)]">Solution</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">{study.solution}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wideish text-[var(--color-text-muted)]">Result</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">{study.result}</p>
                </div>
                </div>
              </article>
            </Reveal>
          ))}
        </MotionGroup>
      </Section>
    </Container>
  );
}
