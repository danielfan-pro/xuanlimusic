"use client";

import Image from "next/image";
import SectionReveal from "@/components/section-reveal";
import { useLanguage } from "@/components/language-provider";

export default function UpcomingRecitalPoster({ recital, index = 0 }) {
  const { t } = useLanguage();

  return (
    <SectionReveal
      delay={index * 120}
      className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/84 shadow-[0_28px_70px_rgba(18,49,79,0.08)]"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-[28rem] items-center justify-center bg-[linear-gradient(160deg,rgba(154,198,228,0.55),rgba(18,49,79,0.22))] p-8 lg:min-h-[36rem]">
          <div className="relative flex h-full min-h-[22rem] w-full items-center justify-center">
            {recital.posterImage ? (
              <div className="relative aspect-[2/3] w-full max-w-[18rem] overflow-hidden rounded-[1.35rem] shadow-[0_18px_40px_rgba(18,49,79,0.16)] sm:max-w-[20rem] lg:max-w-[22rem]">
                <Image
                  src={recital.posterImage}
                  alt={recital.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={index === 0}
                />
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center text-center font-heading text-3xl text-[color:var(--navy)]">
                {t.recitals.posterPlaceholder}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-10">
          <h3 className="font-heading text-5xl text-[color:var(--navy)]">{recital.title}</h3>
          <div className="mt-7 grid gap-3 text-[color:var(--muted)]">
            <div className="grid grid-cols-[8.5rem_1fr] items-start gap-x-2">
              <span className="font-semibold leading-7 text-[color:var(--navy)]">{t.recitals.dateLabel}:</span>
              <p className="leading-7">{recital.date}</p>
            </div>
            <div className="grid grid-cols-[8.5rem_1fr] items-start gap-x-2">
              <span className="font-semibold leading-7 text-[color:var(--navy)]">{t.recitals.timeLabel}:</span>
              <p className="leading-7">{recital.time}</p>
            </div>
            <div className="grid grid-cols-[8.5rem_1fr] items-start gap-x-2">
              <span className="font-semibold leading-7 text-[color:var(--navy)]">{t.recitals.addressLabel}:</span>
              <div className="leading-7">
                <p>{recital.venue}</p>
                <p>{recital.addressLine}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
