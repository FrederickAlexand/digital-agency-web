export const SITE_NAME = "Focus Digital Labs";
export const SITE_TAGLINE = "High-Integrity Advisory & Custom Software";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const CONTACT_INFO = {
  email: "hello@fdlabs.com",
  location: "Indonesia · Remote-First",
  phone: "+62 811 868 3717",
  whatsapp: {
    name: "Frederick Alexander",
    displayNumber: "0811-8683-717",
    e164: "628118683717",
    prefilledMessage:
      "Hello Frederick, I would like to discuss a software project with Focus Digital Labs.",
  },
};

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(
    message ?? CONTACT_INFO.whatsapp.prefilledMessage
  );
  return `https://wa.me/${CONTACT_INFO.whatsapp.e164}?text=${text}`;
}

export const BUDGET_OPTIONS = [
  { value: "", label: "Select budget range" },
  { value: "under-25k", label: "Under $25,000" },
  { value: "25k-50k", label: "$25,000 – $50,000" },
  { value: "50k-100k", label: "$50,000 – $100,000" },
  { value: "100k-plus", label: "$100,000+" },
];
