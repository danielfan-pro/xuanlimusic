"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import SectionReveal from "@/components/section-reveal";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--accent)]">{t.hero.eyebrow}</p>
          <h1 className="mt-6 max-w-3xl font-heading text-6xl leading-[0.95] text-[color:var(--navy)] sm:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/teachers"
              className="rounded-full bg-[color:var(--navy)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] !text-white transition hover:-translate-y-0.5"
            >
              {t.hero.primaryCta}
            </Link>
            <Link
              href="/recitals"
              className="rounded-full border border-[color:var(--line)] bg-white/80 px-6 py-3 text-sm uppercase tracking-[0.18em] text-[color:var(--navy)] transition hover:-translate-y-0.5"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {t.hero.highlights.map((item, index) => (
              <SectionReveal
                key={item}
                delay={120 * (index + 1)}
                className="rounded-[1.5rem] border border-[color:var(--line)] bg-white/75 p-5 shadow-[0_12px_30px_rgba(18,49,79,0.08)]"
              >
                <p className="text-sm leading-7 text-[color:var(--muted)]">{item}</p>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="relative overflow-hidden rounded-[2.4rem] border border-[color:var(--line)] bg-[linear-gradient(165deg,rgba(255,255,255,0.92),rgba(208,228,241,0.7))] p-8 shadow-[0_35px_90px_rgba(18,49,79,0.12)]">
            <div className="absolute -right-14 top-8 h-36 w-36 rounded-full bg-[rgba(154,198,228,0.35)] blur-3xl" />
            <div className="absolute -left-10 bottom-8 h-28 w-28 rounded-full bg-[rgba(18,49,79,0.12)] blur-2xl" />
            <div className="relative rounded-[2rem] border border-dashed border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(244,249,252,0.95),rgba(255,251,241,0.95))] p-10">
              <div className="flex min-h-[27rem] flex-col justify-between">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
                  <span>Studio Mark</span>
                  <span>Since 2026</span>
                </div>
                <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/90 font-heading text-center text-3xl text-[color:var(--navy)] shadow-inner">
                  {t.hero.logo}
                </div>
                <div className="grid gap-4 rounded-[1.5rem] bg-[color:var(--surface-soft)] p-6">
                  <p className="font-heading text-2xl text-[color:var(--navy)]">Xuanli Music Studio</p>
                  <p className="text-sm leading-7 text-[color:var(--muted)]">
                    Violin, piano, recital preparation, audition guidance, and a thoughtful path for serious study.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
