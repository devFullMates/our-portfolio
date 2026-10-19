import type { SectionId } from "@/config/site";
import type { Localized } from "@/i18n/config";

/** Interface copy: every visible string that is not team, project, service or process data. */
export const ui = {
  metadata: {
    title: {
      en: "devFullMates · Web design & development studio",
      pt: "devFullMates · Estúdio de design e desenvolvimento web",
      es: "devFullMates · Estudio de diseño y desarrollo web",
    },
    description: {
      en: "Larissa Oliveira and Raissa Toledo design and build fast, accessible, multilingual websites and web apps for businesses in Brazil and worldwide. See our projects and get in touch.",
      pt: "Larissa Oliveira e Raissa Toledo criam sites e aplicações web rápidos, acessíveis e multilíngues para negócios no Brasil e no mundo. Veja nossos projetos e fale com a gente.",
      es: "Larissa Oliveira y Raissa Toledo diseñan y desarrollan sitios y aplicaciones web rápidos, accesibles y multilingües para negocios en Brasil y en todo el mundo. Mira nuestros proyectos y contáctanos.",
    },
  },
  headline: {
    en: "Web design & development studio",
    pt: "Estúdio de design e desenvolvimento web",
    es: "Estudio de diseño y desarrollo web",
  },
  hero: {
    eyebrow: {
      en: "Web studio · Rio de Janeiro → worldwide",
      pt: "Estúdio web · Rio de Janeiro → o mundo",
      es: "Estudio web · Río de Janeiro → el mundo",
    },
    /** The word between ** gets the growing-sprout highlight. */
    title: {
      en: "Websites that make your business **grow**.",
      pt: "Sites que fazem o seu negócio **crescer**.",
      es: "Sitios web que hacen **crecer** tu negocio.",
    },
    text: {
      en: "We're Larissa and Raissa, two full stack developers. We design and build fast, beautiful websites that turn visitors into clients, and that you can update yourself.",
      pt: "Somos a Larissa e a Raissa, duas desenvolvedoras full stack. Criamos sites rápidos e bonitos que transformam visitantes em clientes, e que você mesmo consegue atualizar.",
      es: "Somos Larissa y Raissa, dos desarrolladoras full stack. Diseñamos y creamos sitios rápidos y atractivos que convierten visitantes en clientes, y que tú mismo puedes actualizar.",
    },
    primaryCta: { en: "Start a project", pt: "Começar um projeto", es: "Empezar un proyecto" },
    secondaryCta: { en: "See our work", pt: "Ver projetos", es: "Ver proyectos" },
    showcaseLabel: { en: "Recent projects", pt: "Projetos recentes", es: "Proyectos recientes" },
    badges: {
      languages: { en: "4 languages", pt: "4 idiomas", es: "4 idiomas" },
      audit: { en: "~97% performance & a11y", pt: "~97% performance & a11y", es: "~97% rendimiento y a11y" },
      booking: { en: "WhatsApp booking", pt: "Agendamento no WhatsApp", es: "Reservas por WhatsApp" },
    },
  },
  stats: [
    { value: "4+", label: { en: "years building for the web", pt: "anos criando para a web", es: "años creando para la web" } },
    { value: "2", label: { en: "countries with live client sites", pt: "países com sites de clientes no ar", es: "países con sitios de clientes en línea" } },
    { value: "3", label: { en: "languages we work in", pt: "idiomas em que atendemos", es: "idiomas en los que trabajamos" } },
    { value: "~97%", label: { en: "performance & accessibility audits", pt: "nas auditorias de performance e acessibilidade", es: "en auditorías de rendimiento y accesibilidad" } },
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
        en: "From a simple landing page to a full web app, with the same care for speed, design and the people using it.",
        pt: "De uma landing page simples a uma aplicação web completa, com o mesmo cuidado com velocidade, design e com quem vai usar.",
        es: "Desde una landing page sencilla hasta una aplicación web completa, con el mismo cuidado por la velocidad, el diseño y las personas que la usan.",
      },
    },
    projects: {
      title: { en: "Selected work", pt: "Projetos em destaque", es: "Proyectos destacados" },
      intro: {
        en: "Real sites, live for real clients, in Brazil and in Europe.",
        pt: "Sites reais, no ar para clientes reais, no Brasil e na Europa.",
        es: "Sitios reales, en línea para clientes reales, en Brasil y en Europa.",
      },
    },
    process: {
      title: { en: "How we work", pt: "Como trabalhamos", es: "Cómo trabajamos" },
      intro: {
        en: "A clear path from first chat to launch day, and you're part of every step.",
        pt: "Um caminho claro da primeira conversa até o lançamento, com você em cada etapa.",
        es: "Un camino claro desde la primera charla hasta el lanzamiento, contigo en cada paso.",
      },
    },
    team: {
      title: { en: "The mates behind the code", pt: "As mates por trás do código", es: "Las mates detrás del código" },
      intro: {
        en: "We bring experience from **enterprise e-commerce** and **large-scale learning platforms** to every project, so even a small site gets solid engineering. Check out our résumés.",
        pt: "Levamos para cada projeto a experiência com **e-commerce enterprise** e **plataformas de ensino em larga escala**, então até um site pequeno recebe engenharia sólida. Confira nossos currículos.",
        es: "Llevamos a cada proyecto nuestra experiencia en **e-commerce enterprise** y **plataformas educativas a gran escala**, así que hasta un sitio pequeño recibe ingeniería sólida. Mira nuestros currículums.",
      },
    },
  },
  projects: {
    visit: { en: "Visit live site", pt: "Ver site no ar", es: "Ver sitio en línea" },
    code: { en: "Source code", pt: "Código-fonte", es: "Código fuente" },
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
      en: "Tell us about your business and what you need. We usually reply within one business day.",
      pt: "Conte sobre o seu negócio e o que você precisa. Costumamos responder em até um dia útil.",
      es: "Cuéntanos sobre tu negocio y lo que necesitas. Solemos responder en un día hábil.",
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
      en: "Websites that make your business grow.",
      pt: "Sites que fazem o seu negócio crescer.",
      es: "Sitios web que hacen crecer tu negocio.",
    },
    builtWith: {
      en: "Built by us with Next.js and Tailwind CSS.",
      pt: "Feito por nós com Next.js e Tailwind CSS.",
      es: "Hecho por nosotras con Next.js y Tailwind CSS.",
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
