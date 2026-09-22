import { ImageOff } from "lucide-react";
import { motion } from "motion/react";

interface ProjectGalleryProps {
    screenshots: {
        src: string;
        title: string;
        description?: string;
    }[];
    gifs: string[];
}

export default function ProjectGallery({
    screenshots,
    gifs,
}: ProjectGalleryProps) {
    const hasMedia =
        screenshots.length > 0 || gifs.length > 0;

    if (!hasMedia) {
        return (
            <div className="rounded-3xl border border-dashed border-white/10 bg-white/2 p-12 text-center">
                <ImageOff className="mx-auto h-8 w-8 text-zinc-700" />

                <p className="mt-4 text-sm text-zinc-600">
                    Project screenshots and demos will be added soon.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-10">
            {screenshots.length > 0 && (
                <div>
                    <h3 className="mb-5 text-xl font-semibold text-white">
                        Screenshots
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">
                        {screenshots.map((screenshot, index) => (
                            <div key={screenshot.src}>
                                <motion.img
                                    src={screenshot.src}
                                    alt={screenshot.title}
                                />

                                <h3>{screenshot.title}</h3>

                                <p>{screenshot.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {gifs.length > 0 && (
                <div>
                    <h3 className="mb-5 text-xl font-semibold text-white">
                        Demo
                    </h3>

                    <div className="space-y-5">
                        {gifs.map((gif) => (
                            <img
                                key={gif}
                                src={gif}
                                alt="Project demo"
                                className="w-full rounded-2xl border border-white/10"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}