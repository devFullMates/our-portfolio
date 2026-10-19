import type { Localized } from "@/i18n/config";

export type Project = {
  id: string;
  name: string;
  url: string;
  displayUrl: string;
  image: string;
  client: Localized;
  summary: Localized;
  features: Localized[];
  tech: string[];
};

export const projects: Project[] = [
  {
    id: "anacarol",
    name: "Ana Carolina · Terapeuta & Astróloga",
    url: "https://www.anacaroltoledo.com.br/",
    displayUrl: "anacaroltoledo.com.br",
    image: "/projects/anacaroltoledo.png",
    client: {
      en: "Jungian therapist & astrologer · Brazil",
      pt: "Terapeuta junguiana & astróloga · Brasil",
      es: "Terapeuta junguiana y astróloga · Brasil",
    },
    summary: {
      en: "A calm, elegant website that turns visitors into clients: services for astrology and Jungian therapy, an articles blog the client updates herself, and one-tap booking on WhatsApp.",
      pt: "Um site calmo e elegante que transforma visitantes em clientes: serviços de astrologia e terapia junguiana, um blog de artigos que a própria cliente atualiza e agendamento com um toque no WhatsApp.",
      es: "Un sitio sereno y elegante que convierte visitantes en clientes: servicios de astrología y terapia junguiana, un blog de artículos que la propia clienta actualiza y reservas con un toque por WhatsApp.",
    },
    features: [
      {
        en: "Articles managed in a headless WordPress CMS",
        pt: "Artigos gerenciados em WordPress headless",
        es: "Artículos gestionados en WordPress headless",
      },
      {
        en: "WhatsApp booking from every section",
        pt: "Agendamento por WhatsApp em todas as seções",
        es: "Reservas por WhatsApp desde cada sección",
      },
      {
        en: "SEO-ready, fast pages on Vercel",
        pt: "Páginas rápidas e otimizadas para SEO na Vercel",
        es: "Páginas rápidas y optimizadas para SEO en Vercel",
      },
    ],
    tech: ["Next.js", "React", "TypeScript", "SCSS", "WordPress (headless)", "Vercel"],
  },
  {
    id: "bij",
    name: "Bijzondere Zaken",
    url: "https://bij-zonderezaken.nl/",
    displayUrl: "bij-zonderezaken.nl",
    image: "/projects/bij-zonderezaken.png",
    client: {
      en: "Beekeeper's honey shop · Netherlands",
      pt: "Loja de produtos de mel de um apicultor · Holanda",
      es: "Tienda de productos de miel de un apicultor · Países Bajos",
    },
    summary: {
      en: "A product catalog for a Dutch beekeeper, in four languages. The owner manages products and stock in a CMS, and customers can ask to be emailed as soon as a sold-out item is back.",
      pt: "Um catálogo de produtos para um apicultor holandês, em quatro idiomas. O dono gerencia produtos e estoque em um CMS, e os clientes pedem para receber um e-mail assim que um item esgotado volta.",
      es: "Un catálogo de productos para un apicultor neerlandés, en cuatro idiomas. El dueño gestiona productos y stock en un CMS, y los clientes pueden pedir un aviso por correo cuando un producto agotado vuelve.",
    },
    features: [
      {
        en: "Dutch, English, Portuguese and German",
        pt: "Holandês, inglês, português e alemão",
        es: "Neerlandés, inglés, portugués y alemán",
      },
      {
        en: "Back-in-stock email alerts via CMS webhook",
        pt: "Alertas de volta ao estoque por e-mail via webhook do CMS",
        es: "Avisos de reposición por correo vía webhook del CMS",
      },
      {
        en: "~97% on performance and accessibility audits",
        pt: "~97% nas auditorias de performance e acessibilidade",
        es: "~97% en las auditorías de rendimiento y accesibilidad",
      },
    ],
    tech: ["React", "TypeScript", "Vite", "Contentful", "GraphQL", "Node.js", "Express", "Nodemailer", "i18next"],  },
];
