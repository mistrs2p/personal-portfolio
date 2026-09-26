import { ArrowRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion } from "motion/react";
import { Link } from "react-router";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

import type { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({
    project,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="h-full"
        >
            <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border-border bg-card transition-colors hover:border-blue-400/50">
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
                    {project.thumbnail ? (
                        <img
                            src={project.thumbnail}
                            alt={project.title + " preview"}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-transparent">
                            <span className="text-5xl opacity-50">
                                {project.category.includes("AI") ? "🤖" : "🧩"}
                            </span>
                        </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                    <div className="absolute left-4 top-4">
                        <Badge className="border-border bg-background/80 text-foreground backdrop-blur">
                            {project.category}
                        </Badge>
                    </div>
                </div>

                <CardContent className="flex flex-1 flex-col p-6">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground">
                            {project.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-blue-400">
                            {project.tagline}
                        </p>

                        <p className="mt-4 line-clamp-4 text-sm leading-6 text-muted-foreground">
                            {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.technologies.slice(0, 5).map((technology) => (
                                <Badge
                                    key={technology}
                                    variant="outline"
                                    className="border-border bg-muted text-xs text-muted-foreground"
                                >
                                    {technology}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="mt-7 flex gap-2">
                        <Link
                            to={`/projects/${project.slug}`}
                            className={buttonVariants({
                                className:
                                    "flex-1 rounded-xl bg-white text-black hover:bg-zinc-200",
                            })}
                        >
                            Explore
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted text-muted-foreground transition hover:text-foreground"
                                aria-label={`Open ${project.title} GitHub repository`}
                            >
                                <SiGithub className="h-4 w-4" />
                            </a>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}