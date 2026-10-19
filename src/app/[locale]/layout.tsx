import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { themeInitScript } from "@/components/preferences/theme-script";
import { company, siteUrl } from "@/config/site";
import { ui } from "@/content/ui";
import { getTranslator, isLocale, localeConfig, locales } from "@/i18n/config";
import "@/styles/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin", "latin-ext"], display: "swap" });

// Pre-render every locale at build time: static HTML is best for SEO and speed.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getTranslator(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: t(ui.metadata.title),
    description: t(ui.metadata.description),
    applicationName: company.name,
    authors: [{ name: "Larissa Oliveira" }, { name: "Raissa Toledo" }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(locales.map((code) => [localeConfig[code].htmlLang, `/${code}`])),
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: company.name,
      url: `/${locale}`,
      title: t(ui.metadata.title),
      description: t(ui.metadata.description),
      locale: localeConfig[locale].ogLocale,
      alternateLocale: locales.filter((code) => code !== locale).map((code) => localeConfig[code].ogLocale),
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#152431" },
  ],
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={localeConfig[locale].htmlLang} suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="leading-relaxed">{children}</body>
    </html>
  );
}
