import Image from "next/image";
import { team } from "@/content/team";
import { ui } from "@/content/ui";
import type { Translator } from "@/i18n/config";
import { BulletList } from "@/components/ui/bullet-list";
import { buttonStyles } from "@/components/ui/buttons";
import { ExternalLink } from "@/components/ui/external-link";
import { GitHubIcon, LinkedInIcon, LinktreeIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag-list";

export function TeamSection({ t }: { t: Translator }) {
  const newTab = t(ui.projects.opensNewTab);
  return (
    <section id="team" aria-labelledby="team-title" className="scroll-mt-20 border-t border-line bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="team-title" eyebrow={t(ui.nav.team)} title={t(ui.sections.team.title)} intro={t(ui.sections.team.intro)} />
        <ul className="grid gap-6 lg:grid-cols-2">
          {team.map((member) => (
            <li key={member.id} data-reveal className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-line bg-bg p-7 transition hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
                <div className="flex items-center gap-5">
                  <span className="rounded-full bg-gradient-to-br from-accent to-highlight p-[3px]">
                    <Image
                      src={member.photo}
                      alt={`${t(ui.team.photoOf)} ${member.name}`}
                      width={96}
                      height={96}
                      className="size-24 rounded-full border-4 border-bg object-cover"
                    />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">{t(member.role)}</p>
                  </div>
                </div>
                <p className="mt-5 leading-relaxed">{t(member.bio)}</p>
                <BulletList className="mt-4" items={member.highlights.map(t)} />
                <TagList items={member.skills} label="Skills" />
                <div className="mt-auto flex flex-wrap gap-3 pt-6 text-sm font-medium">
                  <ExternalLink href={member.links.linktree} newTabLabel={newTab} className={buttonStyles.primary}>
                    <LinktreeIcon className="size-4" />
                    {t(ui.team.resume)}
                  </ExternalLink>
                  <ExternalLink href={member.links.linkedin} newTabLabel={newTab} className={buttonStyles.secondary}>
                    <LinkedInIcon className="size-4" />
                    LinkedIn
                  </ExternalLink>
                  <ExternalLink href={member.links.github} newTabLabel={newTab} className={buttonStyles.secondary}>
                    <GitHubIcon className="size-4" />
                    GitHub
                  </ExternalLink>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
