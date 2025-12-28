import type { Metadata } from "next";
import { CaseStudySection } from "@/components/design/CaseStudySection";
import { DesignHero } from "@/components/design/DesignHero";
import { MoreWorkCarousel } from "@/components/design/MoreWorkCarousel";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { designCaseStudies } from "@/lib/designData";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://namitadhawan.com";

export const metadata: Metadata = {
  alternates: {
    canonical: `${baseUrl}/design`,
  },
};

export default function DesignPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Header />
      <main>
        <DesignHero />
        <section className="bg-white dark:bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="relative flex flex-col items-center gap-8">
              {designCaseStudies.map((caseStudy, index) => (
                <CaseStudySection key={caseStudy.id} caseStudy={caseStudy} index={index} />
              ))}
            </div>
          </div>
        </section>
        <MoreWorkCarousel />
      </main>
      <Footer />
    </div>
  );
}


