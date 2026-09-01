import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { CONTACT_INFO, NAV_LINKS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-border bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-xl font-bold">{SITE_NAME}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-300">
              {SITE_TAGLINE}. We partner with forward-thinking organizations to
              deliver transparent, advisory-led software solutions.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cta-gold">
              Navigation
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cta-gold">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-cta-gold" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0 text-cta-gold" />
                {CONTACT_INFO.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Transparency · Zero Scope-Creep · Advisory-Led
          </p>
        </div>
      </div>
    </footer>
  );
}
