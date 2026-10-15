# Auditoría de credibilidad: Ventura Software (versión local, 7 idiomas)

Fecha: 2026-10-09. Fuente: código fuente local (cambios sin commitear con i18n en EN, ES, PT, FR, DE, IT, SV).

## 1. Veredicto

1. En 3 minutos, un visitante recomendado entiende que Ventura hace apps móviles y web desde Montevideo, y el portfolio muestra 8 proyectos reales con capturas y links. Es lo más fuerte del sitio.
2. No hay ninguna persona visible, ni año de fundación, ni entidad legal, ni datos de cómo se trabaja (horarios, precios). Además, las estadísticas "200% Happy Clients" y "1000+ Caffeine Consumed" restan credibilidad.
3. El visitante uruguayo se va más seguro, porque reconoce clientes locales. El fundador de EE. UU. y el CTO europeo se van con dudas: no saben quién está detrás, si la zona horaria les sirve, y no hay política de privacidad.

## 2. Tabla por criterio

| Criterio | Estado | Evidencia (citada) | Idioma / página |
|---|---|---|---|
| a. Empresa real y estable | Débil | Solo "Montevideo, Uruguay", "+598 97 388 046", "info@venturasoftware.dev". No hay año de fundación, razón social ni RUT. | EN, / (Contact, Footer) |
| b. Prueba de trabajo | Bueno, sin resultados | 8 casos con problema y solución bien contados, por ejemplo "DMG Lab is a laboratory information system for a pathology lab in Uruguay". Ninguno dice qué pasó después (uso, adopción, tiempo ahorrado). El link de Bielcar apunta a "bielcar.vercel.app". Walo y Bethel son apps móviles, pero enlazan a la web y no a las tiendas. | EN, /portfolio |
| c. Personas senior visibles | Falta | "a senior engineering team" y "Senior engineers experienced in React…", pero no aparece ni un nombre, cara o LinkedIn. Los íconos sociales están comentados en el código. | EN, / (Hero, Why Us, Footer) |
| d. Contratación predecible | Débil | El proceso tiene duraciones ("6-12 weeks"), pero falta modelo de precios, cadencia de comunicación y horario. "Meet Your Developer" y "consistent engineering capacity" suenan a staff augmentation, lo que contradice "End-to-End". | EN, / (Process, Why Us) |
| e. Contacto sin fricción | Aceptable | El Calendly en hero y navbar está bien. El formulario tiene 4 campos obligatorios más un select. El email y el teléfono son texto plano, sin `mailto:`/`tel:`, y no hay WhatsApp. | EN, / (Contact) |
| f. Encaje por mercado | Débil | No se menciona la zona horaria. Todos los casos son de Uruguay, salvo quizás BuildFeed y TicketTwist. No hay moneda ni modelo de precios. | Todos, / y /portfolio |
| g. Calidad multilingüe | Buena base, con fallas | Hay selector visible en desktop y mobile. La detección no atrapa al usuario y `lang` se actualiza. Fallas: no hay URL por idioma ni `hreflang`. `<title>` queda solo en inglés. ES usa tuteo ("Contáctanos", "Cuéntanos sobre tu proyecto"). Hay contradicción entre idiomas: EN "communication in English and Spanish" frente a DE "Wir arbeiten auf Englisch". | Todos |
| h. Legal y confianza | Falta | No hay política de privacidad: el link "Privacy Policy" está comentado en el Footer. El formulario manda los datos por EmailJS sin informarlo. Las fuentes se cargan desde Google Fonts. | Todos, / |

## 3. Simulación de visitas

**Fundador de EE. UU. (EN)**
- **Entiende:** "Ventura Software, End-to-End Software Engineering", apps con React Native, estudio en Uruguay. El portfolio lo convence de que las apps existen.
- **Dudas:** ¿quién es el dueño y con quién va a hablar? ¿Cuál es la diferencia horaria? ¿Cuánto cuesta y cómo se factura? Además ve "200% Happy Clients" y piensa que es un template.
- **Se va:** después de abrir el portfolio. Si la recomendación fue fuerte, se va medianamente convencido; si no, con dudas, porque no encontró una persona.

**CTO europeo (EN o DE/FR)**
- **Entiende:** el stack es moderno y está bien explicado. El caso DMG ("HttpOnly-cookie JWT auth, CSRF protection and role-based access") le da confianza técnica.
- **Dudas:** no encuentra perfiles senior verificables, política de privacidad ni procesador de datos. "A proven methodology" le suena genérico. En DE lee "Wir arbeiten auf Englisch", que está bien, pero no sabe con quién va a trabajar.
- **Se va:** en el footer, buscando Privacy y LinkedIn. Se va con dudas.

