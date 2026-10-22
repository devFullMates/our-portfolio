import { ImageResponse } from "next/og";
import { ui } from "@/content/ui";
import { getTranslator, isLocale, locales } from "@/i18n/config";

export const alt = "devFullMates";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Share card for LinkedIn, WhatsApp and search results, one per language. */
export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslator(isLocale(locale) ? locale : "en");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#152431", color: "#ffffff" }}>
        <svg width="260" height="198" viewBox="0 0 105 80">
          <g fill="none" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M27 11c-8 0-10 2-10 8v14c0 4-3 6-8 7 5 1 8 3 8 7v14c0 6 2 8 10 8" />
            <path d="M78 11c8 0 10 2 10 8v14c0 4 3 6 8 7-5 1-8 3-8 7v14c0 6-2 8-10 8" />
          </g>
          <path d="M28 27c12 0 19 6 20 17-12 0-19-6-20-17Z" fill="#5aa462" />
          <path d="M77 23c0 13-9 19-25 19 0-12 10-19 25-19Z" fill="#5aa462" />
          <path d="M58 33c-5 4-8 9-8 15v14" fill="none" stroke="#f7892a" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, marginTop: 12 }}>
          dev<span style={{ color: "#6cc07a" }}>Full</span>Mates
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#9fb0bf", marginTop: 16 }}>{t(ui.headline)}</div>
        <div style={{ display: "flex", fontSize: 28, color: "#f7892a", marginTop: 28 }}>Larissa Oliveira & Raissa Toledo</div>
      </div>
    ),
    size,
  );
}
