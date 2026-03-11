import { Header } from "@/components/layout/header";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { CtaBlock } from "@/components/ui/cta-block";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <section className="p-5">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] pb-20">
          <Header />
          <Container className="pt-28">
            <PageHero
              eyebrow="Contact"
              title="For serious product, systems, infrastructure, or automation inquiries"
              description="Use the form below to outline your company, current situation, and the technical challenge you need solved. The positioning is intentionally direct to filter for qualified business conversations."
            />
            <Section
              eyebrow="Inquiry Form"
              title="Start the conversation"
              description="This base form is static by design and ready to be connected to your preferred submission flow later."
            >
              <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr]">
                <form className="premium-card-strong p-8">
                  <div className="grid gap-6">
                    <label className="grid gap-2 text-sm text-[var(--color-text)]">
                      Name
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="rounded-2xl border bg-transparent px-4 py-3 text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
                        style={{ borderColor: "var(--color-border)" }}
                      />
                    </label>
                    <label className="grid gap-2 text-sm text-[var(--color-text)]">
                      Email
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        className="rounded-2xl border bg-transparent px-4 py-3 text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
                        style={{ borderColor: "var(--color-border)" }}
                      />
                    </label>
                    <label className="grid gap-2 text-sm text-[var(--color-text)]">
                      Company
                      <input
                        type="text"
                        name="company"
                        placeholder="Company name"
                        className="rounded-2xl border bg-transparent px-4 py-3 text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
                        style={{ borderColor: "var(--color-border)" }}
                      />
                    </label>
                    <label className="grid gap-2 text-sm text-[var(--color-text)]">
                      Project Description
                      <textarea
                        name="projectDescription"
                        rows={6}
                        placeholder="Describe the business problem, system context, and the kind of outcome you need."
                        className="rounded-[1.5rem] border bg-transparent px-4 py-3 text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
                        style={{ borderColor: "var(--color-border)" }}
                      />
                    </label>
                    <button type="submit" className="button-primary inline-flex w-fit rounded-full px-6 py-3 text-sm font-medium">
                      Send Inquiry
                    </button>
                  </div>
                </form>
                <div className="premium-card p-8">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wideish text-[var(--color-accent)]">Business Inquiries</p>
                    <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
                      Best suited for founders, operations teams, and companies needing architecture-level technical support,
                      system design, or implementation leadership.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text)]">Email</p>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">{siteConfig.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text)]">Engagement Types</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                      Project-based builds, architecture consulting, and retained system strategy engagements.
                    </p>
                  </div>
                </div>
              </div>
            </Section>
          </Container>
        </div>
      </section>
      <CtaBlock
        title="If the problem is technical and commercially important, this is the right place to start"
        primaryLabel="Start a Project"
        secondaryLabel="Review Projects"
        secondaryHref="/projects"
      />
    </>
  );
}
