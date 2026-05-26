import { forwardRef } from "react";
import { PROJECTS, type Project } from "../data";
import DeviceStage from "./DeviceStage";
import { LinkIcon, TypeBadge } from "./icons";

function PdfProjectCard({ project }: { project: Project }) {
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
        <div className="year">{project.year}</div>
        <h2>{project.title}</h2>
        <p>{project.text1}</p>
        <p>{project.text2}</p>
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
  return (
    <div className="card about-card">
      <img
        className="pdf-corner-logo"
        src="/portfolio/ventura-logo.png"
        alt="Ventura"
      />
      <div className="info" style={{ width: "100%", padding: "36px 56px" }}>
        <div className="year" style={{ color: "#2bbff2", opacity: 1 }}>
          Ventura Software · Success Stories
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
          Ventura Software is a boutique engineering studio focused on
          delivering reliable, scalable and high-quality digital products. We
          partner with founders and product teams to ship mobile and web
          software end-to-end — from architecture and integrations to release
          management. What follows is a brief tour of the projects we've built.
        </p>
        <div className="about-stats">
          <div className="about-stat">
            <strong>30+</strong>
            <span>Projects Delivered</span>
          </div>
          <div className="about-stat">
            <strong>1000+</strong>
            <span>Caffeine Consumed</span>
          </div>
          <div className="about-stat">
            <strong>100%</strong>
            <span>Commitment</span>
          </div>
          <div className="about-stat">
            <strong>200%</strong>
            <span>Happy Clients</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClosingCard() {
  return (
    <div className="card closing-card">
      <img
        className="pdf-corner-logo"
        src="/portfolio/ventura-logo.png"
        alt="Ventura"
      />
      <div className="info" style={{ width: "100%", padding: "36px 56px" }}>
        <div className="closing-eyebrow">What's next</div>
        <h2>
          Let's build the <span className="accent">next great product</span>{" "}
          together.
        </h2>
        <p className="closing-body">
          The next success story on these pages could be yours. Whether you're
          shaping a new idea, scaling an existing product, or rescuing a project
          that's stalled — Ventura partners with founders and product teams to
          ship software that lasts. We'd love to hear what you're working on.
        </p>
        <div className="closing-contact">
          <div>
            <span>Web</span>
            <a
              href="https://www.venturasoftware.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              venturasoftware.dev
            </a>
          </div>
          <div>
            <span>Email</span>
            <a href="mailto:info@venturasoftware.dev">
              info@venturasoftware.dev
            </a>
          </div>
        </div>
      </div>
      <div className="closing-mark">Thank you.</div>
    </div>
  );
}

const PdfRoot = forwardRef<HTMLDivElement>((_, ref) => {
  const cards = [
    <AboutCard key="about" />,
    ...PROJECTS.map((p) => <PdfProjectCard key={p.title} project={p} />),
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
