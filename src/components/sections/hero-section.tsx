import { projects } from "@/content/projects";
import { ui } from "@/content/ui";
import type { Translator } from "@/i18n/config";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { GrowHighlight } from "@/components/ui/grow-highlight";
import { ArrowDownIcon } from "@/components/ui/icons";

export function HeroSection({ t }: { t: Translator }) {
  const [front, back] = projects;
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="dot-grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute -top-32 -left-32 -z-10 size-[28rem] rounded-full bg-accent/15 blur-3xl" />
      <div aria-hidden="true" className="absolute top-40 -right-40 -z-10 size-[24rem] rounded-full bg-highlight/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:pt-24 lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3 py-1 font-mono text-xs text-body">
            <span className="size-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />
            {t(ui.hero.eyebrow)}
          </p>
          <h1 id="hero-title" className="mt-6 font-display text-5xl leading-[1.05] font-extrabold tracking-tight text-balance text-ink sm:text-6xl lg:text-[4.1rem]">
            <GrowHighlight text={t(ui.hero.title)} />
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty">{t(ui.hero.text)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-on-accent shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              {t(ui.hero.primaryCta)}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              {t(ui.hero.secondaryCta)}
              <ArrowDownIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none" role="group" aria-label={t(ui.hero.showcaseLabel)}>
          <BrowserFrame
            src={back.image}
            alt={`${t(ui.projects.screenshot)} ${back.displayUrl}`}
            url={back.displayUrl}
            sizes="(min-width: 1024px) 420px, 80vw"
            className="float-slow ml-auto w-[80%] rotate-3"
          />
          <BrowserFrame
            src={front.image}
            alt={`${t(ui.projects.screenshot)} ${front.displayUrl}`}
            url={front.displayUrl}
            sizes="(min-width: 1024px) 440px, 85vw"
            priority
            className="float-slower relative -mt-[38%] w-[85%] -rotate-2"
          />
          <span className="float-slow absolute top-[8%] -left-2 rounded-full border border-line-strong bg-bg px-3 py-1.5 text-xs font-semibold text-ink shadow-lg sm:-left-6">
            🌍 {t(ui.hero.badges.languages)}
          </span>
          <span className="float-slower absolute top-[46%] -right-1 rounded-full border border-line-strong bg-bg px-3 py-1.5 text-xs font-semibold text-ink shadow-lg sm:-right-4">
            ⚡ {t(ui.hero.badges.audit)}
          </span>
          <span className="float-slow absolute -bottom-4 left-[30%] rounded-full border border-line-strong bg-bg px-3 py-1.5 text-xs font-semibold text-ink shadow-lg">
            💬 {t(ui.hero.badges.booking)}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {ui.stats.map((stat) => (
            <div key={stat.value} className="flex flex-col-reverse gap-1 bg-bg p-5 sm:p-6">
              <dt className="text-sm leading-snug">{t(stat.label)}</dt>
              <dd className="font-display text-3xl font-bold text-ink sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
