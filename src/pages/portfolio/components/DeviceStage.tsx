import type { Project } from "../data";

interface Props {
  project: Project;
}

export default function DeviceStage({ project }: Props) {
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

  if (project.title === "Walo") {
    return (
      <>
        <div className="portfolio-wl-phone one">
          <img src="/portfolio/walo-1.jpeg" alt="Walo screen 1" />
        </div>
        <div className="portfolio-wl-phone two">
          <img src="/portfolio/walo-2.jpeg" alt="Walo screen 2" />
        </div>
        <div className="portfolio-wl-phone three">
          <img src="/portfolio/walo-3.jpeg" alt="Walo screen 3" />
        </div>
        <div className="portfolio-wl-phone four">
          <img src="/portfolio/walo-4.jpeg" alt="Walo screen 4" />
        </div>
      </>
    );
  }

  return null;
}
