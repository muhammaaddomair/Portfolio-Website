import { Container } from "@/components/ui/container";
import { MotionGroup } from "@/components/ui/motion-group";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { faqs } from "@/lib/site";

export function FaqSection() {
  return (
    <Container>
      <Section
        eyebrow="FAQ"
        title="Common questions before a consulting engagement begins"
        description="The site is structured to support serious inbound conversations, so the FAQ clarifies how work is typically scoped and delivered."
      >
        <MotionGroup className="space-y-4">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.04}>
              <div className="premium-card card-hover p-6">
                <h3 className="text-lg font-semibold text-[var(--color-text)]">{item.question}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </MotionGroup>
      </Section>
    </Container>
  );
}
