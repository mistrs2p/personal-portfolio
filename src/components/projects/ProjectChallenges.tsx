import { Card, CardContent } from "@/components/ui/card";

import type { Project } from "@/data/projects";

interface ProjectChallengesProps {
    project: Project;
}

export default function ProjectChallenges({
    project,
}: ProjectChallengesProps) {
    return (
        <Card className="rounded-3xl border-white/10 bg-zinc-950/60">
            <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-white">
                    Challenges & Solutions
                </h2>

                {project.challenges.length > 0 ? (
                    <div className="mt-5 space-y-4">
                        {project.challenges.map(
                            (challenge) => (
                                <div
                                    key={challenge}
                                    className="rounded-2xl border border-white/5 bg-white/2 px-5 py-4 text-sm leading-6 text-zinc-400"
                                >
                                    {challenge}
                                </div>
                            ),
                        )}
                    </div>
                ) : (
                    <p className="mt-5 text-sm text-zinc-600">
                        Challenges and solutions will be added soon.
                    </p>
                )}
            </CardContent>
        </Card>
    );
}