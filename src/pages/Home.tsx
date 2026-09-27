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
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useTranslation } from "react-i18next";

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

const capabilityKeys = [
    { key: "frontend", icon: Layers3 },
    { key: "backend", icon: Server },
    { key: "data", icon: Database },
    { key: "ai", icon: BrainCircuit },
] as const;

const principleKeys = [
    "maintainability",
    "scalability",
    "reusableArchitecture",
    "performance",
    "productionReadiness",
    "continuousLearning",
] as const;

export default function Home() {
    const { t } = useTranslation();

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
                    {/* Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full overflow-hidden rounded-[30px] border border-border bg-card shadow-2xl"
                    >
                        <div className="absolute -inset-8 rounded-[40px] bg-linear-to-br from-blue-500/15 via-violet-500/10 to-transparent blur-3xl" />

                        <div className="relative aspect-video overflow-hidden">
                            <img
                                src="/projects/hero/arayina-hero.png"
                                alt="Arayina Software Engineer"
                                className="h-full w-full object-cover"
                                fetchPriority="high"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-background/10 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                            {t("home.status")}
                        </div>

                        <div className="max-w-4xl">
                            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                                {t("home.eyebrow")}
                            </p>

                            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
                                {t("home.heroTitle")}
                                <span className="block bg-linear-to-r from-foreground via-blue-400 to-violet-500 bg-clip-text text-transparent">
                                    {t("home.heroTitleAccent")}
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                                {t("home.heroDescription")}
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
                                {t("home.exploreProjects")}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                            <Link
                                to="/resume"
                                className={buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                    className:
                                        "rounded-xl border-border bg-muted text-foreground hover:bg-secondary",
                                })}
                            >
                                {t("home.viewResume")}
                            </Link>

                            <a
                                href="https://github.com/mistrs2p"
                                target="_blank"
                                rel="noreferrer"
                                className={buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                    className:
                                        "rounded-xl border-border bg-muted text-foreground hover:bg-secondary",
                                })}
                            >
                                <SiGithub className="mr-2 h-4 w-4" />
                                {t("home.github")}
                            </a>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="outline"
                                    className="rounded-full border-border bg-muted px-3 py-1.5 text-muted-foreground"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Engineering Stack */}
                    <div className="relative mx-auto w-full max-w-md">
                        <div className="absolute -inset-8 rounded-[40px] bg-linear-to-br from-blue-500/15 via-violet-500/10 to-transparent blur-3xl" />

                        <div className="relative rounded-[30px] border border-border bg-card p-4 shadow-2xl backdrop-blur-xl">
                            <div className="rounded-3xl border border-border bg-background p-5">
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                                        {t("home.engineeringStack")}
                                    </span>

                                    <Sparkles className="h-4 w-4 text-violet-400" />
                                </div>

                                <div className="space-y-3">
                                    {capabilityKeys.map(({ key, icon: Icon }) => (
                                        <div
                                            key={key}
                                            className="group flex gap-4 rounded-2xl border border-border/70 bg-muted p-4 transition hover:border-foreground/20 hover:bg-secondary"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-blue-500">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <h3 className="text-sm font-semibold text-foreground">
                                                    {t(`home.capabilities.${key}.title`)}
                                                </h3>
                                                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                                    {t(`home.capabilities.${key}.description`)}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex justify-center text-muted-foreground">
                    <ArrowDown className="h-5 w-5 animate-bounce" />
                </div>
            </section>

            {/* Featured Projects */}
            <section className="relative border-y border-border/70 bg-muted/40">
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                                {t("home.selectedWork")}
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                {t("home.projectsTitle")}
                            </h2>

                            <p className="mt-4 max-w-2xl text-zinc-500">
                                {t("home.projectsDescription")}
                            </p>
                        </div>

                        <Link
                            to="/projects"
                            className={buttonVariants({
                                variant: "outline",
                                size: "lg",
                                className:
                                    "rounded-xl border-border bg-muted text-foreground hover:bg-secondary",
                            })}
                        >
                            {t("home.viewAllProjects")}
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
                            {t("home.howIWork")}
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                            {t("home.engineeringBeyondUi")}
                        </h2>
                    </div>

                    <div className="max-w-3xl">
                        <p className="text-lg leading-8 text-muted-foreground">
                            {t("home.positioning")}
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {principleKeys.map((key) => (
                                <div
                                    key={key}
                                    className="rounded-2xl border border-border bg-card px-5 py-4 text-sm text-foreground"
                                >
                                    {t(`home.principles.${key}`)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Focus */}
            <section className="border-t border-border/70 bg-linear-to-b from-blue-500/5 to-transparent">
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                    <div className="rounded-4xl border border-border bg-card p-8 backdrop-blur-xl sm:p-10 lg:p-12">
                        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                                    {t("home.currentFocus")}
                                </p>

                                <h2 className="mt-3 text-3xl font-semibold text-foreground">
                                    {t("home.aiTitle")}
                                </h2>

                                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                                    {t("home.aiDescription")}
                                </p>
                            </div>

                            <Link
                                to="/projects/rag"
                                className={buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                    className:
                                        "rounded-xl border-border bg-muted text-foreground hover:bg-secondary",
                                })}
                            >
                                {t("home.exploreAiWork")}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
