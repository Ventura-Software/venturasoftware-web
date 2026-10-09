import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import venturaLogo from "@/assets/images/ventura-logo.svg";
import LanguageSwitcher, { MobileLanguageSwitcher } from "./LanguageSwitcher";

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onHome = location.pathname === "/";

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
    window.scrollTo({ top: 0 });
  };

  const goHome = () => {
    setMobileMenuOpen(false);
    if (onHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={goHome}
              className="flex items-center cursor-pointer bg-transparent border-0 p-0"
              aria-label={t("nav.goHome")}
            >
              <img
                src={venturaLogo}
                alt="Ventura Software"
                className="h-14 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => goToSection("services")}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {t("nav.services")}
              </button>
              <button
                onClick={() => goToSection("process")}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {t("nav.process")}
              </button>
              <button
                onClick={() => goToSection("why-us")}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {t("nav.whyUs")}
              </button>
              <button
                onClick={goToPortfolio}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {t("nav.portfolio")}
              </button>
              <button
                onClick={() => goToSection("contact")}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {t("nav.about")}
              </button>
            </div>

            {/* Language + CTA Button */}
            <div className="hidden md:flex items-center gap-6">
              <LanguageSwitcher scrolled={scrolled} />
              <a
                href="https://calendly.com/juanpadin7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg cursor-pointer whitespace-nowrap inline-block"
              >
                {t("nav.getInTouch")}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 cursor-pointer"
              aria-label={t("nav.menu")}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full transition-all duration-300 ${
                    scrolled ? "bg-slate-900" : "bg-white"
                  } ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-full transition-all duration-300 ${
                    scrolled ? "bg-slate-900" : "bg-white"
                  } ${mobileMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-full transition-all duration-300 ${
                    scrolled ? "bg-slate-900" : "bg-white"
                  } ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-lg transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button
            onClick={() => goToSection("services")}
            className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors cursor-pointer"
          >
            {t("nav.services")}
          </button>
          <button
            onClick={() => goToSection("process")}
            className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors cursor-pointer"
          >
            {t("nav.process")}
          </button>
          <button
            onClick={() => goToSection("why-us")}
            className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors cursor-pointer"
          >
            {t("nav.whyUs")}
          </button>
          <button
            onClick={goToPortfolio}
            className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors cursor-pointer"
          >
            {t("nav.portfolio")}
          </button>
          <button
            onClick={() => goToSection("contact")}
            className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors cursor-pointer"
          >
            {t("nav.about")}
          </button>
          <a
            href="https://calendly.com/juanpadin7/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg cursor-pointer whitespace-nowrap inline-block"
          >
            {t("nav.getInTouch")}
          </a>
          <MobileLanguageSwitcher />
        </div>
      </div>
    </>
  );
}
