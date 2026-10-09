export default {
  portfolio: {
    downloadPdf: 'Descargar PDF',
    preparing: 'Preparando…',
    pdfError: 'No se pudo generar el PDF: {{message}}',
    eyebrow: 'Ventura Software · Portfolio',
    title: 'Casos de éxito',
    intro:
      'Una selección de los productos que lanzamos: desde apps móviles hasta plataformas full-stack. Cada uno es una alianza real con fundadores y equipos de producto que confiaron en nosotros para construir algo que perdure.',
    present: 'Actualidad',
    typeWeb: 'Web',
    typeBoth: 'Móvil · Web',
    pdf: {
      aboutEyebrow: 'Ventura Software · Casos de éxito',
      aboutBody:
        'Ventura Software es un estudio boutique de ingeniería enfocado en entregar productos digitales confiables, escalables y de alta calidad. Trabajamos junto a fundadores y equipos de producto para lanzar software móvil y web de punta a punta: desde la arquitectura y las integraciones hasta la gestión de releases. A continuación, un breve recorrido por los proyectos que construimos.',
      closingEyebrow: 'Lo que sigue',
      closingTitle:
        'Construyamos juntos el <accent>próximo gran producto</accent>.',
      closingBody:
        'El próximo caso de éxito en estas páginas podría ser el tuyo. Ya sea que estés dando forma a una idea nueva, escalando un producto existente o rescatando un proyecto estancado, Ventura trabaja junto a fundadores y equipos de producto para lanzar software que perdure. Nos encantaría saber en qué estás trabajando.',
      web: 'Web',
      email: 'Email',
      thankYou: 'Gracias.',
    },
  },
  projects: {
    walo: {
      text1:
        'Walo es una plataforma de reservas y gestión para un estudio de Pilates en Montevideo. Los socios usan la app móvil para ver la grilla de clases, elegir su cama de reformer exacta en un plano interactivo, anotarse en listas de espera y comprar planes, mientras el staff gestiona el estudio desde un panel web con agenda, clientes, planes, cupones, caja, campañas push y reportes.',
      text2:
        'Ventura construyó Walo de punta a punta en tres codebases TypeScript: una app React Native sobre Expo, un admin React + Vite con acceso por roles y una API NestJS + PostgreSQL. MercadoPago Checkout Pro vuelve a la app mediante deep links y se concilia con webhooks, tareas programadas disparan notificaciones push automáticas y EAS distribuye actualizaciones over-the-air.',
    },
    bethel: {
      text1:
        'Bethel Fitness es el sistema operativo de un gimnasio y club de bienestar con varias sedes en Montevideo. Los socios reservan clases o se anotan en listas de espera, compran planes con Mercado Pago, consultan la ocupación de la sala de musculación en vivo y hacen check-in con un carnet digital QR, mientras el staff gestiona membresías, check-in de clases, caja, seguimientos y reportes desde un admin web.',
      text2:
        'Ventura construyó Bethel como tres apps sobre una sola API: un admin React + Vite para el staff, una app React Native para socios sobre Expo SDK 54 y un backend NestJS + PostgreSQL con autenticación separada para staff y socios. Incluye checkout de Mercado Pago con deep links de pago, recordatorios push automáticos, check-in por QR, facturas por email y actualizaciones over-the-air.',
    },
    dmg: {
      text1:
        'DMG Lab es un sistema de información de laboratorio para un laboratorio de anatomía patológica en Uruguay. Sigue cada muestra desde la recepción, pasando por macroscopía, laboratorio técnico y diagnóstico, hasta el informe final, y le da a cada uno de los seis roles del laboratorio su propia lista de trabajo con plazos de SLA y alertas automáticas de vencimiento, además de un panel de operaciones en vivo, agenda y reportes exportables.',
      text2:
        'Ventura diseñó y construyó DMG Lab de punta a punta: una SPA React 19 + Vite sobre una API NestJS 11 con PostgreSQL, protegida con autenticación JWT en cookies HttpOnly, protección CSRF y acceso por roles. Los macroscopistas dictan por voz con Groq Whisper y corrección ortográfica en español, y los informes finales firmados se generan como PDF y se envían por email a los solicitantes.',
    },
    buildfeed: {
      text1:
        'BuildFeed es una app React Native para desarrolladores que quieren estar al día con el ecosistema de IA sin ruido. Ofrece un feed curado y personalizado de noticias de IA y tecnología con filtros por stack y tema, resúmenes inteligentes y un ranking por relevancia, para que las historias más importantes aparezcan primero.',
      text2:
        'Ventura construyó el stack con TypeScript, Expo SDK 54, Expo Router, TanStack Query y Redux Toolkit, con capacidades nativas como inicio de sesión con Apple, notificaciones push y actualizaciones OTA mediante EAS. La dirección de producto es una experiencia densa, inspirada en la terminal, pensada para la velocidad y la claridad.',
    },
    tuvianda: {
      text1:
        'TuVianda es un marketplace móvil que conecta a clientes con proveedores locales de comida casera en Uruguay. Los clientes exploran proveedores por fecha de entrega y ubicación, arman un carrito con notas por producto, pagan con Plexo y siguen el estado del pedido en tiempo real, mientras los proveedores gestionan los pedidos entrantes, alternan entre vista de lista y de mapa y recorren rutas de entrega optimizadas.',
      text2:
        'Ventura diseñó y construyó TuVianda de punta a punta con React Native y Expo Router, usando Jotai para el estado del cliente, TanStack Query para el estado del servidor y Axios con interceptores que manejan tokens sobre una API tipada. La app incluye planificación de rutas con expo-maps, notificaciones push, selección automática de dirección por GPS, integración de pagos con Plexo y temas claro/oscuro completos mediante un sistema de tokens propio.',
    },
    bielcar: {
      text1:
        'Bielcar Automóviles es una automotora y taller oficial en Montevideo que vende autos 0 km de siete marcas y usados de cualquier marca. El nuevo sitio permite recorrer el stock de 0 km, usados y el inventario completo con filtros y fichas de cada vehículo, conocer las marcas y agendar service o enviar consultas directamente a la línea de WhatsApp correcta.',
      text2:
        'Ventura rehízo el sitio de la automotora desde cero como un sitio estático en Astro con TypeScript y un sistema de design tokens propio. El inventario en vivo proviene de un plugin de terceros que Ventura adaptó al diseño oscuro de la marca únicamente con CSS encapsulado, sumando un panel de filtros para móvil. Incluye datos estructurados, tarjetas Open Graph y sitemap.',
    },
    graciela: {
      text1:
        'Graciela Ruocco & Asociados es un estudio jurídico en Montevideo especializado en Derecho Administrativo, Seguridad Social y Recursos Humanos, y servicios notariales. Su sitio institucional presenta al equipo, las áreas de práctica y preguntas frecuentes a particulares y empresas, y convierte visitas en contactos calificados mediante un formulario que clasifica cada consulta por área de práctica.',
      text2:
        'Ventura diseñó y construyó el sitio con Next.js 16, React 19, TypeScript y Tailwind CSS v4 en torno a una paleta propia azul marino y dorado. El formulario de contacto envía a un Route Handler que valida los datos, bloquea bots con un honeypot y límite de solicitudes por IP, y entrega al estudio un email HTML con su marca a través de Resend.',
    },
    tickettwist: {
      text1:
        'TicketTwist es una plataforma segura y confiable para comprar y vender entradas para eventos. Ofrece un entorno de confianza para las transacciones, con medidas de seguridad integradas que protegen a los usuarios durante todo el proceso de compra y venta.',
      text2:
        'Ventura lideró el equipo y participó en cada etapa del desarrollo y lanzamiento de TicketTwist. Con Expo React Native para móvil y Node.js para el backend, supervisamos el proyecto de punta a punta, asegurando una experiencia de usuario fluida y una seguridad robusta.',
    },
  },
};
