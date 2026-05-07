"use client";

import { useLanguage } from "@/components/language-provider";
import SectionReveal from "@/components/section-reveal";

export default function ContactForm() {
  const { t } = useLanguage();

  return (
    <SectionReveal className="rounded-[2rem] border border-[color:var(--line)] bg-white/82 p-8 shadow-[0_28px_70px_rgba(18,49,79,0.08)] lg:p-10">
      <div className="flex flex-col gap-2">
        <h2 className="font-heading text-4xl text-[color:var(--navy)]">{t.contact.formTitle}</h2>
        <p className="text-sm leading-7 text-[color:var(--muted)]">{t.contact.formNote}</p>
      </div>
      <form className="mt-8 grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">{t.contact.fields.name}</span>
          <input
            type="text"
            placeholder={t.contact.fields.name}
            className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] px-5 py-4 outline-none transition focus:border-[color:var(--accent)]"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">{t.contact.fields.email}</span>
          <input
            type="email"
            placeholder={t.contact.fields.email}
            className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] px-5 py-4 outline-none transition focus:border-[color:var(--accent)]"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">{t.contact.fields.message}</span>
          <textarea
            rows="6"
            placeholder={t.contact.fields.message}
            className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] px-5 py-4 outline-none transition focus:border-[color:var(--accent)]"
          />
        </label>
        <button
          type="button"
          className="mt-2 w-fit rounded-full bg-[color:var(--navy)] px-6 py-3 text-sm uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5"
        >
          {t.contact.fields.submit}
        </button>
      </form>
    </SectionReveal>
  );
}
