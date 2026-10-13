import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "@/components/fx/hooks";
import type { Project } from "../data";
import DeviceStage from "./DeviceStage";
import { LinkIcon, TypeBadge } from "./icons";

interface Props {
  project: Project;
}

export default function ProjectSection({ project }: Props) {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });
  const step = (i: number) => ({ "--i": i }) as React.CSSProperties;
  const gradient = `linear-gradient(135deg, ${project.color} 0%, ${
    project.secondaryColor || project.color
  } 100%)`;

  return (
    <section
      ref={ref}
      className={`portfolio-section portfolio-project ${inView ? "in-view" : ""}`}
      style={{ background: gradient }}
    >
      <div className="stage">
        <DeviceStage project={project} />
      </div>
      <div className="info">
        <TypeBadge type={project.type} />
        <div className="year" style={step(1)}>
          {project.year.replace("Present", t("portfolio.present"))}
        </div>
        <h2 style={step(2)}>{project.title}</h2>
        <p style={step(3)}>{t(`projects.${project.id}.text1`)}</p>
        <p style={step(4)}>{t(`projects.${project.id}.text2`)}</p>
        <div className="tech" style={step(5)}>
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        {project.linkHref && (
          <a
            className="link"
            style={step(6)}
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
