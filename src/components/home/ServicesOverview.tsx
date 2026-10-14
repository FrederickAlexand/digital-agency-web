import Image from "next/image";
import { Globe, Building2, GitMerge } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const SERVICES = [
  {
    icon: Globe,
    title: "Web App Development",
    description:
      "Custom web applications built for performance, security, and scale—from customer-facing platforms to internal operational tools.",
    features: ["React / Next.js", "Cloud-native architecture", "API-first design"],
    image: "/images/service-webapp.svg",
  },
  {
    icon: Building2,
    title: "Enterprise Portals",
    description:
      "Unified digital workspaces that connect teams, streamline workflows, and centralize business-critical data across departments.",
    features: ["Role-based access", "Workflow automation", "Analytics dashboards"],
    image: "/images/service-portal.svg",
  },
  {
    icon: GitMerge,
    title: "System Integration",
    description:
      "Seamless connectivity between legacy systems, third-party SaaS, and modern APIs—eliminating data silos and manual processes.",
    features: ["ERP & CRM integration", "Legacy modernization", "Real-time sync"],
    image: "/images/service-integration.svg",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Solutions Built for Business Impact"
          description="We deliver end-to-end software capabilities tailored to the demands of modern enterprise operations."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-border bg-white">
                <div className="relative aspect-[16/9] bg-navy">
                  <Image
                    src={service.image}
                    alt={`${service.title} interface preview`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-cta-blue text-white">
                    <service.icon size={22} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mb-6 flex-1 text-slate-muted leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 border-t border-slate-border pt-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-navy"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cta-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
