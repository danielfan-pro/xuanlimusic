"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--surface-soft)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-[color:var(--muted)] lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="font-heading text-2xl text-[color:var(--navy)]">Xuanli Music</p>
          <p className="mt-2 max-w-xl">{t.footer.text}</p>
        </div>
        <div className="flex gap-5 uppercase tracking-[0.18em]">
          <Link href="/about">{t.nav.about}</Link>
          <Link href="/teachers">{t.nav.teachers}</Link>
          <Link href="/contact">{t.nav.contact}</Link>
        </div>
      </div>
    </footer>
  );
}
