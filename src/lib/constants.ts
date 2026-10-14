export const SITE_NAME = "Focus Digital Labs";
export const SITE_TAGLINE = "High-Integrity Advisory & Custom Software";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const CONTACT_INFO = {
  email: "frederickchang75@gmail.com",
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
  { value: "", label: "Pilih rentang anggaran" },
  { value: "under-2jt", label: "Di bawah Rp 2 juta" },
  { value: "2jt-7jt", label: "Rp 2 juta – Rp 7 juta" },
  { value: "7jt-20jt", label: "Rp 7 juta – Rp 20 juta" },
  { value: "20jt-50jt", label: "Rp 20 juta – Rp 50 juta" },
  { value: "above-50jt", label: "Di atas Rp 50 juta" },
];

export function getBudgetLabel(value?: string) {
  if (!value) return "Tidak disebutkan";
  return BUDGET_OPTIONS.find((option) => option.value === value)?.label ?? value;
}
