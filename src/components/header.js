"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";

const navItems = [
  { href: "/about", key: "about" },
  { href: "/teachers", key: "teachers" },
  { href: "/recitals", key: "recitals" },
  { href: "/achievements", key: "achievements" },
  { href: "/contact", key: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-[color:var(--surface-glass)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link href="/" className="group flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/80 text-center text-[0.65rem] uppercase tracking-[0.35em] text-[color:var(--navy)] shadow-sm">
            XM
          </div>
          <div>
            <p className="font-heading text-2xl text-[color:var(--navy)]">Xuanli Music</p>
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
              Strings & Piano Studio
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-[0.18em] transition ${
                  active ? "text-[color:var(--navy)]" : "text-[color:var(--muted)] hover:text-[color:var(--navy)]"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div
          className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-white/80 p-1 shadow-sm"
          aria-label="Language selector"
          role="group"
        >
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm transition ${
              language === "en"
                ? "bg-[color:var(--navy)] !text-white"
                : "text-[color:var(--navy)] hover:bg-[rgba(18,49,79,0.06)]"
            }`}
            aria-pressed={language === "en"}
          >
            <span aria-hidden="true">🇺🇸</span>
            <span className="font-medium">EN</span>
          </button>
          <button
            type="button"
            onClick={() => setLanguage("zh")}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm transition ${
              language === "zh"
                ? "bg-[color:var(--navy)] !text-white"
                : "text-[color:var(--navy)] hover:bg-[rgba(18,49,79,0.06)]"
            }`}
            aria-pressed={language === "zh"}
          >
            <span aria-hidden="true">🇨🇳</span>
            <span className="font-medium">中文</span>
          </button>
        </div>
      </div>
    </header>
  );
}
