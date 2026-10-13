import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader, SiteFooter } from "@/components/layout/SiteChrome";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Meridian Digital delivers high-integrity advisory and custom software development. Transform business challenges into scalable digital solutions.",
  keywords: [
    "software development",
    "B2B",
    "enterprise software",
    "digital advisory",
    "custom software",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
