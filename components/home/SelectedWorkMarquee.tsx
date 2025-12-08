import { Marquee } from "@/components/ui/Marquee";

const marqueeItems = ["Selected Work", "Selected Work", "Selected Work"];

export function SelectedWorkMarquee() {
  return (
    <section className="border-y border-zinc-900/10 dark:border-zinc-700/50 bg-white dark:bg-zinc-950 py-6">
      <Marquee
        items={marqueeItems}
        separator="·"
        className="px-4 sm:px-6"
        textClassName="text-2xl font-black uppercase tracking-[0.5em] text-zinc-900 dark:text-zinc-100 md:text-4xl"
        speed="very-slow"
      />
    </section>
  );
}



