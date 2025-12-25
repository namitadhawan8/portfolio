"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function ExperimentsPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center px-4 py-24 sm:px-6">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            Experiments
          </p>
          <h1 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Coming soon
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            A collection of prototypes and explorations is on its way.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}



