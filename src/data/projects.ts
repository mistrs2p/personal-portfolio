export type ProjectStatus =
  | "active"
  | "completed"
  | "production-ready"
  | "coming-soon"
  | "demo";

export interface ProjectCaseStudy {
  context?: string;
  workflow?: string[];
  highlights?: string[];

  formArchitecture?: {
    summary?: string;

    layers: {
      title: string;
      description: string;
    }[];

    capabilities: string[];
  };
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

  screenshots: {
    src: string;
    title: string;
    description?: string;
  }[];

  gifs: string[];

  github?: string;

  repositories?: {
    label: string;
    url: string;
  }[];

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

      formArchitecture: {
        summary:
          "A metadata-driven form infrastructure used across the Client application to render dynamic enterprise forms and keep field definition, entity state, validation, and UI behavior consistent across the form lifecycle.",

        layers: [
          {
            title: "Form Definition",
            description:
              "Defines the structure and metadata of the form and its fields.",
          },
          {
            title: "EntityField",
            description:
              "Represents field-level metadata used by the client to determine rendering and behavior.",
          },
          {
            title: "EntityValue",
            description:
              "Connects field definitions to the actual value associated with the current entity or form instance.",
          },
          {
            title: "Dynamic Rendering",
            description:
              "The frontend selects the appropriate control and configuration based on field metadata and the current entity context.",
          },
          {
            title: "Validation & State",
            description:
              "Field rules such as required, read-only, and other validation or state constraints are enforced consistently in the UI.",
          },
          {
            title: "Submit & API Integration",
            description:
              "Form state is validated and submitted through the repository and service layers to the backend APIs.",
          },
        ],

        capabilities: [
          "Metadata-driven field rendering",
          "Required field enforcement",
          "Read-only state enforcement",
          "Context-aware validation",
          "Dynamic control selection",
          "Entity-based field/value handling",
          "Reusable form infrastructure",
          "Repository-based API integration",
        ],
      },
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

    screenshots: [
      {
        src: "/projects/neco/dashboard.png",
        title: "Enterprise Dashboard",
        description:
          "Operational dashboard for monitoring tasks, projects, alerts, meetings, issues, and follow-ups.",
      },
      // {
      //   src: "/projects/neco/program-designer.png",
      //   title: "Program Designer",
      //   description:
      //     "Hierarchical program design with structured flows, weighting, and editable program items.",
      // },
      {
        src: "/projects/neco/advanced-search.png",
        title: "Advanced Search & Filtering",
        description:
          "Rule-based search and filtering interface for complex enterprise datasets.",
      },
      {
        src: "/projects/neco/data-grid.png",
        title: "Enterprise Data Grid",
        description:
          "Data-intensive AG Grid interface with server-side operations, dynamic columns, selection, and export.",
      },
      {
        src: "/projects/neco/kanban.png",
        title: "Task Kanban",
        description:
          "Business-aware Kanban interface integrated with task operations and workflow actions.",
      },
      {
        src: "/projects/neco/workflow-action.png",
        title: "Workflow Action",
        description:
          "Task action interface for progress, workflow operations, and form submission.",
      },
      {
        src: "/projects/neco/dynamic-form.png",
        title: "Dynamic Form",
        description:
          "Metadata-driven enterprise form with dynamic controls, actions, and field-level behavior.",
      },
    ],
    gifs: [],

    github: undefined,
    liveDemo: undefined,

