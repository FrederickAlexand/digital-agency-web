import { ClipboardList, Layers, Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const STEPS = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Audit & Strategy",
    description:
      "We begin with a thorough assessment of your current systems, workflows, and business objectives—identifying gaps before a single line of code is written.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Blueprint Architecture",
    description:
      "Our technical architects design scalable, maintainable solutions aligned with your growth trajectory—documented, reviewed, and approved by stakeholders.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Precision Development",
    description:
      "Agile delivery with transparent milestones, zero scope-creep policies, and continuous alignment with your business KPIs throughout the build.",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Approach"
          title="Advisory-Led, Outcome-Focused"
          description="Every engagement follows a disciplined three-phase methodology designed to eliminate waste and maximize ROI."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.1}>
              <div className="group relative h-full rounded-lg border border-slate-border bg-white p-8 transition-shadow hover:shadow-lg">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy/5 text-cta-blue">
                    <item.icon size={24} />
                  </div>
                  <span className="text-4xl font-bold text-slate-border group-hover:text-cta-gold/30 transition-colors">
                    {item.step}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="text-slate-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