**Empresa uruguaya (ES)**
- **Entiende:** reconoce clientes locales (Bethel, Walo, Bielcar, un estudio jurídico) y ve un teléfono +598.
- **Dudas:** no sabe si es una empresa formal (razón social, RUT, factura) ni quiénes son. El tuteo ("Contáctanos") no suena uruguayo.
- **Se va:** en el portfolio. Es el que más confiado se va.

## 4. Cambios priorizados

### 1. Quitar las estadísticas (Remove)
- **Qué:** sacar el bloque "30+ Projects Delivered / 1000+ Caffeine Consumed / 100% Commitment / 200% Happy Clients" (EN, / sección About). Si el equipo confirma datos reales, reemplazarlo por 3 hechos verificables: `[año de fundación]`, `[nº de proyectos en producción]`, `[nº de personas]`.
- **Por qué:** "200%" es imposible y hace dudar de todo lo demás. "30+" contrasta con los 8 casos publicados.
- **Mercados:** US / EU / UY. **Impacto:** alto. **Esfuerzo:** bajo.
- **Input del equipo:** confirmar las cifras reales, o eliminar el bloque.

### 2. Agregar una sección de equipo (Add)
- **Qué:** 2 a 4 personas, cada una con foto real, nombre, rol, una línea de experiencia y link a LinkedIn. Título propuesto:
  - EN: "The people you will work with"
  - ES: "Las personas con las que vas a trabajar"
  - PT: "As pessoas com quem você vai trabalhar"
  - FR: "Les personnes avec qui vous travaillerez"
  - DE: "Die Menschen, mit denen Sie arbeiten"
  - IT: "Le persone con cui lavorerai"
  - SV: "Personerna du kommer att arbeta med"
  - Por persona: `[Nombre], [Rol]. [X] años construyendo [apps móviles / plataformas]. [LinkedIn]`
- **Por qué:** es la falta más grave. "Senior team" sin caras es la frase que más usan las agencias.
- **Mercados:** US / EU (alto), UY (medio). **Impacto:** alto. **Esfuerzo:** medio.
- **Input del equipo:** nombres, fotos, roles, años de experiencia, LinkedIn. El Calendly es "juanpadin7": confirmar si esa persona va en la sección.

### 3. Reescribir el hero con hechos concretos (Change)
- **Qué:** reemplazar "We design, build and scale high-quality digital products with a senior engineering team focused on clarity, reliability and excellent execution." (EN, /). Propuesta:
  - EN: "A software studio in Montevideo, Uruguay. We build mobile apps and the platforms behind them, from first version to production. Since [founding year]."
  - ES: "Un estudio de software en Montevideo, Uruguay. Construimos apps móviles y las plataformas que las sostienen, desde la primera versión hasta producción. Desde [año de fundación]."
  - PT: "Um estúdio de software em Montevidéu, Uruguai. Construímos apps móveis e as plataformas por trás deles, da primeira versão à produção. Desde [ano de fundação]."
  - FR: "Un studio logiciel à Montevideo, en Uruguay. Nous développons des applications mobiles et les plateformes qui les font tourner, de la première version à la production. Depuis [année de fondation]."
  - DE: "Ein Softwarestudio in Montevideo, Uruguay. Wir entwickeln mobile Apps und die Plattformen dahinter, von der ersten Version bis zum Produktivbetrieb. Seit [Gründungsjahr]."
  - IT: "Uno studio software a Montevideo, in Uruguay. Sviluppiamo app mobile e le piattaforme che le supportano, dalla prima versione alla produzione. Dal [anno di fondazione]."
  - SV: "En mjukvarustudio i Montevideo, Uruguay. Vi bygger mobilappar och plattformarna bakom dem, från första version till produktion. Sedan [grundandeår]."
- **Por qué:** dice qué hacen, dónde y desde cuándo, sin adjetivos.
- **Mercados:** US / EU / UY. **Impacto:** alto. **Esfuerzo:** bajo.
- **Input del equipo:** año de fundación.

