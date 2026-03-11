import { Header } from "@/components/layout/header";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";

export default function AboutPage() {
  return (
    <section className="p-5">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] pb-20">
        <Header />
        <Container className="pt-28">
          <PageHero
            eyebrow="About"
            title="Technical architecture with product judgment and operational discipline"
            description="Muhammad Omair works as an independent systems architect focused on software platforms, backend infrastructure, and automation environments that need to perform under real business pressure."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Software architecture for serious business systems",
              "Backend and automation thinking grounded in execution",
              "Independent consulting without agency overhead"
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8">
                <p className="text-lg font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
