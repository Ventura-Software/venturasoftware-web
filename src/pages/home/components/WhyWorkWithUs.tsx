import { useTranslation } from "react-i18next";
import Reveal from "@/components/fx/Reveal";
import { SpotlightCard } from "@/components/fx/Interactive";

export default function WhyWorkWithUs() {
  const { t } = useTranslation();
  const reasons = [
    { id: "bilingual", icon: "ri-translate-2" },
    { id: "meet", icon: "ri-user-voice-line" },
    { id: "support", icon: "ri-shield-check-line" },
    { id: "rotation", icon: "ri-team-line" },
  ].map((reason, index) => ({
    ...reason,
    number: String(index + 1).padStart(2, "0"),
    title: t(`whyUs.items.${reason.id}.title`),
    description: t(`whyUs.items.${reason.id}.description`),
  }));

  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(15,23,42,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <Reveal
            variant="left"
            className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-8">
              {t("whyUs.title")}
            </h2>
            <div className="relative w-32 h-1 rounded-full bg-slate-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-[length:200%_auto] animate-[shimmer_6s_linear_infinite]" />
            </div>
          </Reveal>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <Reveal key={reason.id} delay={index * 100} variant="scale">
                <SpotlightCard
                  tilt={4}
                  className="spotlight-light group h-full p-8 bg-white rounded-2xl border border-slate-200 hover:border-transparent hover:shadow-[0_24px_60px_-24px_rgba(6,182,212,0.45)]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white group-hover:rotate-[-6deg]">
                      <i className={`${reason.icon} text-2xl`} />
                    </div>
                    <span className="text-4xl font-bold bg-gradient-to-br from-slate-200 to-slate-300 bg-clip-text text-transparent transition-all duration-500 group-hover:from-cyan-500 group-hover:to-violet-500">
                      {reason.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
