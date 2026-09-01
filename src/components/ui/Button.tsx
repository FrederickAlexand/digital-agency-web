import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-cta-blue text-white hover:bg-[#152a45] border border-cta-gold/30 shadow-sm",
  secondary:
    "bg-transparent text-navy border border-slate-border hover:border-navy/30 hover:bg-slate-50",
  outline:
    "bg-white text-navy border border-slate-border hover:border-cta-gold/50 hover:bg-slate-50",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
