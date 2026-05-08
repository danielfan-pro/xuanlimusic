"use client";

import SectionReveal from "@/components/section-reveal";

export default function PageBanner({ title, intro, accent = "ivory", introWidthClass = "max-w-3xl" }) {
  const tone =
    accent === "blue"
      ? "bg-[linear-gradient(135deg,rgba(154,198,228,0.2),rgba(18,49,79,0.12))]"
      : "bg-[linear-gradient(135deg,rgba(255,251,241,0.85),rgba(255,255,255,0.7))]";

  return (
    <SectionReveal className="mx-auto max-w-7xl px-6 pt-18 pb-8 lg:px-10 lg:pt-24 lg:pb-12">
      <div className={`rounded-[2rem] border border-[color:var(--line)] px-8 py-12 shadow-[0_25px_80px_rgba(18,49,79,0.08)] ${tone}`}>
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[color:var(--accent)]">Xuanli School of Music</p>
        <h1 className="font-heading text-5xl text-[color:var(--navy)] sm:text-6xl">{title}</h1>
        <p className={`mt-5 text-lg leading-8 text-[color:var(--muted)] ${introWidthClass}`}>{intro}</p>
      </div>
    </SectionReveal>
  );
}
