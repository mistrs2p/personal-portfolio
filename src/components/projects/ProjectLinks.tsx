import {
    ExternalLink,
} from "lucide-react";

import { SiGithub as Github } from "@icons-pack/react-simple-icons";

import { buttonVariants } from "@/components/ui/button";
import type { Project } from "@/data/projects";

interface ProjectLinksProps {
    project: Project;
}

export default function ProjectLinks({
    project,
}: ProjectLinksProps) {
    const hasRepositories = Boolean(
        project.repositories?.length,
    );

    const hasLiveDemo = Boolean(project.liveDemo);

    if (!hasRepositories && !hasLiveDemo) {
        return null;
    }

    return (
        <>
            {project.repositories?.map((repository) => (
                <a
                    key={repository.url}
                    href={repository.url}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                        variant: "outline",
                        className:
                            "rounded-xl border-white/10 bg-white/5",
                    })}
                >
                    <Github className="mr-2 h-4 w-4" />
                    {repository.label}
                </a>
            ))}

            {project.liveDemo && (
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
            )}
        </>
    );
}