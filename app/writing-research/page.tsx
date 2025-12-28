import type { Metadata } from "next";
import { WritingHero } from "@/components/writing/WritingHero";
import { WritingSection } from "@/components/writing/WritingSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { writingSections } from "@/lib/writingData";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://namitadhawan.com";

export const metadata: Metadata = {
  alternates: {
    canonical: `${baseUrl}/writing-research`,
  },
};

export default function WritingPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Header />
      <main>
        <WritingHero />
        {writingSections.map((section) => (
          <WritingSection key={section.title} section={section} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

