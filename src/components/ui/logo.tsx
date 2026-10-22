import type { SVGProps } from "react";

const BRAND_GREEN = "#5aa462";
const BRAND_ORANGE = "#f7892a";

/** devFullMates mark: code braces around a sprout. Braces follow the text color, so it works on both themes. */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 105 80" aria-hidden="true" focusable="false" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M27 11c-8 0-10 2-10 8v14c0 4-3 6-8 7 5 1 8 3 8 7v14c0 6 2 8 10 8" />
        <path d="M78 11c8 0 10 2 10 8v14c0 4 3 6 8 7-5 1-8 3-8 7v14c0 6-2 8-10 8" />
      </g>
      <path d="M28 27c12 0 19 6 20 17-12 0-19-6-20-17Z" fill={BRAND_GREEN} />
      <path d="M77 23c0 13-9 19-25 19 0-12 10-19 25-19Z" fill={BRAND_GREEN} />
      <path d="M58 33c-5 4-8 9-8 15v14" fill="none" stroke={BRAND_ORANGE} strokeWidth={4.5} strokeLinecap="round" />
    </svg>
  );
}
