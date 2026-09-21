import {
    ArrowRight,
    BrainCircuit,
    Code2,
    Layers3,
    Rocket,
    Users,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

import { buttonVariants } from "@/components/ui/button";

const focusAreas = [
    {
        icon: Code2,
        title: "Frontend Engineering",
        description:
            "Building modern, modular, and maintainable web interfaces with React, Next.js, Vue.js, and TypeScript.",
    },
    {
        icon: Layers3,
        title: "Full-Stack Development",
        description:
            "Working across APIs, backend services, databases, and frontend applications to build complete products.",
    },
    {
        icon: BrainCircuit,
        title: "AI Engineering",
        description:
            "Exploring LLM applications, RAG, embeddings, vector search, and practical AI integration.",
    },
    {
        icon: Rocket,
        title: "Production & Deployment",
        description:
            "Working with Linux, Docker, Nginx, CI/CD, and production-oriented application environments.",
    },
];

export default function About() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                        About me
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Building software beyond the interface.
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
                        I&apos;m a Senior Frontend and Full-Stack Developer with
                        extensive experience building web applications and working
                        across the full software development lifecycle.
                    </p>
                </motion.div>

                <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9"
                    >
                        <h2 className="text-xl font-semibold text-white">
                            How I work
                        </h2>

                        <div className="mt-6 space-y-5 text-sm leading-7 text-zinc-500">
                            <p>
                                I enjoy taking a product from requirements and technical
                                design through frontend and backend development, database
                                integration, testing, deployment, and production support.
                            </p>

                            <p>
                                My main background is in JavaScript and TypeScript, with
                                experience across modern frontend frameworks, backend
                                technologies, databases, infrastructure, and AI-powered
                                applications.
                            </p>

                            <p>
                                I also value collaboration, technical discussions,
                                knowledge sharing, continuous learning, and creating an
                                environment where team members can grow together.
                            </p>
                        </div>

                        <Link
                            to="/experience"
                            className={buttonVariants({
                                className:
                                    "mt-8 rounded-xl bg-white text-black hover:bg-zinc-200",
                            })}
                        >
                            View my experience
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-3xl border border-white/10 bg-zinc-950/60 p-7 sm:p-9"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                            <Users className="h-6 w-6" />
                        </div>

                        <h2 className="mt-5 text-xl font-semibold text-white">
                            Team & Knowledge Sharing
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-zinc-500">
                            Alongside software development, I have participated in
                            technical meetings, planning sessions, knowledge-sharing
                            activities, and English learning sessions within team
                            environments.
                        </p>
                    </motion.section>
                </div>

                <section className="mt-8 grid gap-5 sm:grid-cols-2">
                    {focusAreas.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-blue-400">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <h3 className="mt-5 text-base font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-zinc-500">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </section>
            </div>
        </div>
    );
}