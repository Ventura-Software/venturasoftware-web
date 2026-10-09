import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  const services = [
    { id: "product", icon: "ri-rocket-line" },
    { id: "web", icon: "ri-code-s-line" },
    { id: "mobile", icon: "ri-smartphone-line" },
    { id: "ai", icon: "ri-brain-line" },
    { id: "saas", icon: "ri-server-line" },
    { id: "integrations", icon: "ri-links-line" },
  ].map((service) => ({
    ...service,
    title: t(`services.items.${service.id}.title`),
    description: t(`services.items.${service.id}.description`),
    tags: t(`services.items.${service.id}.tags`, {
      returnObjects: true,
    }) as string[],
  }));

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-4">
            {t("services.eyebrow")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center mb-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
