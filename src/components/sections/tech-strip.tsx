import { ui } from "@/content/ui";
import type { Translator } from "@/i18n/config";

const technologies = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "NestJS", "WordPress", "Contentful",
  "GraphQL", "PostgreSQL", "MongoDB", "Playwright", "Storybook", "Vercel", "AWS", "Figma",
];

/** Endless ribbon of the tools we use. The duplicate copy is decorative only. */
export function TechStrip({ t }: { t: Translator }) {
  return (
    <div className="border-y border-line bg-surface py-5">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee flex w-max gap-10">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-label={copy === 0 ? t(ui.techStripLabel) : undefined}
              aria-hidden={copy === 1 || undefined}
              className="flex shrink-0 items-center gap-10 font-mono text-sm text-muted"
            >
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-10 whitespace-nowrap">
                  {tech}
                  <span className="text-highlight" aria-hidden="true">
                    ✦
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
