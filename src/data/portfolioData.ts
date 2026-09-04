export interface Metric {
  value: string;
  label: string;
}

export interface HighlightItem {
  icon: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  category: 'Freelance Experience' | 'Professional Practice' | 'Personal Projects' | 'Academic Projects';
  period: string;
  role: string;
  company: string;
  active?: boolean;
  repoUrl?: string;
  bullets: string[];
}

export interface TechItem {
  name: string;
  tag: string;
}

export interface TechCategory {
  title: string;
  icon: string;
  items: TechItem[];
}

export interface FeaturedProject {
  tag: string;
  tagColor?: string;
  year: string;
  title: string;
  description: string;
  techs: string[];
  codeUrl?: string;
  demoUrl?: string;
}

export interface SecondaryProject {
  category: string;
  title: string;
  description: string;
  techs: string[];
  linkUrl: string;
}

export const profileData = {
  name: "Isaac Noriega",
  titleSuffix: "// Full-Stack Software Engineer",
  headlineMain: "Full-Stack Web & Mobile Developer |",
  headlineGradient: "Cloud Architect",
  badge: "Estudiante de Ingeniería de Software (Último año) • Disponible para tiempo completo, prácticas y proyectos freelance",
  summary:
    "Estudiante de Ingeniería en Desarrollo de Software listo para integrarse a oportunidades de tiempo completo. Me apasiona construir arquitecturas robustas en la nube y crear interfaces altamente interactivas, especializándome en ecosistemas modernos (TypeScript, Next.js, NestJS) y soluciones SaaS escalables.",
  email: "isaac_norvi@hotmail.com",
  phone: "+52 669 326 8769",
  whatsappUrl: "https://wa.me/526693268769",
  githubUrl: "https://github.com/IsaacNoriega",
  linkedinUrl: "https://www.linkedin.com/in/isaac-noriega-6b54222b9",
  cvUrl: "/CV_Isaac_Noriega.pdf",
  metrics: [
    { value: "9.14/10", label: "Excelencia Académica (ITESO)" },
    { value: "+8", label: "Proyectos Arquitectónicos & Full-Stack" },
    { value: "Full-Stack", label: "Cloud, Web & Mobile Apps" },
  ] as Metric[],
  codeCard: {
    fileName: "engineer-profile.ts",
    version: "v2026.1",
    testedNote: "Código limpio y probado",
    engineer: {
      name: "Isaac Abdiel Noriega Villalobos",
      title: "Software Engineer",
      focus: [
        "Full-Stack Web",
        "Cross-Platform Mobile",
        "Cloud Architecture (AWS/Azure)",
      ],
      stack: {
        frontend: ["Next.js", "React", "Angular", "React Native", "Tailwind"],
        backend: ["NestJS", "Spring Boot", "Express", "Node.js"],
        data: ["PostgreSQL", "MongoDB", "Drizzle ORM", "PostGIS"],
        cloud: ["AWS (S3, Lambda)", "Azure", "Docker", "Render"],
      },
      principles: "Scalability, Maintainability & Seamless UX",
    },
  },
};

export const aboutData = {
  sectionBadge: "Perfil Profesional",
  title: "Sobre mí y principios de ingeniería",
  description:
    "Soy un desarrollador de software enfocado en resolver problemas complejos a través de código limpio y sistemas eficientes. Me especializo en el desarrollo de arquitecturas multi-tenant, integración de IA y despliegues en la nube, buscando siempre un impacto directo en la experiencia de usuario y en la logística del negocio.",
  highlights: [
    {
      icon: "architecture",
      title: "Arquitectura Desacoplada y Escalable",
      description:
        "Diseño de sistemas multi-tenant (SaaS) y monolitos modulares utilizando Arquitectura Hexagonal y Monorepos (pnpm workspaces).",
    },
    {
      icon: "devices",
      title: "Experiencia Multiplataforma Integrada",
      description:
        "Desarrollo de interfaces web responsivas y aplicaciones móviles nativas utilizando React, Angular, React Native, Expo y Flutter.",
    },
    {
      icon: "cloud_sync",
      title: "Optimización Cloud & Persistencia",
      description:
        "Gestión eficiente de bases de datos (PostgreSQL/PostGIS, MongoDB) e implementación de infraestructuras en AWS (S3, Lambda, API Gateway) y Azure.",
    },
    {
      icon: "school",
      title: "Formación Sólida (ITESO)",
      description:
        "Ingeniería en Desarrollo de Software en ITESO (Graduación estimada: Dic 2026).",
    },
  ] as HighlightItem[],
};

