import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import venturaLogo from "@/assets/images/ventura-logo.svg";
import {
  CALENDLY_URL,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_E164,
  WHATSAPP_URL,
} from "@/config/contact";

export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const onHome = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (onHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const quickLinks = [
    { id: "services", label: t("nav.services") },
    { id: "process", label: t("nav.process") },
    { id: "why-us", label: t("nav.whyUs") },
    { id: "contact", label: t("nav.contact") },
  ];

  const contactItems = [
    { icon: "ri-mail-line", label: EMAIL, href: `mailto:${EMAIL}` },
    { icon: "ri-whatsapp-line", label: `WhatsApp ${PHONE_DISPLAY}`, href: WHATSAPP_URL, external: true },
    { icon: "ri-phone-line", label: PHONE_DISPLAY, href: `tel:${PHONE_E164}` },
    { icon: "ri-calendar-event-line", label: t("contact.bookCall"), href: CALENDLY_URL, external: true },
  ];

  const linkClass =
    "group inline-flex items-center gap-3 text-slate-400 hover:text-cyan-300 transition-colors text-sm cursor-pointer";

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="aurora w-[40rem] h-[20rem] -bottom-40 left-1/2 -translate-x-1/2 bg-cyan-700/20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <img
              src={venturaLogo}
              alt="Ventura Software"
              className="h-10 w-auto mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={linkClass}
                  >
                    <span className="w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t("footer.getInTouch")}
            </h4>
            <ul className="space-y-3">
              {contactItems.map((item) => (
                <li key={item.icon}>
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={linkClass}
                  >
                    <i className={`${item.icon} text-cyan-400 transition-transform duration-300 group-hover:scale-125`} />
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <i className="ri-map-pin-line text-cyan-400" />
                Montevideo, Uruguay
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              {t("footer.rights", { year: new Date().getFullYear() })}
            </p>
            <Link
              to="/privacy"
              className="text-slate-400 hover:text-cyan-300 transition-colors text-sm"
            >
              {t("contact.privacyLink")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
