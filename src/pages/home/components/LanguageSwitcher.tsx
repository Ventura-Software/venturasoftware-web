import { useTranslation } from "react-i18next";
import { LANGUAGES, setLanguage } from "@/i18n";

interface LanguageSwitcherProps {
  scrolled: boolean;
}

// EN | ES toggle for the desktop navbar, with a sliding active pill.
export default function LanguageSwitcher({ scrolled }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage || "en";
  const activeIndex = Math.max(
    0,
    LANGUAGES.findIndex((lang) => lang.code === current),
  );

  return (
    <div
      role="radiogroup"
      aria-label={t("nav.language")}
      className={`relative grid grid-cols-2 p-1 rounded-full border text-xs font-semibold uppercase transition-colors ${
        scrolled ? "border-slate-200 bg-slate-100" : "border-white/15 bg-white/5"
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          type="button"
          role="radio"
          aria-checked={lang.code === current}
          aria-label={lang.label}
          onClick={() => setLanguage(lang.code)}
          className={`relative z-10 px-3 py-1 rounded-full cursor-pointer transition-colors ${
            lang.code === current
              ? "text-white"
              : scrolled
                ? "text-slate-500 hover:text-slate-900"
                : "text-slate-300 hover:text-white"
          }`}
        >
          {lang.code}
        </button>
      ))}
    </div>
  );
}

// Row of language codes for the full-screen mobile menu.
export function MobileLanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage || "en";

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 px-6">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          type="button"
          aria-label={lang.label}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold uppercase cursor-pointer transition-colors ${
            lang.code === current
              ? "bg-cyan-500 text-white"
              : "text-slate-300 hover:text-white border border-white/20"
          }`}
        >
          {lang.code}
        </button>
      ))}
    </div>
  );
}
