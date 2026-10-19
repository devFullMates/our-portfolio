import { company, whatsappLink } from "@/config/site";
import { team } from "@/content/team";
import { ui } from "@/content/ui";
import type { Translator } from "@/i18n/config";
import { ExternalLink } from "@/components/ui/external-link";
import { GitHubIcon, LinkedInIcon, LinktreeIcon, MailIcon, WhatsAppIcon } from "@/components/ui/icons";
import { LogoMark } from "@/components/ui/logo";

/** Closing call to action. Always in the brand navy, in both themes. */
export function ContactSection({ t }: { t: Translator }) {
  const newTab = t(ui.projects.opensNewTab);
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div
        data-reveal
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1d3346] to-[#152431] px-6 ring-1 ring-white/10 py-14 text-[#9fb0bf] shadow-2xl sm:px-12 sm:py-16"
      >
        <div aria-hidden="true" className="absolute -top-24 -right-24 size-80 rounded-full bg-[#5aa462]/25 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-28 -left-20 size-72 rounded-full bg-[#f7892a]/15 blur-3xl" />
        <LogoMark aria-hidden="true" className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-auto text-white opacity-[0.06]" />

        <div className="relative grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-mono text-sm text-[#f7892a]">{`{ ${t(ui.contact.eyebrow).toLowerCase()} }`}</p>
            <h2 id="contact-title" className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance text-[#e8eef2] sm:text-5xl">
              {t(ui.contact.title)}
            </h2>
            <p className="mt-4 max-w-lg text-lg">{t(ui.contact.text)}</p>
            <div className="mt-8 flex flex-wrap gap-3 font-semibold">
              <ExternalLink
                href={whatsappLink(t(ui.contact.whatsappMessage))}
                newTabLabel={newTab}
                className="inline-flex items-center gap-2 rounded-full bg-[#6cc07a] px-6 py-3 text-[#152431] transition hover:-translate-y-0.5 hover:bg-[#8fd39a]"
              >
                <WhatsAppIcon className="size-5" />
                {t(ui.contact.whatsapp)}
              </ExternalLink>
              <a
                href={`mailto:${company.email}?subject=${encodeURIComponent(t(ui.contact.emailSubject))}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[#e8eef2] transition hover:border-[#6cc07a] hover:text-[#6cc07a]"
              >
                <MailIcon className="size-5" />
                {t(ui.contact.email)}
              </a>
            </div>
          </div>

          <dl className="grid content-start gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm">
            <div>
              <dt className="text-[#8597a8]">WhatsApp</dt>
              <dd className="mt-0.5 text-base font-medium text-[#e8eef2]">{company.whatsappDisplay}</dd>
            </div>
            <div>
              <dt className="text-[#8597a8]">Email</dt>
              <dd className="mt-0.5 text-base font-medium break-all text-[#e8eef2]">{company.email}</dd>
            </div>
            {team.map((member) => (
              <div key={member.id}>
                <dt className="text-[#8597a8]">{member.name}</dt>
                <dd className="mt-1.5 flex gap-4 text-[#e8eef2]">
                  <ExternalLink href={member.links.linkedin} newTabLabel={`LinkedIn ${member.name} ${newTab}`} className="hover:text-[#6cc07a]" title="LinkedIn">
                    <LinkedInIcon className="size-5" />
                  </ExternalLink>
                  <ExternalLink href={member.links.linktree} newTabLabel={`Linktree ${member.name} ${newTab}`} className="hover:text-[#6cc07a]" title="Linktree">
                    <LinktreeIcon className="size-5" />
                  </ExternalLink>
                  <ExternalLink href={member.links.github} newTabLabel={`GitHub ${member.name} ${newTab}`} className="hover:text-[#6cc07a]" title="GitHub">
                    <GitHubIcon className="size-5" />
                  </ExternalLink>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
