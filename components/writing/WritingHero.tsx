export function WritingHero() {
  return (
    <section className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end">
          <div className="flex-1 space-y-6">
            <div className="max-w-lg overflow-hidden">
              <h1 className="animate-slide-up text-5xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl lg:text-7xl">
                WRITING
              </h1>
            </div>
            <p className="text-lg font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-xl">
              A collection of articles on product management, design, and architecture. Explore Medium articles on product and design, along with architecture design magazine articles published across different platforms.
            </p>
          </div>

          <div className="flex-1 overflow-hidden rounded-3xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-black max-w-md">
            <div className="flex h-full min-h-[400px] items-center justify-center overflow-hidden">
              <iframe
                src="https://lottie.host/embed/481ee4a6-b845-4f6f-834e-78b24e4865f9/BVflUhuZQk.lottie"
                className="h-full w-full"
                style={{ border: 'none', transform: 'scale(1.5)', transformOrigin: 'center' }}
                title="Lottie Animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

