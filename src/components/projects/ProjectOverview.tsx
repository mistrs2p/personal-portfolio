import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import type { Project } from "@/data/projects";

interface ProjectOverviewProps {
    project: Project;
}

export default function ProjectOverview({
    project,
}: ProjectOverviewProps) {
    return (
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
    );
}