### 4. Agregar un bloque "Cómo trabajamos" con la zona horaria (Add)
- **Qué:** contenido propuesto en los 7 idiomas:
  - EN: "Montevideo is UTC-3 all year. That is 1 to 2 hours ahead of US Eastern, and our mornings overlap with Central European afternoons. Projects start with a [paid discovery of X weeks]. You get [weekly demo / written update every X]. Pricing: [fixed price per phase / monthly team rate], invoiced in [USD/EUR]."
  - ES: "Montevideo está en UTC-3 todo el año. Arrancamos con [un discovery pago de X semanas], hacemos [demo semanal] y facturamos [en USD/UYU, con factura local] según [precio fijo por etapa / tarifa mensual]."
  - PT: "Montevidéu fica em UTC-3 o ano todo: 1 a 2 horas à frente da costa leste dos EUA, e nossas manhãs coincidem com as tardes da Europa Central. Começamos com [um discovery pago de X semanas], fazemos [demo semanal] e cobramos [preço fixo por etapa / valor mensal] em [USD/EUR]."
  - FR: "Montevideo est à UTC-3 toute l'année : 1 à 2 heures d'avance sur la côte Est des États-Unis, et nos matinées recouvrent vos après-midis en Europe centrale. Chaque projet commence par [une phase de cadrage payante de X semaines], avec [une démo chaque semaine]. Tarification : [forfait par phase / tarif mensuel], facturé en [USD/EUR]."
  - DE: "Montevideo liegt ganzjährig bei UTC-3: 1 bis 2 Stunden vor der US-Ostküste, und unsere Vormittage überschneiden sich mit Ihren Nachmittagen in Mitteleuropa. Jedes Projekt beginnt mit [einer bezahlten Discovery-Phase von X Wochen], mit [wöchentlicher Demo]. Abrechnung: [Festpreis pro Phase / monatliche Teampauschale] in [USD/EUR]."
  - IT: "Montevideo è a UTC-3 tutto l'anno: 1-2 ore avanti rispetto alla costa est degli Stati Uniti, e le nostre mattine coincidono con i vostri pomeriggi in Europa centrale. Ogni progetto inizia con [una discovery a pagamento di X settimane], con [una demo settimanale]. Prezzi: [prezzo fisso per fase / tariffa mensile], fatturati in [USD/EUR]."
  - SV: "Montevideo ligger på UTC-3 året runt: 1 till 2 timmar före USA:s östkust, och våra förmiddagar överlappar med era eftermiddagar i Centraleuropa. Varje projekt börjar med [en betald discovery-fas på X veckor], med [demo varje vecka]. Prissättning: [fast pris per fas / månadsavgift], fakturerat i [USD/EUR]."
- **Bloque Process:** reemplaza o acorta "A proven methodology that takes your product from concept to launch" (EN, /).
- **Por qué:** es la duda número uno de EE. UU. y Europa, y hoy no tiene respuesta.
- **Mercados:** US / EU (alto), UY (medio, por precios). **Impacto:** alto. **Esfuerzo:** bajo.
- **Input del equipo:** modelo de precios, moneda, cómo arranca un proyecto, cadencia, horario de trabajo.

### 5. Agregar resultados a cada caso y links a las tiendas (Change)
- **Qué:** sumar a cada proyecto una línea de resultado, con el formato `Result: [N members booking weekly / X reports per month / launched in X weeks]`.
  - Linkear App Store y Google Play en Walo, Bethel y TuVianda.
  - Reemplazar "bielcar.vercel.app" por el dominio final.
  - Rehacer TicketTwist: "a secure and reliable platform" (EN, /portfolio) no dice nada concreto.
  - Ordenar los casos por fuerza y dejar 4 destacados.
- **Por qué:** hoy los casos cuentan el qué y el cómo, pero no el resultado. Un link a la tienda es una prueba que el visitante puede verificar en 5 segundos.
- **Mercados:** US / EU / UY. **Impacto:** alto. **Esfuerzo:** medio.
- **Input del equipo:** métricas por caso, URLs de tiendas, dominio de Bielcar, aclarar si BuildFeed es cliente o producto propio.
- ⚠️ **Antes de publicar métricas o nombres, revisen NDAs y acuerdos con partners.**

