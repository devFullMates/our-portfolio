import type { Localized } from "@/i18n/config";

export type ServiceIcon = "layout" | "store" | "edit" | "globe" | "plug" | "rocket";

export type Service = { icon: ServiceIcon; title: Localized; text: Localized };

export const services: Service[] = [
  {
    icon: "layout",
    title: { en: "Websites & landing pages", pt: "Sites & landing pages", es: "Sitios web y landing pages" },
    text: {
      en: "Fast, responsive sites that present your business and turn visits into contacts.",
      pt: "Sites rápidos e responsivos que apresentam seu negócio e transformam visitas em contatos.",
      es: "Sitios rápidos y adaptables que presentan tu negocio y convierten visitas en contactos.",
    },
  },
  {
    icon: "store",
    title: { en: "Catalogs & online stores", pt: "Catálogos & lojas online", es: "Catálogos y tiendas online" },
    text: {
      en: "Show your products, control stock and keep customers coming back.",
      pt: "Mostre seus produtos, controle o estoque e faça o cliente voltar.",
      es: "Muestra tus productos, controla el stock y haz que tus clientes vuelvan.",
    },
  },
  {
    icon: "edit",
    title: { en: "Content you can edit", pt: "Conteúdo que você edita", es: "Contenido que tú editas" },
    text: {
      en: "CMS integration (WordPress, Contentful) so you update texts, posts and products yourself.",
      pt: "Integração com CMS (WordPress, Contentful) para você mesmo atualizar textos, posts e produtos.",
      es: "Integración con CMS (WordPress, Contentful) para que actualices textos, posts y productos por tu cuenta.",
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
      en: "Reach clients in any language, rank on Google and welcome every visitor.",
      pt: "Alcance clientes em qualquer idioma, apareça no Google e receba bem todo visitante.",
      es: "Llega a clientes en cualquier idioma, aparece en Google y recibe bien a cada visitante.",
    },
  },
  {
    icon: "plug",
    title: {
      en: "Web apps & integrations",
      pt: "Aplicações web & integrações",
      es: "Aplicaciones web e integraciones",
    },
    text: {
      en: "Dashboards, scheduling, payments, emails and APIs built to fit your workflow.",
      pt: "Painéis, agendamentos, pagamentos, e-mails e APIs feitos para o seu fluxo.",
      es: "Paneles, agendas, pagos, correos y APIs hechos a la medida de tu trabajo.",
    },
  },
  {
    icon: "rocket",
    title: { en: "Launch & support", pt: "Publicação & suporte", es: "Lanzamiento y soporte" },
    text: {
      en: "Domain, hosting and deploys handled, plus support after go-live.",
      pt: "Domínio, hospedagem e deploy resolvidos, com suporte depois do lançamento.",
      es: "Dominio, hosting y publicación resueltos, con soporte después del lanzamiento.",
    },
  },
];
