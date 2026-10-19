"use client";

import { useEffect, useRef } from "react";

/** Soft light that follows the pointer on large screens. */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      ref.current?.style.setProperty("--x", `${event.clientX}px`);
      ref.current?.style.setProperty("--y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden transition duration-300 lg:block"
      style={{ background: "radial-gradient(600px at var(--x, -1000px) var(--y, -1000px), var(--spotlight), transparent 80%)" }}
    />
  );
}
