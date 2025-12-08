import { ManagementCard } from "@/components/management/ManagementCard";
import { ManagementHero } from "@/components/management/ManagementHero";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { managementCases } from "@/lib/managementData";

export default function ManagementPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Header />
      <main>
        <ManagementHero />
        <section className="bg-white dark:bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="relative flex flex-col gap-8">
              {managementCases.map((managementCase, index) => (
                <ManagementCard key={managementCase.id} managementCase={managementCase} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

