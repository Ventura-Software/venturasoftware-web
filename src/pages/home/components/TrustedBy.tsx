import { useTranslation } from "react-i18next";
import Reveal from "@/components/fx/Reveal";
import waloPilatesImg from "@/assets/images/walo-pilates.png";
import bethelFitnessImg from "@/assets/images/bethel-fitness.png";
import aypSoftImg from "@/assets/images/ayp-soft.png";
import petrovicSolutionsImg from "@/assets/images/petrovic-solutions.png";
import tuViandaImg from "@/assets/images/tu-vianda.png";
import ticketTwistImg from "@/assets/images/ticket-twist.png";

export default function TrustedBy() {
  const { t } = useTranslation();
  const partners = [
    {
      name: "Walo Pilates",
      width: 200,
      image: waloPilatesImg,
      url: "https://walopilates.com.uy/",
    },
    {
      name: "Petrovic Solutions",
      width: 200,
      image: petrovicSolutionsImg,
      url: "https://petrovicsolutions.com/",
    },
    {
      name: "Bethel Fitness",
      width: 200,
      image: bethelFitnessImg,
      url: "https://bethelspa.com/",
    },
    {
      name: "Ayp Soft",
      width: 200,
      image: aypSoftImg,
      url: "https://ayp.com.uy/",
    },
    {
      name: "Tu Vianda",
      width: 200,
      image: tuViandaImg,
      url: "https://www.tuvianda.com/",
    },
    {
      name: "Ticket Twist",
      width: 200,
      image: ticketTwistImg,
      url: "https://www.tickettwist.app/",
    },
  ];

  const allPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-20 bg-slate-50">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .carousel-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        
        .carousel-wrapper::before,
        .carousel-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          z-index: 10;
          pointer-events: none;
        }
        
        .carousel-wrapper::before {
          left: 0;
          background: linear-gradient(to right, rgb(248, 250, 252), transparent);
        }
        
        .carousel-wrapper::after {
          right: 0;
          background: linear-gradient(to left, rgb(248, 250, 252), transparent);
        }
        
        .carousel-track {
          display: inline-flex;
          gap: 3rem;
          align-items: center;
          animation: scroll-left 30s linear infinite;
          will-change: transform;
        }
        
        .carousel-wrapper:hover .carousel-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal as="p" variant="blur" className="text-center text-xs font-semibold text-slate-500 tracking-[0.3em] uppercase mb-12">
          {t("trustedBy.title")}
        </Reveal>

        <Reveal variant="up" delay={150} className="carousel-wrapper">
          <div className="carousel-track">
            {allPartners.map((partner, index) => (
              <a
                key={`partner-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center h-32 px-6 transition-all duration-300 hover:scale-110 flex-shrink-0"
                style={{ width: `${partner.width}px` }}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain transition-all duration-500 [@media(hover:hover)]:grayscale [@media(hover:hover)]:opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
