"use client";

import { useEffect, useState } from "react";
import { CONTACT_INFO, getWhatsAppUrl } from "@/lib/constants";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const href = getWhatsAppUrl();
  const label = `Chat with ${CONTACT_INFO.whatsapp.name} on WhatsApp`;
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const show = () => setBubbleOpen(true);
    const hide = () => setBubbleOpen(false);

    const firstShow = window.setTimeout(show, 1800);
    const firstHide = window.setTimeout(hide, 8000);

    const cycle = window.setInterval(() => {
      show();
      window.setTimeout(hide, 5000);
    }, 14000);

    return () => {
      window.clearTimeout(firstShow);
      window.clearTimeout(firstHide);
      window.clearInterval(cycle);
    };
  }, [dismissed]);

  const showBubble = !dismissed && (bubbleOpen || hovered);

  return (
    <div className="fixed bottom-5 right-5 z-50 md:bottom-6 md:right-6">
      <div
        className={`mb-3 w-[min(16.5rem,calc(100vw-5.5rem))] origin-bottom-right rounded-2xl bg-white p-3.5 shadow-xl ring-1 ring-slate-border transition-all duration-300 ${
          showBubble
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <div className="mb-2 flex items-start justify-between gap-2">
          <p className="text-sm font-semibold text-navy">Chat with us</p>
          <button
            type="button"
            onClick={() => {
              setDismissed(true);
              setBubbleOpen(false);
            }}
            className="rounded p-0.5 text-slate-muted transition-colors hover:bg-slate-50 hover:text-navy"
            aria-label="Dismiss WhatsApp chat prompt"
          >
            <span className="block h-4 w-4 text-center leading-4">×</span>
          </button>
        </div>
        <p className="mb-3 text-xs leading-relaxed text-slate-muted">
          Hi, I&apos;m {CONTACT_INFO.whatsapp.name}. Need a tech audit or have a
          project in mind? Message me on WhatsApp.
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-lg bg-[#25D366] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1ebe57]"
        >
          Start WhatsApp Chat
        </a>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="wa-fab relative ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 outline-none transition-colors hover:bg-[#1ebe57] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <span className="wa-fab-ping" aria-hidden="true" />
        <span className="wa-fab-ping wa-fab-ping-delayed" aria-hidden="true" />
        <WhatsAppIcon className="relative z-10 h-7 w-7" />
      </a>
    </div>
  );
}
