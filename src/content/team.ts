import type { Localized } from "@/i18n/config";

export type Member = {
  id: string;
  name: string;
  photo: string;
  role: Localized;
  bio: Localized;
  highlights: Localized[];
  skills: string[];
  links: { linkedin: string; github: string; linktree: string };
};

export const team: Member[] = [
  {
    id: "larissa",
    name: "Larissa Oliveira",
    photo: "/team/larissa.jpg",
    role: {
      en: "Frontend & Full Stack Developer",
      pt: "Desenvolvedora Frontend & Full Stack",
      es: "Desarrolladora Frontend & Full Stack",
    },
    bio: {
      en: "4+ years building scalable, user-centric web applications. Strong in React, TypeScript and design systems, with hands-on delivery in real-time features, integrations, E2E testing and CI/CD.",
      pt: "Mais de 4 anos construindo aplicações web escaláveis e centradas no usuário. Forte em React, TypeScript e design systems, com entregas em recursos em tempo real, integrações, testes E2E e CI/CD.",
      es: "Más de 4 años creando aplicaciones web escalables y centradas en el usuario. Fuerte en React, TypeScript y design systems, con entregas en funciones en tiempo real, integraciones, pruebas E2E y CI/CD.",
    },
    highlights: [
      {
        en: "Building a new LMS from scratch at Hashtag Treinamentos, replacing a low-code stack ($250K+/year savings).",
        pt: "Construindo do zero um novo LMS na Hashtag Treinamentos, substituindo uma stack low-code (economia de US$ 250 mil+/ano).",
        es: "Construyendo desde cero un nuevo LMS en Hashtag Treinamentos, reemplazando una plataforma low-code (ahorro de más de US$ 250 mil al año).",
      },
      {
        en: "Enterprise e-commerce at McFadyen Digital (FedEx, ABB): ~10% higher user retention after performance work.",
        pt: "E-commerce enterprise na McFadyen Digital (FedEx, ABB): ~10% mais retenção após melhorias de performance.",
        es: "E-commerce enterprise en McFadyen Digital (FedEx, ABB): ~10% más de retención tras mejoras de rendimiento.",
      },
      {
        en: "Multilingual, accessible sites scoring ~97% on performance and accessibility audits.",
        pt: "Sites multilíngues e acessíveis com ~97% nas auditorias de performance e acessibilidade.",
        es: "Sitios multilingües y accesibles con ~97% en las auditorías de rendimiento y accesibilidad.",
      },
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "NestJS", "Playwright", "Storybook", "AWS"],
    links: {
      linkedin: "https://www.linkedin.com/in/larissakoliveira/",
      github: "https://github.com/larissakoliveira",
      linktree: "https://linktr.ee/larissakoliveira",
    },
  },
  {
    id: "raissa",
    name: "Raissa Toledo",
    photo: "/team/raissa.jpg",
    role: { en: "Full Stack Developer", pt: "Desenvolvedora Full Stack", es: "Desarrolladora Full Stack" },
    bio: {
      en: "Full stack developer working across the whole product: polished interfaces in React and Next.js on the front, and APIs and databases with Node.js, NestJS and Python on the back.",
      pt: "Desenvolvedora full stack que atua no produto de ponta a ponta: interfaces caprichadas em React e Next.js no front, e APIs e bancos de dados com Node.js, NestJS e Python no back.",
      es: "Desarrolladora full stack que trabaja en todo el producto: interfaces cuidadas con React y Next.js en el front, y APIs y bases de datos con Node.js, NestJS y Python en el back.",
    },
    highlights: [
      {
        en: "Led the build of the Ana Carolina therapist website, with a headless WordPress blog.",
        pt: "Liderou a construção do site da terapeuta Ana Carolina, com blog em WordPress headless.",
        es: "Lideró la construcción del sitio de la terapeuta Ana Carolina, con un blog en WordPress headless.",
      },
      {
        en: "REST APIs with authentication, relational and NoSQL databases.",
        pt: "APIs REST com autenticação, bancos relacionais e NoSQL.",
        es: "APIs REST con autenticación, bases de datos relacionales y NoSQL.",
      },
    ],
    skills: ["React", "Next.js", "TypeScript", "SCSS", "Node.js", "NestJS", "Python", "Flask", "SQL", "MongoDB"],
    links: {
      linkedin: "https://www.linkedin.com/in/raissalstoledo/",
      github: "https://github.com/raissalst",
      linktree: "https://linktr.ee/raissalst",
    },
  },
];
