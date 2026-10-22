import type { Localized } from "@/i18n/config";

export type ProcessStep = { title: Localized; text: Localized };

/** "How we work": from the seed of an idea to a live, growing product. */
export const processSteps: ProcessStep[] = [
  {
    title: { en: "Discover", pt: "Conversa", es: "Descubrir" },
    text: {
      en: "We learn about your business, your clients and what the application needs to achieve.",
      pt: "Entendemos o seu negócio, os seus clientes e o que a aplicação precisa alcançar.",
      es: "Conocemos tu negocio, tus clientes y lo que la aplicación necesita lograr.",
    },
  },
  {
    title: { en: "Design", pt: "Design", es: "Diseñar" },
    text: {
      en: "We plan the features and design the screens with your brand. You approve before we write any code.",
      pt: "Planejamos as funcionalidades e desenhamos as telas com a sua marca. Você aprova antes de qualquer código.",
      es: "Planificamos las funcionalidades y diseñamos las pantallas con tu marca. Tú apruebas antes de escribir código.",
    },
  },
  {
    title: { en: "Build", pt: "Desenvolvimento", es: "Construir" },
    text: {
      en: "We develop it fast, responsive, accessible and easy for you to update.",
      pt: "Desenvolvemos rápido, responsivo, acessível e fácil para você atualizar.",
      es: "Lo desarrollamos rápido, adaptable, accesible y fácil de actualizar para ti.",
    },
  },
  {
    title: { en: "Launch & grow", pt: "Lançamento", es: "Lanzar y crecer" },
    text: {
      en: "We publish on your domain, set up SEO and stay around for tweaks and new features.",
      pt: "Publicamos no seu domínio, configuramos o SEO e seguimos por perto para ajustes e novidades.",
      es: "Publicamos en tu dominio, configuramos el SEO y seguimos cerca para ajustes y novedades.",
    },
  },
];
