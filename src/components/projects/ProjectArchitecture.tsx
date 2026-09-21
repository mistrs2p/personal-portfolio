import { Card, CardContent } from "@/components/ui/card";

import type { Project } from "@/data/projects";

interface ProjectArchitectureProps {
    project: Project;
}

export default function ProjectArchitecture({
    project,
}: ProjectArchitectureProps) {
    return (
        <ProjectArchitectureList
            items={project.architecture}
        />
    );
}

function ProjectArchitectureList({
    items,
}: {
    items: string[];
}) {
    return (
        <Card className="rounded-3xl border-white/10 bg-zinc-950/60">
            <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-white">
                    Architecture
                </h2>

                {items.length > 0 ? (
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {items.map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-white/5 bg-white/2 px-5 py-4 text-sm text-zinc-400"
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