"use client";

import GalleryLightbox from "@/components/gallery-lightbox";
import PageBanner from "@/components/page-banner";
import RecitalCard from "@/components/recital-card";
import SectionReveal from "@/components/section-reveal";
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
  const pastRecitals = recitalItems.filter((recital) => !isRecitalUpcoming(recital));

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
              <RecitalCard key={recital.title} recital={recital} index={index} />
            ))}
          </div>
        </section>
      ) : null}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10 lg:pb-28">
        <SectionReveal className="mb-8">
          <h2 className="font-heading text-5xl text-[color:var(--navy)]">{t.recitals.pastTitle}</h2>
        </SectionReveal>
        {pastRecitals.length ? (
          <div className="mb-10 grid gap-8">
            {pastRecitals.map((recital, index) => (
              <RecitalCard key={recital.title} recital={recital} index={index} />
            ))}
          </div>
        ) : null}
        <GalleryLightbox items={t.recitals.gallery} />
      </section>
    </>
  );
}