### 6. Política de privacidad y aviso en el formulario (Add)
- **Qué:** publicar una página de privacidad con link en el footer. Debajo del formulario, agregar:
  - EN: "We use your data only to reply to you. The form is delivered via EmailJS. [Privacy policy]"
  - ES: "Usamos tus datos solo para responderte. El formulario se envía a través de EmailJS. [Política de privacidad]"
  - PT: "Usamos seus dados apenas para responder a você. O formulário é enviado pelo EmailJS. [Política de privacidade]"
  - FR: "Nous utilisons vos données uniquement pour vous répondre. Le formulaire est transmis via EmailJS. [Politique de confidentialité]"
  - DE: "Wir verwenden Ihre Daten nur, um Ihnen zu antworten. Das Formular wird über EmailJS übermittelt. [Datenschutzerklärung]"
  - IT: "Usiamo i tuoi dati solo per risponderti. Il modulo viene inviato tramite EmailJS. [Informativa sulla privacy]"
  - SV: "Vi använder dina uppgifter endast för att svara dig. Formuläret skickas via EmailJS. [Integritetspolicy]"
- **Fuentes:** considerar servir las fuentes desde el propio dominio en lugar de Google Fonts. Hoy no hay trackers ni cookies propias: está bien.
- **Mercados:** EU (alto), US / UY (medio). **Impacto:** alto para EU. **Esfuerzo:** bajo.
- **Recomendación:** que lo revise alguien de legal; esto no es asesoramiento legal.

### 7. Mostrar la entidad legal (Add)
- **Qué:** en el footer, `[Razón social] · RUT [número] · [dirección o "Montevideo, Uruguay"]`.
- **Mercados:** UY (alto), EU (medio). **Impacto:** medio. **Esfuerzo:** bajo.
- **Input del equipo:** razón social y RUT.

### 8. Pasar el español a voseo rioplatense (Change)
- **Qué:** "Contáctanos" pasa a "Contactanos", "Cuéntanos sobre tu proyecto..." a "Contanos sobre tu proyecto...", "Escríbenos" a "Escribinos", "Selecciona" a "Seleccioná", "inténtalo" a "intentalo" (ES, / Contact y Navbar).
- **Quitar también** "Clientes felices" (va con el cambio 1).
- **Por qué:** el tuteo suena a traducción o a agencia de afuera.
- **Mercados:** UY. **Impacto:** medio. **Esfuerzo:** bajo.

### 9. Unificar el mensaje de idioma (Change)
- **Qué:** EN dice "Clear, fluent communication in English and Spanish" y ES dice lo mismo, mientras PT, FR, DE, IT y SV dicen "trabajamos en inglés". Unificar la idea en todos:
  - EN: "We work in English and Spanish."
  - ES: "Trabajamos en español e inglés."
  - El resto queda como está, porque ya está bien.
- **Mercados:** EU. **Impacto:** bajo. **Esfuerzo:** bajo.

### 10. Recortar "Why Us" y "Services" (Remove)
- **Why Us:** de 7 ítems, sacar "Professional Work Ethic" ("Transparency, ownership, accountability…"), "Business Mindset" y "Qualified Talent Pool" (EN, /), que son genéricos. Dejar los 3 o 4 que se pueden verificar.
- **Services:** reducir de 6 a 3: mobile, web/plataformas, integraciones.
- **IA:** "AI-Enhanced Features" (EN, /) debería apoyarse en un caso real (el dictado por voz de DMG Lab) en vez de "OpenAI, embeddings and vector databases". También aclarar cómo usan IA en el desarrollo y dónde mantienen control humano, si aplica.
- **Por qué:** un sitio más corto transmite más seguridad.
- **Mercados:** US / EU / UY. **Impacto:** medio. **Esfuerzo:** bajo.
- **Input del equipo:** si usan IA en su proceso de desarrollo y cómo.

### 11. Revisar "Trusted By" (Change)
- **Qué:** el carrusel incluye "Petrovic Solutions" y "Ayp Soft", que no aparecen en el portfolio, y "Bethel Spa" mientras el caso se llama "Bethel Fitness". Opciones: dejar solo los logos que tienen caso, o explicar la relación ("partner", "cliente").
- **Mercados:** US / EU. **Impacto:** medio. **Esfuerzo:** bajo.
- ⚠️ **Confirmen que esos logos se pueden mostrar (NDA o clientes de partners).**

### 12. Contacto clickeable (Change)
- **Qué:** usar `mailto:` y `tel:`, agregar WhatsApp para Uruguay y reducir el formulario a nombre, email y mensaje.
- **Mercados:** UY (WhatsApp), todos. **Impacto:** medio. **Esfuerzo:** bajo.

