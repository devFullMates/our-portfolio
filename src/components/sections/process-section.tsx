import { processSteps } from "@/content/process";
import { ui } from "@/content/ui";
import type { Translator } from "@/i18n/config";
import { SectionHeading } from "@/components/ui/section-heading";

/** Growth stages for each step, drawn in the logo's style: seed → sprout → plant → tree. */
function StageIcon({ stage }: { stage: number }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="size-10">
      {stage === 0 && <ellipse cx="20" cy="26" rx="6" ry="4.5" fill="#f7892a" />}
      {stage >= 1 && <path d="M20 34V20" stroke="#f7892a" strokeWidth="3" strokeLinecap="round" />}
      {stage >= 1 && <path d="M20 24c-6 0-10-4-10-10 6 0 10 4 10 10Z" fill="#5aa462" />}
      {stage >= 2 && <path d="M20 20c0-7 5-11 12-11 0 7-5 11-12 11Z" fill="#5aa462" />}
      {stage >= 3 && <circle cx="20" cy="9" r="5" fill="#5aa462" />}
    </svg>
  );
}

export function ProcessSection({ t }: { t: Translator }) {
  return (
    <section id="process" aria-labelledby="process-title" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="process-title" eyebrow={t(ui.nav.process)} title={t(ui.sections.process.title)} intro={t(ui.sections.process.intro)} align="center" />
        <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <span aria-hidden="true" className="absolute top-8 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-highlight/60 via-accent/60 to-accent lg:block" />
          {processSteps.map((step, i) => (
            <li key={step.title.en} data-reveal className="relative rounded-2xl border border-line bg-bg p-6 text-center">
              <span className="relative mx-auto grid size-16 place-items-center rounded-full border border-line-strong bg-surface-hover shadow-sm">
                <StageIcon stage={i} />
              </span>
              <p className="mt-4 font-mono text-xs text-highlight">{`0${i + 1}`}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink">{t(step.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed">{t(step.text)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
