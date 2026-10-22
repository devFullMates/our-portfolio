import { projects } from "@/content/projects";
import { ui } from "@/content/ui";
import type { Translator } from "@/i18n/config";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { BulletList } from "@/components/ui/bullet-list";
import { buttonStyles } from "@/components/ui/buttons";
import { ExternalLink } from "@/components/ui/external-link";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag-list";

export function ProjectsSection({ t }: { t: Translator }) {
  const newTab = t(ui.projects.opensNewTab);
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20 border-y border-line bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="projects-title" eyebrow={t(ui.nav.projects)} title={t(ui.sections.projects.title)} intro={t(ui.sections.projects.intro)} />
        <ol className="space-y-24">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <li key={project.id}>
                <article data-reveal className="grid items-center gap-10 lg:grid-cols-12">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    tabIndex={-1}
                    aria-hidden="true"
                    className={`group block lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}
                  >
                    <BrowserFrame
                      src={project.image}
                      alt=""
                      url={project.displayUrl}
                      sizes="(min-width: 1024px) 640px, 100vw"
                      className="transition duration-500 group-hover:-translate-y-1 group-hover:shadow-accent/20"
                    />
                  </a>
                  <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                    <p className="font-display text-6xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_var(--line-strong)]" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-xs font-semibold tracking-widest text-highlight uppercase">{t(project.client)}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">{project.name}</h3>
                    <p className="mt-4 leading-relaxed">{t(project.summary)}</p>
                    <BulletList className="mt-4" items={project.features.map(t)} />
                    <TagList items={project.tech} label="Tech" />
                    <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                      <ExternalLink href={project.url} newTabLabel={newTab} className={`${buttonStyles.primary} px-5 py-2.5`}>
                        {t(ui.projects.visit)}
                        <span className="sr-only">: {project.name}</span>
                        <ArrowUpRightIcon className="size-4" />
                      </ExternalLink>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
