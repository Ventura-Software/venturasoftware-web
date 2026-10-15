import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/fx/Reveal";
import { useNow } from "@/components/fx/hooks";
import { SpotlightCard } from "@/components/fx/Interactive";

const ENGAGEMENT = [
  { id: "start", icon: "ri-phone-line" },
  { id: "models", icon: "ri-git-branch-line" },
  { id: "cadence", icon: "ri-calendar-check-line" },
];

const HOME_TZ = "America/Montevideo";
const OFFICE_START = 9;
const OFFICE_END = 18;

const CITIES = [
  { id: "montevideo", tz: HOME_TZ },
  { id: "newYork", tz: "America/New_York" },
  { id: "sanFrancisco", tz: "America/Los_Angeles" },
  { id: "london", tz: "Europe/London" },
  { id: "berlin", tz: "Europe/Berlin" },
];

// UTC offset of `timeZone` at `date`, in hours (DST-aware).
function offsetHours(timeZone: string, date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).formatToParts(date);
  const get = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value);
  const asUtc = Date.UTC(
    get("year"),
    get("month") - 1,
    get("day"),
    get("hour"),
    get("minute"),
  );
  return Math.round((asUtc - date.getTime()) / 36e5 * 4) / 4;
}

function formatTime(timeZone: string, date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

// Office hours of a city expressed on Montevideo's 0-24 h axis, split in
// two segments when they wrap past midnight.
function segmentsOnHomeAxis(shift: number) {
  const start = (((OFFICE_START - shift) % 24) + 24) % 24;
  const end = start + (OFFICE_END - OFFICE_START);
  return end <= 24
    ? [[start, end]]
    : [
        [start, 24],
        [0, end - 24],
      ];
}

function overlapWithHome(shift: number) {
  return segmentsOnHomeAxis(shift).reduce(
    (sum, [a, b]) =>
      sum + Math.max(0, Math.min(b, OFFICE_END) - Math.max(a, OFFICE_START)),
    0,
  );
}

function formatShift(shift: number) {
  if (shift === 0) return "±0 h";
  return `${shift > 0 ? "+" : "−"}${Math.abs(shift)} h`;
}

export default function HowWeWork() {
  const { t } = useTranslation();
  const now = useNow(15000);

  const visitorTz = useMemo(() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch {
      return null;
    }
  }, []);

  const homeOffset = offsetHours(HOME_TZ, now);
  const homeHour =
    Number(
      new Intl.DateTimeFormat("en-GB", {
        timeZone: HOME_TZ,
        hour: "numeric",
        hourCycle: "h23",
      }).format(now),
    ) +
    now.getMinutes() / 60;

  const rows = [
    ...CITIES.map((c) => ({
      key: c.id,
      label: t(`howWeWork.cities.${c.id}`),
      tz: c.tz,
      home: c.id === "montevideo",
      you: false,
    })),
    ...(visitorTz
      ? [{ key: "you", label: t("howWeWork.you"), tz: visitorTz, home: false, you: true }]
      : []),
  ].map((row) => {
    const shift = offsetHours(row.tz, now) - homeOffset;
    return {
      ...row,
      shift,
      time: formatTime(row.tz, now),
      segments: segmentsOnHomeAxis(shift),
      overlap: overlapWithHome(shift),
    };
  });

  return (
    <section
      id="how-we-work"
      className="relative py-24 md:py-32 bg-slate-950 overflow-hidden"
    >
      <div className="aurora w-[36rem] h-[36rem] -top-40 -right-40 bg-cyan-600/25" />
      <div
        className="aurora w-[30rem] h-[30rem] -bottom-40 -left-40 bg-violet-700/25"
        style={{ animationDelay: "-8s" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <Reveal variant="left" className="lg:col-span-2">
          <p className="text-xs font-semibold text-cyan-400 tracking-[0.3em] uppercase mb-4">
            {t("howWeWork.eyebrow")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            {t("howWeWork.title")}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            {t("howWeWork.body")}
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 text-cyan-200 text-sm font-medium">
            <i className="ri-translate-2 text-lg" />
            {t("howWeWork.languages")}
          </div>
        </Reveal>

        <Reveal variant="scale" delay={150} className="lg:col-span-3">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-8 shadow-[0_40px_120px_-40px_rgba(34,211,238,0.35)]">
            {/* Hour axis (Montevideo time) */}
            <div className="grid grid-cols-[7.5rem_1fr] sm:grid-cols-[10rem_1fr] gap-4 mb-3">
              <div />
              <div className="relative h-4 text-[10px] font-mono text-slate-500">
                {[0, 6, 12, 18, 24].map((h) => (
                  <span
                    key={h}
                    className="absolute -translate-x-1/2"
                    style={{ left: `${(h / 24) * 100}%` }}
                  >
                    {String(h % 24).padStart(2, "0")}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {rows.map((row, index) => (
                <div
                  key={row.key}
                  className={`grid grid-cols-[7.5rem_1fr] sm:grid-cols-[10rem_1fr] gap-4 items-center rounded-xl px-2 py-2 -mx-2 transition-colors ${
                    row.home
                      ? "bg-cyan-500/[0.07]"
                      : row.you
                        ? "bg-violet-500/[0.07]"
                        : ""
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      {row.home && <span className="live-dot flex-shrink-0" />}
                      {row.you && (
                        <i className="ri-map-pin-user-line text-violet-300" />
                      )}
                      <span className="truncate text-sm font-semibold text-white">
                        {row.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-slate-300 tabular-nums">
                        {row.time}
                      </span>
                      {!row.home && (
                        <span className="text-slate-500">
                          {formatShift(row.shift)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="relative h-7 rounded-lg bg-white/[0.04] overflow-hidden">
                      {/* Montevideo office hours as a faint reference */}
                      {!row.home && (
                        <div
                          className="absolute inset-y-0 bg-cyan-400/[0.07] border-x border-dashed border-cyan-400/20"
                          style={{
                            left: `${(OFFICE_START / 24) * 100}%`,
                            width: `${((OFFICE_END - OFFICE_START) / 24) * 100}%`,
                          }}
                        />
                      )}
                      {row.segments.map(([a, b], i) => (
                        <div
                          key={i}
                          className="absolute inset-y-1"
                          style={{
                            left: `${(a / 24) * 100}%`,
                            width: `${((b - a) / 24) * 100}%`,
                          }}
                        >
                          <div
                            className={`bar-grow h-full rounded-md ${
                              row.home
                                ? "bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_16px_rgba(34,211,238,0.6)]"
                                : row.you
                                  ? "bg-gradient-to-r from-violet-400 to-fuchsia-500"
                                  : "bg-gradient-to-r from-slate-400/70 to-slate-500/70"
                            }`}
                            style={{ transitionDelay: `${300 + index * 120}ms` }}
                          />
                        </div>
                      ))}
                      {/* Now marker */}
                      <div
                        className="absolute inset-y-0 w-0.5 bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        style={{ left: `${(homeHour / 24) * 100}%` }}
                      />
                    </div>
                    {!row.home && (
                      <div className="mt-1 text-[11px] text-slate-500">
                        {t("howWeWork.overlap", { count: row.overlap })}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-500 flex items-center gap-2">
              <i className="ri-information-line" />
              {t("howWeWork.legend")}
            </p>
          </div>
        </Reveal>
      </div>

      {/* How an engagement works */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
        {ENGAGEMENT.map((item, index) => (
          <Reveal key={item.id} delay={index * 120} variant="up">
            <SpotlightCard className="group h-full p-7 rounded-2xl bg-slate-900/70 border border-white/[0.07] backdrop-blur-sm hover:shadow-[0_30px_80px_-30px_rgba(34,211,238,0.45)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <i className={`${item.icon} text-lg`} />
                </span>
                <h3 className="text-lg font-bold text-white">
                  {t(`howWeWork.engagement.${item.id}.title`)}
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t(`howWeWork.engagement.${item.id}.body`)}
              </p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
