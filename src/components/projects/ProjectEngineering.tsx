import { Card, CardContent } from "@/components/ui/card";\nimport { useTranslation } from "react-i18next";

import type { Project } from "@/data/projects";

interface ProjectEngineeringProps {
    project: Project;
}

export default function ProjectEngineering({
    project,
}: ProjectEngineeringProps) {\n    const { t } = useTranslation();
    return (
        <Card className="rounded-3xl border-white/10 bg-zinc-950/60">
            <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-white">
                    {t("projectDetails.engineering")}
                </h2>

                {project.engineeringDecisions.length > 0 ? (
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {project.engineeringDecisions.map(
                            (item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-white/5 bg-white/2 px-5 py-4 text-sm text-zinc-400"
                                >
                                    {item}
                                </div>
                            ),
                        )}
                    </div>
                ) : (
                    <p className="mt-5 text-sm text-zinc-600">
                        {t("projectDetails.detailsSoon")}
                    </p>
                )}
            </CardContent>
        </Card>
    );
}