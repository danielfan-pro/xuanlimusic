"use client";

import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import SectionReveal from "@/components/section-reveal";
import { useLanguage } from "@/components/language-provider";

function isRecitalVisible(recital) {
  if (!recital?.hideAfter) {
    return true;
  }

  return new Date() < new Date(recital.hideAfter);
}

export default function HomePage() {
  const { t } = useLanguage();
  const featuredRecital = t.recitals.upcoming[0];
  const showFeaturedRecital = isRecitalVisible(featuredRecital);

  return (
    <>
      <Hero />

      {showFeaturedRecital ? (
        <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10 lg:pb-14">
          <SectionReveal className="overflow-hidden rounded-[2.2rem] border border-[color:var(--line)] bg-white/84 shadow-[0_28px_70px_rgba(18,49,79,0.08)]">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex min-h-[20rem] items-center justify-center bg-[linear-gradient(160deg,rgba(154,198,228,0.45),rgba(18,49,79,0.16))] p-8">
                <div className="relative flex h-full min-h-[16rem] w-full items-center justify-center">
                  {featuredRecital.posterImage ? (
                    <div className="relative aspect-[2/3] w-full max-w-[16rem] overflow-hidden rounded-[1.35rem] shadow-[0_18px_40px_rgba(18,49,79,0.16)] sm:max-w-[17.5rem]">
                      <Image
                        src={featuredRecital.posterImage}
                        alt={featuredRecital.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 36vw"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-center font-heading text-3xl text-[color:var(--navy)]">
                      {t.recitals.posterPlaceholder}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col p-8 lg:p-10">
                <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--accent)]">
                  {t.recitals.homeFeatureTitle}
                </p>
                <h2 className="mt-4 font-heading text-5xl text-[color:var(--navy)]">{featuredRecital.title}</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted)]">
                  {t.recitals.homeFeatureText}
                </p>
                <div className="mt-7 grid gap-3 text-[color:var(--muted)]">
                  <div className="grid grid-cols-[8.5rem_1fr] items-start gap-x-2">
                    <span className="font-semibold leading-7 text-[color:var(--navy)]">{t.recitals.dateLabel}:</span>
                    <p className="leading-7">{featuredRecital.date}</p>
                  </div>
                  <div className="grid grid-cols-[8.5rem_1fr] items-start gap-x-2">
                    <span className="font-semibold leading-7 text-[color:var(--navy)]">{t.recitals.timeLabel}:</span>
                    <p className="leading-7">{featuredRecital.time}</p>
                  </div>
                  <div className="grid grid-cols-[8.5rem_1fr] items-start gap-x-2">
                    <span className="font-semibold leading-7 text-[color:var(--navy)]">{t.recitals.addressLabel}:</span>
                    <div className="leading-7">
                      <p>{featuredRecital.venue}</p>
                      <p>{featuredRecital.addressLine}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/recitals"
                    className="inline-flex rounded-full bg-[color:var(--navy)] px-6 py-3 text-sm uppercase tracking-[0.18em] !text-white transition hover:-translate-y-0.5"
                  >
                    {t.recitals.homeFeatureCta}
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-3 lg:px-10 lg:pb-28">
        {[
          { title: t.about.title, text: t.about.philosophy, href: "/about" },
          { title: t.teachers.title, text: t.teachers.intro, href: "/teachers" },
          { title: t.achievements.title, text: t.achievements.intro, href: "/achievements" },
        ].map((item, index) => (
          <SectionReveal
            key={item.href}
            delay={index * 120}
            className="flex h-full flex-col rounded-[1.8rem] border border-[color:var(--line)] bg-white/82 p-8 shadow-[0_22px_60px_rgba(18,49,79,0.08)]"
          >
            <h2 className="font-heading text-4xl text-[color:var(--navy)]">{item.title}</h2>
            <p className="mt-5 text-base leading-8 text-[color:var(--muted)]">{item.text}</p>
            <div className="mt-auto pt-10">
              <Link
                href={item.href}
                className="inline-flex rounded-full border border-[color:var(--line)] px-5 py-3 text-sm uppercase tracking-[0.18em] text-[color:var(--navy)] transition hover:-translate-y-0.5"
              >
                {t.common.explore}
              </Link>
            </div>
          </SectionReveal>
        ))}
      </section>
    </>
  );
}
