import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import FadeIn from "@/components/ui/FadeIn";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Meridian Digital to schedule a tech audit or discuss your next software project.",
};

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: CONTACT_INFO.location,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 1 business day",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Start a Conversation"
            description="Whether you need a tech audit or have a project in mind, we're here to help you make informed decisions."
            light
            align="left"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="mb-6 text-xl font-semibold text-navy">
                  Contact Information
                </h2>
                <ul className="space-y-6">
                  {CONTACT_DETAILS.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cta-blue/10 text-cta-blue">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-muted">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-navy hover:text-cta-blue transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-navy">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 rounded-lg border border-slate-border bg-slate-50 p-6">
                  <h3 className="mb-2 font-semibold text-navy">
                    Complimentary Tech Audit
                  </h3>
                  <p className="text-sm text-slate-muted leading-relaxed">
                    Not sure where to start? Book a free 30-minute consultation
                    and we&apos;ll assess your current systems and identify
                    high-impact opportunities.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <div className="rounded-lg border border-slate-border bg-white p-8 md:p-10">
                  <h2 className="mb-6 text-xl font-semibold text-navy">
                    Send Us a Message
                  </h2>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
