import type { ProjectType } from "../data";

export const LinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </svg>
);

const MonitorIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const BothIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="14" height="11" rx="2" />
    <rect x="15" y="9" width="7" height="11" rx="1.5" />
  </svg>
);

const PlatformLogos = () => (
  <>
    <img className="platform-logo" src="/portfolio/apple-logo.png" alt="iOS" />
    <img
      className="platform-logo"
      src="/portfolio/android-logo.png"
      alt="Android"
    />
  </>
);

interface TypeBadgeProps {
  type: ProjectType;
  className?: string;
}

export function TypeBadge({ type, className }: TypeBadgeProps) {
  const cls = className || "portfolio-type-badge";
  if (type === "web") {
    return (
      <div className={cls}>
        <MonitorIcon />
        <span>Web</span>
      </div>
    );
  }
  if (type === "both") {
    return (
      <div className={cls}>
        <BothIcon />
        <span>Mobile · Web</span>
      </div>
    );
  }
  return (
    <div className={cls}>
      <PlatformLogos />
    </div>
  );
}

// Re-export for non-default rendering if needed
export { PhoneIcon, MonitorIcon, BothIcon };
