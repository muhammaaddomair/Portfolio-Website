import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MotionGroup } from "@/components/ui/motion-group";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { serviceCategories } from "@/lib/site";

export function ServicesOverview() {
  return (
    <Container>
      <Section
        eyebrow="Capabilities"
        title="Structured engineering services for systems that need to work under pressure"
        description="The work spans product delivery, infrastructure design, automation, and data platforms, with architecture discipline carried from strategy through implementation."
      >
        <MotionGroup className="grid gap-6 md:grid-cols-2">
          {serviceCategories.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <Link
                href="/services"
                className="premium-card-strong card-hover group flex h-full flex-col justify-between p-8"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--color-text)]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{service.description}</p>
                </div>
                <span className="mt-10 text-sm font-medium text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                  Explore service area
                </span>
              </Link>
            </Reveal>
          ))}
        </MotionGroup>
      </Section>
    </Container>
  );
}
