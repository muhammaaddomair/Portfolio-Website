import { AboutSection } from "@/components/sections/about-section";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeContactGate } from "@/components/sections/home-contact-gate";
import { ProjectsDashboard } from "@/components/sections/projects-dashboard";
import { ServicesSkillsSection } from "@/components/sections/services-skills-section";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesSkillsSection />
      <AboutSection />
      <ProjectsDashboard />
      <HomeContactGate />
    </>
  );
}
