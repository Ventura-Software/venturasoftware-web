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

// Project descriptions are translated: see `projects.<id>` in
// src/i18n/local/<lang>/portfolio.ts.
export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  year: string;
  link: string;
  linkHref: string;
  color: string;
  secondaryColor: string;
  tech: string[];
  screens?: Screen[];
}

export const PROJECTS: Project[] = [
  {
    id: "walo",
    title: "Walo",
    type: "both",
    year: "2025 — Present",
    link: "walopilates.com.uy",
    linkHref: "https://walopilates.com.uy/",
    color: "#452318",
    secondaryColor: "#7a3b27",
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
    id: "bethel",
    title: "Bethel Fitness",
    type: "both",
    year: "2023 — Present",
    link: "bethelspa.com",
    linkHref: "https://bethelspa.com/",
    color: "#1f3d80",
    secondaryColor: "#16285a",
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
    id: "dmg",
    title: "DMG Lab",
    type: "web",
    year: "2026 — Present",
    link: "",
    linkHref: "",
    color: "#475482",
    secondaryColor: "#3a4468",
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
    id: "buildfeed",
    title: "BuildFeed",
    type: "mobile",
    year: "2025 — Present",
    link: "App Store",
    linkHref: "https://apps.apple.com/us/app/buildfeed/id6761027122",
    color: "#8b5cf6",
    secondaryColor: "#1e1b4b",
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
    id: "tuvianda",
    title: "TuVianda",
    type: "mobile",
    year: "2025 — 2026",
    link: "tuvianda.com",
    linkHref: "https://tuvianda.com/",
    color: "#4ab14f",
    secondaryColor: "#1f5d23",
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
    id: "bielcar",
    title: "Bielcar",
    type: "web",
    year: "2026",
    link: "bielcar.vercel.app",
    linkHref: "https://bielcar.vercel.app",
    color: "#007F9E",
    secondaryColor: "#005E75",
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
    id: "graciela",
    title: "Graciela Ruocco",
    type: "web",
    year: "2026",
    link: "ruoccoasociados.com",
    linkHref: "https://www.ruoccoasociados.com/",
    color: "#14263F",
    secondaryColor: "#0A1628",
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
    id: "tickettwist",
    title: "TicketTwist",
    type: "mobile",
    year: "2024",
    link: "tickettwist.app",
    linkHref: "https://www.tickettwist.app/",
    color: "#3c0074",
    secondaryColor: "#15191e",
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
