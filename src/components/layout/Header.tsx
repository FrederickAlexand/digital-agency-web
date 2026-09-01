"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
        scrolled
          ? "shadow-sm border-slate-border"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex flex-col">
          <span className="text-lg font-bold tracking-tight text-navy">
            {SITE_NAME}
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-widest text-slate-muted sm:block">
            Advisory & Development
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-cta-blue"
                    : "text-slate-muted hover:text-navy"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Button href="/contact" className="!py-2.5 !px-5">
            Schedule a Tech Audit
          </Button>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-navy md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-border bg-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-base font-medium ${
                    active ? "text-cta-blue" : "text-navy"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Button href="/contact" className="mt-2 w-full text-center">
              Schedule a Tech Audit
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
