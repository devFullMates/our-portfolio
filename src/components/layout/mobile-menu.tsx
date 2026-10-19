"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

type MobileMenuProps = {
  links: { href: string; label: string }[];
  labels: { open: string; close: string; nav: string };
  footer: ReactNode;
};

/** Collapsible navigation for small screens. */
export function MobileMenu({ links, labels, footer }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((value) => !value)}
        className="grid size-9 place-items-center rounded-full border border-line-strong text-ink transition hover:border-accent hover:text-accent"
      >
        {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-16 border-b border-line bg-bg px-4 pt-2 pb-6 shadow-xl backdrop-blur-md sm:px-6"
      >
        <nav aria-label={labels.nav}>
          <ul className="divide-y divide-line">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-lg font-semibold text-ink hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 sm:hidden">{footer}</div>
      </div>
    </div>
  );
}
