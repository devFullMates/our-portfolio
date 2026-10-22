import { company, siteUrl } from "@/config/site";
import { team } from "@/content/team";
import { ui } from "@/content/ui";
import { localeConfig, type Locale, type Translator } from "@/i18n/config";

/** schema.org data so search engines understand the business and the people behind it. */
export function JsonLd({ locale, t }: { locale: Locale; t: Translator }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    url: `${siteUrl}/${locale}`,
    logo: `${siteUrl}/icon.svg`,
    image: `${siteUrl}/${locale}/opengraph-image`,
    description: t(ui.metadata.description),
    inLanguage: localeConfig[locale].htmlLang,
    email: company.email,
    telephone: `+${company.whatsapp}`,
    areaServed: "Worldwide",
    address: { "@type": "PostalAddress", addressLocality: "Rio de Janeiro", addressCountry: "BR" },
    sameAs: [company.github],
    founder: team.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: t(member.role),
      sameAs: [member.links.linkedin, member.links.github, member.links.linktree],
    })),
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all values are our own static content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
