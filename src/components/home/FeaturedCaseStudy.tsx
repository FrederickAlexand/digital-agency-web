import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import ProductFrame from "@/components/ui/ProductFrame";
import FadeIn from "@/components/ui/FadeIn";
import { CASE_STUDIES } from "@/lib/case-studies";

export default function FeaturedCaseStudy() {
  const study = CASE_STUDIES[0];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <ProductFrame
              src={study.image}
              alt={`${study.title} product screenshot`}
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-widest text-cta-blue">
              Featured Case Study
            </p>
            <p className="mt-3 text-sm text-slate-muted">
              {study.client} · {study.industry}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              {study.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-muted">
              {study.summary}
            </p>

            <ul className="mt-8 space-y-3">
              {study.impact.slice(0, 3).map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy">
                  <TrendingUp
                    size={18}
                    className="mt-0.5 shrink-0 text-cta-gold"
                  />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/portfolio#${study.slug}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cta-blue transition-colors hover:text-navy"
            >
              Read the full case study
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
