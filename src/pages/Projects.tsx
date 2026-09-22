import { motion } from "motion/react";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    const featuredProjects = projects.filter(
        (project) => project.featured,
    );

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />

            <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                        Selected work
                    </p>

                    <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                        Projects & Case Studies
                    </h1>

                    <p className="mt-5 max-w-2xl text-muted-foreground">
                        A selection of projects covering frontend engineering,
                        backend development, architecture, infrastructure, and AI.
                    </p>
                </motion.div>

                <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}