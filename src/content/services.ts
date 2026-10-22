import type { Localized } from "@/i18n/config";

export type ServiceIcon = "layout" | "store" | "edit" | "globe" | "plug" | "rocket";

export type Service = { icon: ServiceIcon; title: Localized; text: Localized };

export const services: Service[] = [
  {
    icon: "plug",
    title: {
      en: "Web apps & integrations",
      pt: "Aplicações web & integrações",
      es: "Aplicaciones web e integraciones",
    },
    text: {
      en: "Dashboards, scheduling tools, payment systems, email workflows, and APIs tailored to the way you work.",
      pt: "Painéis, ferramentas de agendamento, sistemas de pagamento, fluxos de e-mail e APIs sob medida para o jeito que você trabalha.",
      es: "Paneles, herramientas de agenda, sistemas de pago, flujos de correo y APIs a la medida de tu forma de trabajar.",
    },
  },
  {
    icon: "layout",
    title: { en: "Websites & landing pages", pt: "Sites & landing pages", es: "Sitios web y landing pages" },
    text: {
      en: "Fast, responsive websites that showcase your business and turn visitors into leads.",
      pt: "Sites rápidos e responsivos que valorizam o seu negócio e transformam visitantes em potenciais clientes.",
      es: "Sitios web rápidos y adaptables que destacan tu negocio y convierten visitantes en clientes potenciales.",
    },
  },
  {
    icon: "store",
    title: { en: "Catalogs & online stores", pt: "Catálogos & lojas online", es: "Catálogos y tiendas online" },
    text: {
      en: "Showcase your products, manage inventory, and give customers a reason to come back.",
      pt: "Destaque os seus produtos, gerencie o estoque e dê aos clientes um motivo para voltar.",
      es: "Destaca tus productos, gestiona el inventario y dales a tus clientes un motivo para volver.",
    },
  },
  {
    icon: "edit",
    title: { en: "Content you can edit", pt: "Conteúdo que você edita", es: "Contenido que tú editas" },
    text: {
      en: "CMS integration with WordPress or Contentful, so you can update copy, blog posts, and products yourself.",
      pt: "Integração com WordPress ou Contentful para você mesmo atualizar textos, posts do blog e produtos.",
      es: "Integración con WordPress o Contentful para que actualices textos, entradas del blog y productos por tu cuenta.",
    },
  },
  {
    icon: "globe",
    title: {
      en: "Multilingual, SEO & accessibility",
      pt: "Multilíngue, SEO & acessibilidade",
      es: "Multilingüe, SEO y accesibilidad",
    },
    text: {
      en: "Reach customers in multiple languages, improve your visibility on Google, and make your website accessible to more people.",
      pt: "Alcance clientes em vários idiomas, ganhe visibilidade no Google e torne o seu site acessível a mais pessoas.",
      es: "Llega a clientes en varios idiomas, gana visibilidad en Google y haz que tu sitio sea accesible para más personas.",
    },
  },
  {
    icon: "rocket",
    title: { en: "Launch & support", pt: "Publicação & suporte", es: "Lanzamiento y soporte" },
    text: {
      en: "We handle domain setup, hosting, and deployment, with ongoing support after launch.",
      pt: "Cuidamos da configuração do domínio, da hospedagem e da publicação, com suporte contínuo depois do lançamento.",
      es: "Nos encargamos de la configuración del dominio, el hosting y la publicación, con soporte continuo después del lanzamiento.",
    },
  },
];
