import type { Project } from "../data";
import { LinkIcon } from "./icons";

// Website plus App Store / Google Play links. Every anchor keeps the `link`
// class so the PDF generator turns it into a clickable area.
export default function ProjectLinks({
  project,
  style,
}: {
  project: Project;
  style?: React.CSSProperties;
}) {
  const stores = [
    { href: project.stores?.appStore, label: "App Store", icon: "ri-apple-fill" },
    { href: project.stores?.googlePlay, label: "Google Play", icon: "ri-google-play-fill" },
  ].filter((s) => s.href);

  if (!project.linkHref && stores.length === 0) return null;

  return (
    <div className="links" style={style}>
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
      {stores.map((store) => (
        <a
          key={store.label}
          className="link store-link"
          href={store.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={store.icon} /> {store.label}
        </a>
      ))}
    </div>
  );
}
