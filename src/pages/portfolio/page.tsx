import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../home/components/Navbar";
import Footer from "../home/components/Footer";
import ProjectSection from "./components/ProjectSection";
import PdfRoot from "./components/PdfRoot";
import { PROJECTS } from "./data";
import { generatePortfolioPdf } from "./pdf";
import "./portfolio.css";

export default function PortfolioPage() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(true); // always "scrolled" — page bg is dark
  const [generating, setGenerating] = useState(false);
  const pdfRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadPdf = async () => {
    if (!pdfRootRef.current || generating) return;
    setGenerating(true);
    try {
      await generatePortfolioPdf(pdfRootRef.current);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert(
        t("portfolio.pdfError", {
          message: err instanceof Error ? err.message : String(err),
        })
      );
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="portfolio-root">
      <Navbar scrolled={scrolled} />

      <button
        type="button"
        className="portfolio-pdf-btn"
        onClick={handleDownloadPdf}
        disabled={generating}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        {generating ? t("portfolio.preparing") : t("portfolio.downloadPdf")}
      </button>

      <main>
        <section className="portfolio-section portfolio-hero">
          <div className="eyebrow">{t("portfolio.eyebrow")}</div>
          <h1>{t("portfolio.title")}</h1>
          <div className="tag">{t("portfolio.intro")}</div>
        </section>

        {PROJECTS.map((p) => (
          <ProjectSection key={p.id} project={p} />
        ))}
      </main>

      <Footer />

      <PdfRoot ref={pdfRootRef} />
    </div>
  );
}
