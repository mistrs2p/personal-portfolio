import { ArrowDown } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";

interface ProjectWorkflowProps {
    project: Project;
}

export default function ProjectWorkflow({
    project,
}: ProjectWorkflowProps) {
    const workflow = project.caseStudy?.workflow;

    if (!workflow?.length) {
        return null;
    }

    return (
        <section>
            <div className="mb-8 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
                    Product Workflow
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    {project.slug === "ketabdaneh"
                        ? "From events to operational visibility"
                        : "From planning to execution"}
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                    {project.slug === "ketabdaneh"
                        ? "The system connects events, people, responsibilities, assignments, and scheduling into a single operational flow."
                        : "The Client application connects planning, execution, forms, tasks, and workflow-driven business processes into a single operational flow."}
                </p>
            </div>

            <Card className="mx-auto max-w-3xl rounded-3xl border-white/10 bg-zinc-950/60">
                <CardContent className="p-5 sm:p-6">
                    <div className="space-y-2">
                        {workflow.map((step, index) => (
                            <div key={step}>
                                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] px-4 py-3 transition-colors hover:border-white/10 hover:bg-white/[0.04]">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 text-[11px] font-semibold text-blue-300">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <p className="text-sm leading-6 text-zinc-300">
                                        {step}
                                    </p>
                                </div>

                                {index < workflow.length - 1 && (
                                    <ArrowDown className="mx-auto h-4 w-4 text-zinc-700" />
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}