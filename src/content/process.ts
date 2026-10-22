import type { Localized } from "@/i18n/config";

export type ProcessStep = { title: Localized; text: Localized };

/** "How we work": from the seed of an idea to a live, growing product. */
export const processSteps: ProcessStep[] = [
  {
    title: { en: "Discover", pt: "Conversa", es: "Descubrir" },
    text: {
      en: "We get to know your business, your customers, and what you need the application to achieve.",
      pt: "Conhecemos o seu negócio, os seus clientes e o que você precisa que a aplicação alcance.",
      es: "Conocemos tu negocio, tus clientes y lo que necesitas que la aplicación logre.",
    },
  },
  {
    title: { en: "Design", pt: "Design", es: "Diseñar" },
    text: {
      en: "We plan the features and design the interface around your brand. You review and approve the designs before development begins.",
      pt: "Planejamos as funcionalidades e desenhamos a interface com a cara da sua marca. Você revisa e aprova o design antes do desenvolvimento começar.",
      es: "Planificamos las funcionalidades y diseñamos la interfaz en torno a tu marca. Tú revisas y apruebas el diseño antes de empezar el desarrollo.",
    },
  },
  {
    title: { en: "Build", pt: "Desenvolvimento", es: "Construir" },
    text: {
      en: "We build a fast, responsive, accessible application that's easy to maintain and update.",
      pt: "Construímos uma aplicação rápida, responsiva, acessível e fácil de manter e atualizar.",
      es: "Construimos una aplicación rápida, adaptable, accesible y fácil de mantener y actualizar.",
    },
  },
  {
    title: { en: "Launch & grow", pt: "Lançamento", es: "Lanzar y crecer" },
    text: {
      en: "We launch your application on your domain, configure SEO, and provide ongoing support as your needs evolve.",
      pt: "Publicamos a aplicação no seu domínio, configuramos o SEO e oferecemos suporte contínuo conforme as suas necessidades evoluem.",
      es: "Publicamos la aplicación en tu dominio, configuramos el SEO y ofrecemos soporte continuo a medida que evolucionan tus necesidades.",
    },
  },
];
