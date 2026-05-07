"use client";

import Link from "next/link";
import Hero from "@/components/hero";
import SectionReveal from "@/components/section-reveal";
import { useLanguage } from "@/components/language-provider";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <Hero />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-3 lg:px-10 lg:pb-28">
        {[
          { title: t.about.title, text: t.about.philosophy, href: "/about" },
          { title: t.teachers.title, text: t.teachers.intro, href: "/teachers" },
          { title: t.achievements.title, text: t.achievements.intro, href: "/achievements" },
        ].map((item, index) => (
          <SectionReveal
            key={item.href}
            delay={index * 120}
            className="rounded-[1.8rem] border border-[color:var(--line)] bg-white/82 p-8 shadow-[0_22px_60px_rgba(18,49,79,0.08)]"
          >
            <h2 className="font-heading text-4xl text-[color:var(--navy)]">{item.title}</h2>
            <p className="mt-5 text-base leading-8 text-[color:var(--muted)]">{item.text}</p>
            <Link
              href={item.href}
              className="mt-7 inline-flex rounded-full border border-[color:var(--line)] px-5 py-3 text-sm uppercase tracking-[0.18em] text-[color:var(--navy)] transition hover:-translate-y-0.5"
            >
              Explore
            </Link>
          </SectionReveal>
        ))}
      </section>
    </>
  );
}
