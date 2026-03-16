import { HeroSection } from "@/components/sections/HeroSection";
import { QuickHighlights } from "@/components/sections/QuickHighlights";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { DeveloperToolsSection } from "@/components/sections/DeveloperToolsSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { CareerHighlightsSection } from "@/components/sections/CareerHighlightsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="gradient-mesh min-h-screen">
      <HeroSection />
      <QuickHighlights />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <DeveloperToolsSection />
      <ExperienceTimeline />
      <CareerHighlightsSection />
      <ContactSection />
    </div>
  );
}
