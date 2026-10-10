"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

// Landing page portfolio memiliki identitas navigasi sendiri.
export function SiteHeader() {
  const pathname = usePathname();
  return pathname === "/portfolio/interior-design" ? null : <Header />;
}

export function SiteFooter() {
  const pathname = usePathname();
  return pathname === "/portfolio/interior-design" ? null : <Footer />;
}
