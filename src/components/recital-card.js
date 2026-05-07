"use client";

import SectionReveal from "@/components/section-reveal";
import { useLanguage } from "@/components/language-provider";

function buildMapUrl(venue, addressLine) {
  const address = [venue, addressLine].filter(Boolean).join(", ");
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

export default function RecitalCard({ recital, index }) {
  const { t } = useLanguage();

  return (
    <SectionReveal
      delay={index * 140}
      className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/82 shadow-[0_28px_70px_rgba(18,49,79,0.08)]"
    >
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex min-h-[22rem] items-center justify-center bg-[linear-gradient(180deg,rgba(18,49,79,0.16),rgba(154,198,228,0.45))] p-8">
          <div className="flex h-full min-h-[18rem] w-full items-center justify-center rounded-[1.7rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(245,248,250,0.7))] p-8 text-center font-heading text-3xl text-[color:var(--navy)]">
            {t.recitals.posterPlaceholder}
          </div>
        </div>
        <div className="grid gap-6 p-8 lg:p-10">
          <div>
            <h3 className="font-heading text-4xl text-[color:var(--navy)]">{recital.title}</h3>
          </div>
          <div className="grid gap-3 text-[color:var(--muted)]">
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
          <div className="overflow-hidden rounded-[1.5rem] border border-[color:var(--line)]">
            <iframe
              title={recital.mapTitle}
              src={buildMapUrl(recital.venue, recital.addressLine)}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
