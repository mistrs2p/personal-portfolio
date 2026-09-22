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
    category: "Enterprise Project & Process Management",
    tagline: "Client application for complex industrial project workflows",

    description:
      "A large-scale enterprise platform used by industrial organizations to plan, execute, monitor, and control complex projects and operational processes.",

    role: "Frontend Developer responsible for the development, evolution, maintenance, and production deployment of the Neco Client application.",

    scope:
      "The Client application supports project execution and operational workflows, including program design, task and issue management, dynamic forms, workflow-driven reviews, meetings, letters, Kanban operations, advanced data exploration, and AI-assisted interactions.",

    problem:
      "The Client application needed to present and manage complex business processes involving hierarchical planning, weighted programs, dynamic forms, multi-step workflows, approvals, task execution, and large amounts of operational data.",

    solution:
      "A structured React-based frontend with reusable components, metadata-driven forms, repository-based API communication, server-side data grids, workflow-aware UI state management, advanced search and filtering, and integrated AI interactions.",

    caseStudy: {
      context:
        "Neco is used to follow industrial projects from initial planning and program definition through execution, approvals, operational activities, and completion.",

      workflow: [
        "Define projects and programs",
        "Design hierarchical program structures and assign weights",
        "Move plans into the execution phase",
        "Create issues, tasks, meetings, letters, and forms",
        "Assign workflow and responsible participants",
        "Fill and validate dynamic forms",
        "Review, approve, reject, or request correction",
        "Forward, reassign, or create follow-ups",
        "Track execution through tables, Kanban views, calendars, and other operational interfaces",
      ],

      highlights: [
        "Client application frontend development and production delivery",
        "Vue.js to React migration with Vite",
        "Metadata-driven enterprise Form Generator",
        "Repository-based API communication layer",
        "AG Grid with server-side operations",
        "Advanced Search & Filter experience",
        "Program Designer",
        "Workflow-aware task and form interfaces",
        "Business-aware Kanban",
        "AI-assisted form actions",
      ],
    },

    technologies: [
      "React",
      "Vue.js",
      "TypeScript",
      "Vite",
      "Mantine",
      "AG Grid",
      "REST API",
      "AI Integration",
      "Localization",
    ],

    features: [
      "Program Designer",
      "Task & Follow-up Management",
      "Issue Management",
      "Workflow-driven Forms",
      "Custom Form Generator",
      "Dynamic Forms",
      "Form Actions",
      "Calendar",
      "Letters",
      "Meetings",
      "Kanban",
      "Advanced Search & Filtering",
      "AI-assisted Actions",
      "Localization",
    ],

    architecture: [
      "React + Vite Client Application",
      "Repository Pattern",
      "Service Layer",
      "Metadata-driven Form Architecture",
      "Reusable Component Architecture",
      "Server-side Data Operations",
      "Workflow-aware UI State",
    ],

    engineeringDecisions: [
      "Proposed and drove the migration from Vue.js to React",
      "Adopted Vite as the frontend build and development toolchain",
      "Designed a reusable metadata-driven Form Generator",
      "Implemented a repository-based API communication layer",
      "Implemented server-side AG Grid operations",
      "Built reusable abstractions for repeated frontend controls",
      "Implemented workflow-aware rendering based on backend task metadata",
      "Integrated AI interactions into form actions",
    ],

    challenges: [
      "Representing complex business workflows in the client application",
      "Keeping dynamic forms reusable while supporting different field states and validations",
      "Handling large and data-intensive enterprise tables",
      "Maintaining consistency across many business modules",
      "Managing UI state based on backend-driven workflow metadata",
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

interface ProjectCaseStudy {
  context?: string;
  workflow?: string[];
  highlights?: string[];
}

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

  caseStudy?: ProjectCaseStudy;

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
