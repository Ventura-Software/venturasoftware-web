import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../home/components/Navbar";
import Footer from "../home/components/Footer";
import Reveal from "@/components/fx/Reveal";
import { EMAIL } from "@/config/contact";

interface PrivacySection {
  title: string;
  body: string;
}

export default function PrivacyPage() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const sections = t("privacyPage.sections", {
    returnObjects: true,
  }) as PrivacySection[];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The language listener sets the home title; restore it when leaving.
  useEffect(() => {
    document.title = `${t("privacyPage.title")} | Ventura Software`;
    return () => {
      document.title = t("meta.title");
    };
  }, [t, i18n.resolvedLanguage]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar scrolled={scrolled} />

      <header className="relative pt-40 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 grid-pan opacity-40" />
        <div className="aurora w-[30rem] h-[30rem] -top-32 -left-32 bg-cyan-500/30" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <p className="fade-up text-xs font-semibold text-cyan-400 tracking-[0.3em] uppercase mb-4">
            {t("privacyPage.eyebrow")}
          </p>
          <h1
            className="fade-up text-4xl md:text-6xl font-bold text-white tracking-tight mb-4"
            style={{ animationDelay: "0.1s" }}
          >
            {t("privacyPage.title")}
          </h1>
          <p
            className="fade-up text-sm text-slate-400 font-mono"
            style={{ animationDelay: "0.2s" }}
          >
            {t("privacyPage.updated")}
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <Reveal>
          <p className="text-lg text-slate-700 leading-relaxed mb-12">
            {t("privacyPage.intro")}
          </p>
        </Reveal>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 60}>
              <section className="p-6 md:p-8 bg-white rounded-2xl border border-slate-200">
                <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-3">
                  <span className="font-mono text-sm text-cyan-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">{section.body}</p>
              </section>
            </Reveal>
          ))}

          <Reveal>
            <section className="p-6 md:p-8 bg-slate-950 rounded-2xl text-white">
              <h2 className="text-xl font-bold mb-3">
                {t("privacyPage.contactTitle")}
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Ventura Software · Montevideo, Uruguay
                <br />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-cyan-300 underline underline-offset-2 hover:text-cyan-200"
                >
                  {EMAIL}
                </a>
              </p>
            </section>
          </Reveal>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-12 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
        >
          <i className="ri-arrow-left-line" />
          {t("privacyPage.back")}
        </Link>
      </main>

      <Footer />
    </div>
  );
}
