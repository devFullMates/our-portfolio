export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#content"
      className="sr-only rounded bg-accent px-4 py-3 text-sm font-bold tracking-widest text-on-accent uppercase focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50"
    >
      {label}
    </a>
  );
}
