"use client";

import SectionReveal from "@/components/section-reveal";

export default function AchievementList({ items }) {
  return (
    <div className="grid gap-5">
      {items.map((item, index) => (
        <SectionReveal
          key={item.title}
          delay={index * 90}
          className="rounded-[1.7rem] border border-[color:var(--line)] bg-white/82 p-7 shadow-[0_22px_55px_rgba(18,49,79,0.07)]"
        >
          <div className="grid gap-3 lg:grid-cols-[0.45fr_1fr] lg:items-start lg:gap-8">
            <h3 className="font-heading text-3xl text-[color:var(--navy)]">{item.title}</h3>
            <p className="text-base leading-8 text-[color:var(--muted)]">{item.detail}</p>
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}
