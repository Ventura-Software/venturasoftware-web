export default {
  portfolio: {
    downloadPdf: 'Download PDF',
    preparing: 'Preparing…',
    pdfError: 'PDF generation failed: {{message}}',
    eyebrow: 'Ventura Software · Portfolio',
    title: 'Success Stories',
    intro:
      "A selection of the products we've shipped — from mobile apps to full-stack platforms. Each one is a real partnership with founders and product teams who trusted us to build something that lasts.",
    present: 'Present',
    typeWeb: 'Web',
    typeBoth: 'Mobile · Web',
    pdf: {
      aboutEyebrow: 'Ventura Software · Success Stories',
      aboutBody:
        "Ventura Software is a boutique engineering studio focused on delivering reliable, scalable and high-quality digital products. We partner with founders and product teams to ship mobile and web software end-to-end — from architecture and integrations to release management. What follows is a brief tour of the projects we've built.",
      closingEyebrow: "What's next",
      closingTitle:
        "Let's build the <accent>next great product</accent> together.",
      closingBody:
        "The next success story on these pages could be yours. Whether you're shaping a new idea, scaling an existing product, or rescuing a project that's stalled — Ventura partners with founders and product teams to ship software that lasts. We'd love to hear what you're working on.",
      web: 'Web',
      email: 'Email',
      thankYou: 'Thank you.',
    },
  },
  projects: {
    walo: {
      text1:
        'Walo is a booking and studio management platform for a Pilates studio in Montevideo. Members use the mobile app to browse the schedule, pick their exact reformer bed on an interactive floor plan, join waitlists and buy plans, while staff run the studio from a web dashboard with scheduling, clients, plans, coupons, cashbox, push campaigns and reports.',
      text2:
        'Ventura built Walo end-to-end as three TypeScript codebases: a React Native app on Expo, a React + Vite admin with role-based access, and a NestJS + PostgreSQL API. MercadoPago Checkout Pro returns through deep links and is reconciled by webhooks, scheduled jobs drive automated push notifications, and EAS ships over-the-air updates.',
    },
    bethel: {
      text1:
        'Bethel Fitness is the operating system for a multi-location gym and wellness club in Montevideo. Members book classes or join waitlists, buy plans through Mercado Pago, check live weight-room occupancy and check in with a QR digital ID, while staff run memberships, class check-in, cash, follow-ups and reports from a web admin.',
      text2:
        'Ventura built Bethel as three apps on one API: a React + Vite staff admin, a React Native member app on Expo SDK 54, and a NestJS + PostgreSQL backend with separate staff and member auth. It ships Mercado Pago checkout with payment deep links, automated push reminders, QR check-in, emailed invoices and over-the-air updates.',
    },
    dmg: {
      text1:
        'DMG Lab is a laboratory information system for a pathology lab in Uruguay. It tracks every specimen from reception through macroscopy, technical lab, diagnosis and final report, giving each of six lab roles its own worklist with SLA deadlines and automatic overdue alerts, plus a live operations dashboard, agenda and exportable reports.',
      text2:
        'Ventura designed and built DMG Lab end-to-end: a React 19 + Vite SPA over a NestJS 11 API on PostgreSQL, secured with HttpOnly-cookie JWT auth, CSRF protection and role-based access. Macroscopists dictate by voice through Groq Whisper with Spanish spell-correction, and signed final reports are generated as PDFs and emailed to requesters.',
    },
    buildfeed: {
      text1:
        'BuildFeed is a React Native app for developers who want to stay on top of the AI ecosystem without the noise. It delivers a curated, personalized feed of AI and tech news with stack and topic filters, intelligent summarization, and importance-based ranking — so the most relevant stories surface first.',
      text2:
        'Ventura built the stack around TypeScript, Expo SDK 54, Expo Router, TanStack Query, and Redux Toolkit, with native capabilities like Apple sign-in, push notifications, and OTA updates through EAS. The product direction is a dense, terminal-inspired experience built for speed and clarity.',
    },
    tuvianda: {
      text1:
        'TuVianda is a mobile marketplace that connects customers with local home-cooked meal vendors in Uruguay. Customers browse vendors by delivery date and location, build a cart with per-item notes, pay through Plexo, and track order status in real time — while vendors manage incoming orders, toggle between list and map views, and run optimized delivery routes.',
      text2:
        'Ventura designed and built TuVianda end-to-end with React Native and Expo Router, layering Jotai for client state, TanStack Query for server state, and Axios with token-aware interceptors over a typed API. The app ships with expo-maps route planning, push notifications, GPS-based address auto-selection, Plexo payment integration, and full light/dark theming through a custom token system.',
    },
    bielcar: {
      text1:
        'Bielcar Automóviles is a car dealership and official service workshop in Montevideo, selling new cars from seven brands and used cars of any brand. The new site lets visitors browse new, used and full inventory with filters and vehicle detail views, explore the brands, and book service or send enquiries straight to the right WhatsApp line.',
      text2:
        "Ventura rebuilt the dealership's site from scratch as a static Astro site in TypeScript with a custom design-token system. The live inventory comes from a third-party plugin that Ventura themed to the brand's dark design purely through scoped CSS, adding a mobile filter sheet on top. It ships with structured data, Open Graph cards and a sitemap.",
    },
    graciela: {
      text1:
        'Graciela Ruocco & Asociados is a law firm in Montevideo specializing in Administrative Law, Social Security and Human Resources, and Notarial services. Its institutional website presents the team, practice areas and FAQ to individuals and companies, and turns visits into qualified leads through a contact form that sorts each inquiry by practice area.',
      text2:
        'Ventura designed and built the site with Next.js 16, React 19, TypeScript and Tailwind CSS v4 around a custom navy-and-gold palette. The contact form posts to a Route Handler that validates input, blocks bots with a honeypot and per-IP rate limiting, and delivers a branded HTML email to the firm through Resend.',
    },
    tickettwist: {
      text1:
        'TicketTwist is a secure and reliable platform for buying and selling event tickets. The platform provides a trusted environment for ticket transactions with built-in security measures to protect users during the buying and selling process.',
      text2:
        "Ventura led the team and participated in every stage of TicketTwist's development and launch. Using Expo React Native for mobile and Node.js for the backend, we oversaw the project end-to-end, ensuring a seamless user experience and robust security.",
    },
  },
};
