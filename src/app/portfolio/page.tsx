import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
            <FadeIn>
              <Link
                href="/portfolio/interior-design"
                className="group block overflow-hidden rounded-lg border border-slate-border bg-white transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                  <Image
                    src="/images/interior-design/minimal-dining.jpg"
                    alt="Interior minimalis dengan meja putih, bangku kayu, dan cahaya natural"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-cta-blue">
                    Landing page · Interior design
                  </span>
                  <h3 className="mt-2 mb-2 text-lg font-semibold text-navy transition-colors group-hover:text-cta-blue">
                    AUREL — Interior Atelier
                  </h3>
                  <p className="mb-4 text-sm text-slate-muted line-clamp-2">
                    Studio interior dengan palet warm white dan walnut, fotografi natural, serta pendekatan desain yang personal.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-cta-blue">
                    Explore landing page
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeIn>
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
