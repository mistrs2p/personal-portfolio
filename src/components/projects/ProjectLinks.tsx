import { ExternalLink } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import type { Project } from "@/data/projects";

interface ProjectLinksProps {
    project: Project;
}

export default function ProjectLinks({
    project,
}: ProjectLinksProps) {
    if (!project.liveDemo) {
        return null;
    }

    return (
        <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
                variant: "outline",
                className:
                    "rounded-xl border-white/10 bg-white/5",
            })}
        >
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
        </a>
    );
}