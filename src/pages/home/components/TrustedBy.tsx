import waloPilatesImg from "@/assets/images/walo-pilates.png";
import bethelSpaImg from "@/assets/images/bethel-spa.png";
import aypSoftImg from "@/assets/images/ayp-soft.png";
import petrovicSolutionsImg from "@/assets/images/petrovic-solutions.png";
import tuViandaImg from "@/assets/images/tu-vianda.png";
import ticketTwistImg from "@/assets/images/ticket-twist.png";

export default function TrustedBy() {
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
      name: "Bethel Spa",
      width: 200,
      image: bethelSpaImg,
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
        <p className="text-center text-xs font-semibold text-slate-500 tracking-widest uppercase mb-12">
          Trusted By
        </p>

        <div className="carousel-wrapper">
          <div className="carousel-track">
            {allPartners.map((partner, index) => (
              <a
                key={`partner-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-32 px-6 transition-all duration-300 hover:scale-110 flex-shrink-0"
                style={{ width: `${partner.width}px` }}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
