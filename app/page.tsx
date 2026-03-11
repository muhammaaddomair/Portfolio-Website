import { AboutSection } from "@/components/sections/about-section";
import { HomeHero } from "@/components/sections/home-hero";
import { ProjectsDashboard } from "@/components/sections/projects-dashboard";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <ProjectsDashboard />
    </>
  );
}
