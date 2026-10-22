import { services, type ServiceIcon } from "@/content/services";
import { ui } from "@/content/ui";
import type { Translator } from "@/i18n/config";
import { EditIcon, GlobeIcon, LayoutIcon, PlugIcon, RocketIcon, StoreIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

const icons: Record<ServiceIcon, typeof LayoutIcon> = {
  layout: LayoutIcon,
  store: StoreIcon,
  edit: EditIcon,
  globe: GlobeIcon,
  plug: PlugIcon,
  rocket: RocketIcon,
};

export function ServicesSection({ t }: { t: Translator }) {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="services-title" eyebrow={t(ui.nav.services)} title={t(ui.sections.services.title)} intro={t(ui.sections.services.intro)} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <li
                key={service.icon}
                data-reveal
                className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface-hover hover:shadow-xl hover:shadow-accent/5"
              >
                <span className="absolute top-5 right-6 font-mono text-xs text-muted" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid size-12 place-items-center rounded-xl bg-accent/10 text-accent transition group-hover:scale-110 group-hover:bg-accent group-hover:text-on-accent">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{t(service.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed">{t(service.text)}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
