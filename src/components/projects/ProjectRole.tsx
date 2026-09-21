import { UserRound } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";

interface ProjectRoleProps {
    project: Project;
}

export default function ProjectRole({
    project,
}: ProjectRoleProps) {
    if (!project.role) {
        return null;
    }

    return (
        <Card className="rounded-3xl border-white/10 bg-zinc-950/60">
            <CardContent className="p-6 sm:p-7">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <UserRound className="h-5 w-5" />
                    </div>

                    <h2 className="text-xl font-semibold text-white">
                        My Role
                    </h2>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                    {project.role}
                </p>
            </CardContent>
        </Card>
    );
}