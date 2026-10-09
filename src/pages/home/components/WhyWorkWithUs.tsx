import { useTranslation } from "react-i18next";

export default function WhyWorkWithUs() {
  const { t } = useTranslation();
  const reasons = [
    "bilingual",
    "meet",
    "support",
    "rotation",
    "talent",
    "ethic",
    "business",
  ].map((id, index) => ({
    id,
    number: String(index + 1).padStart(2, "0"),
    title: t(`whyUs.items.${id}.title`),
    description: t(`whyUs.items.${id}.description`),
  }));

  return (
    <section id="why-us" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Sticky Header */}
          <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {t("whyUs.title")}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Right Column - Cards */}
          <div className="lg:col-span-3 space-y-6">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-cyan-500/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-bold bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      {reason.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
