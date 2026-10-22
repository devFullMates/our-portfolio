import { localeConfig, locales, type Locale } from "@/i18n/config";

/** Plain links to each language version, so search engines can crawl all of them. */
export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  return (
    <nav aria-label={label}>
      <ul className="flex rounded-full border border-line-strong p-0.5 font-mono text-xs">
        {locales.map((code) => {
          const isCurrent = code === current;
          return (
            <li key={code}>
              <a
                href={`/${code}`}
                hrefLang={localeConfig[code].htmlLang}
                lang={localeConfig[code].htmlLang}
                aria-current={isCurrent ? "page" : undefined}
                aria-label={localeConfig[code].name}
                className={`block rounded-full px-2.5 py-1 uppercase transition ${
                  isCurrent ? "bg-accent text-on-accent" : "text-body hover:text-accent"
                }`}
              >
                {code}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
