import {
    Blocks,
    Database,
    Layers3,
    RefreshCw,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
// import type { Project } from "@/data/projects";

// interface ProjectImpactProps {
//     project: Project;
// }

const impactItems = [
    {
        icon: Layers3,
        title: "Architecture",
        description:
            "A modular and reusable frontend structure designed to support a growing multi-module product.",
    },
    {
        icon: Database,
        title: "Scalability",
        description:
            "Server-side search, filtering, sorting, and pagination for handling complex data-heavy tables.",
    },
    {
        icon: Blocks,
        title: "Maintainability",
        description:
            "Reusable UI components, repository-based API communication, and configurable form infrastructure.",
    },
    {
        icon: RefreshCw,
        title: "Product Evolution",
        description:
            "Migration from Vue.js to React while continuing to evolve the platform's frontend architecture.",
    },
];

// export default function ProjectImpact({
//     project,
// }: ProjectImpactProps) {
export default function ProjectImpact() {
    return (
        <section>
            <div className="mb-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                    Engineering Impact
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    Engineering decisions that shaped the platform
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
                    The project required more than feature development. The frontend
                    architecture had to remain reusable, maintainable, and capable of
                    evolving with the product.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {impactItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Card
                            key={item.title}
                            className="rounded-2xl border-white/10 bg-white/[0.03] transition-colors hover:bg-white/[0.05]"
                        >
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                                        <Icon className="h-5 w-5 text-blue-400" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-zinc-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}