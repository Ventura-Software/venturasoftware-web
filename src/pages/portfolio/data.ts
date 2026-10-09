export type ProjectType = "mobile" | "web" | "both";

// A screenshot placed on the project's square stage canvas. Positions and
// width are percentages of the canvas, so the same layout works on the page
// and in the PDF.
export interface Screen {
  src: string;
  alt: string;
  device: "desktop" | "phone";
  top: number;
  left: number;
  width: number;
  z?: number;
}

export interface Project {
  title: string;
  type: ProjectType;
  year: string;
  link: string;
  linkHref: string;
  color: string;
  secondaryColor: string;
  text1: string;
  text2: string;
  tech: string[];
  screens?: Screen[];
}

export const PROJECTS: Project[] = [
  {
    title: "Walo",
    type: "both",
    year: "2025 — Present",
    link: "walopilates.com.uy",
    linkHref: "https://walopilates.com.uy/",
    color: "#452318",
    secondaryColor: "#7a3b27",
    text1:
      "Walo is a booking and studio management platform for a Pilates studio in Montevideo. Members use the mobile app to browse the schedule, pick their exact reformer bed on an interactive floor plan, join waitlists and buy plans, while staff run the studio from a web dashboard with scheduling, clients, plans, coupons, cashbox, push campaigns and reports.",
    text2:
      "Ventura built Walo end-to-end as three TypeScript codebases: a React Native app on Expo, a React + Vite admin with role-based access, and a NestJS + PostgreSQL API. MercadoPago Checkout Pro returns through deep links and is reconciled by webhooks, scheduled jobs drive automated push notifications, and EAS ships over-the-air updates.",
    tech: [
      "React Native",
      "Expo SDK 54",
      "React + Vite",
      "NestJS",
      "PostgreSQL",
      "MercadoPago",
      "Push Notifications",
      "EAS Updates",
    ],
    screens: [
      { src: "/portfolio/walo-web-2.jpg", alt: "Walo admin schedule", device: "desktop", top: 2, left: 18, width: 82, z: 1 },
      { src: "/portfolio/walo-web-1.jpg", alt: "Walo admin dashboard", device: "desktop", top: 18, left: 0, width: 82, z: 2 },
      { src: "/portfolio/walo-1.jpeg", alt: "Walo classes screen", device: "phone", top: 46, left: 14, width: 23, z: 3 },
      { src: "/portfolio/walo-4.jpeg", alt: "Walo bed picker", device: "phone", top: 38, left: 38.5, width: 23, z: 5 },
      { src: "/portfolio/walo-3.jpeg", alt: "Walo plans screen", device: "phone", top: 46, left: 63, width: 23, z: 4 },
    ],
  },
  {
    title: "Bethel Fitness",
    type: "both",
    year: "2023 — Present",
    link: "bethelspa.com",
    linkHref: "https://bethelspa.com/",
    color: "#1f3d80",
    secondaryColor: "#16285a",
    text1:
      "Bethel Fitness is the operating system for a multi-location gym and wellness club in Montevideo. Members book classes or join waitlists, buy plans through Mercado Pago, check live weight-room occupancy and check in with a QR digital ID, while staff run memberships, class check-in, cash, follow-ups and reports from a web admin.",
    text2:
      "Ventura built Bethel as three apps on one API: a React + Vite staff admin, a React Native member app on Expo SDK 54, and a NestJS + PostgreSQL backend with separate staff and member auth. It ships Mercado Pago checkout with payment deep links, automated push reminders, QR check-in, emailed invoices and over-the-air updates.",
    tech: [
      "React Native",
      "Expo SDK 54",
      "React + Vite",
      "NestJS",
      "PostgreSQL",
      "Mercado Pago",
      "TanStack Query",
      "QR Check-in",
    ],
    screens: [
      { src: "/portfolio/bethel-web-1.jpg", alt: "Bethel staff admin", device: "desktop", top: 6, left: 9, width: 82, z: 1 },
      { src: "/portfolio/bethel-1.jpg", alt: "Bethel login screen", device: "phone", top: 42, left: 6, width: 24, z: 2 },
      { src: "/portfolio/bethel-2.jpg", alt: "Bethel classes screen", device: "phone", top: 36, left: 38, width: 24, z: 4 },
      { src: "/portfolio/bethel-3.jpg", alt: "Bethel live occupancy screen", device: "phone", top: 44, left: 70, width: 24, z: 3 },
    ],
  },
  {
    title: "DMG Lab",
    type: "web",
    year: "2026 — Present",
    link: "",
    linkHref: "",
    color: "#475482",
    secondaryColor: "#3a4468",
    text1:
      "DMG Lab is a laboratory information system for a pathology lab in Uruguay. It tracks every specimen from reception through macroscopy, technical lab, diagnosis and final report, giving each of six lab roles its own worklist with SLA deadlines and automatic overdue alerts, plus a live operations dashboard, agenda and exportable reports.",
    text2:
      "Ventura designed and built DMG Lab end-to-end: a React 19 + Vite SPA over a NestJS 11 API on PostgreSQL, secured with HttpOnly-cookie JWT auth, CSRF protection and role-based access. Macroscopists dictate by voice through Groq Whisper with Spanish spell-correction, and signed final reports are generated as PDFs and emailed to requesters.",
    tech: [
      "React 19",
      "NestJS 11",
      "PostgreSQL",
      "TanStack Query",
      "Tailwind CSS v4",
      "Groq Whisper",
      "PDFKit",
      "Resend",
    ],
    screens: [
      { src: "/portfolio/dmg-1.jpg", alt: "DMG Lab operations dashboard", device: "desktop", top: 4, left: 0, width: 78, z: 1 },
      { src: "/portfolio/dmg-2.jpg", alt: "DMG Lab specimen workflow", device: "desktop", top: 27, left: 11, width: 78, z: 2 },
      { src: "/portfolio/dmg-3.jpg", alt: "DMG Lab reports", device: "desktop", top: 50, left: 22, width: 78, z: 3 },
    ],
  },
  {
    title: "BuildFeed",
    type: "mobile",
    year: "2025 — Present",
    link: "App Store",
    linkHref: "https://apps.apple.com/us/app/buildfeed/id6761027122",
    color: "#8b5cf6",
    secondaryColor: "#1e1b4b",
    text1:
      "BuildFeed is a React Native app for developers who want to stay on top of the AI ecosystem without the noise. It delivers a curated, personalized feed of AI and tech news with stack and topic filters, intelligent summarization, and importance-based ranking — so the most relevant stories surface first.",
    text2:
      "Ventura built the stack around TypeScript, Expo SDK 54, Expo Router, TanStack Query, and Redux Toolkit, with native capabilities like Apple sign-in, push notifications, and OTA updates through EAS. The product direction is a dense, terminal-inspired experience built for speed and clarity.",
    tech: [
      "React Native",
      "Expo SDK 54",
      "Expo Router",
      "TypeScript",
      "TanStack Query",
      "Redux Toolkit",
      "EAS",
      "Apple Sign-in",
    ],
  },
  {
    title: "TuVianda",
    type: "mobile",
    year: "2025 — 2026",
    link: "tuvianda.com",
    linkHref: "https://tuvianda.com/",
    color: "#4ab14f",
    secondaryColor: "#1f5d23",
    text1:
      "TuVianda is a mobile marketplace that connects customers with local home-cooked meal vendors in Uruguay. Customers browse vendors by delivery date and location, build a cart with per-item notes, pay through Plexo, and track order status in real time — while vendors manage incoming orders, toggle between list and map views, and run optimized delivery routes.",
    text2:
      "Ventura designed and built TuVianda end-to-end with React Native and Expo Router, layering Jotai for client state, TanStack Query for server state, and Axios with token-aware interceptors over a typed API. The app ships with expo-maps route planning, push notifications, GPS-based address auto-selection, Plexo payment integration, and full light/dark theming through a custom token system.",
    tech: [
      "React Native",
      "Expo SDK 54",
      "Expo Router",
      "TypeScript",
      "Jotai",
      "TanStack Query",
      "expo-maps",
      "Plexo Payments",
    ],
  },
  {
    title: "Bielcar",
    type: "web",
    year: "2026",
    link: "bielcar.vercel.app",
    linkHref: "https://bielcar.vercel.app",
    color: "#007F9E",
    secondaryColor: "#005E75",
    text1:
      "Bielcar Automóviles is a car dealership and official service workshop in Montevideo, selling new cars from seven brands and used cars of any brand. The new site lets visitors browse new, used and full inventory with filters and vehicle detail views, explore the brands, and book service or send enquiries straight to the right WhatsApp line.",
    text2:
      "Ventura rebuilt the dealership's site from scratch as a static Astro site in TypeScript with a custom design-token system. The live inventory comes from a third-party plugin that Ventura themed to the brand's dark design purely through scoped CSS, adding a mobile filter sheet on top. It ships with structured data, Open Graph cards and a sitemap.",
    tech: [
      "Astro",
      "TypeScript",
      "CSS Design Tokens",
      "Multiaviso",
      "WhatsApp Integration",
      "Schema.org JSON-LD",
      "Vercel",
    ],
    screens: [
      { src: "/portfolio/bielcar-web-1.jpg", alt: "Bielcar new cars catalog", device: "desktop", top: 8, left: 0, width: 80, z: 1 },
      { src: "/portfolio/bielcar-web-2.jpg", alt: "Bielcar service page", device: "desktop", top: 32, left: 8, width: 72, z: 2 },
      { src: "/portfolio/bielcar-2.jpg", alt: "Bielcar service page on mobile", device: "phone", top: 40, left: 56, width: 23, z: 3 },
      { src: "/portfolio/bielcar-1.jpg", alt: "Bielcar home on mobile", device: "phone", top: 26, left: 77, width: 23, z: 4 },
    ],
  },
  {
    title: "Graciela Ruocco",
    type: "web",
    year: "2026",
    link: "ruoccoasociados.com",
    linkHref: "https://www.ruoccoasociados.com/",
    color: "#14263F",
    secondaryColor: "#0A1628",
    text1:
      "Graciela Ruocco & Asociados is a law firm in Montevideo specializing in Administrative Law, Social Security and Human Resources, and Notarial services. Its institutional website presents the team, practice areas and FAQ to individuals and companies, and turns visits into qualified leads through a contact form that sorts each inquiry by practice area.",
    text2:
      "Ventura designed and built the site with Next.js 16, React 19, TypeScript and Tailwind CSS v4 around a custom navy-and-gold palette. The contact form posts to a Route Handler that validates input, blocks bots with a honeypot and per-IP rate limiting, and delivers a branded HTML email to the firm through Resend.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Resend",
      "Rate Limiting",
    ],
    screens: [
      { src: "/portfolio/graciela-web-1.jpg", alt: "Graciela Ruocco home", device: "desktop", top: 12, left: 0, width: 88, z: 1 },
      { src: "/portfolio/graciela-2.jpg", alt: "Graciela Ruocco services on mobile", device: "phone", top: 42, left: 52, width: 24, z: 2 },
      { src: "/portfolio/graciela-1.jpg", alt: "Graciela Ruocco home on mobile", device: "phone", top: 32, left: 76, width: 24, z: 3 },
    ],
  },
  {
    title: "TicketTwist",
    type: "mobile",
    year: "2024",
    link: "tickettwist.app",
    linkHref: "https://www.tickettwist.app/",
    color: "#3c0074",
    secondaryColor: "#15191e",
    text1:
      "TicketTwist is a secure and reliable platform for buying and selling event tickets. The platform provides a trusted environment for ticket transactions with built-in security measures to protect users during the buying and selling process.",
    text2:
      "Ventura led the team and participated in every stage of TicketTwist's development and launch. Using Expo React Native for mobile and Node.js for the backend, we oversaw the project end-to-end, ensuring a seamless user experience and robust security.",
    tech: [
      "React Native",
      "Expo",
      "Node.js",
      "Full-stack",
      "Payments",
      "Security",
    ],
  },
];
