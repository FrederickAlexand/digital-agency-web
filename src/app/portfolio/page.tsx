import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudyCard from "@/components/portfolio/CaseStudyCard";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore how Meridian Digital has helped organizations transform operations with custom software solutions.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Proven Results, Measurable Impact"
            description="Real-world case studies demonstrating our advisory-led approach to solving complex business challenges."
            light
            align="left"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>

          <div className="space-y-24">
            {CASE_STUDIES.map((study, index) => (
              <FadeIn key={study.slug} delay={index * 0.1}>
                <div id={study.slug} className="scroll-mt-28">
                  <CaseStudyCard study={study} detailed />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-border bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="mb-4 text-2xl font-bold text-navy md:text-3xl">
              Have a Similar Challenge?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-slate-muted">
              Let&apos;s discuss how our advisory approach can deliver measurable
              results for your organization.
            </p>
            <Button href="/contact">Start a Conversation</Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
