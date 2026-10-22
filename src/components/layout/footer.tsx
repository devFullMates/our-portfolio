import { company, sectionIds, whatsappLink } from "@/config/site";
import { ui } from "@/content/ui";
import type { Translator } from "@/i18n/config";
import { ExternalLink } from "@/components/ui/external-link";
import { ArrowUpRightIcon, GitHubIcon, MailIcon, WhatsAppIcon } from "@/components/ui/icons";
import { LogoMark } from "@/components/ui/logo";

export function Footer({ t }: { t: Translator }) {
  const newTab = t(ui.projects.opensNewTab);
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_auto]">
        <div>
          <p className="flex items-center gap-2 text-ink">
            <LogoMark className="h-8 w-auto" />
            <span className="font-display text-xl font-bold tracking-tight">
              dev<span className="text-accent">Full</span>Mates
            </span>
          </p>
          <p className="mt-3 max-w-xs text-sm">{t(ui.footer.tagline)}</p>
          <p className="mt-1 text-sm text-muted">{t(company.location)}</p>
        </div>
        <nav aria-label={t(ui.navLabel)}>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {sectionIds.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-accent">
                  {t(ui.nav[id])}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex items-start gap-4" aria-label={t(ui.socialLabel)}>
          <li>
            <ExternalLink href={company.github} newTabLabel={`GitHub ${newTab}`} className="block hover:text-accent" title="GitHub">
              <GitHubIcon className="size-5" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={whatsappLink(t(ui.contact.whatsappMessage))} newTabLabel={`WhatsApp ${newTab}`} className="block hover:text-accent" title="WhatsApp">
              <WhatsAppIcon className="size-5" />
            </ExternalLink>
          </li>
          <li>
            <a href={`mailto:${company.email}`} className="block hover:text-accent" title="Email">
              <span className="sr-only">Email</span>
              <MailIcon className="size-5" />
            </a>
          </li>
        </ul>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 border-t border-line px-4 py-5 text-xs text-muted sm:px-6">
        <p>© devFullMates</p>
        <a href="#top" className="inline-flex items-center gap-1 hover:text-accent">
          {t(ui.footer.backToTop)}
          <ArrowUpRightIcon className="size-3.5 -rotate-45" />
        </a>
      </div>
    </footer>
  );
}
