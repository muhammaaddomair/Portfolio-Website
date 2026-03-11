import { Container } from "@/components/ui/container";
import { MotionGroup } from "@/components/ui/motion-group";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { processSteps } from "@/lib/site";

export function ProcessSection() {
  return (
    <Container>
      <Section
        eyebrow="Execution Model"
        title="Projects are structured around architecture clarity, controlled delivery, and measurable outcomes"
        description="Each engagement follows a staged process so critical technical decisions are made deliberately instead of reactively."
      >
        <MotionGroup className="grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step} delay={index * 0.05}>
              <div className="premium-card card-hover p-6">
                <p className="text-xs font-medium uppercase tracking-wideish text-[var(--color-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 text-xl font-semibold text-[var(--color-text)]">{step}</h3>
              </div>
            </Reveal>
          ))}
        </MotionGroup>
      </Section>
    </Container>
  );
}
