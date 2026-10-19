import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { Spotlight } from "@/components/layout/spotlight";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TeamSection } from "@/components/sections/team-section";
import { TechStrip } from "@/components/sections/tech-strip";
import { JsonLd } from "@/components/seo/json-ld";
import { ui } from "@/content/ui";
import { getTranslator, isLocale } from "@/i18n/config";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getTranslator(locale);

  return (
    <>
      <JsonLd locale={locale} t={t} />
      <SkipLink label={t(ui.skip)} />
      <Spotlight />
      <div id="top" />
      <SiteHeader locale={locale} t={t} />
      <main id="content" tabIndex={-1} className="outline-none">
        <HeroSection t={t} />
        <TechStrip t={t} />
        <ServicesSection t={t} />
        <ProjectsSection t={t} />
        <ProcessSection t={t} />
        <TeamSection t={t} />
        <ContactSection t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
