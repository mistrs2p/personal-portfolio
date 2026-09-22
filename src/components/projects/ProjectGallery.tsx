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

                    <div className="grid gap-6 md:grid-cols-2">
                        {screenshots.map((screenshot, index) => (
                            <motion.figure
                                key={screenshot.src}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.05,
                                }}
                                className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60"
                            >
                                <div className="overflow-hidden bg-black">
                                    <img
                                        src={screenshot.src}
                                        alt={screenshot.title}
                                        loading={index === 0 ? "eager" : "lazy"}
                                        className="block w-full transition duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>

                                <figcaption className="p-5">
                                    <h4 className="text-sm font-semibold text-white">
                                        {screenshot.title}
                                    </h4>

                                    {screenshot.description && (
                                        <p className="mt-2 text-sm leading-6 text-zinc-500">
                                            {screenshot.description}
                                        </p>
                                    )}
                                </figcaption>
                            </motion.figure>
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