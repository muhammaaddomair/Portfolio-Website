import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type CtaBlockProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBlock({
  title = "Discuss your system",
  description = "For product infrastructure, automation strategy, or architecture-led delivery, start with a focused conversation about scope, constraints, and business outcomes.",
  primaryLabel = "Start a Project",
  primaryHref = "/#contact",
  secondaryLabel = "View Projects",
  secondaryHref = "/#projects"
}: CtaBlockProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="premium-card-strong relative overflow-hidden px-8 py-12 md:px-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(184,150,46,0.16),transparent_38%,transparent_75%,rgba(184,150,46,0.1))]" />
          <div className="relative">
            <div className="max-w-3xl space-y-6">
              <p className="text-xs font-medium uppercase tracking-wideish text-[var(--color-accent)]">Strategic Engagement</p>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-5xl">{title}</h2>
              <p className="text-base leading-7 text-[var(--color-text-muted)] md:text-lg">{description}</p>
              <p className="text-sm text-[var(--color-text-muted)]">{siteConfig.email}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={primaryHref}>
                {primaryLabel}
              </Button>
              <Button href={secondaryHref}>
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
