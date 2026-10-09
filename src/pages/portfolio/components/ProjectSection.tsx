import { useTranslation } from "react-i18next";
import type { Project } from "../data";
import DeviceStage from "./DeviceStage";
import { LinkIcon, TypeBadge } from "./icons";

interface Props {
  project: Project;
}

export default function ProjectSection({ project }: Props) {
  const { t } = useTranslation();
  const gradient = `linear-gradient(135deg, ${project.color} 0%, ${
    project.secondaryColor || project.color
  } 100%)`;

  return (
    <section
      className="portfolio-section portfolio-project"
      style={{ background: gradient }}
    >
      <div className="stage">
        <DeviceStage project={project} />
      </div>
      <div className="info">
        <TypeBadge type={project.type} />
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
    </section>
  );
}
