import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import venturaLogo from "@/assets/images/ventura-logo.svg";
import { useActiveSection } from "@/components/fx/hooks";
import { CALENDLY_URL } from "@/config/contact";
import LanguageSwitcher, { MobileLanguageSwitcher } from "./LanguageSwitcher";

interface NavbarProps {
  scrolled: boolean;
}

const SECTION_IDS = ["services", "why-us", "how-we-work", "process", "about", "contact"];

export default function Navbar({ scrolled }: NavbarProps) {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onHome = location.pathname === "/";
  const activeSection = useActiveSection(onHome ? SECTION_IDS : []);

  const goToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (onHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${id}`);
      // give the home page a tick to render, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const goToPortfolio = () => {
    setMobileMenuOpen(false);
    navigate("/portfolio");
  };

  const goHome = () => {
    setMobileMenuOpen(false);
    if (onHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const links = [
    { label: t("nav.services"), onClick: () => goToSection("services"), active: activeSection === "services" },
    { label: t("nav.process"), onClick: () => goToSection("process"), active: activeSection === "process" },
    { label: t("nav.whyUs"), onClick: () => goToSection("why-us"), active: activeSection === "why-us" },
    { label: t("nav.portfolio"), onClick: goToPortfolio, active: location.pathname === "/portfolio" },
    { label: t("nav.about"), onClick: () => goToSection("about"), active: activeSection === "about" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(15,23,42,0.25)] border-b border-white/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Logo */}
            <button
              type="button"
              onClick={goHome}
              className="flex items-center cursor-pointer bg-transparent border-0 p-0 transition-transform duration-300 hover:scale-105"
              aria-label={t("nav.goHome")}
            >
              <img
                src={venturaLogo}
                alt="Ventura Software"
                className={`w-auto transition-all duration-500 ${
                  scrolled ? "h-11" : "h-14"
                }`}
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={link.onClick}
                  data-active={link.active}
                  className={`nav-link text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    scrolled
                      ? link.active
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                      : link.active
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Language + CTA Button */}
            <div className="hidden md:flex items-center gap-6">
              <LanguageSwitcher scrolled={scrolled} />
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_30px_-4px_rgba(34,211,238,0.8)] transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap inline-block"
              >
                {t("nav.getInTouch")}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-50 p-2 cursor-pointer"
              aria-label={t("nav.menu")}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block h-0.5 w-full transition-all duration-300 ${
                      scrolled && !mobileMenuOpen ? "bg-slate-900" : "bg-white"
                    } ${
                      mobileMenuOpen
                        ? i === 0
                          ? "rotate-45 translate-y-2"
                          : i === 1
                            ? "opacity-0"
                            : "-rotate-45 -translate-y-2"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="aurora w-80 h-80 -top-20 -right-20 bg-cyan-500/30" />
        <div className="relative flex flex-col items-center justify-center h-full space-y-7">
          {links.map((link, index) => (
            <button
              key={link.label}
              onClick={link.onClick}
              className={`text-3xl font-semibold text-white hover:text-cyan-400 transition-all duration-500 cursor-pointer ${
                mobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: mobileMenuOpen ? `${100 + index * 60}ms` : "0ms" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-full shadow-lg cursor-pointer whitespace-nowrap inline-block"
          >
            {t("nav.getInTouch")}
          </a>
          <MobileLanguageSwitcher />
        </div>
      </div>
    </>
  );
}
