import type { Project, Screen } from "../data";

interface Props {
  project: Project;
}

function ScreenFrame({ screen }: { screen: Screen }) {
  const style = {
    top: `${screen.top}%`,
    left: `${screen.left}%`,
    width: `${screen.width}%`,
    zIndex: screen.z,
  };

  if (screen.device === "phone") {
    return (
      <div className="portfolio-phone" style={style}>
        <img src={screen.src} alt={screen.alt} />
      </div>
    );
  }

  return (
    <div className="portfolio-browser" style={style}>
      <div className="bar">
        <span />
        <span />
        <span />
      </div>
      <img src={screen.src} alt={screen.alt} />
    </div>
  );
}

export default function DeviceStage({ project }: Props) {
  if (project.screens) {
    return (
      <div className="portfolio-canvas-box">
        <div className="portfolio-canvas">
          {project.screens.map((s) => (
            <ScreenFrame key={s.src} screen={s} />
          ))}
        </div>
      </div>
    );
  }

  if (project.title === "TicketTwist") {
    return (
      <img
        className="portfolio-tt-apps"
        src="/portfolio/tickettwist.svg"
        alt="TicketTwist app screens"
      />
    );
  }

  if (project.title === "Road Scholar") {
    return (
      <>
        <img
          className="portfolio-rs-apps one"
          src="/portfolio/roadscholar-1.svg"
          alt="Road Scholar app screen 1"
        />
        <img
          className="portfolio-rs-apps two"
          src="/portfolio/roadscholar-2.svg"
          alt="Road Scholar app screen 2"
        />
      </>
    );
  }

  if (project.title === "Pet Cloud") {
    return (
      <img
        className="portfolio-pc-apps"
        src="/portfolio/figopet.svg"
        alt="Pet Cloud app screens"
      />
    );
  }

  if (project.title === "BuildFeed") {
    return (
      <>
        <div className="portfolio-bf-phone one">
          <img src="/portfolio/buildfeed-1.png" alt="BuildFeed screen 1" />
        </div>
        <div className="portfolio-bf-phone two">
          <img src="/portfolio/buildfeed-2.png" alt="BuildFeed screen 2" />
        </div>
        <div className="portfolio-bf-phone three">
          <img src="/portfolio/buildfeed-3.png" alt="BuildFeed screen 3" />
        </div>
      </>
    );
  }

  if (project.title === "TuVianda") {
    return (
      <img
        className="portfolio-tv-apps"
        src="/portfolio/tuvianda.svg"
        alt="TuVianda app screens"
      />
    );
  }

  return null;
}
