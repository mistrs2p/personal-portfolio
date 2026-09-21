import { Lightbulb, TriangleAlert } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";

interface ProjectProblemSolutionProps {
    project: Project;
}

export default function ProjectProblemSolution({
    project,
}: ProjectProblemSolutionProps) {
    const hasProblem = Boolean(project.problem);
    const hasSolution = Boolean(project.solution);

    if (!hasProblem && !hasSolution) {
        return null;
    }

    return (
        <div className="grid gap-6 lg:grid-cols-2">
            {hasProblem && (
                <Card className="rounded-3xl border-white/10 bg-zinc-950/60">
                    <CardContent className="p-6 sm:p-7">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                                <TriangleAlert className="h-5 w-5" />
                            </div>

                            <h2 className="text-xl font-semibold text-white">
                                The Problem
                            </h2>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-zinc-400">
                            {project.problem}
                        </p>
                    </CardContent>
                </Card>
            )}

            {hasSolution && (
                <Card className="rounded-3xl border-white/10 bg-zinc-950/60">
                    <CardContent className="p-6 sm:p-7">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                                <Lightbulb className="h-5 w-5" />
                            </div>

                            <h2 className="text-xl font-semibold text-white">
                                The Approach
                            </h2>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-zinc-400">
                            {project.solution}
                        </p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}