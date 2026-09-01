import type { Metadata } from "next";
import { Target, Eye, Handshake, Shield } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the co-founders of Meridian Digital and learn about our philosophy of transparency, zero scope-creep, and advisory-led development.",
};

const VALUES = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Open communication at every stage—from scoping and architecture reviews to sprint demos and budget reporting.",
  },
  {
    icon: Shield,
    title: "Zero Scope-Creep",
    description:
      "Fixed-scope contracts with change-request protocols that protect your budget and timeline without compromising quality.",
  },
  {
    icon: Handshake,
    title: "Advisory-Led",
    description:
      "We challenge assumptions and recommend the right solution—not the most expensive one. Your success is our metric.",
  },
  {
    icon: Target,
    title: "Outcome-Focused",
    description:
      "Every feature maps to a business KPI. We measure success by the impact on your operations, not lines of code.",
  },
];

const FOUNDERS = [
  {
    name: "Frederick Alexander Badaruddin",
    role: "Business Director",
    focus: "Strategy & High-Integrity Advisory",
    bio: "Drawing from his background in private wealth consulting and strategic advisory, Frederick ensures every engagement aligns with long-term business objectives. He leads discovery workshops and champions a reputation-driven approach, prioritizing genuine client success and sustainable growth.",
    expertise: [
      "Strategic advisory & consulting",
      "Stakeholder management",
      "Brand & reputation strategy",
    ],
  },
  {
    name: "Davin Kurnia Hiuredhy",
    role: "Technical Director",
    focus: "Architecture & Delivery",
    bio: "Davin brings deep expertise in enterprise architecture and software delivery. He oversees technical blueprints, code quality standards, and ensures that all solutions are scalable, maintainable, and engineered to solve complex operational challenges.",
    expertise: [
      "Enterprise architecture",
      "Cloud & security best practices",
      "Agile delivery & DevOps",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Us"
            title="Built on Integrity, Driven by Results"
            description="Meridian Digital was founded on a simple belief: software projects fail when vendors prioritize billing over business outcomes. We do things differently."
            light
            align="left"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet the Co-Founders"
            description="Two directors, one mission—delivering software that actually moves the needle for your business."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            {FOUNDERS.map((founder, index) => (
              <FadeIn key={founder.name} delay={index * 0.1}>
                <article className="h-full rounded-lg border border-slate-border bg-white p-8 md:p-10">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-navy text-2xl font-bold text-cta-gold">
                    {founder.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-cta-blue">
                    {founder.role}
                  </p>
                  <h3 className="mt-1 mb-1 text-2xl font-bold text-navy">
                    {founder.name}
                  </h3>
                  <p className="mb-4 text-sm text-cta-gold">{founder.focus}</p>
                  <p className="mb-6 text-slate-muted leading-relaxed">
                    {founder.bio}
                  </p>
                  <ul className="space-y-2 border-t border-slate-border pt-6">
                    {founder.expertise.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-navy"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cta-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Philosophy"
            title="How We Work"
            description="Our core principles guide every decision—from the first audit call to post-launch support."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.08}>
                <div className="h-full rounded-lg border border-slate-border bg-white p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-cta-blue/10 text-cta-blue">
                    <value.icon size={20} />
                  </div>
                  <h3 className="mb-2 font-semibold text-navy">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="mb-4 text-2xl font-bold text-navy md:text-3xl">
              Partner With a Team That Puts Your Business First
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-slate-muted">
              Ready to experience advisory-led development? Let&apos;s start with
              a conversation.
            </p>
            <Button href="/contact">Get in Touch</Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}