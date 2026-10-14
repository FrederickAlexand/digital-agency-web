
import FadeIn from "@/components/ui/FadeIn";

const TECHNOLOGIES = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Laravel", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
];

export default function TechnologyStack() {
  return (
    <section
      id="technology"
      className="border-y border-slate-border bg-white py-14 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0284C7]">
              Our Technology Stack
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Built with modern technology.
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-muted">
              The tools we use to create thoughtful, reliable,
              and scalable digital solutions.
            </p>
          </div>
        </FadeIn>

        {/* Technology cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {TECHNOLOGIES.map((technology, index) => (
            <FadeIn
              key={technology.name}
              delay={index * 0.05}
            >
              <div className="group flex h-24 flex-col items-center justify-center rounded-xl border border-slate-border bg-slate-50 px-3 transition-all duration-200 hover:-translate-y-1 hover:border-[#0EA5FF]/50 hover:bg-white hover:shadow-md">
                <span className="text-sm font-semibold text-navy transition-colors group-hover:text-[#0284C7]">
                  {technology.name}
                </span>

                <span className="mt-1 text-xs text-slate-muted">
                  {technology.category}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