### 13. Básicos multilingües (Change)
- **Qué:**
  - Que `?lang=xx` sea una URL compartible por idioma: el detector ya la lee.
  - Agregar `hreflang` para los 7 idiomas más `x-default`.
  - Traducir `<title>` según el idioma.
  - Que el link "About" del navbar no lleve a la sección de contacto.
- **Por qué:** quien recomienda puede mandar el link directamente en el idioma del recomendado.
- **Mercados:** EU / UY. **Impacto:** bajo a medio. **Esfuerzo:** bajo.

### 14. Ajustar frases calcadas (Change)
- **Contact:** "Construisons ensemble quelque chose de grand." (FR), "Lassen Sie uns gemeinsam etwas Herausragendes bauen." (DE) y el original "Let's build something great together." (EN) suenan a agencia. Reemplazarlas en todos los idiomas por algo directo:
  - EN: "Tell us what you need. We reply within [X business days]."
  - ES: "Contanos qué necesitás. Respondemos en [X días hábiles]."
  - PT: "Conte o que você precisa. Respondemos em [X dias úteis]."
  - FR: "Dites-nous ce dont vous avez besoin. Nous répondons sous [X jours ouvrés]."
  - DE: "Sagen Sie uns, was Sie brauchen. Wir antworten innerhalb von [X Werktagen]."
  - IT: "Raccontaci di cosa hai bisogno. Rispondiamo entro [X giorni lavorativi]."
  - SV: "Berätta vad du behöver. Vi svarar inom [X arbetsdagar]."
- **Otros títulos:** SV "De litar på oss" y "Kvalificerade talanger" suenan raros. Pedir revisión a un hablante nativo de SV, DE, FR e IT.
- **Mercados:** EU. **Impacto:** bajo. **Esfuerzo:** bajo.

## 5. Estructura mínima recomendada

1. **Hero:** qué hacen, dónde y desde cuándo (cambio 3), con un único CTA a Calendly.
2. **Casos (3 a 4):** Bethel, Walo, DMG Lab y uno más, cada uno con problema, solución, resultado y link a la tienda. Luego un link a "ver todos".
3. **Cómo trabajamos:** inicio, cadencia, precios y zona horaria en 4 líneas (cambio 4).
4. **Equipo:** de 2 a 4 personas con LinkedIn.
5. **Contacto:** email, Calendly, WhatsApp y un formulario corto, más la entidad legal y la política de privacidad en el footer.
6. **Selector de idioma:** visible, como ya está.

Para llegar a esta estructura hay que sacar las estadísticas, la mitad de "Why Us" y la mitad de "Services".

## 6. Preguntas abiertas para el equipo

- Año de fundación, razón social, RUT y cantidad de personas.
- Quiénes aparecen en la sección de equipo, con fotos, roles y LinkedIn. ¿Es "juanpadin7" una de esas personas?
- Modelo de precios, moneda y cómo arranca un proyecto. ¿Hacen proyectos cerrados, staff augmentation o ambos? El sitio hoy mezcla los dos.
- Métricas de resultado por caso y qué se puede publicar según NDA.
- Relación con Petrovic Solutions y Ayp Soft: ¿clientes o partners? ¿Se pueden mostrar sus logos?
- ¿BuildFeed es cliente o producto propio? ¿Hay clientes de EE. UU. o Europa que se puedan citar, aunque sea de forma anónima ("startup fintech en EE. UU.")?
- ¿Mantienen los 7 idiomas? Cada idioma extra hay que mantenerlo y revisarlo con un nativo.
- ¿Existe la página de LinkedIn de la empresa? El JSON-LD apunta a `linkedin.com/company/venturasoftware`, pero el sitio no la muestra.

## 7. Cobertura

- **Qué se leyó:** la versión local, desde el código fuente, sin renderizarla: Playwright no está instalado.
- **Rutas:** `/`, `/portfolio` y 404.
- **Textos:** completos en EN y ES. En PT, FR, DE, IT y SV se leyeron las secciones clave (hero, servicios, Why Us, estadísticas, contacto, intro del portfolio) y los 7 archivos tienen las mismas claves.
- **También se revisó:** componentes, `data.ts`, `index.html`, `vercel.json` y la configuración de i18n.
- **Lo que no se verificó:**
  - El PDF generado.
  - Si los links externos responden (las webs de clientes, App Store, Calendly).
  - Si el LinkedIn de la empresa existe.
  - El aspecto visual (fotos, diseño), porque no hubo render.
  - No hay `sitemap.xml` ni `robots.txt` en `public/`.
