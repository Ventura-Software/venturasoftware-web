import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Reveal from "@/components/fx/Reveal";
import { SpotlightCard } from "@/components/fx/Interactive";
import {
  CALENDLY_URL,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_E164,
  WHATSAPP_URL,
} from "@/config/contact";

const inputClass =
  "peer w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 transition-all duration-300 focus:outline-none focus:bg-white focus:border-cyan-400 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)]";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration - these should be set in your .env file
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error(
          "EmailJS configuration is missing. Please check your .env file.",
        );
        setSubmitStatus("error");
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          // The form no longer asks for these; kept so the existing EmailJS
          // template still renders.
          company: "Not provided",
          project_type: "Not provided",
          message: formData.message,
          to_email: EMAIL,
        },
        publicKey,
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const channels = [
    {
      icon: "ri-calendar-event-line",
      label: t("contact.bookCall"),
      value: "Calendly",
      href: CALENDLY_URL,
      external: true,
    },
    {
      icon: "ri-mail-line",
      label: t("contact.email"),
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: "ri-whatsapp-line",
      label: "WhatsApp",
      value: PHONE_DISPLAY,
      href: WHATSAPP_URL,
      external: true,
    },
    {
      icon: "ri-phone-line",
      label: t("contact.phone"),
      value: PHONE_DISPLAY,
      href: `tel:${PHONE_E164}`,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] rounded-full bg-cyan-300/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* About */}
        <Reveal id="about" variant="blur" className="text-center mb-24 scroll-mt-28">
          <p className="text-xs font-semibold text-cyan-600 tracking-[0.3em] uppercase mb-4">
            {t("about.eyebrow")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05] tracking-tight">
            {t("about.titleLine1")}
            <br />
            <span className="text-shimmer">{t("about.titleLine2")}</span>
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            <p>{t("about.body")}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: direct channels */}
          <Reveal variant="left">
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              {t("contact.title")}
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {t("contact.body")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {channels.map((channel, index) => (
                <Reveal key={channel.icon} delay={index * 80} variant="up">
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="block h-full"
                  >
                    <SpotlightCard
                      tilt={3}
                      className="spotlight-light group h-full flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-transparent hover:shadow-[0_20px_50px_-24px_rgba(6,182,212,0.5)]"
                    >
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white group-hover:scale-110">
                        <i className={`${channel.icon} text-xl`} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-slate-500 font-medium">
                          {channel.label}
                        </div>
                        <div className="text-slate-900 font-semibold truncate">
                          {channel.value}
                        </div>
                      </div>
                      <i className="ri-arrow-right-up-line ml-auto text-slate-300 transition-all duration-300 group-hover:text-cyan-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </SpotlightCard>
                  </a>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
              <i className="ri-map-pin-line text-cyan-500" />
              Montevideo, Uruguay · UTC−3
            </div>
          </Reveal>

          {/* Right: short form */}
          <Reveal variant="right" delay={100}>
            <div className="border-spin shadow-[0_40px_100px_-40px_rgba(6,182,212,0.5)]">
              <div className="bg-white rounded-[calc(1.6rem-1.5px)] p-8 md:p-10">
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-bold text-slate-900 mb-2"
                      >
                        {t("contact.form.name")} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder={t("contact.form.namePlaceholder")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-slate-900 mb-2"
                      >
                        {t("contact.form.email")} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder={t("contact.form.emailPlaceholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-slate-900 mb-2"
                    >
                      {t("contact.form.message")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={6}
                      className={`${inputClass} resize-none`}
                      placeholder={t("contact.form.messagePlaceholder")}
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1.5">
                      <span>{t("contact.form.maxChars")}</span>
                      <span className="font-mono tabular-nums">
                        {formData.message.length}/500
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shine group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-[length:200%_auto] hover:bg-right text-white font-semibold rounded-full shadow-[0_12px_40px_-12px_rgba(34,211,238,0.8)] transition-[background-position,transform] duration-500 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-4-line animate-spin" />
                        {t("contact.form.sending")}
                      </>
                    ) : (
                      <>
                        {t("contact.form.submit")}
                        <i className="ri-send-plane-2-line transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 leading-relaxed text-center">
                    {t("contact.privacyNotice")}{" "}
                    <Link
                      to="/privacy"
                      className="text-cyan-600 font-medium underline underline-offset-2 hover:text-cyan-700"
                    >
                      {t("contact.privacyLink")}
                    </Link>
                  </p>

                  {submitStatus === "success" && (
                    <div className="fade-up flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm">
                      <i className="ri-checkbox-circle-fill text-xl text-emerald-500" />
                      {t("contact.form.success")}
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="fade-up flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm">
                      <i className="ri-error-warning-fill text-xl text-red-500" />
                      {t("contact.form.error")}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
