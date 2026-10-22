// The real root layout (<html>, <body>) is app/[locale]/layout.tsx, because the
// lang attribute depends on the locale. This file only exists so that
// app/not-found.tsx has a layout to render in.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return children;
}
