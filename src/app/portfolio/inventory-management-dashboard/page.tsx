import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Package,
  ShoppingCart,
  FileText,
  Truck,
  ClipboardList,
  ExternalLink,
} from "lucide-react";

import { INVENTORY_CASE_STUDY as study } from "@/lib/inventory-case-study";

export const metadata: Metadata = {
  title: study.title,
  description: study.description,
};

const SECTION_LINKS = [
  { id: "overview", label: "Ringkasan" },
  { id: "challenge", label: "Tantangan" },
  { id: "solution", label: "Solusi" },
  { id: "features", label: "Fitur Utama" },
  { id: "user-flow", label: "Alur Pengguna" },
  { id: "outcome", label: "Hasil" },
];

const FEATURE_ICONS = [Package, ShoppingCart, FileText, Truck];

function Section({
  number,
  title,
  children,
  muted = false,
  id,
}: {
  number: string;
  title: string;
  children: ReactNode;
  muted?: boolean;
  id: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-slate-border py-10 md:py-14 ${
        muted ? "bg-slate-50" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="text-xs font-medium tracking-wider text-slate-muted">
            {number}
          </span>

          <span aria-hidden="true" className="h-px w-6 bg-cta-gold" />

          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cta-blue">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}

function ProjectPreview() {
  return (
    <div
      aria-label="Ilustrasi dashboard aplikasi inventory"
      className="overflow-hidden rounded-2xl border border-slate-border bg-white shadow-xl shadow-navy/5"
    >
      <div className="flex items-center justify-between border-b border-slate-border bg-slate-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>

        <span className="text-xs text-slate-muted">Inventory Management</span>

        <ClipboardList size={16} className="text-cta-blue" aria-hidden="true" />
      </div>

      <div className="grid gap-5 p-5 sm:p-7">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-muted">
            Dashboard Preview
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-navy">
            Inventory Overview
          </h3>
          <p className="mt-1 text-sm text-slate-muted">
            Visual preview of an inventory management interface.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { label: "Inventory", icon: Package },
            { label: "Orders", icon: ShoppingCart },
            { label: "Reports", icon: FileText },
          ].map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="rounded-xl border border-slate-border p-3 sm:p-4"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50">
                <Icon size={19} className="text-cta-blue" aria-hidden="true" />
              </div>

              <p className="text-sm font-medium text-navy">{label}</p>

              <p className="mt-1 text-xs text-slate-muted">Management module</p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-border">
          <div className="flex items-center justify-between border-b border-slate-border bg-slate-50 px-4 py-3">
            <span className="text-sm font-semibold text-navy">
              Inventory Records
            </span>
            <span className="text-xs text-slate-muted">
              Interface illustration
            </span>
          </div>

          <div className="space-y-4 p-4">
            {[
              { width: "w-full", short: "w-1/3" },
              { width: "w-5/6", short: "w-1/4" },
              { width: "w-4/5", short: "w-2/5" },
            ].map((row, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-slate-100" />

                <div className="flex-1 space-y-2">
                  <div
                    className={`h-2 rounded-full bg-slate-200 ${row.width}`}
                  />
                  <div
                    className={`h-2 rounded-full bg-slate-100 ${row.short}`}
                  />
                </div>

                <div className="h-6 w-16 shrink-0 rounded-md bg-sky-50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InventoryCaseStudyPage() {
  return (
    <article lang="id" className="bg-white text-navy">
      <section className="bg-slate-50 pb-12 pt-28 md:pb-16 md:pt-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-muted transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta-blue"
          >
            <ArrowRight size={16} className="rotate-180" aria-hidden="true" />
            Kembali ke portofolio
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cta-blue">
                Studi Kasus · Aplikasi Web
              </p>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-navy md:text-5xl lg:text-6xl">
                {study.title}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-muted md:text-lg">
                {study.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-border bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {study.prototypeUrl ? (
                  <a
                    href={study.prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-cta-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta-blue focus-visible:ring-offset-2"
                  >
                    Lihat Prototype
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-slate-200 px-5 py-3 text-sm font-medium text-slate-600">
                    Prototype belum tersedia
                  </span>
                )}

                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-border bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-slate-400 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta-blue"
                >
                  Pelajari Proyek
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
            </div>

            <ProjectPreview />
          </div>

          <nav
            aria-label="Navigasi isi studi kasus"
            className="mt-12 border-t border-slate-border pt-5"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-muted">
              Dalam studi kasus ini
            </p>

            <div className="flex flex-wrap gap-2">
              {SECTION_LINKS.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-border bg-white px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-cta-blue hover:text-cta-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta-blue"
                >
                  <span className="text-slate-muted">0{index + 1}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <Section id="overview" number="01" title="Ringkasan Proyek">
        <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {study.details.map((detail) => (
            <div key={detail.label} className="border-l-2 border-cta-gold pl-4">
              <dt className="mb-2 text-sm text-slate-muted">{detail.label}</dt>

              <dd className="text-base font-semibold leading-relaxed text-navy">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 max-w-3xl text-base leading-8 text-slate-muted">
          {study.overview}
        </p>
      </Section>

      <Section id="challenge" number="02" title="Tantangan" muted>
        <div className="max-w-3xl">
          <p className="text-base leading-8 text-slate-muted">
            {study.challenge}
          </p>
        </div>
      </Section>

      <Section id="solution" number="03" title="Solusi">
        <p className="mb-8 max-w-3xl text-base leading-8 text-slate-muted">
          {study.solution}
        </p>

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {study.solutionSteps.map((step, index) => (
            <li key={step} className="relative">
              <div className="h-full rounded-xl border border-slate-border bg-slate-50 p-5">
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-cta-blue">
                  0{index + 1}
                </span>

                <p className="text-sm font-medium leading-relaxed text-navy">
                  {step}
                </p>
              </div>

              {index < study.solutionSteps.length - 1 && (
                <ArrowRight
                  size={16}
                  className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-slate-muted lg:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section id="features" number="04" title="Fitur Utama" muted>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {study.features.map((feature, index) => {
            const Icon = FEATURE_ICONS[index % FEATURE_ICONS.length];

            return (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50">
                  <Icon
                    size={22}
                    className="text-cta-blue"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-2 text-base font-semibold text-navy">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-slate-muted">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section id="user-flow" number="05" title="Alur Pengguna">
        <p className="mb-7 max-w-3xl text-sm leading-7 text-slate-muted">
          Gambaran tahapan penggunaan aplikasi, dari langkah awal hingga proses
          selesai.
        </p>

        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {study.userFlow.map((step, index) => (
            <li
              key={step}
              className="relative rounded-xl border border-slate-border bg-white p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider text-cta-blue">
                  LANGKAH {String(index + 1).padStart(2, "0")}
                </span>

                <ClipboardList
                  size={18}
                  className="text-slate-muted"
                  aria-hidden="true"
                />
              </div>

              <p className="text-sm font-medium leading-relaxed text-navy">
                {step}
              </p>

              {index < study.userFlow.length - 1 && (
                <ArrowRight
                  size={16}
                  className="absolute -bottom-3 right-5 z-10 rotate-90 text-slate-muted sm:hidden"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section id="outcome" number="06" title="Hasil Proyek" muted>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h3 className="mb-5 text-xl font-semibold tracking-tight text-navy">
              Hasil dan manfaat
            </h3>

            <ul className="space-y-4">
              {study.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <Check
                      size={15}
                      className="text-emerald-700"
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-sm leading-7 text-slate-700">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-xl border border-slate-border bg-white p-5 md:p-6">
            <h3 className="mb-3 text-sm font-semibold text-navy">
              Catatan Proyek
            </h3>

            <p className="text-sm leading-7 text-slate-muted">
              {study.outcomeNote}
            </p>
          </aside>
        </div>
      </Section>
    </article>
  );
}
