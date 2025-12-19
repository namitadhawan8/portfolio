export function DesignHero() {
  return (
    <section className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end">
          <div className="flex-1 space-y-6">
            <div className="max-w-lg overflow-hidden">
              <h1 className="animate-slide-up text-5xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl lg:text-7xl">
                SELECTED DESIGN WORK
              </h1>
            </div>
            <p className="text-lg font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-xl">
              A closer look at two detailed case studies (UX and UI) followed by a snapshot of more work. Each study covers the problem, approach, and outcomes so you can see how I ship from research to handoff.
            </p>
          </div>

          <div className="flex-1 overflow-hidden rounded-3xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-black max-w-md">
            <div className="flex h-full min-h-[400px] items-center justify-center overflow-hidden">
              <iframe
                src="https://lottie.host/embed/bd0bee81-9d63-4b0a-9616-ddfd142013db/hdM3iteA2N.lottie"
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


