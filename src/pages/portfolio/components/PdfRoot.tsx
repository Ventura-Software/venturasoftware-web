import { forwardRef } from "react";
import { Trans, useTranslation } from "react-i18next";
import { PROJECTS, type Project } from "../data";
import DeviceStage from "./DeviceStage";
import { LinkIcon, TypeBadge } from "./icons";

function PdfProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();
  const gradient = `linear-gradient(135deg, ${project.color} 0%, ${
    project.secondaryColor || project.color
  } 100%)`;
  return (
    <div className="card" style={{ background: gradient }}>
      <img
        className="pdf-corner-logo"
        src="/portfolio/ventura-logo.png"
        alt="Ventura"
      />
      <div className="stage">
        <DeviceStage project={project} />
      </div>
      <div className="info">
        <TypeBadge type={project.type} className="type-badge" />
        <div className="year">
          {project.year.replace("Present", t("portfolio.present"))}
        </div>
        <h2>{project.title}</h2>
        <p>{t(`projects.${project.id}.text1`)}</p>
        <p>{t(`projects.${project.id}.text2`)}</p>
        <div className="tech">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        {project.linkHref && (
          <a
            className="link"
            href={project.linkHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link} <LinkIcon />
          </a>
        )}
      </div>
    </div>
  );
}

function AboutCard() {
  const { t } = useTranslation();
  return (
    <div className="card about-card">
      <img
        className="pdf-corner-logo"
        src="/portfolio/ventura-logo.png"
        alt="Ventura"
      />
      <div className="info" style={{ width: "100%", padding: "36px 56px" }}>
        <div className="year" style={{ color: "#2bbff2", opacity: 1 }}>
          {t("portfolio.pdf.aboutEyebrow")}
        </div>
        <h2 style={{ fontSize: 38, maxWidth: 680, color: "#2bbff2" }}>
          Ventura Software
        </h2>
        <p
          style={{
            fontSize: 12,
            maxWidth: 680,
            marginTop: 12,
            lineHeight: 1.55,
          }}
        >
          {t("portfolio.pdf.aboutBody")}
        </p>
        <div className="about-stats">
          <div className="about-stat">
            <strong>30+</strong>
            <span>{t("stats.projects")}</span>
          </div>
          <div className="about-stat">
            <strong>1000+</strong>
            <span>{t("stats.caffeine")}</span>
          </div>
          <div className="about-stat">
            <strong>100%</strong>
            <span>{t("stats.commitment")}</span>
          </div>
          <div className="about-stat">
            <strong>200%</strong>
            <span>{t("stats.happyClients")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClosingCard() {
  const { t } = useTranslation();
  return (
    <div className="card closing-card">
      <img
        className="pdf-corner-logo"
        src="/portfolio/ventura-logo.png"
        alt="Ventura"
      />
      <div className="info" style={{ width: "100%", padding: "36px 56px" }}>
        <div className="closing-eyebrow">{t("portfolio.pdf.closingEyebrow")}</div>
        <h2>
          <Trans
            i18nKey="portfolio.pdf.closingTitle"
            components={{ accent: <span className="accent" /> }}
          />
        </h2>
        <p className="closing-body">
          {t("portfolio.pdf.closingBody")}
        </p>
        <div className="closing-contact">
          <div>
            <span>{t("portfolio.pdf.web")}</span>
            <a
              href="https://www.venturasoftware.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              venturasoftware.dev
            </a>
          </div>
          <div>
            <span>{t("portfolio.pdf.email")}</span>
            <a href="mailto:info@venturasoftware.dev">
              info@venturasoftware.dev
            </a>
          </div>
        </div>
      </div>
      <div className="closing-mark">{t("portfolio.pdf.thankYou")}</div>
    </div>
  );
}

const PdfRoot = forwardRef<HTMLDivElement>((_, ref) => {
  const cards = [
    <AboutCard key="about" />,
    ...PROJECTS.map((p) => <PdfProjectCard key={p.id} project={p} />),
    <ClosingCard key="closing" />,
  ];

  // Pair cards into pages of two
  const pages: React.ReactNode[][] = [];
  for (let i = 0; i < cards.length; i += 2) {
    pages.push([cards[i], cards[i + 1]]);
  }

  return (
    <div ref={ref} className="portfolio-pdf-root">
      {pages.map((pair, i) => (
        <div className="page" key={i}>
          {pair[0]}
          {pair[1] || (
            <div className="card" style={{ background: "#0b0d10" }}></div>
          )}
        </div>
      ))}
    </div>
  );
});

PdfRoot.displayName = "PdfRoot";

export default PdfRoot;
