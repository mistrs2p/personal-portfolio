import {
    Brain,
    Database,
    Globe,
    LockKeyhole,
    Server,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";

interface ProjectSystemArchitectureProps {
    project: Project;
}

export default function ProjectSystemArchitecture({
    project,
}: ProjectSystemArchitectureProps) {
    if (project.slug !== "pomodoro") {
        return null;
    }

    return (
        <section>
            <div className="mb-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                    System Architecture
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    Next.js → NestJS → PostgreSQL
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
                    A separated full-stack architecture with a dedicated web
                    client, REST API, authentication layer, and persistent
                    PostgreSQL storage.
                </p>
            </div>

            <Card className="mx-auto max-w-5xl rounded-3xl border-white/10 bg-zinc-950/60">
                <CardContent className="p-6 sm:p-8">
                    <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
                        <ArchitectureNode
                            icon={Globe}
                            title="Next.js Frontend"
                            items={[
                                "React",
                                "TypeScript",
                                "React Hook Form",
                                "Zod",
                                "Zustand",
                            ]}
                        />

                        <FlowArrow />

                        <ArchitectureNode
                            icon={Server}
                            title="NestJS API"
                            items={[
                                "REST API",
                                "Authentication",
                                "OAuth",
                                "2FA",
                                "Business Services",
                            ]}
                        />

                        <FlowArrow />

                        <ArchitectureNode
                            icon={Database}
                            title="PostgreSQL"
                            items={[
                                "TypeORM",
                                "User Data",
                                "Tasks",
                                "Focus Sessions",
                                "Profiles",
                            ]}
                        />
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        <ArchitectureFeature
                            icon={LockKeyhole}
                            title="Secure Sessions"
                            description="JWT access tokens are kept in httpOnly cookies rather than frontend state."
                        />

                        <ArchitectureFeature
                            icon={Brain}
                            title="Persistent Timer"
                            description="Timer state uses an absolute end timestamp to survive page refreshes."
                        />

                        <ArchitectureFeature
                            icon={Server}
                            title="Idempotent Persistence"
                            description="Client session identifiers prevent duplicate focus-session writes."
                        />
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

function ArchitectureNode({
    icon: Icon,
    title,
    items,
}: {
    icon: typeof Globe;
    title: string;
    items: string[];
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-400/5 text-blue-400">
                    <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-sm font-semibold text-white">
                    {title}
                </h3>
            </div>

            <div className="mt-5 space-y-2">
                {items.map((item) => (
                    <div
                        key={item}
                        className="rounded-xl border border-white/5 bg-black/20 px-3 py-2 text-xs text-zinc-500"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

function FlowArrow() {
    return (
        <div className="hidden justify-center text-zinc-700 lg:flex">
            <span className="text-2xl">→</span>
        </div>
    );
}

function ArchitectureFeature({
    icon: Icon,
    title,
    description,
}: {
    icon: typeof Globe;
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
            <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-emerald-400" />

                <h4 className="text-sm font-medium text-white">
                    {title}
                </h4>
            </div>

            <p className="mt-2 text-xs leading-5 text-zinc-600">
                {description}
            </p>
        </div>
    );
}