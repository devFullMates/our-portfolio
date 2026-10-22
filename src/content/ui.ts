import type { SectionId } from "@/config/site";
import type { Localized } from "@/i18n/config";

/** Interface copy: every visible string that is not team, project, service or process data. */
export const ui = {
  metadata: {
    title: {
      en: "devFullMates · Software development studio",
      pt: "devFullMates · Estúdio de desenvolvimento de software",
      es: "devFullMates · Estudio de desarrollo de software",
    },
    description: {
      en: "Larissa Oliveira and Raissa Toledo design and build web applications that help businesses grow, from customer-facing products to internal tools and integrations, for clients in Brazil and worldwide. See our projects and get in touch.",
      pt: "Larissa Oliveira e Raissa Toledo criam aplicações web que ajudam negócios a crescer, de produtos para os seus clientes a ferramentas internas e integrações, no Brasil e no mundo. Veja nossos projetos e fale com a gente.",
      es: "Larissa Oliveira y Raissa Toledo diseñan y desarrollan aplicaciones web que ayudan a los negocios a crecer, desde productos para sus clientes hasta herramientas internas e integraciones, en Brasil y en todo el mundo. Mira nuestros proyectos y contáctanos.",
    },
  },
  headline: {
    en: "Software development studio",
    pt: "Estúdio de desenvolvimento de software",
    es: "Estudio de desarrollo de software",
  },
  hero: {
    /** The word between ** gets the growing-sprout highlight. */
    title: {
      en: "Web applications that help your business **grow**.",
      pt: "Aplicações web que ajudam o seu negócio a **crescer**.",
      es: "Aplicaciones web que ayudan a tu negocio a **crecer**.",
    },
    text: {
      en: "We're Larissa and Raissa, two full-stack developers who design and build web applications that streamline your operations, help you attract new customers, and scale with your business.",
      pt: "Somos a Larissa e a Raissa, duas desenvolvedoras full stack que criam aplicações web para otimizar a sua operação, atrair novos clientes e escalar junto com o seu negócio.",
      es: "Somos Larissa y Raissa, dos desarrolladoras full stack que diseñan y crean aplicaciones web para optimizar tu operación, atraer nuevos clientes y escalar junto con tu negocio.",
    },
    primaryCta: { en: "Let's talk about your project", pt: "Vamos falar do seu projeto", es: "Hablemos de tu proyecto" },
    secondaryCta: { en: "View our work", pt: "Ver nosso trabalho", es: "Ver nuestro trabajo" },
  },
  /** Short enough to stay on one line in the header. */
  headerCta: { en: "Let's talk", pt: "Vamos conversar", es: "Hablemos" },
  stats: [
    { value: "4+", label: { en: "years of experience", pt: "anos de experiência", es: "años de experiencia" } },
    { value: "2", label: { en: "countries with active client projects", pt: "países com projetos ativos de clientes", es: "países con proyectos activos de clientes" } },
    { value: "3", label: { en: "languages we work in", pt: "idiomas em que atendemos", es: "idiomas en los que trabajamos" } },
    { value: "~97%", label: { en: "performance and accessibility scores", pt: "nas notas de performance e acessibilidade", es: "en puntuaciones de rendimiento y accesibilidad" } },
  ] as { value: string; label: Localized }[],
  techStripLabel: { en: "Technologies we use", pt: "Tecnologias que usamos", es: "Tecnologías que usamos" },
  nav: {
    services: { en: "Services", pt: "Serviços", es: "Servicios" },
    projects: { en: "Projects", pt: "Projetos", es: "Proyectos" },
    process: { en: "Process", pt: "Processo", es: "Proceso" },
    team: { en: "Team", pt: "Equipe", es: "Equipo" },
    contact: { en: "Contact", pt: "Contato", es: "Contacto" },
  } satisfies Record<SectionId, Localized>,
  navLabel: { en: "Main", pt: "Principal", es: "Principal" },
  menu: { open: { en: "Open menu", pt: "Abrir menu", es: "Abrir menú" }, close: { en: "Close menu", pt: "Fechar menu", es: "Cerrar menú" } },
  socialLabel: { en: "Social links", pt: "Redes e contatos", es: "Redes y contactos" },
  sections: {
    services: {
      title: { en: "What we build for you", pt: "O que criamos para você", es: "Lo que creamos para ti" },
      intro: {
        en: "From complete web applications to the tools and integrations that keep your business running, with the same care for speed, design, and the people using them.",
        pt: "De aplicações web completas às ferramentas e integrações que fazem o seu negócio rodar, com o mesmo cuidado com velocidade, design e com quem vai usar.",
        es: "Desde aplicaciones web completas hasta las herramientas e integraciones que mantienen tu negocio en marcha, con el mismo cuidado por la velocidad, el diseño y las personas que las usan.",
      },
    },
    projects: {
      title: { en: "Selected work", pt: "Projetos em destaque", es: "Proyectos destacados" },
      intro: {
        en: "Real projects, built for real clients across Brazil and Europe.",
        pt: "Projetos reais, feitos para clientes reais no Brasil e na Europa.",
        es: "Proyectos reales, creados para clientes reales en Brasil y Europa.",
      },
    },
    process: {
      title: { en: "How we work", pt: "Como trabalhamos", es: "Cómo trabajamos" },
      intro: {
        en: "A clear path from our first conversation to launch day, with you involved every step of the way.",
        pt: "Um caminho claro da nossa primeira conversa até o lançamento, com você participando de cada etapa.",
        es: "Un camino claro desde nuestra primera conversación hasta el lanzamiento, contigo involucrado en cada paso.",
      },
    },
    team: {
      title: { en: "The mates behind the code", pt: "As mates por trás do código", es: "Las mates detrás del código" },
      intro: {
        en: "We bring experience from **enterprise e-commerce** and **large-scale learning platforms** to every project. That means solid engineering and thoughtful solutions, whatever the size of your project. Get to know us and explore our résumés.",
        pt: "Levamos para cada projeto a experiência com **e-commerce enterprise** e **plataformas de ensino em larga escala**, Isso significa engenharia sólida e soluções bem pensadas, seja qual for o tamanho do seu projeto. Conheça a gente e confira nossos currículos.",
        es: "Llevamos a cada proyecto nuestra experiencia en **e-commerce enterprise** y **plataformas educativas a gran escala**, Eso significa ingeniería sólida y soluciones bien pensadas, sea cual sea el tamaño de tu proyecto. Conócenos y revisa nuestros currículums.",
      },
    },
  },
  projects: {
    visit: { en: "Visit live site", pt: "Ver site no ar", es: "Ver sitio en línea" },
    opensNewTab: { en: "(opens in a new tab)", pt: "(abre em nova aba)", es: "(se abre en una pestaña nueva)" },
    screenshot: { en: "Screenshot of", pt: "Captura de tela de", es: "Captura de pantalla de" },
  },
  team: {
    resume: { en: "Résumé & links", pt: "Currículo & links", es: "Currículum y enlaces" },
    photoOf: { en: "Photo of", pt: "Foto de", es: "Foto de" },
  },
  contact: {
    eyebrow: { en: "Let's talk", pt: "Vamos conversar", es: "Hablemos" },
    title: {
      en: "Have an idea? Let's plant it together.",
      pt: "Tem uma ideia? Vamos plantar juntos.",
      es: "¿Tienes una idea? Plantémosla juntos.",
    },
    text: {
      en: "Tell us about your business and what you're looking to build. We typically respond within one business day.",
      pt: "Conte sobre o seu negócio e o que você quer construir. Normalmente respondemos em até um dia útil.",
      es: "Cuéntanos sobre tu negocio y lo que quieres construir. Normalmente respondemos en un día hábil.",
    },
    whatsapp: { en: "Chat on WhatsApp", pt: "Conversar no WhatsApp", es: "Hablar por WhatsApp" },
    email: { en: "Send an email", pt: "Enviar e-mail", es: "Enviar un correo" },
    whatsappMessage: {
      en: "Hi devFullMates! I saw your portfolio and I'd like to talk about a project.",
      pt: "Olá, devFullMates! Vi o portfólio de vocês e quero conversar sobre um projeto.",
      es: "¡Hola, devFullMates! Vi su portafolio y me gustaría hablar sobre un proyecto.",
    },
    emailSubject: { en: "New project", pt: "Novo projeto", es: "Nuevo proyecto" },
  },
  footer: {
    tagline: {
      en: "Web applications that help your business grow.",
      pt: "Aplicações web que ajudam o seu negócio a crescer.",
      es: "Aplicaciones web que ayudan a tu negocio a crecer.",
    },
    backToTop: { en: "Back to top", pt: "Voltar ao topo", es: "Volver arriba" },
  },
  skip: { en: "Skip to content", pt: "Pular para o conteúdo", es: "Saltar al contenido" },
  languageLabel: { en: "Language", pt: "Idioma", es: "Idioma" },
  theme: {
    toLight: { en: "Switch to light theme", pt: "Mudar para tema claro", es: "Cambiar a tema claro" },
    toDark: { en: "Switch to dark theme", pt: "Mudar para tema escuro", es: "Cambiar a tema oscuro" },
  },
};
