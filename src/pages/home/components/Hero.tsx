import { useTranslation } from "react-i18next";
import ConstellationCanvas from "@/components/fx/ConstellationCanvas";
import { SplitWords } from "@/components/fx/Reveal";
import { MagneticButton, MagneticLink } from "@/components/fx/Interactive";
import { CALENDLY_URL } from "@/config/contact";

export default function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pan opacity-60" />
      <div className="aurora w-[38rem] h-[38rem] -top-40 -left-40 bg-cyan-500/40" />
      <div
        className="aurora hidden sm:block w-[34rem] h-[34rem] top-1/3 -right-48 bg-violet-600/40"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="aurora hidden md:block w-[30rem] h-[30rem] -bottom-48 left-1/4 bg-blue-600/40"
        style={{ animationDelay: "-12s" }}
      />
      <ConstellationCanvas className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(2,6,23,0.85)_80%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-16 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
          <SplitWords text="Ventura Software" />
          <br />
          <SplitWords
            text={t("hero.tagline")}
            wordClassName="text-shimmer pb-[0.08em]"
            baseDelay={120}
            step={40}
          />
        </h1>

        <p
          className="fade-up text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ animationDelay: "0.35s" }}
        >
          {t("hero.subtitle")}
        </p>

        <div
          className="fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "0.45s" }}
        >
          <MagneticLink
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-[length:200%_auto] hover:bg-right text-white font-semibold rounded-full shadow-[0_0_40px_-8px_rgba(34,211,238,0.7)] transition-[background-position,box-shadow] duration-500 hover:shadow-[0_0_60px_-6px_rgba(34,211,238,0.9)] whitespace-nowrap"
          >
            <i className="ri-calendar-event-line text-lg" />
            {t("contact.bookCall")}
            <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticLink>
          <MagneticButton
            onClick={() => scrollToSection("services")}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/15 text-white font-semibold rounded-full hover:bg-white/10 hover:border-cyan-400/50 transition-colors duration-300 cursor-pointer whitespace-nowrap"
          >
            {t("hero.ourServices")}
          </MagneticButton>
        </div>
      </div>

    </section>
  );
}
