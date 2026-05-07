"use client";

import PageBanner from "@/components/page-banner";
import TeacherCard from "@/components/teacher-card";
import { useLanguage } from "@/components/language-provider";

export default function TeachersPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner title={t.teachers.title} intro={t.teachers.intro} accent="blue" />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:px-10 lg:pb-28">
        {t.teachers.profiles.map((teacher, index) => (
          <TeacherCard key={teacher.name} teacher={teacher} index={index} />
        ))}
      </section>
    </>
  );
}
