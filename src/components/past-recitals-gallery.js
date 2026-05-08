"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import SectionReveal from "@/components/section-reveal";

export default function PastRecitalsGallery({ items }) {
  const { t } = useLanguage();
  const [activeRecitalIndex, setActiveRecitalIndex] = useState(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const activeRecital = activeRecitalIndex === null ? null : items[activeRecitalIndex];
  const activePhoto =
    activeRecital && activeRecital.photos?.length ? activeRecital.photos[activePhotoIndex] : null;

  function openRecital(index) {
    setActiveRecitalIndex(index);
    setActivePhotoIndex(0);
  }

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((item, index) => (
          <SectionReveal key={item.title} delay={index * 90}>
            <button
              type="button"
              onClick={() => openRecital(index)}
              className="group w-full overflow-hidden rounded-[1.9rem] border border-[color:var(--line)] bg-white/82 text-left shadow-[0_22px_55px_rgba(18,49,79,0.07)] transition hover:-translate-y-1"
            >
              <div className="flex min-h-[16rem] items-center justify-center bg-[linear-gradient(160deg,rgba(154,198,228,0.55),rgba(18,49,79,0.22))] p-4 sm:p-6">
                <div className="relative min-h-[14rem] w-full overflow-hidden rounded-[1.6rem] bg-[rgba(255,255,255,0.14)]">
                  {item.posterImage ? (
                    <div className="relative h-[14rem] w-full sm:h-[16rem]">
                      <Image
                        src={item.posterImage}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 42vw"
                      />
                    </div>
                  ) : (
                    <div className="rounded-full border border-white/65 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--navy)]">
                      {t.recitals.galleryLabel}
                    </div>
                  )}
                </div>
              </div>
              <div className="grid gap-4 p-6 lg:p-7">
                <div>
                  <h3 className="font-heading text-3xl text-[color:var(--navy)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.summary}</p>
                </div>
                <div className="grid gap-2 text-sm text-[color:var(--muted)]">
                  <p>
                    <span className="font-semibold text-[color:var(--navy)]">{t.recitals.dateLabel}:</span> {item.date}
                  </p>
                  <p>
                    <span className="font-semibold text-[color:var(--navy)]">{t.recitals.addressLabel}:</span> {item.venue}
                  </p>
                </div>
              </div>
            </button>
          </SectionReveal>
        ))}
      </div>

      {activeRecital ? (
        <div
          className="fixed inset-0 z-50 bg-[rgba(11,26,43,0.8)]"
          onClick={() => setActiveRecitalIndex(null)}
        >
          <div className="h-full overflow-y-auto px-4 py-4 sm:px-6 sm:py-8">
            <div
              className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/20 bg-[color:var(--background)] shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-[color:var(--line)] px-5 py-5 sm:px-6">
                <div>
                  <h4 className="font-heading text-3xl text-[color:var(--navy)] sm:text-4xl">
                    {activeRecital.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                    {activeRecital.date} · {activeRecital.venue}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveRecitalIndex(null)}
                  className="rounded-full border border-[color:var(--line)] px-4 py-2 text-sm text-[color:var(--navy)]"
                >
                  {t.recitals.closeLabel}
                </button>
              </div>

              <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[1.8rem] bg-[linear-gradient(160deg,rgba(154,198,228,0.65),rgba(18,49,79,0.24))] sm:min-h-[28rem]">
                    {activePhoto?.image ? (
                      <div className="relative h-[18rem] w-full overflow-hidden sm:h-[28rem]">
                        <Image
                          src={activePhoto.image}
                          alt={activePhoto.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                      </div>
                    ) : (
                      <div className="rounded-full border border-white/65 bg-white/82 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--navy)]">
                        {activePhoto ? activePhoto.title : t.recitals.photoLabel}
                      </div>
                    )}
                  </div>
                  {activeRecital.photos?.length ? (
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                      {activeRecital.photos.map((photo, index) => (
                        <button
                          key={photo.title}
                          type="button"
                          onClick={() => setActivePhotoIndex(index)}
                          className={`min-h-[5.5rem] rounded-[1.2rem] border p-3 text-left text-xs leading-5 transition sm:min-h-[6.5rem] ${
                            activePhotoIndex === index
                              ? "border-[color:var(--navy)] bg-[rgba(18,49,79,0.08)] text-[color:var(--navy)]"
                              : "border-[color:var(--line)] bg-white/85 text-[color:var(--muted)] hover:bg-[color:var(--surface-soft)]"
                          }`}
                        >
                          {photo.image ? (
                            <div className="grid gap-2">
                              <div className="relative h-14 w-full overflow-hidden rounded-lg bg-[color:var(--surface-soft)]">
                                <Image
                                  src={photo.image}
                                  alt={photo.title}
                                  fill
                                  className="object-cover"
                                  sizes="160px"
                                />
                              </div>
                              <span>{photo.title}</span>
                            </div>
                          ) : (
                            photo.title
                          )}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--accent)]">
                    {t.recitals.memoryLabel}
                  </p>
                  <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
                    {activePhoto ? activePhoto.caption : activeRecital.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
