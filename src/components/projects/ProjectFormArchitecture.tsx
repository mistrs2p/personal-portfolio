import {
    Braces,
    CheckCircle2,
    Database,
    FileCode2,
    Layers3,
    Send,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";

interface ProjectFormArchitectureProps {
    project: Project;
}

const icons = [
    FileCode2,
    Braces,
    Database,
    Layers3,
    CheckCircle2,
    Send,
];

export default function ProjectFormArchitecture({
    project,
}: ProjectFormArchitectureProps) {
    const architecture = project.caseStudy?.formArchitecture;

    if (!architecture) {
        return null;
    }

    return (
        <section>
            <div className="mb-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                    Dynamic Form Architecture
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    Metadata-driven enterprise forms
                </h2>

                <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-400">
                    {architecture.summary}
                </p>
            </div>

            <div className="space-y-6">
                {/* Form Lifecycle */}
                <Card className="mx-auto w-full max-w-4xl rounded-3xl border-white/10 bg-zinc-950/60">
                    <CardContent className="p-6 sm:p-8">
                        <div className="mb-6">
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                                Form Lifecycle
                            </p>
                        </div>

                        <div className="space-y-3">
                            {architecture.layers.map(
                                (layer, index) => {
                                    const Icon =
                                        icons[index] ?? Layers3;

                                    return (
                                        <div key={layer.title}>
                                            <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-colors hover:border-white/10 hover:bg-white/[0.05]">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-400/5 text-blue-400">
                                                    <Icon className="h-4.5 w-4.5" />
                                                </div>

                                                <div>
                                                    <div className="flex items-center gap-3">
                                                        <span className="font-mono text-xs text-zinc-700">
                                                            {String(index + 1).padStart(2, "0")}
                                                        </span>

                                                        <h3 className="text-sm font-semibold text-white">
                                                            {layer.title}
                                                        </h3>
                                                    </div>

                                                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                                                        {layer.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {index < architecture.layers.length - 1 && (
                                                <div className="ml-5 h-3 border-l border-dashed border-white/10" />
                                            )}
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Capabilities */}
                <Card className="mx-auto w-full max-w-4xl rounded-3xl border-white/10 bg-zinc-950/60">
                    <CardContent className="p-6 sm:p-7">
                        <div className="text-center">
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                                Capabilities
                            </p>
                        </div>

                        <div className="mx-auto mt-5 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {architecture.capabilities.map(
                                (capability) => (
                                    <div
                                        key={capability}
                                        className="flex min-h-20 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 text-center transition-colors hover:border-white/10 hover:bg-white/[0.05]"
                                    >
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

                                            <span className="text-sm leading-5 text-zinc-400">
                                                {capability}
                                            </span>
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
                <ArchitectureRule
                    title="Required"
                    description="Field requirements are enforced in the form lifecycle."
                />

                <ArchitectureRule
                    title="Readonly"
                    description="Field mutability is controlled from metadata and context."
                />

                <ArchitectureRule
                    title="Validation"
                    description="Validation rules adapt to field and user context."
                />

                <ArchitectureRule
                    title="Rendering"
                    description="The correct control is selected from field metadata."
                />
            </div>
        </section>
    );
}

function ArchitectureRule({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <p className="text-sm font-semibold text-white">
                {title}
            </p>

            <p className="mt-2 text-xs leading-5 text-zinc-600">
                {description}
            </p>
        </div>
    );
}