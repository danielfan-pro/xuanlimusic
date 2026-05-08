"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/teachers", key: "teachers" },
  { href: "/recitals", key: "recitals" },
  { href: "/achievements", key: "achievements" },
  { href: "/contact", key: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick() {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-[color:var(--surface-glass)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link href="/" className="group flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/80 text-center text-[0.65rem] uppercase tracking-[0.35em] text-[color:var(--navy)] shadow-sm">
            XM
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
              {t.hero.headerLabel}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.slice(1).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`text-sm tracking-[0.18em] transition ${
                  active ? "text-[color:var(--navy)]" : "text-[color:var(--muted)] hover:text-[color:var(--navy)]"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-white/80 p-1 shadow-sm"
            aria-label="Language selector"
            role="group"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm whitespace-nowrap transition sm:gap-2 sm:px-3 ${
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
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm whitespace-nowrap transition sm:gap-2 sm:px-3 ${
                language === "zh"
                  ? "bg-[color:var(--navy)] !text-white"
                  : "text-[color:var(--navy)] hover:bg-[rgba(18,49,79,0.06)]"
              }`}
              aria-pressed={language === "zh"}
            >
              <span aria-hidden="true">🇨🇳</span>
              <span className="font-medium whitespace-nowrap">中文</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/80 text-[color:var(--navy)] shadow-sm transition hover:bg-white lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-[color:var(--line)] bg-[rgba(255,255,255,0.94)] px-6 py-5 shadow-[0_20px_45px_rgba(18,49,79,0.08)] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.18em] transition ${
                    active
                      ? "bg-[color:var(--navy)] !text-white"
                      : "text-[color:var(--navy)] hover:bg-[rgba(18,49,79,0.06)]"
                  }`}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
