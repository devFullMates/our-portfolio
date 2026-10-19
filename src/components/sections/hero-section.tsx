import { ui } from "@/content/ui";
import type { Translator } from "@/i18n/config";
import { GrowHighlight } from "@/components/ui/grow-highlight";
import { ArrowDownIcon } from "@/components/ui/icons";

export function HeroSection({ t }: { t: Translator }) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="dot-grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute -top-40 left-1/4 -z-10 size-[26rem] rounded-full bg-accent/15 blur-3xl" />
      <div aria-hidden="true" className="absolute -top-20 right-1/4 -z-10 size-[20rem] rounded-full bg-highlight/10 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 pt-10 pb-8 text-center sm:px-6 lg:pt-12">
        <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3 py-1 font-mono text-xs text-body">
          <span className="size-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />
          {t(ui.hero.eyebrow)}
        </p>
        <h1
          id="hero-title"
          className="mt-5 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-ink sm:text-5xl lg:text-[3.4rem]"
        >
          <GrowHighlight text={t(ui.hero.title)} />
        </h1>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-pretty sm:text-lg">{t(ui.hero.text)}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-semibold text-on-accent shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            {t(ui.hero.primaryCta)}
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 font-semibold text-ink transition hover:border-accent hover:text-accent"
          >
            {t(ui.hero.secondaryCta)}
            <ArrowDownIcon className="size-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-10 sm:px-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {ui.stats.map((stat) => (
            <div key={stat.value} className="flex flex-col-reverse justify-end gap-1 bg-bg px-4 py-3 text-center sm:py-4">
              <dt className="text-sm leading-snug">{t(stat.label)}</dt>
              <dd className="font-display text-2xl font-bold text-ink">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
