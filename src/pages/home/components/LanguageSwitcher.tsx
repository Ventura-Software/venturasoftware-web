import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES, setLanguage } from "@/i18n";

interface LanguageSwitcherProps {
  scrolled: boolean;
}

// Compact dropdown for the desktop navbar.
export default function LanguageSwitcher({ scrolled }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = i18n.resolvedLanguage || "en";

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={t("nav.language")}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-1.5 text-sm font-medium uppercase transition-colors cursor-pointer whitespace-nowrap ${
          scrolled
            ? "text-slate-600 hover:text-slate-900"
            : "text-slate-300 hover:text-white"
        }`}
      >
        <i className="ri-global-line text-base"></i>
        {current}
        <i className="ri-arrow-down-s-line text-base"></i>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-3 w-40 py-2 bg-white rounded-xl shadow-xl border border-slate-200"
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                role="option"
                aria-selected={lang.code === current}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm text-left cursor-pointer transition-colors hover:bg-slate-50 ${
                  lang.code === current
                    ? "text-cyan-600 font-semibold"
                    : "text-slate-700"
                }`}
              >
                {lang.label}
                <span className="text-xs uppercase text-slate-400">
                  {lang.code}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
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
