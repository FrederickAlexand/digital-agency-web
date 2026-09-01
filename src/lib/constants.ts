export const SITE_NAME = "Meridian Digital";
export const SITE_TAGLINE = "High-Integrity Advisory & Custom Software";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const CONTACT_INFO = {
  email: "hello@meridiandigital.com",
  location: "Indonesia · Remote-First",
  phone: "+62 811 868 3717",
};

export const BUDGET_OPTIONS = [
  { value: "", label: "Select budget range" },
  { value: "under-25k", label: "Under $25,000" },
  { value: "25k-50k", label: "$25,000 – $50,000" },
  { value: "50k-100k", label: "$50,000 – $100,000" },
  { value: "100k-plus", label: "$100,000+" },
];
