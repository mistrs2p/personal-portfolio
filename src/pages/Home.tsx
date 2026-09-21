import {
    ArrowDown,
    ArrowRight,
    BrainCircuit,
    Database,
    Layers3,
    Server,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
const featuredProjects = projects.filter(
    (project) => project.featured,
);
const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "AI / LLM",
];

const capabilities = [
    {
        icon: Layers3,
        title: "Frontend Engineering",
        description:
            "Modern, modular and maintainable interfaces with React, Next.js and TypeScript.",
    },
    {
        icon: Server,
        title: "Backend Development",
        description:
            "API-driven services using Node.js, NestJS, Express.js and FastAPI.",
    },
    {
        icon: Database,
        title: "Data & Architecture",
        description:
            "Working with SQL and NoSQL databases and designing maintainable application architectures.",
    },
    {
        icon: BrainCircuit,
        title: "AI Engineering",
        description:
            "Exploring LLM applications, RAG, embeddings, vector search and AI integration.",
    },
];

export default function Home() {
    return (
        <div className="relative overflow-hidden">
            {/* Background grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

            <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
                <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
                    {/* Hero Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >Hero Content</motion.div>
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                            Building & learning continuously
                        </div>

                        <div className="max-w-4xl">
                            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                                Senior Frontend / Full-Stack Developer
                            </p>

                            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                                I build products
                                <span className="block bg-linear-to-r from-white via-blue-200 to-violet-400 bg-clip-text text-transparent">
                                    from idea to production.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                                I work across frontend, backend, databases, infrastructure,
                                deployment, and AI-powered applications — turning complex
                                requirements into practical software.
                            </p>
                        </div>

                        <div className="mt-9 flex flex-wrap gap-3">
                            <Link
                                to="/projects"
                                className={buttonVariants({
                                    size: "lg",
                                    className:
                                        "rounded-xl bg-white text-black hover:bg-zinc-200",
                                })}
                            >
                                Explore Projects
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                            <Link
                                to="/resume"
                                className={buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                    className:
                                        "rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10",
                                })}
                            >
                                View Resume
                            </Link>

                            <Link
                                to="https://github.com/mistrs2p"
                                target="_blank"
                                rel="noreferrer"
                                className={buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                    className:
                                        "rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10",
                                })}
                            >
                                View Resume
                            </Link>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="outline"
                                    className="rounded-full border-white/10 bg-white/3 px-3 py-1.5 text-zinc-400"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative mx-auto w-full max-w-md">
                        <div className="absolute -inset-8 rounded-[40px] bg-linear-to-br from-blue-500/15 via-violet-500/10 to-transparent blur-3xl" />

                        <div className="relative rounded-[30px] border border-white/10 bg-zinc-900/70 p-4 shadow-2xl backdrop-blur-xl">
                            <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                                        Engineering Stack
                                    </span>

                                    <Sparkles className="h-4 w-4 text-violet-400" />
                                </div>

                                <div className="space-y-3">
                                    {capabilities.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <div
                                                key={item.title}
                                                className="group flex gap-4 rounded-2xl border border-white/5 bg-white/3 p-4 transition hover:border-white/10 hover:bg-white/5"
                                            >
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-blue-400">
                                                    <Icon className="h-5 w-5" />
                                                </div>

                                                <div>
                                                    <h3 className="text-sm font-semibold text-white">
                                                        {item.title}
                                                    </h3>
                                                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex justify-center text-zinc-600">
                    <ArrowDown className="h-5 w-5 animate-bounce" />
                </div>
            </section>

            {/* Featured Projects */}
            <section className="relative border-y border-white/5 bg-white/2">
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                                Selected work
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                Projects worth exploring
                            </h2>

                            <p className="mt-4 max-w-2xl text-zinc-500">
                                A selection of projects that demonstrate frontend engineering,
                                backend development, architecture, and AI integration.
                            </p>
                        </div>

                        <Link
                            to="/project"
                            className={buttonVariants({
                                variant: "outline",
                                size: "lg",
                                className:
                                    "rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10",
                            })}
                        >
                            View All Projects
                        </Link>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        {featuredProjects.slice(0, 3).map((project) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* About / Positioning */}
            <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
                            How I work
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                            Engineering beyond the UI.
                        </h2>
                    </div>

                    <div className="max-w-3xl">
                        <p className="text-lg leading-8 text-zinc-400">
                            My work goes beyond implementing interfaces. I enjoy
                            understanding the problem, designing the architecture,
                            connecting the layers, and taking software all the way to
                            production.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {[
                                "Maintainability",
                                "Scalability",
                                "Reusable Architecture",
                                "Performance",
                                "Production Readiness",
                                "Continuous Learning",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-white/5 bg-white/2 px-5 py-4 text-sm text-zinc-300"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Focus */}
            <section className="border-t border-white/5 bg-linear-to-b from-blue-500/3 to-transparent">
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                    <div className="rounded-4xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl sm:p-10 lg:p-12">
                        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                                    Currently exploring
                                </p>

                                <h2 className="mt-3 text-3xl font-semibold text-white">
                                    AI Engineering & intelligent applications
                                </h2>

                                <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                                    Exploring LLM applications, RAG, embeddings, vector search,
                                    and practical AI integration into real software products.
                                </p>
                            </div>

                            <Link
                                to="/projects/rag"
                                className={buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                    className:
                                        "rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10",
                                })}
                            >
                                Explore AI work
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}