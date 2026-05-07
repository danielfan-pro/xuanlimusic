"use client";

import PageBanner from "@/components/page-banner";
import SectionReveal from "@/components/section-reveal";
import { useLanguage } from "@/components/language-provider";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner title={t.about.title} intro={t.about.intro} />
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <SectionReveal className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white/82 p-8 shadow-[0_28px_70px_rgba(18,49,79,0.08)] lg:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--accent)]">{t.about.philosophyTitle}</p>
            <h2 className="mt-4 font-heading text-5xl text-[color:var(--navy)]">{t.about.title}</h2>
            <p className="mt-6 text-lg leading-9 text-[color:var(--muted)]">{t.about.philosophy}</p>
          </div>
          <div className="grid gap-5">
            {t.about.values.map((item, index) => (
              <SectionReveal
                key={item.title}
                delay={index * 110}
                className="rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--surface-soft)] p-7 shadow-[0_20px_50px_rgba(18,49,79,0.06)]"
              >
                <h3 className="font-heading text-3xl text-[color:var(--navy)]">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">{item.text}</p>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
