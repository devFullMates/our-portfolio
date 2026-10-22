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
      en: "Frontend & Full-Stack Developer",
      pt: "Desenvolvedora Frontend & Full Stack",
      es: "Desarrolladora Frontend & Full Stack",
    },
    bio: {
      en: "4+ years of experience building scalable, user-focused web applications. Specializing in React, TypeScript, and design systems, with hands-on experience delivering real-time features, integrations, end-to-end tests, and CI/CD pipelines.",
      pt: "Mais de 4 anos de experiência construindo aplicações web escaláveis e centradas no usuário. Especialista em React, TypeScript e design systems, com experiência prática em recursos em tempo real, integrações, testes end-to-end e pipelines de CI/CD.",
      es: "Más de 4 años de experiencia creando aplicaciones web escalables y centradas en el usuario. Especialista en React, TypeScript y design systems, con experiencia práctica en funciones en tiempo real, integraciones, pruebas end-to-end y pipelines de CI/CD.",
    },
    highlights: [
      {
        en: "Building a new learning management system (LMS) from the ground up at Hashtag Treinamentos, replacing a low-code solution and generating over $250K in annual savings.",
        pt: "Construindo do zero uma nova plataforma de ensino (LMS) na Hashtag Treinamentos, substituindo uma solução low-code e gerando mais de US$ 250 mil de economia por ano.",
        es: "Construyendo desde cero una nueva plataforma educativa (LMS) en Hashtag Treinamentos, reemplazando una solución low-code y generando un ahorro de más de US$ 250 mil al año.",
      },
      {
        en: "Developed enterprise e-commerce solutions at McFadyen Digital for clients including FedEx and ABB, contributing to an approximately 10% increase in user retention through performance improvements.",
        pt: "Desenvolveu soluções de e-commerce enterprise na McFadyen Digital para clientes como FedEx e ABB, contribuindo para um aumento de cerca de 10% na retenção de usuários com melhorias de performance.",
        es: "Desarrolló soluciones de e-commerce enterprise en McFadyen Digital para clientes como FedEx y ABB, contribuyendo a un aumento de cerca del 10% en la retención de usuarios con mejoras de rendimiento.",
      },
      {
        en: "Built multilingual, accessible websites achieving performance and accessibility audit scores of approximately 97%.",
        pt: "Criou sites multilíngues e acessíveis com notas de cerca de 97% nas auditorias de performance e acessibilidade.",
        es: "Creó sitios multilingües y accesibles con puntuaciones de cerca del 97% en las auditorías de rendimiento y accesibilidad.",
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
      en: "Backend & Full-Stack Developer",
      pt: "Desenvolvedora Backend & Full Stack",
      es: "Desarrolladora Backend & Full Stack",
    },
    bio: {
      en: "Full-stack developer with 4+ years of experience building APIs, web applications, and scalable software solutions. Specializing in backend development, system architecture, and integrations, with experience building products from the ground up, modernizing legacy systems, and managing cloud infrastructure.",
      pt: "Desenvolvedora Full Stack com mais de 4 anos de experiência na criação de APIs, aplicações web e soluções escaláveis. Especialista em backend, arquitetura de sistemas e integrações, com experiência em desenvolvimento de produtos do zero, modernização de sistemas legados e infraestrutura em nuvem.",
      es: "Desarrolladora Full Stack con más de 4 años de experiencia en la creación de APIs, aplicaciones web y soluciones escalables. Especialista en backend, arquitectura de sistemas e integraciones, con experiencia en el desarrollo de productos desde cero, modernización de sistemas legados e infraestructura en la nube.",
    },
    highlights: [
      {
        en: "Built an educational platform from the ground up at Hashtag Treinamentos, including APIs, authentication, gamification, and AWS infrastructure provisioned with Terraform.",
        pt: "Desenvolvimento de uma plataforma educacional do zero na Hashtag Treinamentos, incluindo APIs, autenticação, gamificação e infraestrutura AWS com Terraform.",
        es: "Desarrollo de una plataforma educativa desde cero en Hashtag Treinamentos, incluyendo APIs, autenticación, gamificación e infraestructura AWS con Terraform.",
      },
      {
        en: "Led the modernization of a legacy C++ system at Stract, migrating it to Python-based microservices using RabbitMQ, PostgreSQL, and Redis.",
        pt: "Liderou a modernização de um sistema legado em C++ na Stract, migrando para microsserviços Python com RabbitMQ, PostgreSQL e Redis.",
        es: "Lideró la modernización de un sistema legado en C++ en Stract, migrándolo a microservicios Python con RabbitMQ, PostgreSQL y Redis.",
      },
      {
        en: "Developed APIs and microservices at Exame, including a serverless election-results API built with AWS Lambda and API Gateway, designed to handle up to 165,000 requests per minute.",
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
