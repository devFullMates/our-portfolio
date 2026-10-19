/**
 * Renders a headline where the **word** gets the brand treatment:
 * green text, a hand-drawn underline and a sprout that grows on load.
 */
export function GrowHighlight({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
        part.startsWith("**") ? (
          <span key={i} className="relative inline-block whitespace-nowrap text-accent">
            {part.slice(2, -2)}
            <svg
              aria-hidden="true"
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
              className="grow-underline absolute -bottom-2 left-0 h-3 w-[calc(100%-0.4em)] text-highlight"
            >
              <path d="M3 14C40 6 90 4 197 9" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <svg aria-hidden="true" viewBox="0 0 40 40" className="ml-[0.02em] inline-block size-[0.48em] align-baseline">
              <path className="grow-stem" d="M20 38V24c0-5 2-9 6-12" fill="none" stroke="#f7892a" strokeWidth="3.5" strokeLinecap="round" />
              <path className="grow-leaf grow-leaf-left" d="M19 26C10 26 4 20 3 11c9 0 15 6 16 15Z" fill="#5aa462" />
              <path className="grow-leaf grow-leaf-right" d="M23 19c0-10 7-16 16-17 0 10-7 16-16 17Z" fill="#5aa462" />
            </svg>
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
