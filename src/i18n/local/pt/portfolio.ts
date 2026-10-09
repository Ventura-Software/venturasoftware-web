export default {
  portfolio: {
    downloadPdf: 'Baixar PDF',
    preparing: 'Preparando…',
    pdfError: 'Não foi possível gerar o PDF: {{message}}',
    eyebrow: 'Ventura Software · Portfólio',
    title: 'Casos de sucesso',
    intro:
      'Uma seleção dos produtos que lançamos — de apps móveis a plataformas full-stack. Cada um é uma parceria real com fundadores e times de produto que confiaram em nós para construir algo duradouro.',
    present: 'Atual',
    typeWeb: 'Web',
    typeBoth: 'Mobile · Web',
    pdf: {
      aboutEyebrow: 'Ventura Software · Casos de sucesso',
      aboutBody:
        'A Ventura Software é um estúdio boutique de engenharia focado em entregar produtos digitais confiáveis, escaláveis e de alta qualidade. Trabalhamos junto a fundadores e times de produto para lançar software mobile e web de ponta a ponta — da arquitetura e integrações à gestão de releases. A seguir, um breve tour pelos projetos que construímos.',
      closingEyebrow: 'Próximos passos',
      closingTitle:
        'Vamos construir juntos o <accent>próximo grande produto</accent>.',
      closingBody:
        'O próximo caso de sucesso nestas páginas pode ser o seu. Seja para dar forma a uma nova ideia, escalar um produto existente ou resgatar um projeto parado, a Ventura trabalha junto a fundadores e times de produto para lançar software duradouro. Adoraríamos saber no que você está trabalhando.',
      web: 'Web',
      email: 'E-mail',
      thankYou: 'Obrigado.',
    },
  },
  projects: {
    walo: {
      text1:
        'Walo é uma plataforma de reservas e gestão para um estúdio de Pilates em Montevidéu. Os alunos usam o app para ver a grade de aulas, escolher exatamente seu aparelho reformer em uma planta interativa, entrar em listas de espera e comprar planos, enquanto a equipe administra o estúdio por um painel web com agenda, clientes, planos, cupons, caixa, campanhas push e relatórios.',
      text2:
        'A Ventura construiu o Walo de ponta a ponta em três codebases TypeScript: um app React Native com Expo, um admin React + Vite com acesso por perfis e uma API NestJS + PostgreSQL. O MercadoPago Checkout Pro retorna ao app por deep links e é conciliado por webhooks, jobs agendados disparam notificações push automáticas e o EAS distribui atualizações over-the-air.',
    },
    bethel: {
      text1:
        'Bethel Fitness é o sistema operacional de uma academia e clube de bem-estar com várias unidades em Montevidéu. Os alunos reservam aulas ou entram em listas de espera, compram planos pelo Mercado Pago, consultam a ocupação da sala de musculação em tempo real e fazem check-in com uma carteirinha digital em QR, enquanto a equipe gerencia matrículas, check-in de aulas, caixa, acompanhamentos e relatórios por um admin web.',
      text2:
        'A Ventura construiu o Bethel como três apps sobre uma única API: um admin React + Vite para a equipe, um app React Native para alunos com Expo SDK 54 e um backend NestJS + PostgreSQL com autenticação separada para equipe e alunos. Inclui checkout do Mercado Pago com deep links de pagamento, lembretes push automáticos, check-in por QR, notas fiscais por e-mail e atualizações over-the-air.',
    },
    dmg: {
      text1:
        'DMG Lab é um sistema de informação laboratorial para um laboratório de anatomia patológica no Uruguai. Ele acompanha cada amostra desde a recepção, passando por macroscopia, laboratório técnico e diagnóstico, até o laudo final, dando a cada um dos seis perfis do laboratório sua própria fila de trabalho com prazos de SLA e alertas automáticos de atraso, além de um painel de operações em tempo real, agenda e relatórios exportáveis.',
      text2:
        'A Ventura projetou e construiu o DMG Lab de ponta a ponta: uma SPA React 19 + Vite sobre uma API NestJS 11 com PostgreSQL, protegida com autenticação JWT em cookies HttpOnly, proteção CSRF e acesso por perfis. Os macroscopistas ditam por voz com Groq Whisper e correção ortográfica em espanhol, e os laudos finais assinados são gerados em PDF e enviados por e-mail aos solicitantes.',
    },
    buildfeed: {
      text1:
        'BuildFeed é um app React Native para desenvolvedores que querem acompanhar o ecossistema de IA sem ruído. Ele oferece um feed curado e personalizado de notícias de IA e tecnologia, com filtros por stack e tema, resumos inteligentes e ranking por relevância — para que as notícias mais importantes apareçam primeiro.',
      text2:
        'A Ventura construiu o stack com TypeScript, Expo SDK 54, Expo Router, TanStack Query e Redux Toolkit, com recursos nativos como login com Apple, notificações push e atualizações OTA via EAS. A direção de produto é uma experiência densa, inspirada no terminal, pensada para velocidade e clareza.',
    },
    tuvianda: {
      text1:
        'TuVianda é um marketplace mobile que conecta clientes a fornecedores locais de comida caseira no Uruguai. Os clientes buscam fornecedores por data de entrega e localização, montam um carrinho com observações por item, pagam via Plexo e acompanham o status do pedido em tempo real — enquanto os fornecedores gerenciam os pedidos recebidos, alternam entre visualização em lista e mapa e seguem rotas de entrega otimizadas.',
      text2:
        'A Ventura projetou e construiu o TuVianda de ponta a ponta com React Native e Expo Router, usando Jotai para o estado do cliente, TanStack Query para o estado do servidor e Axios com interceptors que gerenciam tokens sobre uma API tipada. O app inclui planejamento de rotas com expo-maps, notificações push, seleção automática de endereço por GPS, integração de pagamentos Plexo e temas claro/escuro completos por meio de um sistema de tokens próprio.',
    },
    bielcar: {
      text1:
        'Bielcar Automóviles é uma concessionária e oficina autorizada em Montevidéu que vende carros 0 km de sete marcas e seminovos de qualquer marca. O novo site permite navegar pelo estoque de novos, seminovos e completo com filtros e páginas de detalhes de cada veículo, conhecer as marcas e agendar revisões ou enviar consultas diretamente para a linha de WhatsApp certa.',
      text2:
        'A Ventura reconstruiu o site da concessionária do zero como um site estático em Astro com TypeScript e um sistema de design tokens próprio. O estoque em tempo real vem de um plugin de terceiros que a Ventura adaptou ao design escuro da marca apenas com CSS isolado, adicionando um painel de filtros para mobile. Inclui dados estruturados, cards Open Graph e sitemap.',
    },
    graciela: {
      text1:
        'Graciela Ruocco & Asociados é um escritório de advocacia em Montevidéu especializado em Direito Administrativo, Previdência Social e Recursos Humanos, e serviços notariais. Seu site institucional apresenta a equipe, as áreas de atuação e as perguntas frequentes para pessoas e empresas, e transforma visitas em leads qualificados por meio de um formulário que classifica cada consulta por área de atuação.',
      text2:
        'A Ventura projetou e construiu o site com Next.js 16, React 19, TypeScript e Tailwind CSS v4 em torno de uma paleta própria azul-marinho e dourado. O formulário de contato envia para um Route Handler que valida os dados, bloqueia bots com honeypot e limite de requisições por IP, e entrega ao escritório um e-mail HTML com sua identidade visual via Resend.',
    },
    tickettwist: {
      text1:
        'TicketTwist é uma plataforma segura e confiável para comprar e vender ingressos para eventos. Ela oferece um ambiente confiável para as transações, com medidas de segurança integradas que protegem os usuários durante todo o processo de compra e venda.',
      text2:
        'A Ventura liderou a equipe e participou de todas as etapas do desenvolvimento e lançamento do TicketTwist. Com Expo React Native no mobile e Node.js no backend, conduzimos o projeto de ponta a ponta, garantindo uma experiência de usuário fluida e segurança robusta.',
    },
  },
};
