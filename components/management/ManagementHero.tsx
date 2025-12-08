export function ManagementHero() {
  return (
    <section className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end">
          <div className="flex-1 space-y-6">
            <div className="max-w-lg overflow-hidden">
              <h1 className="animate-slide-up text-5xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl lg:text-7xl">
                SELECTED MANAGEMENT WORK
              </h1>
            </div>
            <p className="text-lg font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-xl">
              A collection of product management case studies showcasing strategy, execution, and leadership. Each case covers the approach, challenges, and outcomes from managing complex product initiatives.
            </p>
          </div>

          <div className="flex-1 overflow-hidden rounded-3xl border border-zinc-900/10 dark:border-zinc-700/50 bg-zinc-100 dark:bg-zinc-900">
            <div className="flex h-full min-h-[400px] items-center justify-center">
              <p className="text-center text-sm text-zinc-500">
                Illustration placeholder
                <br />
                (Add your illustration here)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

