// French typography: "\u00a0" is a non-breaking space before ? ! : ;
export default {
  portfolio: {
    downloadPdf: 'Télécharger le PDF',
    preparing: 'Préparation…',
    pdfError: 'La génération du PDF a échoué\u00a0: {{message}}',
    eyebrow: 'Ventura Software · Portfolio',
    title: 'Réussites clients',
    intro:
      "Une sélection des produits que nous avons lancés — des applications mobiles aux plateformes full-stack. Chacun est un véritable partenariat avec des fondateurs et des équipes produit qui nous ont fait confiance pour bâtir quelque chose de durable.",
    present: "Aujourd'hui",
    typeWeb: 'Web',
    typeBoth: 'Mobile · Web',
    pdf: {
      aboutEyebrow: 'Ventura Software · Réussites clients',
      aboutBody:
        "Ventura Software est un studio d'ingénierie boutique qui conçoit des produits numériques fiables, évolutifs et de grande qualité. Nous accompagnons fondateurs et équipes produit pour livrer des logiciels mobiles et web de bout en bout — de l'architecture et des intégrations jusqu'à la gestion des mises en production. Voici un bref aperçu des projets que nous avons réalisés.",
      closingEyebrow: 'Et maintenant',
      closingTitle:
        'Construisons ensemble le <accent>prochain grand produit</accent>.',
      closingBody:
        "La prochaine réussite présentée dans ces pages pourrait être la vôtre. Que vous façonniez une nouvelle idée, fassiez évoluer un produit existant ou relanciez un projet à l'arrêt, Ventura accompagne fondateurs et équipes produit pour livrer des logiciels durables. Parlez-nous de votre projet.",
      web: 'Web',
      email: 'E-mail',
      thankYou: 'Merci.',
    },
  },
  projects: {
    walo: {
      text1:
        "Walo est une plateforme de réservation et de gestion pour un studio de Pilates à Montevideo. Les membres utilisent l'application mobile pour consulter le planning, choisir précisément leur reformer sur un plan interactif, s'inscrire en liste d'attente et acheter des formules, tandis que l'équipe gère le studio depuis un tableau de bord web\u00a0: planning, clients, formules, coupons, caisse, campagnes push et rapports.",
      text2:
        "Ventura a développé Walo de bout en bout sous forme de trois bases de code TypeScript\u00a0: une application React Native sur Expo, une interface d'administration React + Vite avec gestion des rôles et une API NestJS + PostgreSQL. MercadoPago Checkout Pro revient dans l'application via des deep links et est rapproché par webhooks, des tâches planifiées déclenchent des notifications push automatiques et EAS déploie des mises à jour over-the-air.",
    },
    bethel: {
      text1:
        "Bethel Fitness est le système d'exploitation d'une salle de sport et d'un club bien-être multisites à Montevideo. Les membres réservent des cours ou s'inscrivent en liste d'attente, achètent des formules via Mercado Pago, consultent en direct l'affluence de la salle de musculation et s'enregistrent avec une carte digitale QR, tandis que l'équipe gère abonnements, pointage des cours, caisse, relances et rapports depuis une interface web.",
      text2:
        "Ventura a conçu Bethel comme trois applications reposant sur une seule API\u00a0: une interface d'administration React + Vite pour l'équipe, une application membres React Native sur Expo SDK 54 et un backend NestJS + PostgreSQL avec authentification distincte pour l'équipe et les membres. Elle intègre le paiement Mercado Pago avec deep links, des rappels push automatiques, le check-in par QR, l'envoi de factures par e-mail et des mises à jour over-the-air.",
    },
    dmg: {
      text1:
        "DMG Lab est un système d'information de laboratoire pour un laboratoire d'anatomopathologie en Uruguay. Il suit chaque prélèvement de la réception jusqu'au compte rendu final, en passant par la macroscopie, le laboratoire technique et le diagnostic, et donne à chacun des six rôles du laboratoire sa propre liste de travail avec délais SLA et alertes de retard automatiques, ainsi qu'un tableau de bord opérationnel en temps réel, un agenda et des rapports exportables.",
      text2:
        "Ventura a conçu et développé DMG Lab de bout en bout\u00a0: une SPA React 19 + Vite reposant sur une API NestJS 11 avec PostgreSQL, sécurisée par une authentification JWT en cookies HttpOnly, une protection CSRF et un contrôle d'accès par rôles. Les macroscopistes dictent à la voix via Groq Whisper avec correction orthographique en espagnol, et les comptes rendus finaux signés sont générés en PDF puis envoyés par e-mail aux demandeurs.",
    },
    buildfeed: {
      text1:
        "BuildFeed est une application React Native pour les développeurs qui veulent suivre l'écosystème de l'IA sans le bruit. Elle propose un fil d'actualités IA et tech personnalisé et trié sur le volet, avec filtres par stack et par thème, résumés intelligents et classement par importance — pour que les informations les plus pertinentes apparaissent en premier.",
      text2:
        "Ventura a construit la stack autour de TypeScript, Expo SDK 54, Expo Router, TanStack Query et Redux Toolkit, avec des fonctionnalités natives comme la connexion avec Apple, les notifications push et les mises à jour OTA via EAS. L'orientation produit\u00a0: une expérience dense, inspirée du terminal, pensée pour la rapidité et la clarté.",
    },
    tuvianda: {
      text1:
        "TuVianda est une marketplace mobile qui met en relation des clients avec des cuisiniers locaux proposant des plats faits maison en Uruguay. Les clients parcourent les vendeurs par date de livraison et localisation, composent un panier avec des notes par article, paient via Plexo et suivent leur commande en temps réel — tandis que les vendeurs gèrent les commandes reçues, basculent entre vue liste et vue carte et suivent des tournées de livraison optimisées.",
      text2:
        "Ventura a conçu et développé TuVianda de bout en bout avec React Native et Expo Router, en combinant Jotai pour l'état client, TanStack Query pour l'état serveur et Axios avec des intercepteurs gérant les tokens sur une API typée. L'application intègre la planification d'itinéraires avec expo-maps, les notifications push, la sélection automatique de l'adresse par GPS, les paiements Plexo et des thèmes clair/sombre complets grâce à un système de tokens sur mesure.",
    },
    bielcar: {
      text1:
        "Bielcar Automóviles est un concessionnaire et atelier agréé à Montevideo, qui vend des voitures neuves de sept marques et des véhicules d'occasion de toutes marques. Le nouveau site permet de parcourir le stock neuf, occasion ou complet avec filtres et fiches détaillées, de découvrir les marques et de réserver un entretien ou d'envoyer une demande directement à la bonne ligne WhatsApp.",
      text2:
        "Ventura a reconstruit le site du concessionnaire de zéro sous forme de site statique Astro en TypeScript, avec un système de design tokens sur mesure. L'inventaire en temps réel provient d'un plugin tiers que Ventura a adapté au design sombre de la marque uniquement via du CSS isolé, en ajoutant un panneau de filtres pour mobile. Le site inclut des données structurées, des cartes Open Graph et un sitemap.",
    },
    graciela: {
      text1:
        "Graciela Ruocco & Asociados est un cabinet d'avocats à Montevideo spécialisé en droit administratif, sécurité sociale et ressources humaines, ainsi qu'en services notariaux. Son site institutionnel présente l'équipe, les domaines d'expertise et une FAQ aux particuliers comme aux entreprises, et convertit les visites en prospects qualifiés grâce à un formulaire de contact qui classe chaque demande par domaine.",
      text2:
        "Ventura a conçu et développé le site avec Next.js 16, React 19, TypeScript et Tailwind CSS v4 autour d'une palette bleu marine et or sur mesure. Le formulaire de contact transmet les données à un Route Handler qui les valide, bloque les bots grâce à un honeypot et une limitation de débit par IP, puis envoie au cabinet un e-mail HTML à ses couleurs via Resend.",
    },
    tickettwist: {
      text1:
        "TicketTwist est une plateforme sûre et fiable pour acheter et revendre des billets d'événements. Elle offre un environnement de confiance pour les transactions, avec des mesures de sécurité intégrées qui protègent les utilisateurs tout au long du processus d'achat et de vente.",
      text2:
        "Ventura a dirigé l'équipe et participé à chaque étape du développement et du lancement de TicketTwist. Avec Expo React Native pour le mobile et Node.js pour le backend, nous avons piloté le projet de bout en bout, en garantissant une expérience utilisateur fluide et une sécurité robuste.",
    },
  },
};
