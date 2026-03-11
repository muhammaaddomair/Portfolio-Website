import { Container } from "@/components/ui/container";
import { MotionGroup } from "@/components/ui/motion-group";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { testimonials } from "@/lib/site";

export function TestimonialsSection() {
  return (
    <Container>
      <Section
        eyebrow="Client Perspective"
        title="Authority is earned through system quality, not positioning alone"
        description="Placeholder testimonials are included here to establish the structure for future client proof and credibility assets."
      >
        <MotionGroup className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.author} delay={index * 0.05}>
              <blockquote className="premium-card-strong card-hover p-8">
                <p className="text-lg leading-8 text-[var(--color-text)]">{item.quote}</p>
                <footer className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">{item.author}</footer>
              </blockquote>
            </Reveal>
          ))}
        </MotionGroup>
      </Section>
    </Container>
  );
}
