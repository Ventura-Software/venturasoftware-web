import { useState, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
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
          company: formData.company || "Not provided",
          project_type: formData.projectType,
          message: formData.message,
          to_email: "info@venturasoftware.dev", // Your email where you'll receive the messages
        },
        publicKey,
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* About Section */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-cyan-500 tracking-widest uppercase mb-4">
            {t("about.eyebrow")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {t("about.titleLine1")}
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              {t("about.titleLine2")}
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>{t("about.body")}</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Info */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t("contact.title")}
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t("contact.body")}
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 rounded-lg">
                  <i className="ri-mail-line text-xl text-cyan-500"></i>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">
                    {t("contact.email")}
                  </div>
                  <div className="text-slate-900 font-semibold">
                    info@venturasoftware.dev
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 rounded-lg">
                  <i className="ri-phone-line text-xl text-cyan-500"></i>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">
                    {t("contact.phone")}
                  </div>
                  <div className="text-slate-900 font-semibold">
                    +598 97 388 046
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 rounded-lg">
                  <i className="ri-map-pin-line text-xl text-cyan-500"></i>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">
                    {t("contact.location")}
                  </div>
                  <div className="text-slate-900 font-semibold">
                    Montevideo, Uruguay
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
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
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-bold text-slate-900 mb-2"
                >
                  {t("contact.form.company")}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder={t("contact.form.companyPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-bold text-slate-900 mb-2"
                >
                  {t("contact.form.projectType")} *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="">
                    {t("contact.form.projectTypePlaceholder")}
                  </option>
                  {["web", "mobile", "backend", "design", "full", "other"].map(
                    (type) => (
                      <option key={type} value={type}>
                        {t(`contact.form.projectTypes.${type}`)}
                      </option>
                    ),
                  )}
                </select>
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
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  placeholder={t("contact.form.messagePlaceholder")}
                ></textarea>
                <p className="text-xs text-slate-500 mt-1">
                  {t("contact.form.maxChars")}
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                {isSubmitting
                  ? t("contact.form.sending")
                  : t("contact.form.submit")}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                  {t("contact.form.success")}
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                  {t("contact.form.error")}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
