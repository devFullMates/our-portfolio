import Image from "next/image";

type BrowserFrameProps = {
  src: string;
  alt: string;
  url: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** Screenshot inside a minimal browser window. */
export function BrowserFrame({ src, alt, url, sizes, priority, className = "" }: BrowserFrameProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line-strong bg-bg shadow-2xl shadow-black/20 ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-surface-hover px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto truncate rounded-md bg-bg/60 px-3 py-0.5 font-mono text-[11px] text-muted">{url}</span>
      </div>
      <Image src={src} alt={alt} width={1440} height={900} sizes={sizes} priority={priority} className="block h-auto w-full" />
    </div>
  );
}
