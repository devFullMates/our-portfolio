import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { localeConfig, locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((code) => [localeConfig[code].htmlLang, `${siteUrl}/${code}`]));
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
