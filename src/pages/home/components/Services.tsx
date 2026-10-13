import { useTranslation } from "react-i18next";
import Reveal from "@/components/fx/Reveal";
import { SpotlightCard } from "@/components/fx/Interactive";

export default function Services() {
  const { t } = useTranslation();
  const services = [
    { id: "mobile", icon: "ri-smartphone-line" },
    { id: "web", icon: "ri-window-2-line" },
    { id: "integrations", icon: "ri-links-line" },
  ].map((service, index) => ({
    ...service,
    number: String(index + 1).padStart(2, "0"),
    title: t(`services.items.${service.id}.title`),
    description: t(`services.items.${service.id}.description`),
    tags: t(`services.items.${service.id}.tags`, {
      returnObjects: true,
    }) as string[],
  }));

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="aurora w-[40rem] h-[40rem] -bottom-80 left-1/2 -translate-x-1/2 bg-blue-700/25" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-16" variant="blur">
          <p className="text-xs font-semibold text-cyan-400 tracking-[0.3em] uppercase mb-4">
            {t("services.eyebrow")}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight">
            {t("services.title")}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 120} variant="up">
              <SpotlightCard className="group h-full p-8 md:p-10 rounded-3xl bg-slate-900/70 border border-white/[0.07] backdrop-blur-sm hover:shadow-[0_30px_80px_-30px_rgba(34,211,238,0.45)]">
                <div className="flex items-start justify-between mb-10">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                      <i className={`${service.icon} text-3xl text-white`} />
                    </div>
                  </div>
                  <span className="font-mono text-sm text-slate-600 group-hover:text-cyan-400 transition-colors">
                    /{service.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full transition-colors group-hover:border-cyan-400/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
