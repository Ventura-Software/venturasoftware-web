export default {
  portfolio: {
    downloadPdf: 'Scarica PDF',
    preparing: 'Preparazione…',
    pdfError: 'Impossibile generare il PDF: {{message}}',
    eyebrow: 'Ventura Software · Portfolio',
    title: 'Casi di successo',
    intro:
      'Una selezione dei prodotti che abbiamo lanciato: dalle app mobile alle piattaforme full-stack. Ognuno è una vera partnership con founder e team di prodotto che si sono affidati a noi per costruire qualcosa di duraturo.',
    present: 'oggi',
    typeWeb: 'Web',
    typeBoth: 'Mobile · Web',
    pdf: {
      aboutEyebrow: 'Ventura Software · Casi di successo',
      aboutBody:
        'Ventura Software è uno studio di ingegneria boutique che realizza prodotti digitali affidabili, scalabili e di alta qualità. Affianchiamo founder e team di prodotto nello sviluppo di software mobile e web end-to-end: dall’architettura e le integrazioni fino alla gestione dei rilasci. Ecco una breve panoramica dei progetti che abbiamo realizzato.',
      closingEyebrow: 'E adesso',
      closingTitle:
        'Costruiamo insieme il <accent>prossimo grande prodotto</accent>.',
      closingBody:
        'Il prossimo caso di successo in queste pagine potrebbe essere il tuo. Che tu stia dando forma a una nuova idea, facendo crescere un prodotto esistente o rilanciando un progetto fermo, Ventura affianca founder e team di prodotto per realizzare software che dura nel tempo. Ci piacerebbe sapere a cosa stai lavorando.',
      web: 'Web',
      email: 'Email',
      thankYou: 'Grazie.',
    },
  },
  projects: {
    walo: {
      text1:
        'Walo è una piattaforma di prenotazione e gestione per uno studio di Pilates a Montevideo. I membri usano l’app mobile per consultare il calendario, scegliere esattamente il proprio reformer su una piantina interattiva, iscriversi alle liste d’attesa e acquistare abbonamenti, mentre lo staff gestisce lo studio da una dashboard web con pianificazione, clienti, abbonamenti, coupon, cassa, campagne push e report.',
      text2:
        'Ventura ha sviluppato Walo end-to-end in tre codebase TypeScript: un’app React Native su Expo, un pannello di amministrazione React + Vite con accesso basato sui ruoli e un’API NestJS + PostgreSQL. MercadoPago Checkout Pro rientra nell’app tramite deep link e viene riconciliato via webhook, job pianificati inviano notifiche push automatiche ed EAS distribuisce aggiornamenti over-the-air.',
    },
    bethel: {
      text1:
        'Bethel Fitness è il sistema operativo di una palestra e wellness club con più sedi a Montevideo. I membri prenotano corsi o si iscrivono alle liste d’attesa, acquistano abbonamenti tramite Mercado Pago, controllano in tempo reale l’affluenza della sala pesi e fanno il check-in con una tessera digitale QR, mentre lo staff gestisce iscrizioni, check-in ai corsi, cassa, follow-up e report da un pannello web.',
      text2:
        'Ventura ha realizzato Bethel come tre app su un’unica API: un pannello di amministrazione React + Vite per lo staff, un’app React Native per i membri su Expo SDK 54 e un backend NestJS + PostgreSQL con autenticazione separata per staff e membri. Include il checkout Mercado Pago con deep link di pagamento, promemoria push automatici, check-in tramite QR, fatture via email e aggiornamenti over-the-air.',
    },
    dmg: {
      text1:
        'DMG Lab è un sistema informativo di laboratorio per un laboratorio di anatomia patologica in Uruguay. Traccia ogni campione dall’accettazione alla macroscopia, al laboratorio tecnico e alla diagnosi fino al referto finale, assegnando a ciascuno dei sei ruoli del laboratorio la propria lista di lavoro con scadenze SLA e avvisi automatici di ritardo, oltre a una dashboard operativa in tempo reale, un’agenda e report esportabili.',
      text2:
        'Ventura ha progettato e sviluppato DMG Lab end-to-end: una SPA React 19 + Vite su un’API NestJS 11 con PostgreSQL, protetta da autenticazione JWT con cookie HttpOnly, protezione CSRF e accesso basato sui ruoli. I macroscopisti dettano a voce tramite Groq Whisper con correzione ortografica in spagnolo, e i referti finali firmati vengono generati in PDF e inviati via email ai richiedenti.',
    },
    buildfeed: {
      text1:
        'BuildFeed è un’app React Native per sviluppatori che vogliono restare aggiornati sull’ecosistema dell’IA senza rumore. Offre un feed curato e personalizzato di notizie su IA e tecnologia, con filtri per stack e argomento, riassunti intelligenti e un ranking per rilevanza, così le notizie più importanti appaiono per prime.',
      text2:
        'Ventura ha costruito lo stack con TypeScript, Expo SDK 54, Expo Router, TanStack Query e Redux Toolkit, con funzionalità native come l’accesso con Apple, le notifiche push e gli aggiornamenti OTA tramite EAS. La direzione di prodotto è un’esperienza densa, ispirata al terminale, pensata per velocità e chiarezza.',
    },
    tuvianda: {
      text1:
        'TuVianda è un marketplace mobile che mette in contatto i clienti con produttori locali di piatti fatti in casa in Uruguay. I clienti cercano i produttori per data di consegna e zona, creano un carrello con note per ogni articolo, pagano tramite Plexo e seguono lo stato dell’ordine in tempo reale, mentre i produttori gestiscono gli ordini in arrivo, passano dalla vista elenco alla mappa e seguono percorsi di consegna ottimizzati.',
      text2:
        'Ventura ha progettato e sviluppato TuVianda end-to-end con React Native ed Expo Router, usando Jotai per lo stato client, TanStack Query per lo stato server e Axios con interceptor che gestiscono i token su un’API tipizzata. L’app include la pianificazione dei percorsi con expo-maps, notifiche push, selezione automatica dell’indirizzo via GPS, integrazione dei pagamenti Plexo e temi chiaro/scuro completi tramite un sistema di token personalizzato.',
    },
    bielcar: {
      text1:
        'Bielcar Automóviles è una concessionaria e officina autorizzata a Montevideo che vende auto nuove di sette marchi e usato di ogni marca. Il nuovo sito permette di sfogliare l’inventario del nuovo, dell’usato o completo con filtri e schede dettagliate dei veicoli, scoprire i marchi e prenotare un tagliando o inviare richieste direttamente alla linea WhatsApp giusta.',
      text2:
        'Ventura ha ricostruito da zero il sito della concessionaria come sito statico Astro in TypeScript con un sistema di design token personalizzato. L’inventario in tempo reale proviene da un plugin di terze parti che Ventura ha adattato al design scuro del marchio esclusivamente tramite CSS isolato, aggiungendo un pannello filtri per mobile. Il sito include dati strutturati, schede Open Graph e una sitemap.',
    },
    graciela: {
      text1:
        'Graciela Ruocco & Asociados è uno studio legale di Montevideo specializzato in diritto amministrativo, previdenza sociale e risorse umane, oltre che in servizi notarili. Il sito istituzionale presenta a privati e aziende il team, le aree di competenza e le FAQ, e trasforma le visite in contatti qualificati grazie a un modulo che smista ogni richiesta per area di competenza.',
      text2:
        'Ventura ha progettato e sviluppato il sito con Next.js 16, React 19, TypeScript e Tailwind CSS v4 attorno a una palette personalizzata blu navy e oro. Il modulo di contatto invia i dati a un Route Handler che li valida, blocca i bot con un honeypot e un rate limiting per IP, e recapita allo studio un’email HTML personalizzata tramite Resend.',
    },
    tickettwist: {
      text1:
        'TicketTwist è una piattaforma sicura e affidabile per acquistare e vendere biglietti per eventi. Offre un ambiente affidabile per le transazioni, con misure di sicurezza integrate che proteggono gli utenti durante l’intero processo di acquisto e vendita.',
      text2:
        'Ventura ha guidato il team e ha partecipato a ogni fase dello sviluppo e del lancio di TicketTwist. Con Expo React Native per il mobile e Node.js per il backend, abbiamo seguito il progetto end-to-end, garantendo un’esperienza utente fluida e una sicurezza solida.',
    },
  },
};
