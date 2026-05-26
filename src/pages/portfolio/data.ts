export type ProjectType = "mobile" | "web" | "both";

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
}

export const PROJECTS: Project[] = [
  {
    title: "Walo",
    type: "mobile",
    year: "2026 — Present",
    link: "walopilates.com.uy",
    linkHref: "https://walopilates.com.uy/",
    color: "#452318",
    secondaryColor: "#7a3b27",
    text1:
      "Walo is a mobile app for a pilates studio that lets members browse the class schedule, book sessions, join waitlists, manage subscription plans, and handle payments through MercadoPago. Built with React Native and Expo, it pairs a smooth booking flow with push notifications and a rewards program.",
    text2:
      "Ventura led product and technical direction on Walo, owning the iOS and Android release process and implementing the critical pieces: push notifications, OTA updates with Expo, and the MercadoPago payment integration.",
    tech: [
      "React Native",
      "Expo",
      "MercadoPago",
      "Push Notifications",
      "OTA Updates",
      "iOS / Android",
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
