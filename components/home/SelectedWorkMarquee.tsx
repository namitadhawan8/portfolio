import Image from "next/image";

export function SelectedWorkMarquee() {
  return (
    <section className="bg-white dark:bg-zinc-950 py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Image
            src="/star-purple.svg"
            alt=""
            width={50}
            height={50}
            className="h-12 w-12 star-icon-purple"
          />
          <h2 className="text-2xl font-black uppercase tracking-[0.5em] text-zinc-900 dark:text-zinc-100 md:text-4xl">
            Selected Work
          </h2>
        </div>
      </div>
    </section>
  );
}