export const experienceData = {
  sectionBadge: "Evolución",
  title: "Trayectoria Profesional",
  items: [
    // 1. Más actual (2026)
    {
      category: "Freelance Experience",
      period: "2026",
      role: "School Sync Suite",
      company: "Multi-tenant Platform (Freelance)",
      active: true,
      repoUrl: "https://github.com/IsaacNoriega/school-sync-suite",
      bullets: [
        "Engineered pnpm monorepo with Next.js and NestJS, implementing granular RBAC, JWT auth, and API rate limiting.",
        "Automated real-time attendance via QR code integration (HTML5-QRCode) and WebSockets (Socket.IO) deployed on Render.",
      ],
    },

    // 2. NextDate (2026)
    {
      category: "Personal Projects",
      period: "2026",
      role: "NextDate",
      company: "AI-Powered Scheduling",
      active: true,
      repoUrl: "https://github.com/IsaacNoriega/nextdate-backend",
      bullets: [
        "Built cross-platform React Native app with modular Java Spring Boot backend under Hexagonal Architecture.",
        "Integrated Gemini AI API for personalized itinerary synthesis and PostGIS for geographic proximity calculations.",
      ],
    },

    // 3. P-P-Custom (2026)
    {
      category: "Freelance Experience",
      period: "2026",
      role: "P-P-Custom",
      company: "E-commerce Platform (Freelance)",
      active: false,
      repoUrl: "https://github.com/matehdz150/P-P-Custom",
      bullets: [
        "Built end-to-end e-commerce system with Next.js 16 (React 19), NestJS, Drizzle ORM, and PostgreSQL.",
        "Architected Fabric.js graphic editor persistence on AWS S3 with AWS SES transactional emails and 50MB canvas export optimization.",
      ],
    },

    // 4. Skoolia (2026)
    {
      category: "Professional Practice",
      period: "2026",
      role: "Skoolia",
      company: "Educational Marketplace (Práctica Profesional)",
      active: false,
      repoUrl: "https://github.com/IsaacNoriega/Skoolia",
      bullets: [
        "Architected full-stack platform (Next.js, NestJS, PostgreSQL) for course delivery, user enrolment, and automated lead tracking.",
      ],
    },

    // 5. ReUseITESO (2025 — 2026)
    {
      category: "Academic Projects",
      period: "2025 — 2026",
      role: "ReUseITESO",
      company: "Marketplace Institucional (ITESO)",
      active: false,
      repoUrl: "https://github.com/ReUseITESO/ReUse",
      bullets: [
        "Led agile team developing a gamified digital marketplace for sustainable item exchange within ITESO.",
      ],
    },

    // 6. Macacos Condos (2025)
    {
      category: "Academic Projects",
      period: "2025",
      role: "Macacos Condos",
      company: "SaaS Multi-tenant Condominium Admin",
      active: false,
      repoUrl: "https://github.com/IsaacNoriega/macacos-condos-admin",
      bullets: [
        "Developed multi-tenant SaaS application with isolated databases for financial and property condominium administration.",
      ],
    },
  ] as ExperienceItem[],
};

