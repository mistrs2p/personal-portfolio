import { BriefcaseBusiness } from "lucide-react";\nimport { useTranslation } from "react-i18next";

import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";

interface ProjectContextProps {
    project: Project;
}

export default function ProjectContext({
    project,
}: ProjectContextProps) {\n    const { t } = useTranslation();
    if (!project.caseStudy?.context) {
        return null;
    }

    return (
        <section>
            <div className="mb-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                    {t("projectDetails.context.eyebrow")}
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    {t("projectDetails.context.title")}
                </h2>
            </div>

            <Card className="rounded-3xl border-white/10 bg-zinc-950/60">
                <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                            <BriefcaseBusiness className="h-5 w-5 text-blue-400" />
                        </div>

                        <p className="max-w-4xl text-sm leading-7 text-zinc-400">
                            {project.caseStudy.context}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}