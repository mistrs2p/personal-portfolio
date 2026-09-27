import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router";

import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectArchitecture from "@/components/projects/ProjectArchitecture";
import ProjectChallenges from "@/components/projects/ProjectChallenges";
import ProjectContext from "@/components/projects/ProjectContext";
import ProjectEngineering from "@/components/projects/ProjectEngineering";
import ProjectFeatures from "@/components/projects/ProjectFeatures";
import ProjectFormArchitecture from "@/components/projects/ProjectFormArchitecture";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectImpact from "@/components/projects/ProjectImpact";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ProjectProblemSolution from "@/components/projects/ProjectProblemSolution";
import ProjectRole from "@/components/projects/ProjectRole";
import ProjectScope from "@/components/projects/ProjectScope";
import ProjectSystemArchitecture from "@/components/projects/ProjectSystemArchitecture";
import ProjectWorkflow from "@/components/projects/ProjectWorkflow";

import { projects } from "@/data/projects";
import { getLocalizedProject } from "@/i18n/projectTranslations";

export default function ProjectDetails() {
    const { t, i18n } = useTranslation();
    const { slug } = useParams();

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <div className="mx-auto max-w-3xl px-6 py-32 text-center">
                <h1 className="text-3xl font-semibold text-white">
                    {t("projectDetails.notFound.title")}
                </h1>
                <p className="mt-3 text-zinc-500">
                    {t("projectDetails.notFound.description")}
                </p>
                <Link to="/projects" className={buttonVariants({ className: "mt-8 rounded-xl" })}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t("projectDetails.backToProjects")}
                </Link>
            </div>
        );
    }

    const localizedProject = getLocalizedProject(
        project,
        i18n.resolvedLanguage ?? i18n.language,
    );

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <ProjectHero project={localizedProject} />

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    <ProjectRole project={localizedProject} />
                    <ProjectScope project={localizedProject} />
                </div>

                <div className="mt-6">
                    <ProjectProblemSolution project={localizedProject} />
                </div>

                <div className="mt-14">
                    <ProjectContext project={localizedProject} />
                </div>

                <div className="mt-14">
                    <ProjectWorkflow project={localizedProject} />
                </div>

                <div className="mt-14">
                    <ProjectFormArchitecture project={localizedProject} />
                </div>

                <div className="mt-14">
                    <ProjectSystemArchitecture project={localizedProject} />
                </div>

                {project.slug === "neco" && (
                    <div className="mt-14">
                        <ProjectImpact />
                    </div>
                )}

                {localizedProject.screenshots.length > 0 && (
                    <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card sm:mt-14 sm:rounded-3xl">
                        <img
                            src={localizedProject.screenshots[0].src}
                            alt={localizedProject.screenshots[0].title}
                            className="block w-full object-cover"
                        />
                    </div>
                )}

                <div className="mt-14">
                    <Tabs defaultValue="overview">
                        <TabsList className="w-full justify-start overflow-x-auto border border-border bg-muted/40 sm:w-auto">
                            <TabsTrigger value="overview">{t("projectDetails.tabs.overview")}</TabsTrigger>
                            <TabsTrigger value="features">{t("projectDetails.tabs.features")}</TabsTrigger>
                            <TabsTrigger value="architecture">{t("projectDetails.tabs.architecture")}</TabsTrigger>
                            <TabsTrigger value="engineering">{t("projectDetails.tabs.engineering")}</TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="mt-8">
                            <ProjectOverview project={localizedProject} />
                        </TabsContent>
                        <TabsContent value="features" className="mt-8">
                            <ProjectFeatures project={localizedProject} />
                        </TabsContent>
                        <TabsContent value="architecture" className="mt-8">
                            <ProjectArchitecture project={localizedProject} />
                        </TabsContent>
                        <TabsContent value="engineering" className="mt-8">
                            <ProjectEngineering project={localizedProject} />
                        </TabsContent>
                    </Tabs>

                    <div className="mt-14">
                        <ProjectChallenges project={localizedProject} />
                    </div>

                    <div className="mt-14">
                        <ProjectGallery
                            screenshots={localizedProject.screenshots}
                            gifs={localizedProject.gifs}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
