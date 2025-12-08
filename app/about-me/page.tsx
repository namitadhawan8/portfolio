import { AboutHero } from "@/components/about/AboutHero";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/about/SkillsSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { aboutSections } from "@/lib/aboutData";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Header />
      <main>
        <AboutHero />
        {aboutSections.map((section, index) => (
          <AboutSection key={section.id} section={section} index={index} />
        ))}
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}

