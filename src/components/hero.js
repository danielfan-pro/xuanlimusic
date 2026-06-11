"use client";

import Image from "next/image";
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
          <div className="relative overflow-hidden rounded-[2.4rem] border border-[color:var(--line)] bg-[linear-gradient(165deg,rgba(255,255,255,0.92),rgba(208,228,241,0.7))] p-5 shadow-[0_35px_90px_rgba(18,49,79,0.12)] sm:p-8">
            <div className="absolute -right-14 top-8 h-36 w-36 rounded-full bg-[rgba(154,198,228,0.35)] blur-3xl" />
            <div className="absolute -left-10 bottom-8 h-28 w-28 rounded-full bg-[rgba(18,49,79,0.12)] blur-2xl" />
            <div className="relative rounded-[1.8rem] p-3 sm:rounded-[2rem] sm:border sm:border-dashed sm:border-[color:var(--line)] sm:bg-[linear-gradient(180deg,rgba(244,249,252,0.95),rgba(255,251,241,0.95))] sm:p-10">
              <div className="flex min-h-[27rem] flex-col gap-6 sm:gap-8">
                <div className="mx-auto h-64 w-48 overflow-hidden rounded-[1.8rem] border border-[color:var(--line)] bg-white/92 shadow-[0_18px_40px_rgba(18,49,79,0.12)]">
                  <div className="relative h-full w-full p-3">
                    <Image
                      src="/images/logo.jpg"
                      alt="Xuanli School of Music logo"
                      fill
                      className="object-contain"
                      sizes="192px"
                      priority
                    />
                  </div>
                </div>
                <div className="grid w-full gap-4 rounded-[1.5rem] bg-[color:var(--surface-soft)] p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--accent)]">{t.hero.since}</p>
                  <p className="font-heading text-[2rem] leading-tight text-[color:var(--navy)] sm:text-2xl">{t.hero.studioCardTitle}</p>
                  <p className="text-base leading-8 text-[color:var(--muted)] sm:text-sm sm:leading-7">{t.hero.studioCardText}</p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
