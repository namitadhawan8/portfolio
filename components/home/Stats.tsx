import { stats } from "@/lib/homeData";

export function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-4">
              <span className="block h-0.5 w-12 bg-zinc-900/60" />
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
                {stat.label}
              </p>
              <p className="text-4xl font-black uppercase tracking-[0.4em] text-zinc-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



