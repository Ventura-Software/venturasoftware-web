import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/fx/Reveal";
import { SpotlightCard } from "@/components/fx/Interactive";
import { PROJECTS } from "@/pages/portfolio/data";

// Hero shots for the home cards: a desktop screenshot plus, for the mobile
// products, one phone screen floating over it.
const FEATURED = [
  { id: "walo", desktop: "/portfolio/walo-web-1.jpg", phone: "/portfolio/walo-4.jpeg" },
  { id: "bethel", desktop: "/portfolio/bethel-web-1.jpg", phone: "/portfolio/bethel-2.jpg" },
  { id: "dmg", desktop: "/portfolio/dmg-1.jpg" },
];

export default function FeaturedWork() {
  const { t } = useTranslation();
  const items = FEATURED.map((f) => ({
    ...f,
    project: PROJECTS.find((p) => p.id === f.id)!,
  }));

  return (
    <section id="work" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal variant="blur" className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold text-cyan-400 tracking-[0.3em] uppercase mb-4">
              {t("featured.eyebrow")}
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
              {t("featured.title")}
            </h2>
            <p className="text-lg text-slate-400 max-w-xl">{t("featured.subtitle")}</p>
          </div>
          <Link
            to="/portfolio"
            onClick={() => window.scrollTo({ top: 0 })}
            className="group inline-flex items-center gap-2 self-start md:self-auto px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white font-semibold hover:border-cyan-400/50 hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            {t("featured.seeAll")}
            <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map(({ id, desktop, phone, project }, index) => (
            <Reveal key={id} delay={index * 120} variant="up">
              <SpotlightCard
                tilt={4}
                className="group h-full flex flex-col rounded-3xl overflow-hidden border border-white/[0.07] bg-slate-900/70 hover:shadow-[0_30px_80px_-30px_rgba(34,211,238,0.45)]"
              >
                {/* Visual */}
                <div
                  className="relative h-56 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color} 0%, ${project.secondaryColor} 100%)`,
                  }}
                >
                  <div className="absolute left-6 right-10 top-8 rounded-lg overflow-hidden shadow-2xl ring-1 ring-black/20 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]">
                    <div className="flex gap-1 px-2 py-1.5 bg-slate-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    </div>
                    <img src={desktop} alt={project.title} loading="lazy" className="w-full" />
                  </div>
                  {phone && (
                    <div className="absolute right-4 top-16 w-[26%] rounded-[14px] border-[3px] border-slate-900 overflow-hidden shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:rotate-[-3deg]">
                      <img src={phone} alt="" loading="lazy" className="w-full" />
                    </div>
                  )}
                </div>

                {/* Copy */}
                <div className="flex-1 flex flex-col p-7">
                  <div className="text-xs font-mono text-slate-500 mb-2">
                    {project.year.replace("Present", t("portfolio.present"))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {t(`featured.items.${id}`)}
                  </p>
                  {project.stores && (
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.stores.appStore && (
                        <a
                          href={project.stores.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 text-xs font-semibold text-slate-200 hover:border-cyan-400/60 hover:text-white transition-colors"
                        >
                          <i className="ri-apple-fill" /> App Store
                        </a>
                      )}
                      {project.stores.googlePlay && (
                        <a
                          href={project.stores.googlePlay}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 text-xs font-semibold text-slate-200 hover:border-cyan-400/60 hover:text-white transition-colors"
                        >
                          <i className="ri-google-play-fill" /> Google Play
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
