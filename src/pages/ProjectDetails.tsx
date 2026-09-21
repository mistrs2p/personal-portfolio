import {
    ArrowLeft,
    ExternalLink,

} from "lucide-react";
import { SiGithub as Github } from "@icons-pack/react-simple-icons";
import { motion } from "motion/react";
import { Link, useParams } from "react-router";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { projects } from "@/data/projects";

export default function ProjectDetails() {
    const { slug } = useParams();

    const project = projects.find(
        (item) => item.slug === slug,
    );

    if (!project) {
        return (
            <div className="mx-auto max-w-3xl px-6 py-32 text-center">
                <h1 className="text-3xl font-semibold text-white">
                    Project not found
                </h1>

                <p className="mt-3 text-zinc-500">
                    The project you're looking for doesn't exist.
                </p>

                <Link
                    to="/projects"
                    className={buttonVariants({
                        className: "mt-8 rounded-xl",
                    })}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
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
                                className="border-white/10 bg-white/[0.03] text-zinc-400"
                            >
                                {technology}
                            </Badge>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className={buttonVariants({
                                    className:
                                        "rounded-xl bg-white text-black hover:bg-zinc-200",
                                })}
                            >
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </a>
                        )}

                        {project.liveDemo && (
                            <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noreferrer"
                                className={buttonVariants({
                                    variant: "outline",
                                    className: "rounded-xl border-white/10 bg-white/5",
                                })}
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Hero / Screenshot placeholder */}
                <div className="mt-14">
                    <Card className="overflow-hidden rounded-3xl border-white/10 bg-zinc-950/60">
                        <div className="flex aspect-[21/9] items-center justify-center bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-transparent">
                            <div className="text-center">
                                <div className="text-5xl">🖼️</div>

                                <p className="mt-4 text-sm text-zinc-600">
                                    Project cover / screenshots coming soon
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Content */}
                <div className="mt-14">
                    <Tabs defaultValue="overview">
                        <TabsList className="border border-white/10 bg-white/[0.03]">
                            <TabsTrigger value="overview">
                                Overview
                            </TabsTrigger>

                            <TabsTrigger value="features">
                                Features
                            </TabsTrigger>

                            <TabsTrigger value="architecture">
                                Architecture
                            </TabsTrigger>

                            <TabsTrigger value="engineering">
                                Engineering
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="mt-8">
                            <div className="grid gap-6 lg:grid-cols-2">
                                <Card className="rounded-3xl border-white/10 bg-zinc-950/60">
                                    <CardContent className="p-6">
                                        <h2 className="text-xl font-semibold text-white">
                                            Project Overview
                                        </h2>

                                        <p className="mt-4 leading-7 text-zinc-500">
                                            {project.description}
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="rounded-3xl border-white/10 bg-zinc-950/60">
                                    <CardContent className="p-6">
                                        <h2 className="text-xl font-semibold text-white">
                                            Status
                                        </h2>

                                        <div className="mt-4">
                                            <Badge variant="secondary">
                                                {project.status}
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="features" className="mt-8">
                            <SectionList
                                title="Key Features"
                                items={project.features}
                            />
                        </TabsContent>

                        <TabsContent value="architecture" className="mt-8">
                            <SectionList
                                title="Architecture"
                                items={project.architecture}
                            />
                        </TabsContent>

                        <TabsContent value="engineering" className="mt-8">
                            <SectionList
                                title="Engineering Decisions"
                                items={project.engineeringDecisions}
                            />
                        </TabsContent>
                    </Tabs>
                    <div className="mt-14">
                        <ProjectGallery
                            screenshots={project.screenshots}
                            gifs={project.gifs}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function SectionList({
    title,
    items,
}: {
    title: string;
    items: string[];
}) {
    return (
        <Card className="rounded-3xl border-white/10 bg-zinc-950/60">
            <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-white">
                    {title}
                </h2>

                {items.length > 0 ? (
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {items.map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm text-zinc-400"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="mt-5 text-sm text-zinc-600">
                        Details will be added soon.
                    </p>
                )}
            </CardContent>
        </Card>
    );
}