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
      en: "A calm, elegant website designed to turn visitors into clients. It features services for Jungian therapy and astrology, a blog the client can update herself, and one-tap WhatsApp booking.",
      pt: "Um site calmo e elegante, pensado para transformar visitantes em clientes. Apresenta os serviços de terapia junguiana e astrologia, um blog que a própria cliente atualiza e agendamento com um toque pelo WhatsApp.",
      es: "Un sitio sereno y elegante, pensado para convertir visitantes en clientes. Presenta los servicios de terapia junguiana y astrología, un blog que la propia clienta actualiza y reservas con un toque por WhatsApp.",
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
      en: "A multilingual product catalog for a Dutch beekeeper. The owner manages products and inventory through a CMS, while customers can sign up for email alerts when an item is back in stock.",
      pt: "Um catálogo de produtos multilíngue para um apicultor holandês. O dono gerencia produtos e estoque por um CMS, e os clientes podem se cadastrar para receber um aviso por e-mail quando um item volta ao estoque.",
      es: "Un catálogo de productos multilingüe para un apicultor neerlandés. El dueño gestiona productos e inventario desde un CMS, y los clientes pueden suscribirse para recibir un aviso por correo cuando un producto vuelve a estar disponible.",
    },
    features: [
      {
        en: "Dutch, English, Portuguese, and German",
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
