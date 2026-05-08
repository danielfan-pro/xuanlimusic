import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/components/language-provider";
import PageShell from "@/components/page-shell";

export const metadata = {
  title: "Xuanli School of Music",
  description: "Private strings and piano school with a classic, elegant bilingual website shell.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <PageShell>{children}</PageShell>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
