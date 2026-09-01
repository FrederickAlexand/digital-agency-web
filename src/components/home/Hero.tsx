import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,39,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(30,58,95,0.4)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
              <Shield size={14} className="text-cta-gold" />
              High-Integrity Advisory & Development
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Transforming Business Challenges into{" "}
              <span className="text-cta-gold">Digital Solutions</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              We don&apos;t just write code—we architect outcomes. Our advisory-led
              approach ensures every investment in technology delivers measurable
              business value.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" className="bg-cta-gold text-navy hover:bg-cta-gold-hover border-0">
                Schedule a Tech Audit
              </Button>
              <Button
                href="/portfolio"
                variant="outline"
                className="border-white/20 bg-transparent text-navy hover:bg-white/50 hover:border-white/30"
              >
                View Case Studies
                <ArrowRight size={16} className="ml-2 inline" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
