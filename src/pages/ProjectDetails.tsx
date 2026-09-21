import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ProjectArchitecture from "@/components/projects/ProjectArchitecture";
import ProjectChallenges from "@/components/projects/ProjectChallenges";
import ProjectEngineering from "@/components/projects/ProjectEngineering";
import ProjectFeatures from "@/components/projects/ProjectFeatures";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectOverview from "@/components/projects/ProjectOverview";

import ProjectProblemSolution from "@/components/projects/ProjectProblemSolution";
import ProjectRole from "@/components/projects/ProjectRole";
import ProjectScope from "@/components/projects/ProjectScope";

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

                <ProjectHero project={project} />

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    <ProjectRole project={project} />
                    <ProjectScope project={project} />
                </div>

                <div className="mt-6">
                    <ProjectProblemSolution project={project} />
                </div>
                {/* Project Cover */}
                <div className="mt-14">
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60">
                        <div className="flex aspect-[21/9] items-center justify-center bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-transparent">
                            <div className="text-center">
                                <div className="text-5xl">
                                    🖼️
                                </div>

                                <p className="mt-4 text-sm text-zinc-600">
                                    Project cover / screenshots coming soon
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Content */}
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

                        <TabsContent
                            value="overview"
                            className="mt-8"
                        >
                            <ProjectOverview
                                project={project}
                            />
                        </TabsContent>

                        <TabsContent
                            value="features"
                            className="mt-8"
                        >
                            <ProjectFeatures
                                project={project}
                            />
                        </TabsContent>

                        <TabsContent
                            value="architecture"
                            className="mt-8"
                        >
                            <ProjectArchitecture
                                project={project}
                            />
                        </TabsContent>

                        <TabsContent
                            value="engineering"
                            className="mt-8"
                        >
                            <ProjectEngineering
                                project={project}
                            />
                        </TabsContent>
                    </Tabs>

                    <div className="mt-14">
                        <ProjectChallenges
                            project={project}
                        />
                    </div>

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