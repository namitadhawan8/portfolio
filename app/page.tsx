import { CallToAction } from "@/components/home/CallToAction";
import { Experience } from "@/components/home/Experience";
import { FloatingBanner } from "@/components/home/FloatingBanner";
import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { SelectedWorkMarquee } from "@/components/home/SelectedWorkMarquee";
import { Services } from "@/components/home/Services";
import { Stats } from "@/components/home/Stats";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Services />
        <SelectedWorkMarquee />
        <Projects />
        <CallToAction />
      </main>
      <Footer />
      <FloatingBanner />
    </div>
  );
}
