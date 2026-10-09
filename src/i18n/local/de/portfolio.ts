// Written without "ß" so the same text reads correctly in Germany, Austria
// and Switzerland (Swiss German orthography uses "ss").
export default {
  portfolio: {
    downloadPdf: 'PDF herunterladen',
    preparing: 'Wird vorbereitet…',
    pdfError: 'PDF konnte nicht erstellt werden: {{message}}',
    eyebrow: 'Ventura Software · Portfolio',
    title: 'Erfolgsgeschichten',
    intro:
      'Eine Auswahl der Produkte, die wir ausgeliefert haben – von mobilen Apps bis zu Full-Stack-Plattformen. Hinter jedem steht eine echte Partnerschaft mit Gründern und Produktteams, die uns vertraut haben, etwas Beständiges zu bauen.',
    present: 'heute',
    typeWeb: 'Web',
    typeBoth: 'Mobile · Web',
    pdf: {
      aboutEyebrow: 'Ventura Software · Erfolgsgeschichten',
      aboutBody:
        'Ventura Software ist ein Boutique-Engineering-Studio, das zuverlässige, skalierbare und hochwertige digitale Produkte liefert. Gemeinsam mit Gründern und Produktteams entwickeln wir mobile und Web-Software von A bis Z – von Architektur und Integrationen bis zum Release-Management. Im Folgenden ein kurzer Überblick über die Projekte, die wir realisiert haben.',
      closingEyebrow: 'Wie geht es weiter',
      closingTitle:
        'Lassen Sie uns gemeinsam das <accent>nächste herausragende Produkt</accent> bauen.',
      closingBody:
        'Die nächste Erfolgsgeschichte auf diesen Seiten könnte Ihre sein. Ob Sie eine neue Idee gestalten, ein bestehendes Produkt skalieren oder ein ins Stocken geratenes Projekt retten möchten – Ventura entwickelt gemeinsam mit Gründern und Produktteams Software, die bleibt. Wir freuen uns darauf, von Ihrem Vorhaben zu hören.',
      web: 'Web',
      email: 'E-Mail',
      thankYou: 'Vielen Dank.',
    },
  },
  projects: {
    walo: {
      text1:
        'Walo ist eine Buchungs- und Verwaltungsplattform für ein Pilates-Studio in Montevideo. Mitglieder sehen in der mobilen App den Kursplan, wählen auf einem interaktiven Raumplan ihr genaues Reformer-Gerät, tragen sich auf Wartelisten ein und kaufen Abos, während das Team das Studio über ein Web-Dashboard mit Planung, Kunden, Abos, Gutscheinen, Kasse, Push-Kampagnen und Reports steuert.',
      text2:
        'Ventura hat Walo von A bis Z in drei TypeScript-Codebasen umgesetzt: eine React-Native-App auf Expo, ein React + Vite-Admin mit rollenbasiertem Zugriff und eine NestJS + PostgreSQL-API. MercadoPago Checkout Pro kehrt per Deep Link in die App zurück und wird über Webhooks abgeglichen, geplante Jobs lösen automatische Push-Benachrichtigungen aus und EAS liefert Over-the-Air-Updates aus.',
    },
    bethel: {
      text1:
        'Bethel Fitness ist das Betriebssystem eines Fitness- und Wellnessclubs mit mehreren Standorten in Montevideo. Mitglieder buchen Kurse oder tragen sich auf Wartelisten ein, kaufen Abos über Mercado Pago, sehen die aktuelle Auslastung des Kraftraums live und checken mit einem digitalen QR-Ausweis ein, während das Team Mitgliedschaften, Kurs-Check-ins, Kasse, Nachfassaktionen und Reports über ein Web-Admin verwaltet.',
      text2:
        'Ventura hat Bethel als drei Apps auf einer gemeinsamen API umgesetzt: ein React + Vite-Admin für das Team, eine React-Native-Mitglieder-App auf Expo SDK 54 und ein NestJS + PostgreSQL-Backend mit getrennter Authentifizierung für Team und Mitglieder. Dazu kommen Mercado-Pago-Checkout mit Payment-Deep-Links, automatische Push-Erinnerungen, QR-Check-in, Rechnungen per E-Mail und Over-the-Air-Updates.',
    },
    dmg: {
      text1:
        'DMG Lab ist ein Laborinformationssystem für ein Pathologielabor in Uruguay. Es verfolgt jede Probe vom Eingang über Makroskopie, technisches Labor und Diagnose bis zum finalen Befund und gibt jeder der sechs Laborrollen eine eigene Arbeitsliste mit SLA-Fristen und automatischen Überfälligkeitswarnungen – dazu ein Live-Dashboard, eine Agenda und exportierbare Reports.',
      text2:
        'Ventura hat DMG Lab von A bis Z konzipiert und entwickelt: eine React 19 + Vite-SPA auf einer NestJS-11-API mit PostgreSQL, abgesichert durch JWT-Authentifizierung über HttpOnly-Cookies, CSRF-Schutz und rollenbasierten Zugriff. Makroskopiker diktieren per Spracheingabe über Groq Whisper mit spanischer Rechtschreibkorrektur, und signierte Befunde werden als PDF erzeugt und per E-Mail an die Einsender verschickt.',
    },
    buildfeed: {
      text1:
        'BuildFeed ist eine React-Native-App für Entwickler, die beim KI-Ökosystem auf dem Laufenden bleiben wollen – ohne das Rauschen. Sie liefert einen kuratierten, personalisierten Feed mit KI- und Tech-News, Filtern nach Stack und Thema, intelligenten Zusammenfassungen und einem Ranking nach Relevanz, damit die wichtigsten Meldungen zuerst erscheinen.',
      text2:
        'Ventura hat den Stack mit TypeScript, Expo SDK 54, Expo Router, TanStack Query und Redux Toolkit aufgebaut – inklusive nativer Funktionen wie Sign in with Apple, Push-Benachrichtigungen und OTA-Updates über EAS. Die Produktvision: eine dichte, terminal-inspirierte Experience, gebaut für Tempo und Klarheit.',
    },
    tuvianda: {
      text1:
        'TuVianda ist ein mobiler Marktplatz, der Kunden in Uruguay mit lokalen Anbietern hausgemachter Gerichte verbindet. Kunden finden Anbieter nach Lieferdatum und Standort, stellen einen Warenkorb mit Notizen pro Artikel zusammen, bezahlen über Plexo und verfolgen ihre Bestellung in Echtzeit – während Anbieter eingehende Bestellungen verwalten, zwischen Listen- und Kartenansicht wechseln und optimierte Lieferrouten fahren.',
      text2:
        'Ventura hat TuVianda von A bis Z mit React Native und Expo Router konzipiert und entwickelt – mit Jotai für den Client-State, TanStack Query für den Server-State und Axios mit tokenbewussten Interceptors über einer typisierten API. Die App bietet Routenplanung mit expo-maps, Push-Benachrichtigungen, GPS-basierte Adresswahl, Plexo-Zahlungsintegration und vollständiges Light/Dark-Theming über ein eigenes Token-System.',
    },
    bielcar: {
      text1:
        'Bielcar Automóviles ist ein Autohaus mit Vertragswerkstatt in Montevideo, das Neuwagen von sieben Marken sowie Gebrauchtwagen aller Marken verkauft. Auf der neuen Website können Besucher Neu-, Gebraucht- und Gesamtbestand mit Filtern und Fahrzeug-Detailansichten durchsuchen, die Marken entdecken und Servicetermine buchen oder Anfragen direkt an die passende WhatsApp-Nummer senden.',
      text2:
        'Ventura hat die Website des Autohauses von Grund auf neu als statische Astro-Site in TypeScript mit eigenem Design-Token-System gebaut. Der Live-Bestand stammt aus einem Drittanbieter-Plugin, das Ventura allein über gekapseltes CSS an das dunkle Design der Marke angepasst und um ein mobiles Filter-Panel ergänzt hat. Dazu kommen strukturierte Daten, Open-Graph-Karten und eine Sitemap.',
    },
    graciela: {
      text1:
        'Graciela Ruocco & Asociados ist eine Anwaltskanzlei in Montevideo mit Schwerpunkt auf Verwaltungsrecht, Sozialversicherung und Personalwesen sowie Notariatsleistungen. Die Website stellt Privatpersonen und Unternehmen das Team, die Fachgebiete und ein FAQ vor und verwandelt Besuche in qualifizierte Leads – über ein Kontaktformular, das jede Anfrage dem passenden Fachgebiet zuordnet.',
      text2:
        'Ventura hat die Website mit Next.js 16, React 19, TypeScript und Tailwind CSS v4 rund um eine eigene Farbpalette in Marineblau und Gold konzipiert und entwickelt. Das Kontaktformular sendet an einen Route Handler, der die Eingaben validiert, Bots per Honeypot und IP-basiertem Rate Limiting blockiert und der Kanzlei über Resend eine gebrandete HTML-E-Mail zustellt.',
    },
    tickettwist: {
      text1:
        'TicketTwist ist eine sichere und zuverlässige Plattform zum Kaufen und Verkaufen von Event-Tickets. Sie bietet ein vertrauenswürdiges Umfeld für Ticket-Transaktionen, mit integrierten Sicherheitsmechanismen, die Nutzer während des gesamten Kauf- und Verkaufsprozesses schützen.',
      text2:
        'Ventura hat das Team geleitet und war an jeder Phase der Entwicklung und des Launches von TicketTwist beteiligt. Mit Expo React Native für Mobile und Node.js im Backend haben wir das Projekt von A bis Z verantwortet und für eine reibungslose User Experience und robuste Sicherheit gesorgt.',
    },
  },
};
