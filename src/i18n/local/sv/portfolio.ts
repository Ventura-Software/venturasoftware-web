export default {
  portfolio: {
    downloadPdf: 'Ladda ner PDF',
    preparing: 'Förbereder…',
    pdfError: 'Det gick inte att skapa PDF:en: {{message}}',
    eyebrow: 'Ventura Software · Portfolio',
    title: 'Kundcase',
    intro:
      'Ett urval av produkterna vi har levererat – från mobilappar till fullstackplattformar. Varje projekt är ett verkligt partnerskap med grundare och produktteam som litat på att vi bygger något som håller.',
    present: 'idag',
    typeWeb: 'Webb',
    typeBoth: 'Mobil · Webb',
    pdf: {
      aboutEyebrow: 'Ventura Software · Kundcase',
      aboutBody:
        'Ventura Software är en boutiquestudio för mjukvaruutveckling som levererar pålitliga, skalbara digitala produkter av hög kvalitet. Vi samarbetar med grundare och produktteam för att leverera mobil- och webbmjukvara hela vägen – från arkitektur och integrationer till releasehantering. Här följer en kort översikt över projekten vi har byggt.',
      closingEyebrow: 'Vad händer nu',
      closingTitle:
        'Låt oss bygga <accent>nästa stora produkt</accent> tillsammans.',
      closingBody:
        'Nästa kundcase på de här sidorna kan vara ditt. Oavsett om du formar en ny idé, skalar en befintlig produkt eller räddar ett projekt som har stannat av, samarbetar Ventura med grundare och produktteam för att leverera mjukvara som håller. Vi vill gärna höra vad du arbetar med.',
      web: 'Webb',
      email: 'E-post',
      thankYou: 'Tack.',
    },
  },
  projects: {
    walo: {
      text1:
        'Walo är en boknings- och administrationsplattform för en pilatesstudio i Montevideo. Medlemmar använder mobilappen för att se schemat, välja exakt vilken reformer de vill ha på en interaktiv planritning, ställa sig i kö och köpa kort, medan personalen driver studion från en webbpanel med schemaläggning, kunder, kort, rabattkoder, kassa, pushkampanjer och rapporter.',
      text2:
        'Ventura byggde Walo hela vägen som tre TypeScript-kodbaser: en React Native-app på Expo, ett React + Vite-admin med rollbaserad åtkomst och ett NestJS + PostgreSQL-API. MercadoPago Checkout Pro återvänder till appen via djuplänkar och stäms av med webhooks, schemalagda jobb skickar automatiska pushnotiser och EAS levererar over-the-air-uppdateringar.',
    },
    bethel: {
      text1:
        'Bethel Fitness är operativsystemet för ett gym och friskvårdscenter med flera anläggningar i Montevideo. Medlemmar bokar pass eller ställer sig i kö, köper kort via Mercado Pago, ser beläggningen i gymmet i realtid och checkar in med ett digitalt QR-medlemskort, medan personalen hanterar medlemskap, incheckning till pass, kassa, uppföljningar och rapporter från ett webbadmin.',
      text2:
        'Ventura byggde Bethel som tre appar på ett gemensamt API: ett React + Vite-admin för personalen, en React Native-medlemsapp på Expo SDK 54 och en NestJS + PostgreSQL-backend med separat inloggning för personal och medlemmar. Lösningen har Mercado Pago-betalning med djuplänkar, automatiska påminnelser via push, QR-incheckning, fakturor via e-post och over-the-air-uppdateringar.',
    },
    dmg: {
      text1:
        'DMG Lab är ett laboratorieinformationssystem för ett patologilaboratorium i Uruguay. Det följer varje prov från mottagning via makroskopi, tekniskt laboratorium och diagnos till slutligt utlåtande, och ger var och en av labbets sex roller en egen arbetslista med SLA-tider och automatiska förseningsvarningar, plus en driftpanel i realtid, kalender och exporterbara rapporter.',
      text2:
        'Ventura designade och byggde DMG Lab hela vägen: en React 19 + Vite-SPA ovanpå ett NestJS 11-API med PostgreSQL, skyddad med JWT-autentisering i HttpOnly-cookies, CSRF-skydd och rollbaserad åtkomst. Makroskopister dikterar med rösten via Groq Whisper med spansk stavningskontroll, och signerade utlåtanden genereras som PDF och skickas via e-post till beställarna.',
    },
    buildfeed: {
      text1:
        'BuildFeed är en React Native-app för utvecklare som vill hålla koll på AI-ekosystemet utan bruset. Den levererar ett kurerat, personligt flöde med AI- och tekniknyheter, med filter för stack och ämne, smarta sammanfattningar och rankning efter relevans – så att de viktigaste nyheterna hamnar först.',
      text2:
        'Ventura byggde stacken kring TypeScript, Expo SDK 54, Expo Router, TanStack Query och Redux Toolkit, med inbyggda funktioner som inloggning med Apple, pushnotiser och OTA-uppdateringar via EAS. Produktriktningen är en kompakt, terminalinspirerad upplevelse byggd för snabbhet och tydlighet.',
    },
    tuvianda: {
      text1:
        'TuVianda är en mobil marknadsplats som kopplar ihop kunder med lokala leverantörer av hemlagad mat i Uruguay. Kunder hittar leverantörer efter leveransdatum och plats, bygger en varukorg med kommentarer per vara, betalar via Plexo och följer ordern i realtid – medan leverantörerna hanterar inkommande ordrar, växlar mellan list- och kartvy och kör optimerade leveransrutter.',
      text2:
        'Ventura designade och byggde TuVianda hela vägen med React Native och Expo Router, med Jotai för klientstate, TanStack Query för serverstate och Axios med token-medvetna interceptorer ovanpå ett typat API. Appen har ruttplanering med expo-maps, pushnotiser, automatiskt adressval via GPS, Plexo-betalningar och fullständigt ljust/mörkt tema via ett eget tokensystem.',
    },
    bielcar: {
      text1:
        'Bielcar Automóviles är en bilhandlare och auktoriserad verkstad i Montevideo som säljer nya bilar från sju märken och begagnade bilar av alla märken. Den nya webbplatsen låter besökare bläddra bland nya, begagnade och alla bilar i lager med filter och detaljsidor, utforska märkena och boka service eller skicka förfrågningar direkt till rätt WhatsApp-nummer.',
      text2:
        'Ventura byggde om bilhandlarens webbplats från grunden som en statisk Astro-sajt i TypeScript med ett eget system av designtokens. Lagret i realtid kommer från ett tredjepartsplugin som Ventura anpassade till varumärkets mörka design enbart med inkapslad CSS, kompletterat med en filterpanel för mobilen. Sajten har strukturerad data, Open Graph-kort och sitemap.',
    },
    graciela: {
      text1:
        'Graciela Ruocco & Asociados är en advokatbyrå i Montevideo specialiserad på förvaltningsrätt, socialförsäkring och HR samt notarietjänster. Byråns webbplats presenterar teamet, verksamhetsområdena och vanliga frågor för privatpersoner och företag, och omvandlar besök till kvalificerade leads genom ett kontaktformulär som sorterar varje förfrågan efter verksamhetsområde.',
      text2:
        'Ventura designade och byggde webbplatsen med Next.js 16, React 19, TypeScript och Tailwind CSS v4 kring en egen palett i marinblått och guld. Kontaktformuläret skickas till en Route Handler som validerar indata, stoppar botar med en honeypot och IP-baserad rate limiting, och levererar ett varumärkesanpassat HTML-mejl till byrån via Resend.',
    },
    tickettwist: {
      text1:
        'TicketTwist är en säker och pålitlig plattform för att köpa och sälja evenemangsbiljetter. Plattformen erbjuder en trygg miljö för biljettaffärer, med inbyggda säkerhetsåtgärder som skyddar användarna genom hela köp- och säljprocessen.',
      text2:
        'Ventura ledde teamet och deltog i varje steg av utvecklingen och lanseringen av TicketTwist. Med Expo React Native för mobilen och Node.js i backend ansvarade vi för projektet hela vägen och säkerställde en smidig användarupplevelse och robust säkerhet.',
    },
  },
};
