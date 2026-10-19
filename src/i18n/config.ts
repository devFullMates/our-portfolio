export const locales = ["en", "pt", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** A string in every supported language. */
export type Localized = Record<Locale, string>;

export const localeConfig: Record<Locale, { htmlLang: string; ogLocale: string; name: string }> = {
  en: { htmlLang: "en", ogLocale: "en_US", name: "English" },
  pt: { htmlLang: "pt-BR", ogLocale: "pt_BR", name: "Português" },
  es: { htmlLang: "es", ogLocale: "es_ES", name: "Español" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/** Returns a translator bound to one locale: t(localized) → string. */
export function getTranslator(locale: Locale) {
  return (text: Localized) => text[locale];
}

export type Translator = ReturnType<typeof getTranslator>;
