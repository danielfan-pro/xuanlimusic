"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import SectionReveal from "@/components/section-reveal";

export default function GalleryLightbox({ items }) {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <SectionReveal key={item.title} delay={index * 80}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group w-full overflow-hidden rounded-[1.8rem] border border-[color:var(--line)] bg-white/80 text-left shadow-[0_22px_55px_rgba(18,49,79,0.07)] transition hover:-translate-y-1"
            >
              <div className="flex h-64 items-end bg-[linear-gradient(160deg,rgba(154,198,228,0.55),rgba(18,49,79,0.22))] p-6">
                <div className="rounded-full border border-white/65 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--navy)]">
                  {t.recitals.photoLabel}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-[color:var(--navy)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.caption}</p>
              </div>
            </button>
          </SectionReveal>
        ))}
      </div>

      {activeItem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(11,26,43,0.74)] px-6 py-10" onClick={() => setActiveIndex(null)}>
          <div
            className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/20 bg-[color:var(--background)] shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[color:var(--line)] px-6 py-5">
              <h4 className="font-heading text-3xl text-[color:var(--navy)]">{activeItem.title}</h4>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="rounded-full border border-[color:var(--line)] px-4 py-2 text-sm text-[color:var(--navy)]"
              >
                {t.recitals.closeLabel}
              </button>
            </div>
            <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
              <div className="min-h-[26rem] rounded-[1.6rem] bg-[linear-gradient(160deg,rgba(154,198,228,0.65),rgba(18,49,79,0.24))]" />
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--accent)]">{t.recitals.memoryLabel}</p>
                <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">{activeItem.caption}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