    status: "active",
    featured: true,
  },
  {
    slug: "pomodoro",

    title: "Pomodoro Focus Workspace",

    category: "Full-Stack Product",

    tagline:
      "A full-stack productivity workspace built around focused work sessions",

    description:
      "A full-stack productivity application designed around focused work sessions, task-based Pomodoro timing, configurable focus profiles, productivity statistics, and secure account management.",

    role: "Full-Stack Developer responsible for designing and implementing the application end-to-end across the Next.js frontend and NestJS backend.",

    scope:
      "A user-facing productivity workspace combining focused work sessions, task management, configurable focus profiles, progress analytics, authentication, social login, and two-factor security.",

    problem:
      "The project was created to explore a practical productivity workflow centered around focused work sessions while also providing a realistic full-stack environment for implementing authentication, security, persistence, state management, and production-oriented application structure.",

    solution:
      "A separate Next.js frontend and NestJS REST API backed by PostgreSQL, combining a persistent client-side timer, user-scoped tasks and sessions, configurable focus profiles, statistics, secure cookie-based authentication, social login, and TOTP-based two-factor authentication.",

    caseStudy: {
      context:
        "The first product capability is a Pomodoro-based focus timer, with the broader direction of evolving the application into a practical workspace for focused work and productivity tracking.",

      workflow: [
        "Create an account or sign in with email/password, Google, or GitHub",
        "Configure or select a focus profile",
        "Create and select a task for the focus session",
        "Start a persistent Pomodoro focus session",
        "Pause, resume, reset, or recover the session after a page refresh",
        "Persist completed focus sessions against the authenticated user and task",
        "Track daily and weekly focus statistics and streaks",
        "Review profile-based productivity insights",
      ],

      highlights: [
        "End-to-end full-stack implementation",
        "Next.js frontend with React and TypeScript",
        "NestJS REST API",
        "PostgreSQL persistence with TypeORM",
        "Email/password authentication",
        "Google and GitHub OAuth",
        "JWT sessions stored in httpOnly cookies",
        "TOTP-based two-factor authentication",
        "Persistent refresh-safe Pomodoro timer",
        "Idempotent focus-session persistence",
        "Configurable focus profiles",
        "Daily and weekly productivity analytics",
        "Automated backend testing",
      ],
    },

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Zustand",
      "JWT",
      "OAuth",
      "TOTP / 2FA",
      "Jest",
      "Supertest",
      "Docker",
    ],

    features: [
      "Pomodoro Focus Timer",
      "Task Management",
      "Focus Profiles",
      "Classic / Quick Focus / Deep Work Presets",
      "Custom Focus Profiles",
      "Daily Statistics",
      "Weekly Statistics",
      "Focus Streaks",
      "Best Focus Hour",
      "Profile-based Analytics",
      "Email / Password Authentication",
      "Google OAuth",
      "GitHub OAuth",
      "Two-Factor Authentication",
      "Authenticator App Support",
      "Persistent Session Recovery",
      "Bilingual English / Persian UI",
      "RTL / LTR Support",
      "Light / Dark Theme",
    ],

    architecture: [
      "Dedicated Next.js Frontend",
      "Dedicated NestJS Backend",
      "REST API Architecture",
      "PostgreSQL + TypeORM",
      "Modular NestJS Feature Structure",
      "Cookie-based JWT Authentication",
      "Google / GitHub OAuth Strategies",
      "TOTP Two-Factor Authentication",
      "Persistent Client-side Timer State Machine",
      "Versioned Database Migrations",
      "Dockerized PostgreSQL Development Environment",
    ],

    engineeringDecisions: [
      "Separated frontend and backend into dedicated repositories",
      "Used secure httpOnly cookies for authenticated access tokens",
      "Kept JWT handling outside frontend application state",
      "Implemented a short-lived 2FA challenge before issuing the final authenticated session",
      "Persisted an absolute timer end timestamp to make the focus session resilient to page refreshes",
      "Used stable client-generated session identifiers to make session completion idempotent",
      "Captured immutable focus-profile snapshots when sessions are persisted",
      "Scoped tasks, sessions, and profiles to the authenticated user",
      "Disabled TypeORM schema synchronization and used versioned database migrations",
      "Added automated backend verification with Jest and Supertest",
    ],

    challenges: [
      "Keeping the timer accurate and recoverable across page refreshes and interrupted browser sessions",
      "Designing a secure authentication flow supporting password, OAuth, and two-factor authentication",
      "Preventing duplicate persistence when focus-session completion requests are retried",
      "Maintaining user-level ownership boundaries for tasks, profiles, and sessions",
      "Supporting configurable focus rhythms without allowing profile changes during active sessions",
    ],

    screenshots: [
      {
        src: "/projects/pomodoro/landing.png",
        title: "Product Landing Page",
        description:
          "Calm, focused landing experience introducing the Pomodoro workspace and its core focus workflow.",
      },
      {
        src: "/projects/pomodoro/dashboard.png",
        title: "Focus Workspace",
        description:
          "Authenticated workspace combining the persistent focus timer, task selection, weekly progress, and productivity statistics.",
      },
      {
        src: "/projects/pomodoro/two-factor-auth.png",
        title: "Two-Factor Authentication",
        description:
          "Authenticator-based 2FA enrollment with QR provisioning, backup secret, verification code, and account security controls.",
      },
      {
        src: "/projects/pomodoro/login-register.png",
        title: "Login and Registration",
        description:
          "Secure login and registration flow with email verification and password reset functionality.",
      },
    ],

    gifs: [],

    repositories: [
      {
        label: "Frontend",
        url: "https://github.com/mistrs2p/pomodoro-next-app",
      },
      {
        label: "Backend",
        url: "https://github.com/mistrs2p/pomodoro-nest",
      },
    ],

    liveDemo: undefined,

    status: "demo",
    featured: true,
  },

  {
    slug: "ketabdaneh",
    title: "Ketabdaneh",
    category: "Full-Stack / Systems",
    tagline: "Branch operations management system",

    description:
      "An actively developed branch operations management system designed to organize people, events, assignments, scheduling, and operational visibility for branch managers.",

    role:
      "Full-Stack Developer responsible for designing and implementing the application across the Next.js frontend, FastAPI backend, database, background services, deployment stack, and engineering infrastructure.",

    scope:
      "A branch operations workspace centered around people, events, event assignments, calendar scheduling, authentication, role-based access control, and manager visibility, with additional operational modules still under development.",

    problem:
      "Branch managers need visibility into events, responsibilities, assignments, and operational status without continuously following up with people manually. The system is being built to make branch operations more organized and predictable, especially when the manager is not physically present.",

    solution:
      "A modular full-stack application that centralizes people, events, assignments, and scheduling behind a Next.js frontend and FastAPI API, with PostgreSQL persistence and production-oriented infrastructure for authentication, authorization, background jobs, notifications, observability, backups, and deployment verification.",

    caseStudy: {
      context:
        "Ketabdaneh is a branch operations management system for a single branch. The current MVP is centered on creating events, assigning people to event responsibilities, displaying scheduled events in a calendar, and giving the manager a consolidated operational view.",

      workflow: [
        "Create an event",
        "Schedule the event",
        "Assign one or more people to event responsibilities",
        "Keep assignments in a pending approval state",
        "Display planned events in the weekly calendar",
        "Give the manager a consolidated dashboard view of people, events, and assignments",
      ],

      highlights: [
        "End-to-end full-stack implementation",
        "Next.js + TypeScript frontend",
        "FastAPI + Python backend",
        "Modular Monolith architecture",
        "PostgreSQL persistence with SQLAlchemy",
        "Alembic database migrations",
        "JWT authentication with server-side RBAC",
        "Typed frontend API integration layer",
        "Event and assignment workflows",
        "Weekly calendar scheduling",
        "Redis-backed background notification delivery",
        "Telegram and Bale notification providers",
        "Health checks and Prometheus-compatible metrics",
        "Docker + Caddy deployment architecture",
        "Backup and restore tooling",
        "CI/CD and security automation",
        "Bilingual English / Persian UI with RTL/LTR support",
      ],
    },

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Redis",
      "ARQ",
      "Docker",
      "Docker Compose",
      "Caddy",
      "JWT",
      "RBAC",
      "Prometheus",
      "GitHub Actions",
    ],

    features: [
      "Authentication",
      "Role-Based Access Control",
      "People Management",
      "People Roles",
      "Event Management",
      "Event Assignments",
      "Assignment Approval State",
      "Weekly Calendar",
      "Manager Dashboard",
      "Notification Infrastructure",
      "Telegram Provider",
      "Bale Provider",
      "Background Job Worker",
      "Health Checks",
      "Metrics",
      "Backup & Restore",
      "Bilingual English / Persian UI",
      "RTL / LTR Support",
      "Light / Dark Theme",
    ],

    architecture: [
      "Next.js + TypeScript Frontend",
      "FastAPI + Python Backend",
      "Modular Monolith",
      "REST / HTTP JSON Boundary",
      "PostgreSQL + SQLAlchemy",
      "Alembic Versioned Migrations",
      "Redis + ARQ Background Worker",
      "Provider-agnostic Notification Layer",
      "Caddy Reverse Proxy",
      "Dockerized Deployment Stack",
      "Internal-only Database, Redis, API, and Metrics Surfaces",
    ],

    engineeringDecisions: [
      "Chose a Modular Monolith instead of microservices to keep cross-domain transactions and operational complexity appropriate for a single-branch system",
      "Kept business rules, authorization, and state transitions in the backend as the source of truth",
      "Separated the frontend from the backend through a single typed HTTP/JSON API boundary",
      "Centralized frontend API communication in a shared fetch-based client and domain-specific API modules",
      "Used JWT Bearer authentication with server-side RBAC rather than trusting client-side role state",
      "Designed notification delivery behind a provider abstraction so Telegram and Bale remain replaceable integrations",
      "Moved notification delivery to a Redis-backed worker with bounded retries and exponential backoff",
      "Added readiness and liveness checks so infrastructure health is independent from application authentication",
      "Kept Prometheus metrics internal to the Docker network instead of exposing them publicly",
      "Designed the deployment stack so Caddy is the only public-facing service while application and data services remain internal",
      "Added explicit database backup and restore tooling with restore rehearsal against a throwaway database",
      "Added CI checks for backend, frontend, Docker, and security concerns",
      "Applied production fail-closed configuration rules for secrets, CORS, database, and Redis settings",
    ],

    challenges: [
      "Modeling an operational domain while several business rules are still being discovered",
      "Keeping authorization and business state transitions centralized in the backend",
      "Designing event assignments as a domain concept distinct from a person's permanent organizational role",
      "Building background notification infrastructure without coupling business requests to provider network calls",
      "Creating a deployment architecture that keeps public and internal surfaces clearly separated",
      "Supporting bilingual Persian / English UI and RTL / LTR behavior",
    ],

    screenshots: [
      {
        src: "/projects/ketabdaneh/dashboard.png",
        title: "Operations Dashboard",
        description:
          "Manager-oriented operational overview showing people, upcoming events, assignments, event status, and events requiring attention.",
      },
      {
        src: "/projects/ketabdaneh/calendar.png",
        title: "Weekly Calendar",
        description:
          "Weekly branch schedule showing planned events across days and time slots.",
      },
      {
        src: "/projects/ketabdaneh/event-detail.png",
        title: "Event Assignments",
        description:
          "Event detail view showing assigned people, event responsibilities, and pending assignment approval state.",
      },
      {
        src: "/projects/ketabdaneh/events.png",
        title: "Events",
        description:
          "Branch event list with event type, planned time, status, and access to event details.",
      },
      {
        src: "/projects/ketabdaneh/people.png",
        title: "People & Roles",
        description:
          "Branch member directory showing people, their organizational roles, and active/inactive status.",
      },
    ],

    gifs: [],

    github: "https://github.com/mistrs2p/ketabdan-ms",

    liveDemo: undefined,

    status: "active",
    featured: true,
  },
  {
    slug: "ai-chat",
    title: "AI Chat",
    category: "AI / LLM",
    tagline: "A streaming AI chat interface powered by OpenRouter",

    description:
      "A focused AI chat application built with Next.js, React, TypeScript, Zustand, and the Vercel AI SDK, using OpenRouter as the model gateway and Gemini 2.5 Flash for streamed responses.",

    role:
      "Full-Stack Developer responsible for designing and implementing the application UI, client-side conversation state, chat management flows, streaming response handling, and server-side LLM integration.",

    scope:
      "A lightweight conversational AI workspace with multiple persisted local conversations, multi-turn context, streamed model responses, Markdown rendering, message editing and regeneration, chat management, and a responsive sidebar.",

    problem:
      "A conversational AI interface needs to feel immediate while keeping model API credentials out of the browser, preserving conversation context, and giving users practical control over their conversations and generated responses.",

    solution:
      "A Next.js application with a persistent Zustand conversation store, a server-side API route using the Vercel AI SDK, OpenRouter as the model gateway, streamed text responses, Markdown rendering, and client-side controls for chat creation, rename, deletion, message editing, regeneration, and generation cancellation.",

    caseStudy: {
      context:
        "The project focuses on the core interaction loop of an AI assistant while also exploring the state-management and UX concerns that appear in a multi-conversation AI application: persistent history, multi-turn context, streaming, regeneration, editing, and generation control.",

      workflow: [
        "Create a new chat or continue an existing local conversation",
        "Enter a prompt in the chat input",
        "Send the prompt and conversation history to the Next.js API route",
        "Forward the request to OpenRouter using the configured model",
        "Stream the generated response back to the browser",
        "Update the assistant message incrementally as chunks arrive",
        "Stop generation when needed while preserving the partial response",
        "Render the assistant response as Markdown",
        "Rename or delete conversations from the sidebar",
        "Edit a previous user message and regenerate the conversation from that point",
        "Regenerate the latest assistant response when needed",
      ],

      highlights: [
        "Next.js App Router application",
        "React + TypeScript",
        "Vercel AI SDK streaming",
        "OpenRouter model gateway",
        "Gemini 2.5 Flash integration",
        "Zustand conversation state",
        "Persistent local chat history",
        "Multi-turn conversation context",
        "Multiple local chat sessions",
        "Edit message and regenerate flow",
        "Regenerate response",
        "Stop generation with AbortController",
        "Markdown assistant rendering",
        "Responsive collapsible chat sidebar",
        "Modal-based chat rename and deletion",
      ],
    },

    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Vercel AI SDK",
      "OpenRouter",
      "Gemini 2.5 Flash",
      "Zustand",
      "React Markdown",
      "Tailwind CSS",
      "shadcn/ui",
    ],

    features: [
      "AI Chat",
      "Streaming Responses",
      "Multi-turn Conversation Context",
      "Persistent Chat History",
      "Multiple Conversations",
      "Conversation Sidebar",
      "New Chat",
      "Rename Chat",
      "Delete Chat",
      "Edit User Message",
      "Save & Regenerate",
      "Regenerate Response",
      "Stop Generation",
      "Markdown Rendering",
      "Incremental Assistant Updates",
      "Responsive Sidebar",
      "Server-side API Route",
    ],

    architecture: [
      "Next.js App Router",
      "Client-side Zustand Store",
      "Persisted Local Conversation State",
      "Next.js Route Handler",
      "Vercel AI SDK",
      "OpenRouter API Gateway",
      "Gemini 2.5 Flash Model",
      "Streaming Text Response",
      "AbortController-based Generation Cancellation",
    ],

    engineeringDecisions: [
      "Kept the OpenRouter API key on the server by integrating the model through a Next.js route handler",
      "Used the Vercel AI SDK streamText API to expose model output as a text stream",
      "Sent prior conversation messages with each request so the model can maintain multi-turn context",
      "Updated the assistant message incrementally as response chunks arrived instead of waiting for the complete response",
      "Used an AbortController to stop an active generation without discarding the partial assistant response",
      "Separated conversation state from UI components with a persisted Zustand store",
      "Persisted chats and the active conversation in local storage for continuity across page refreshes",
      "Allowed user messages to be edited and regenerated while truncating the conversation after the edited point",
      "Used explicit TypeScript types for chats, messages, and message roles",
      "Used Markdown rendering for assistant responses to preserve formatted AI output",
      "Replaced browser prompt/confirm flows with application modals for chat rename and deletion",
      "Used a dedicated OpenRouter gateway so the application does not couple its UI directly to a model provider SDK endpoint",
    ],

    challenges: [
      "Delivering a responsive streaming interaction instead of waiting for a complete model response",
      "Keeping model credentials outside the browser",
      "Maintaining coherent multi-turn context across multiple local conversations",
      "Synchronizing streamed assistant content with the active persisted conversation",
      "Stopping generation while preserving the response already received",
      "Editing an earlier user message while keeping the resulting conversation history consistent",
      "Managing multiple chat sessions without making the interface cumbersome",
    ],

    screenshots: [
      {
        src: "/projects/ai-chat/main-chat.webp",
        title: "AI Chat & Markdown Response",
        description:
          "Main conversational interface showing streamed assistant output rendered as formatted Markdown with conversation controls.",
      },
      {
        src: "/projects/ai-chat/conversation-context.webp",
        title: "Multi-turn Conversation Context",
        description:
          "Conversation flow demonstrating that the assistant can use information from an earlier message when responding to a later prompt.",
      },
      {
        src: "/projects/ai-chat/chat-management.webp",
        title: "Chat Management",
        description:
          "Application-level rename and delete modals for managing persisted conversations without relying on browser prompts.",
      },
      {
        src: "/projects/ai-chat/streaming-stop.webp",
        title: "Streaming & Stop Generation",
        description:
          "Active response generation with a Stop control for cancelling the stream while keeping the received partial response.",
      },
    ],
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
