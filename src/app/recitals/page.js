"use client";

import Image from "next/image";
import PageBanner from "@/components/page-banner";
import PastRecitalsGallery from "@/components/past-recitals-gallery";
import SectionReveal from "@/components/section-reveal";
import UpcomingRecitalPoster from "@/components/upcoming-recital-poster";
import { useLanguage } from "@/components/language-provider";

function isRecitalUpcoming(recital) {
  if (!recital?.hideAfter) {
    return true;
  }

  return new Date() < new Date(recital.hideAfter);
}

export default function RecitalsPage() {
  const { t } = useLanguage();
  const recitalItems = t.recitals.upcoming;
  const upcomingRecitals = recitalItems.filter(isRecitalUpcoming);
  const archivedUpcomingRecitals = recitalItems
    .filter((recital) => !isRecitalUpcoming(recital))
    .map((recital) => ({
      title: recital.title,
      date: recital.date,
      venue: recital.venue,
      summary: `${recital.time} · ${recital.venue}`,
      photos: [
        {
          title: t.recitals.posterPlaceholder,
          caption: `${recital.title} · ${recital.time}`,
        },
      ],
    }));
  const pastRecitals = [...archivedUpcomingRecitals, ...t.recitals.pastRecitals];

  return (
    <>
      <PageBanner title={t.recitals.title} intro={t.recitals.intro} />
      {upcomingRecitals.length ? (
        <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
          <SectionReveal className="mb-8">
            <h2 className="font-heading text-5xl text-[color:var(--navy)]">{t.recitals.upcomingTitle}</h2>
          </SectionReveal>
          <div className="grid gap-8">
            {upcomingRecitals.map((recital, index) => (
              <UpcomingRecitalPoster key={recital.title} recital={recital} index={index} />
            ))}
          </div>
          {upcomingRecitals[0]?.programImage ? (
            <SectionReveal id="program" className="mt-10 scroll-mt-28 rounded-[2rem] border border-[color:var(--line)] bg-white/84 p-6 shadow-[0_28px_70px_rgba(18,49,79,0.08)] sm:p-8">
              <h3 className="font-heading text-4xl text-[color:var(--navy)]">{t.recitals.programTitle}</h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[color:var(--muted)]">{t.recitals.programIntro}</p>
              <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-[linear-gradient(160deg,rgba(154,198,228,0.18),rgba(18,49,79,0.08))] p-3 sm:p-4">
                <div className="relative aspect-[1536/1024] w-full overflow-hidden rounded-[1.1rem]">
                  <Image
                    src={upcomingRecitals[0].programImage}
                    alt={t.recitals.programTitle}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 80vw"
                  />
                </div>
              </div>
            </SectionReveal>
          ) : null}
        </section>
      ) : null}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10 lg:pb-28">
        <SectionReveal className="mb-8">
          <h2 className="font-heading text-5xl text-[color:var(--navy)]">{t.recitals.pastTitle}</h2>
        </SectionReveal>
        {pastRecitals.length ? (
          <PastRecitalsGallery items={pastRecitals} />
        ) : null}
      </section>
    </>
  );
}
