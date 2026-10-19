import { RichText } from "./rich-text";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

/** Section title with a code-flavored eyebrow: { services }. */
export function SectionHeading({ id, eyebrow, title, intro, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div data-reveal className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="font-mono text-sm text-highlight">
        <span aria-hidden="true">{"{ "}</span>
        {eyebrow.toLowerCase()}
        <span aria-hidden="true">{" }"}</span>
      </p>
      <h2 id={id} className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-pretty">
          <RichText text={intro} />
        </p>
      )}
    </div>
  );
}
