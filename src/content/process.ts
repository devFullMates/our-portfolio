import type { Localized } from "@/i18n/config";

export type ProcessStep = { title: Localized; text: Localized };

/** "How we work": from the seed of an idea to a live, growing site. */
export const processSteps: ProcessStep[] = [
  {
    title: { en: "Discover", pt: "Conversa", es: "Descubrir" },
    text: {
      en: "We learn about your business, your clients and what the site needs to achieve.",
      pt: "Entendemos o seu negócio, os seus clientes e o que o site precisa alcançar.",
      es: "Conocemos tu negocio, tus clientes y lo que el sitio necesita lograr.",
    },
  },
  {
    title: { en: "Design", pt: "Design", es: "Diseñar" },
    text: {
      en: "We plan the structure and design the pages with your brand. You approve before we write any code.",
      pt: "Planejamos a estrutura e desenhamos as páginas com a sua marca. Você aprova antes de qualquer código.",
      es: "Planificamos la estructura y diseñamos las páginas con tu marca. Tú apruebas antes de escribir código.",
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
