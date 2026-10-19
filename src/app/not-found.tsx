import Link from "next/link";
import "@/styles/globals.css";

// Reached for URLs the proxy does not redirect to a locale (e.g. /missing.png).
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-dvh flex-col items-center justify-center gap-3 p-4 text-center font-sans">
        <h1 className="text-2xl font-bold text-ink">404</h1>
        <p>This page could not be found.</p>
        <Link href="/" className="text-accent underline">
          devFullMates
        </Link>
      </body>
    </html>
  );
}
