import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import ProductFrame from "@/components/ui/ProductFrame";
import { ArrowRight, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-28 pb-24 md:pt-36 md:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,255,0.16)_0%,transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,184,166,0.10)_0%,transparent_55%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <Layers
                  size={15}
                  aria-hidden="true"
                  className="text-[#38BDF8]"
                />
                Strategy, Design & Development
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl [font-family:var(--font-plus-jakarta),sans-serif]">
                Your business goals.
                <span className="mt-1 block text-[#38BDF8]">
                  Our digital solutions.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                We help businesses solve real problems through thoughtful
                strategy, purposeful design, and technology built around their
                needs.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href="/contact"
                  className="border-0 bg-[#0284C7] text-white hover:bg-[#0369A1]"
                >
                  Let&apos;s Discuss Your Project
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="ml-2 inline"
                  />
                </Button>
                <Button
                  href="/portfolio"
                  variant="outline"
                  className="!border-white/20 !bg-transparent !text-white hover:!border-white/40 hover:!bg-white/5"
                >
                  Explore Our Work
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="mt-6 text-sm text-slate-400">
                Thoughtful solutions. Practical technology. Built around your
                business.
              </p>
            </FadeIn>
          </div>

          {/* Product visual */}
          <FadeIn
            delay={0.2}
            className="relative mx-auto w-full max-w-xl pt-6 pb-8"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-full bg-[#0EA5FF]/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-2 -left-4 h-32 w-32 rounded-full bg-[#14B8A6]/10 blur-3xl"
            />

            <ProductFrame
              src="/images/hero-dashboard.svg"
              alt="Preview of a digital business dashboard"
              className="relative rotate-1 transition-transform duration-500 hover:rotate-0"
            />
            <div className="absolute -bottom-1 left-0 max-w-[230px] rounded-xl border border-white/10 bg-[#172B46]/95 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-5">
              <p className="text-xs font-medium text-[#38BDF8]">
                BUILT AROUND YOUR NEEDS
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Solutions with purpose
              </p>
            </div>
            <div className="absolute -top-1 right-0 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-right-4">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-[#14B8A6]" />
                <p className="text-xs font-semibold text-slate-700">
                  Strategy to delivery
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
