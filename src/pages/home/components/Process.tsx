import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/fx/Reveal";

// 0 → 1 as the timeline scrolls through the middle of the viewport.
function useTimelineProgress(ref: React.RefObject<HTMLDivElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.55;
      const value = (anchor - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, value)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ref]);

  return progress;
}

export default function Process() {
  const { t } = useTranslation();
  const timelineRef = useRef<HTMLDivElement>(null);
  const progress = useTimelineProgress(timelineRef);

  const steps = [
    { id: "discovery", icon: "ri-compass-3-line" },
    { id: "design", icon: "ri-pencil-ruler-2-line" },
    { id: "development", icon: "ri-code-box-line" },
    { id: "qa", icon: "ri-checkbox-circle-line" },
    { id: "launch", icon: "ri-rocket-2-line" },
    { id: "support", icon: "ri-line-chart-line" },
  ].map((step, index) => ({
    ...step,
    number: String(index + 1).padStart(2, "0"),
    title: t(`process.steps.${step.id}.title`),
    description: t(`process.steps.${step.id}.description`),
    duration: t(`process.steps.${step.id}.duration`),
  }));

  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pan opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-20" variant="blur">
          <p className="text-xs font-semibold text-cyan-400 tracking-[0.3em] uppercase mb-4">
            {t("process.eyebrow")}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight">
            {t("process.title")}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t("process.subtitle")}
          </p>
        </Reveal>

        <div ref={timelineRef} className="relative">
          {/* Track + progress fill */}
          <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10" />
          <div
            className="absolute left-10 md:left-1/2 top-0 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
            style={{ height: `${progress * 100}%` }}
          >
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_24px_6px_rgba(34,211,238,0.7)]" />
          </div>

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, index) => {
              const reached = progress >= (index + 0.35) / steps.length;
              const even = index % 2 === 0;
              return (
                <div
                  key={step.id}
                  className={`relative flex items-center gap-8 ${
                    even ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <Reveal
                    variant={even ? "left" : "right"}
                    className="flex-1 pl-24 md:pl-0"
                  >
                    <div
                      className={`group p-8 rounded-2xl border transition-all duration-700 ${
                        even ? "md:text-right" : "md:text-left"
                      } ${
                        reached
                          ? "bg-slate-900/80 border-cyan-500/30 shadow-[0_20px_60px_-30px_rgba(34,211,238,0.6)]"
                          : "bg-slate-900/40 border-white/5"
                      }`}
                    >
                      <span className="inline-block text-xs font-semibold text-cyan-400 tracking-[0.25em] uppercase mb-2">
                        {t("process.step", { number: step.number })}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                        <i className="ri-time-line" />
                        {step.duration}
                      </span>
                    </div>
                  </Reveal>

                  {/* Node */}
                  <div className="absolute left-10 md:static md:left-auto -translate-x-1/2 md:translate-x-0 flex-shrink-0 z-10">
                    <div
                      className={`relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 transition-all duration-700 ${
                        reached
                          ? "bg-gradient-to-br from-cyan-500 to-blue-600 border-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.6)] scale-100"
                          : "bg-slate-900 border-white/15 scale-90"
                      }`}
                    >
                      {reached && (
                        <span className="absolute inset-0 rounded-full border border-cyan-400/60 animate-ping" />
                      )}
                      <i
                        className={`${step.icon} text-2xl transition-colors duration-500 ${
                          reached ? "text-white" : "text-slate-500"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
