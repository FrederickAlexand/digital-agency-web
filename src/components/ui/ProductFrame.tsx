import Image from "next/image";
import { type ReactNode } from "react";

interface ProductFrameProps {
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode;
}

export default function ProductFrame({
  src,
  alt,
  className = "",
  children,
}: ProductFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#0b1220] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 hidden h-5 flex-1 rounded-md bg-white/5 sm:block" />
      </div>
      <div className="relative aspect-[16/10] bg-navy">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          unoptimized
        />
      </div>
      {children}
    </div>
  );
}
