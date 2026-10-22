import { sectionIds } from "@/config/site";
import { ui } from "@/content/ui";
import type { Locale, Translator } from "@/i18n/config";
import { LanguageSwitcher } from "@/components/preferences/language-switcher";
import { ThemeToggle } from "@/components/preferences/theme-toggle";
import { LogoMark } from "@/components/ui/logo";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader({ locale, t }: { locale: Locale; t: Translator }) {
  const links = sectionIds.map((id) => ({ href: `#${id}`, label: t(ui.nav[id]) }));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-ink" aria-label="devFullMates">
          <LogoMark className="h-8 w-auto" />
          <span className="font-display text-xl font-bold tracking-tight">
            dev<span className="text-accent">Full</span>Mates
          </span>
        </a>

        <nav aria-label={t(ui.navLabel)} className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="rounded-full px-3 py-2 transition hover:bg-accent/10 hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageSwitcher current={locale} label={t(ui.languageLabel)} />
          </div>
          <ThemeToggle labels={{ toLight: t(ui.theme.toLight), toDark: t(ui.theme.toDark) }} />
          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition hover:bg-accent-hover md:inline-flex"
          >
            {t(ui.hero.primaryCta)}
          </a>
          <MobileMenu
            links={links}
            labels={{ open: t(ui.menu.open), close: t(ui.menu.close), nav: t(ui.navLabel) }}
            footer={<LanguageSwitcher current={locale} label={t(ui.languageLabel)} />}
          />
        </div>
      </div>
    </header>
  );
}
