import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseStudyCardProps {
  study: CaseStudy;
  detailed?: boolean;
}

export default function CaseStudyCard({
  study,
  detailed = false,
}: CaseStudyCardProps) {
  if (detailed) {
    return (
      <article className="overflow-hidden rounded-lg border border-slate-border bg-white">
        <div className="relative aspect-[16/10] bg-navy">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8 md:p-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-cta-blue/10 px-3 py-1 text-xs font-semibold text-cta-blue">
              {study.industry}
            </span>
            <span className="text-sm text-slate-muted">{study.client}</span>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-navy md:text-3xl">
            {study.title}
          </h2>
          <p className="mb-8 text-lg text-slate-muted">{study.summary}</p>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-cta-blue">
                The Challenge
              </h3>
              <p className="text-slate-muted leading-relaxed">{study.problem}</p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-cta-blue">
                Our Solution
              </h3>
              <p className="text-slate-muted leading-relaxed">
                {study.solution}
              </p>
            </div>
          </div>

          <div className="mb-8 rounded-lg bg-slate-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-cta-blue">
              <TrendingUp size={16} />
              Business Impact
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {study.impact.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-navy"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cta-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-border px-3 py-1 text-xs font-medium text-slate-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <FadeIn>
      <Link
        href={`/portfolio#${study.slug}`}
        className="group block overflow-hidden rounded-lg border border-slate-border bg-white transition-shadow hover:shadow-lg"
      >
        <div className="relative aspect-[16/10] bg-navy overflow-hidden">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
        <div className="p-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-cta-blue">
            {study.industry}
          </span>
          <h3 className="mt-2 mb-2 text-lg font-semibold text-navy group-hover:text-cta-blue transition-colors">
            {study.title}
          </h3>
          <p className="mb-4 text-sm text-slate-muted line-clamp-2">
            {study.summary}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-cta-blue">
            Read case study
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </FadeIn>
  );
}
