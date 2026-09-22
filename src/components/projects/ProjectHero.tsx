import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import ProjectLinks from "./ProjectLinks";

interface ProjectHeroProps {
    project: Project;
}

export default function ProjectHero({
    project,
}: ProjectHeroProps) {
    return (
        <>
            <Link
                to="/projects"
                className="inline-flex items-center text-sm text-zinc-500 transition hover:text-white"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10"
            >
                <Badge
                    variant="outline"
                    className="border-blue-400/20 bg-blue-400/5 text-blue-300"
                >
                    {project.category}
                </Badge>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                    {project.title}
                </h1>

                <p className="mt-4 text-xl text-blue-400">
                    {project.tagline}
                </p>

                <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">
                    {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <Badge
                            key={technology}
                            variant="outline"
                            className="border-white/10 bg-white/3 text-zinc-400"
                        >
                            {technology}
                        </Badge>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    <ProjectLinks project={project} />
                </div>
            </motion.div>
        </>
    );
}