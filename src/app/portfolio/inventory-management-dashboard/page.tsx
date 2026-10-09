import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Package, ShoppingCart, FileText, Truck } from "lucide-react";
import { INVENTORY_CASE_STUDY as study } from "@/lib/inventory-case-study";

export const metadata: Metadata = {
  title: study.title,
  description: study.description,
};

function Section({ number, title, children, muted = false, id }: { number: string; title: string; children: ReactNode; muted?: boolean; id?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 border-t border-slate-border py-8 md:py-10 ${muted ? "bg-slate-50" : "bg-white"}`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3"><span className="text-xs font-medium text-slate-muted">{number}</span><h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-cta-blue">{title}</h2></div>
        {children}
      </div>
    </section>
  );
}

export default function InventoryCaseStudyPage() {
  const icons = [Package, ShoppingCart, FileText, Truck];
  return (
    <article lang="id">
      <section className="bg-slate-50 pt-28 pb-8 md:pt-32 md:pb-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Link href="/portfolio" className="mb-5 inline-flex items-center gap-2 text-sm text-slate-muted hover:text-navy">← Semua proyek</Link>
          <div className="max-w-3xl">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cta-blue">Case study · Web application</p>
              <h1 className="text-4xl leading-tight font-semibold tracking-tight text-navy md:text-5xl">{study.title}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-muted">{study.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{study.tags.map(tag => <span key={tag} className="rounded-full border border-slate-border bg-white px-3 py-1 text-xs font-medium">{tag}</span>)}</div>
              <div className="mt-5">
                {study.prototypeUrl ? <a href={study.prototypeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white">Lihat Prototype <ArrowRight size={16} /></a> : <><button type="button" disabled className="rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white opacity-50">Lihat Prototype</button><p className="mt-2 text-xs text-slate-muted">Prototype belum ditambahkan.</p></>}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section number="01" title="Project Overview">
        <dl className="mb-4 grid gap-4 sm:grid-cols-3">{study.details.map(detail => <div key={detail.label} className="border-l-2 border-cta-gold pl-3"><dt className="mb-1 text-sm text-slate-muted">{detail.label}</dt><dd className="text-lg font-medium">{detail.value}</dd></div>)}</dl>
        <p className="max-w-3xl text-base leading-relaxed text-slate-muted">{study.overview}</p>
      </Section>
      <Section number="02" title="The Challenge" muted>
        <p className="max-w-3xl text-base leading-relaxed text-slate-muted">{study.challenge}</p>
      </Section>
      <Section number="03" title="The Solution">
        <p className="mb-5 max-w-3xl text-base leading-relaxed text-slate-muted">{study.solution}</p>
        <ol className="flex flex-col gap-3 md:flex-row md:items-center">{study.solutionSteps.map((step, i) => <li key={step} className="flex flex-1 flex-col items-center gap-3 md:flex-row"><span className="w-full rounded-xl border border-slate-border bg-slate-50 px-3 py-3 text-center text-sm font-medium">{step}</span>{i < study.solutionSteps.length - 1 && <><ArrowRight className="hidden shrink-0 text-slate-muted md:block" size={16} aria-hidden="true" /><ArrowDown className="text-slate-muted md:hidden" size={16} aria-hidden="true" /></>}</li>)}</ol>
      </Section>
      <Section number="04" title="Key Features" muted>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{study.features.map((feature, i) => { const Icon = icons[i]; return <div key={feature.title} className="rounded-2xl border border-slate-border bg-white p-4"><Icon className="mb-3 text-cta-blue" size={22} aria-hidden="true" /><h3 className="mb-2 text-base font-semibold">{feature.title}</h3><p className="leading-relaxed text-slate-muted">{feature.description}</p></div>; })}</div>
      </Section>
      <Section number="05" title="User Flow" muted>
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{study.userFlow.map((step, i) => <li key={step} className="rounded-xl border border-slate-border bg-white p-4"><span className="mb-2 block text-sm font-medium text-cta-blue">0{i + 1}</span><p className="text-sm font-medium">{step}</p>{i < study.userFlow.length - 1 && <ArrowRight className="mt-2 text-slate-muted" size={16} aria-hidden="true" />}</li>)}</ol>
      </Section>
      <Section number="06" title="Outcome">
        <ul className="space-y-3">{study.outcomes.map(outcome => <li key={outcome} className="flex items-start gap-3 text-base"><Check className="mt-1 shrink-0 text-emerald-600" size={20} aria-hidden="true" />{outcome}</li>)}</ul>
        <p className="mt-5 rounded-lg border border-dashed border-slate-border bg-slate-50 p-4 text-sm text-slate-muted">Catatan: {study.outcomeNote}</p>
      </Section>
    </article>
  );
}
