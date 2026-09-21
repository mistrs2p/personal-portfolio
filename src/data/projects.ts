export type ProjectStatus =
  | "active"
  | "completed"
  | "production-ready"
  | "coming-soon";

export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;

  role?: string;
  scope?: string;
  problem?: string;
  solution?: string;

  technologies: string[];

  features: string[];
  architecture: string[];
  engineeringDecisions: string[];
  challenges: string[];

  screenshots: string[];
  gifs: string[];

  github?: string;
  liveDemo?: string;

  status: ProjectStatus;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "neco",
    title: "Neco Management Platform",
    category: "Enterprise Frontend",
    tagline: "Large-scale multi-module management platform",

    description:
      "A large-scale enterprise management platform covering tasks, follow-ups, programs, program design, forms, calendar, letters, meetings, and AI-powered capabilities.",

    role: "Frontend Developer responsible for the development and maintenance of the frontend and participation in the evolution of core product architecture.",

    scope:
      "A multi-module organizational platform designed to support a broad range of operational and management workflows.",

    problem:
      "The platform needed to support a growing number of business modules and complex workflows while keeping the frontend maintainable, reusable, and scalable.",

    solution:
      "A modular frontend architecture with reusable components, a repository-based API communication layer, configurable form generation, server-side data operations, and integrated AI capabilities.",

    technologies: [
      "React",
      "Vue.js",
      "TypeScript",
      "Mantine",
      "AG Grid",
      "REST API",
      "AI Integration",
      "Localization",
    ],

    features: [
      "Task & Follow-up Management",
      "Programs",
      "Program Designer",
      "Custom Form Generator",
      "Dynamic Forms",
      "Form Actions",
      "Calendar",
      "Letters",
      "Meetings",
      "AI Integration",
      "Localization",
    ],

    architecture: [
      "Repository Pattern",
      "Reusable Component Architecture",
      "Server-side Data Operations",
      "Modular Frontend Structure",
    ],

    engineeringDecisions: [
      "Frontend migration from Vue.js to React",
      "Repository-based API communication layer",
      "Reusable and configurable Form Generator",
      "Server-side Search, Filter, Sort and Pagination with AG Grid",
      "Development of reusable UI components",
      "Integration of AI capabilities into the product",
    ],

    challenges: [
      "Managing a large number of interconnected business modules",
      "Keeping reusable components flexible without making them overly complex",
      "Handling large datasets through server-side table operations",
      "Supporting configurable and dynamic forms",
      "Maintaining consistency while evolving the frontend architecture",
    ],

    screenshots: [],
    gifs: [],

    github: undefined,
    liveDemo: undefined,

    status: "active",
    featured: true,
  },

  {
    slug: "pomodoro",
    title: "Pomodoro App",
    category: "Full-Stack",
    tagline: "Productivity and time management application",
    description:
      "A full-stack productivity application with a dedicated Next.js frontend and NestJS backend.",

    technologies: [
      "Next.js",
      "NestJS",
      "Node.js",
      "TypeScript",
      "Authentication",
      "2FA",
      "Authenticator",
    ],

    features: [
      "Pomodoro Timer",
      "Authentication",
      "Two-Factor Authentication",
      "Authenticator Support",
    ],

    architecture: [
      "Dedicated Frontend",
      "Dedicated Backend",
      "API-based Architecture",
    ],

    engineeringDecisions: [],

    challenges: [],

    screenshots: [],
    gifs: [],

    github: "https://github.com/mistrs2p/pomodoro-nest",

    status: "active",
    featured: true,
  },

  {
    slug: "ketabdaneh",
    title: "Ketabdaneh",
    category: "Full-Stack / Systems",
    tagline: "Branch operations management system",
    description:
      "A branch operations management system designed to organize people, events, assignments, tasks, workflows, and operational visibility.",

    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Redis",
      "Docker",
      "Caddy",
    ],

    features: [
      "Authentication",
      "RBAC",
      "Events & Assignments",
      "Calendar",
      "Notifications",
      "Background Jobs",
      "Health Checks",
      "Observability",
      "Backup & Restore",
      "CI/CD",
      "Security Automation",
      "Bilingual FA/EN UI",
      "RTL/LTR",
    ],

    architecture: [
      "Modular Monolith",
      "Next.js + FastAPI + PostgreSQL",
      "Redis Background Worker",
      "Containerized Production Stack",
    ],

    engineeringDecisions: [
      "Server-side authorization",
      "Provider-agnostic notification layer",
      "Bounded retry strategy with exponential backoff",
      "Production-oriented container architecture",
    ],

    challenges: [],

    screenshots: [],
    gifs: [],

    github: "https://github.com/mistrs2p/ketabdan-ms",

    status: "production-ready",
    featured: true,
  },

  {
    slug: "ai-chat",
    title: "AI Chat",
    category: "AI / LLM",
    tagline: "Multi-provider AI chat application",
    description:
      "An AI chat application supporting multiple LLM providers with conversation memory, streaming responses, and Markdown rendering.",

    technologies: [
      "LLM APIs",
      "OpenRouter",
      "Hugging Face",
      "Gemini",
      "Streaming",
      "Markdown",
      "Memory",
    ],

    features: [
      "Multi-provider AI Integration",
      "Conversation Memory",
      "Streaming Responses",
      "Markdown Rendering",
    ],

    architecture: [
      "Provider-based AI Integration",
      "Streaming Response Pipeline",
    ],

    engineeringDecisions: [],

    challenges: [],

    screenshots: [],
    gifs: [],

    github: "https://github.com/mistrs2p/Free-AI-Chatbot",

    status: "completed",
    featured: true,
  },

  {
    slug: "rag",
    title: "RAG / AI Engineering",
    category: "AI Engineering",
    tagline: "Exploring retrieval-augmented generation systems",
    description:
      "An ongoing exploration of document ingestion, chunking, embeddings, vector search, and LLM-powered applications.",

    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Embeddings",
      "RAG",
    ],

    features: [],
    architecture: [],

    engineeringDecisions: [],
    challenges: [],

    screenshots: [],
    gifs: [],

    status: "coming-soon",
    featured: false,
  },
];