export const techStackData = {
  sectionBadge: "Herramientas & Tecnologías",
  title: "Stack Técnico",
  description:
    "Tecnologías modernas y estables probadas en producción a gran escala.",
  categories: [
    {
      title: "Frontend & Mobile",
      icon: "web",
      items: [
        { name: "Next.js / React", tag: "Web App" },
        { name: "Angular", tag: "Frontend" },
        { name: "React Native & Expo", tag: "Cross-Platform" },
        { name: "Flutter & Dart", tag: "Mobile" },
        { name: "TypeScript & Tailwind", tag: "UI / Types" },
      ],
    },
    {
      title: "Backend & APIs",
      icon: "dns",
      items: [
        { name: "NestJS / Express", tag: "Node.js" },
        { name: "Java & Spring Boot", tag: "Hexagonal" },
        { name: "GraphQL & REST", tag: "APIs" },
        { name: "WebSockets (Socket.IO)", tag: "Real-time" },
      ],
    },
    {
      title: "Bases de Datos & Caché",
      icon: "database",
      items: [
        { name: "PostgreSQL & PostGIS", tag: "Geo / SQL" },
        { name: "MongoDB & Mongoose", tag: "NoSQL" },
        { name: "Drizzle ORM", tag: "Type-safe" },
        { name: "Redis", tag: "Cache" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "cloud_queue",
      items: [
        { name: "AWS (S3, Lambda, API GW)", tag: "Serverless" },
        { name: "Microsoft Azure", tag: "Cloud" },
        { name: "AWS EC2, DynamoDB, SES", tag: "Infra" },
        { name: "Docker & Containers", tag: "DevOps" },
        { name: "CI/CD & Render", tag: "Deploy" },
      ],
    },
  ] as TechCategory[],
};

export const projectsData = {
  sectionBadge: "Casos Reales",
  title: "Proyectos Destacados",
  description:
    "Sistemas concebidos con énfasis en arquitectura limpia, rendimiento y experiencia de usuario.",
  featured: [
    {
      tag: "Web & Mobile App",
      year: "2026",
      title: "NextDate — AI-Powered Scheduling Platform",
      description:
        "Plataforma de citas con agente conversacional de IA (Gemini API) para generar itinerarios estructurados. Backend modular en Spring Boot con Arquitectura Hexagonal y mapas interactivos.",
      techs: [
        "React Native",
        "TypeScript",
        "Java 17",
        "Spring Boot",
        "PostgreSQL",
        "PostGIS",
        "Docker",
        "GraphQL",
      ],
      codeUrl: "https://github.com/IsaacNoriega/nextdate-backend",
    },
    {
      tag: "Plataforma SaaS Educativa",
      tagColor: "indigo",
      year: "2026",
      title: "School Sync Suite",
      description:
        "Ecosistema multi-tenant (monorepo) con pase de lista automatizado mediante escaneo de QR y sincronización bidireccional en tiempo real para escuelas.",
      techs: [
        "Next.js 14",
        "NestJS",
        "TypeScript",
        "MongoDB",
        "Socket.IO",
        "pnpm Workspaces",
      ],
      codeUrl: "https://github.com/IsaacNoriega/school-sync-suite",
    },
  ] as FeaturedProject[],
  secondary: [
    {
      category: "E-commerce / Gráfico",
      title: "E-commerce Product Customization",
      description:
        "Editor gráfico con Fabric.js, guardado de estados JSON pesados en AWS S3 y tracking de órdenes en tiempo real.",
      techs: ["Next.js", "NestJS", "Drizzle ORM", "AWS S3"],
      linkUrl: "https://github.com/matehdz150/P-P-Custom",
    },
    {
      category: "SaaS Multi-Tenant",
      title: "Macacos Condos Admin",
      description:
        "Sistema SaaS con aislamiento de base de datos multi-tenant para la gestión integral y financiera de condominios.",
      techs: ["NestJS", "PostgreSQL", "Multi-tenant"],
      linkUrl: "https://github.com/IsaacNoriega/macacos-condos-admin",
    },
    {
      category: "EdTech / Search",
      title: "Skoolia",
      description:
        "Marketplace y motor de búsqueda inteligente de instituciones educativas en México con geocodificación.",
      techs: ["Next.js", "PostgreSQL", "Docker"],
      linkUrl: "https://github.com/IsaacNoriega/Skoolia",
    },
  ] as SecondaryProject[],
};

export const navLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Trayectoria", href: "#experiencia" },
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];
