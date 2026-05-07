"use client";

import AchievementList from "@/components/achievement-list";
import PageBanner from "@/components/page-banner";
import { useLanguage } from "@/components/language-provider";

export default function AchievementsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner title={t.achievements.title} intro={t.achievements.intro} accent="blue" />
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <AchievementList items={t.achievements.items} />
      </section>
    </>
  );
}
