import Hero from "@/components/home/Hero";
import ValueProposition from "@/components/home/ValueProposition";
import ServicesOverview from "@/components/home/ServicesOverview";
import TrustBanner from "@/components/home/TrustBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <ValueProposition />
      <ServicesOverview />

      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <SectionHeading
            eyebrow="Ready to Start?"
            title="Let's Discuss Your Next Initiative"
            description="Book a complimentary tech audit and discover how advisory-led development can accelerate your business outcomes."
            light
          />
          <FadeIn>
            <Button
              href="/contact"
              className="bg-cta-gold text-navy hover:bg-cta-gold-hover border-0"
            >
              Schedule a Tech Audit
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
