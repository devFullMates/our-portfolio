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
    role: {
      en: "Backend & Full Stack Developer",
      pt: "Desenvolvedora Backend & Full Stack",
      es: "Desarrolladora Backend & Full Stack",
    },
    bio: {
      en: "Full stack developer with 4+ years of experience building APIs, web applications and scalable solutions. Specialized in backend, system architecture and integrations, with experience building products from scratch, modernizing legacy systems and running cloud infrastructure.",
      pt: "Desenvolvedora Full Stack com mais de 4 anos de experiência na criação de APIs, aplicações web e soluções escaláveis. Especialista em backend, arquitetura de sistemas e integrações, com experiência em desenvolvimento de produtos do zero, modernização de sistemas legados e infraestrutura em nuvem.",
      es: "Desarrolladora Full Stack con más de 4 años de experiencia en la creación de APIs, aplicaciones web y soluciones escalables. Especialista en backend, arquitectura de sistemas e integraciones, con experiencia en el desarrollo de productos desde cero, modernización de sistemas legados e infraestructura en la nube.",
    },
    highlights: [
      {
        en: "Built an educational platform from scratch at Hashtag Treinamentos, including APIs, authentication, gamification and AWS infrastructure with Terraform.",
        pt: "Desenvolvimento de uma plataforma educacional do zero na Hashtag Treinamentos, incluindo APIs, autenticação, gamificação e infraestrutura AWS com Terraform.",
        es: "Desarrollo de una plataforma educativa desde cero en Hashtag Treinamentos, incluyendo APIs, autenticación, gamificación e infraestructura AWS con Terraform.",
      },
      {
        en: "Led the modernization of a legacy C++ system at Stract, migrating it to Python microservices with RabbitMQ, PostgreSQL and Redis.",
        pt: "Liderou a modernização de um sistema legado em C++ na Stract, migrando para microsserviços Python com RabbitMQ, PostgreSQL e Redis.",
        es: "Lideró la modernización de un sistema legado en C++ en Stract, migrándolo a microservicios Python con RabbitMQ, PostgreSQL y Redis.",
      },
      {
        en: "Developed APIs and microservices at Exame, including a serverless election results API with AWS Lambda and API Gateway, designed to handle up to 165K requests per minute.",
        pt: "Desenvolveu APIs e microsserviços na Exame, incluindo uma API serverless de resultados eleitorais com AWS Lambda e API Gateway, projetada para suportar até 165 mil requisições por minuto.",
        es: "Desarrolló APIs y microservicios en Exame, incluida una API serverless de resultados electorales con AWS Lambda y API Gateway, diseñada para soportar hasta 165 mil solicitudes por minuto.",
      },
    ],
    skills: ["Node.js", "TypeScript", "NestJS", "Python", "Flask", "React", "Next.js", "PostgreSQL", "Redis", "RabbitMQ", "AWS", "Docker"],
    links: {
      linkedin: "https://www.linkedin.com/in/raissalstoledo/",
      github: "https://github.com/raissalst",
      linktree: "https://linktr.ee/raissalst",
    },
  },
];
