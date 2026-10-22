import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  /** Screen-reader note appended to the link, e.g. "(opens in a new tab)". */
  newTabLabel: string;
  children: ReactNode;
};

/** Link that opens in a new tab and says so to screen readers. */
export function ExternalLink({ newTabLabel, children, ...props }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noreferrer noopener" {...props}>
      {children}
      <span className="sr-only"> {newTabLabel}</span>
    </a>
  );
}
