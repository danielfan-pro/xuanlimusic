"use client";

import ContactForm from "@/components/contact-form";
import PageBanner from "@/components/page-banner";
import SectionReveal from "@/components/section-reveal";
import { useLanguage } from "@/components/language-provider";

export default function ContactPage() {
  const { t } = useLanguage();

  const details = [
    { label: t.contact.phoneLabel, value: t.contact.phone },
    { label: t.contact.emailLabel, value: t.contact.email },
    { label: t.contact.addressLabel, value: t.contact.address },
  ];

  return (
    <>
      <PageBanner title={t.contact.title} intro={t.contact.intro} introWidthClass="max-w-5xl" />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:pb-28">
        <SectionReveal className="rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(154,198,228,0.22),rgba(255,255,255,0.78))] p-8 shadow-[0_28px_70px_rgba(18,49,79,0.08)] lg:p-10">
          <h2 className="font-heading text-4xl text-[color:var(--navy)]">{t.contact.title}</h2>
          <div className="mt-8 grid gap-6">
            {details.map((item) => (
              <div key={item.label} className="rounded-[1.4rem] border border-[color:var(--line)] bg-white/78 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">{item.label}</p>
                <p className="mt-3 text-lg leading-8 text-[color:var(--muted)]">{item.value}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
        <ContactForm />
      </section>
    </>
  );
}
