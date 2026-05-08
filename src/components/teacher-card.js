"use client";

import Image from "next/image";
import SectionReveal from "@/components/section-reveal";

export default function TeacherCard({ teacher, index }) {
  return (
    <SectionReveal
      delay={index * 140}
      className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/82 shadow-[0_28px_70px_rgba(18,49,79,0.08)]"
    >
      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex min-h-[21rem] items-center justify-center bg-[linear-gradient(160deg,rgba(201,225,241,0.9),rgba(18,49,79,0.16))] p-8">
          <div className="relative h-56 w-56 overflow-hidden rounded-full border border-white/80 bg-white/90 shadow-[0_18px_40px_rgba(18,49,79,0.12)]">
            {teacher.image ? (
              <Image
                src={teacher.image}
                alt={teacher.name}
                fill
                className="object-cover"
                style={{ objectPosition: teacher.imagePosition || "center center" }}
                sizes="(max-width: 1024px) 224px, 224px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-center font-heading text-2xl text-[color:var(--navy)]">
                Headshot
              </div>
            )}
          </div>
        </div>
        <div className="p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--accent)]">{teacher.instrument}</p>
          <h2 className="mt-4 font-heading text-4xl text-[color:var(--navy)]">{teacher.name}</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
            {teacher.credentials.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-8 text-[color:var(--muted)]">{teacher.bio}</p>
        </div>
      </div>
    </SectionReveal>
  );
}
