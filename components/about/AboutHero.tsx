export function AboutHero() {
  return (
    <section className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end">
          <div className="flex-1 space-y-6">
            <div className="max-w-lg overflow-hidden">
              <h1 className="animate-slide-up text-5xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl lg:text-7xl">
                ABOUT
              </h1>
            </div>
            <p className="text-lg font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-xl">
              Learn more about my journey, interests, and what drives me in product management and design.
            </p>
          </div>

          <div className="flex-1 overflow-hidden rounded-3xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-black max-w-md">
            <div className="flex h-full min-h-[400px] items-center justify-center overflow-hidden">
              <iframe
                src="https://lottie.host/embed/de4eba02-f98e-42c2-a8e1-e215eae33219/bePnVtjorf.lottie"
                className="h-full w-full"
                style={{ border: 'none', transform: 'scale(2.4)', transformOrigin: 'center' }}
                title="Lottie Animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

