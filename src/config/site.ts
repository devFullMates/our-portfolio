import type { Localized } from "@/i18n/config";

/** Public URL without a trailing slash. Set NEXT_PUBLIC_SITE_URL once there is a custom domain. */
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");

export const company = {
  name: "devFullMates",
  email: "oliveir5uwm@gmail.com",
  whatsapp: "5521998836527",
  whatsappDisplay: "+55 21 99883-6527",
  github: "https://github.com/devFullMates",
  location: {
    en: "Rio de Janeiro, Brazil · Working worldwide",
    pt: "Rio de Janeiro, Brasil · Atendemos no mundo todo",
    es: "Río de Janeiro, Brasil · Trabajamos con todo el mundo",
  } satisfies Localized,
} as const;

export const sectionIds = ["services", "projects", "process", "team", "contact"] as const;
export type SectionId = (typeof sectionIds)[number];

export function whatsappLink(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
