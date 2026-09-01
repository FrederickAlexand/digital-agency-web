import FadeIn from "@/components/ui/FadeIn";

const CLIENTS = [
  "RetailCorp",
  "FinEdge",
  "HealthSync",
  "LogiStream",
  "DataVault",
  "CloudNine",
];

export default function TrustBanner() {
  return (
    <section className="border-y border-slate-border bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-slate-muted">
            Trusted by Forward-Thinking Organizations
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {CLIENTS.map((client, index) => (
            <FadeIn key={client} delay={index * 0.05}>
              <div className="flex h-16 items-center justify-center rounded-md border border-slate-border bg-slate-50 px-4">
                <span className="text-sm font-semibold tracking-wide text-slate-muted">
                  {client}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
