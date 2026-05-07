"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--ink)]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,_rgba(154,198,228,0.42),_transparent_48%),linear-gradient(180deg,_rgba(232,242,248,0.98),_rgba(250,248,242,1))]" />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
