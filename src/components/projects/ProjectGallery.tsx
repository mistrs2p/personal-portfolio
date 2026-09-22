import { ChevronLeft, ChevronRight, ImageOff, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface ProjectGalleryProps {
    screenshots: {
        src: string;
        title: string;
        description?: string;
    }[];
    gifs: string[];
}

export default function ProjectGallery({ screenshots, gifs }: ProjectGalleryProps) {
    const hasMedia = screenshots.length > 0 || gifs.length > 0;
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const activeScreenshot = activeIndex !== null ? screenshots[activeIndex] : null;

    useEffect(() => {
        if (activeIndex === null) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActiveIndex(null);
            } else if (event.key === "ArrowRight") {
                setActiveIndex((current) =>
                    current === null ? null : (current + 1) % screenshots.length,
                );
            } else if (event.key === "ArrowLeft") {
                setActiveIndex((current) =>
                    current === null
                        ? null
                        : (current - 1 + screenshots.length) % screenshots.length,
                );
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [activeIndex, screenshots.length]);

    if (!hasMedia) {
        return (
            <div className="rounded-3xl border border-dashed border-border bg-muted/40 p-12 text-center">
                <ImageOff className="mx-auto h-8 w-8 text-muted-foreground" />
                <p className="mt-4 text-sm text-muted-foreground">
                    Project screenshots and demos will be added soon.
                </p>
            </div>
        );
    }

    return (
        <>
            <div className="space-y-10">
                {screenshots.length > 0 && (
                    <div>
                        <div className="mb-5 flex items-end justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-semibold text-foreground">
                                    Screenshots
                                </h3>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Click an image to view it full size.
                                </p>
                            </div>
                            <span className="shrink-0 text-xs text-muted-foreground">
                                {screenshots.length} {screenshots.length === 1 ? "image" : "images"}
                            </span>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {screenshots.map((screenshot, index) => (
                                <motion.button
                                    key={screenshot.src}
                                    type="button"
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.45, delay: index * 0.05 }}
                                    onClick={() => setActiveIndex(index)}
                                    className="group w-full overflow-hidden rounded-3xl border border-border bg-card text-left transition hover:border-blue-400/50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                                    aria-label={"Open " + screenshot.title + " in gallery"}
                                >
                                    <div className="relative overflow-hidden bg-background">
                                        <img
                                            src={screenshot.src}
                                            alt={screenshot.title}
                                            loading={index === 0 ? "eager" : "lazy"}
                                            className="block w-full transition duration-500 group-hover:scale-[1.02]"
                                        />
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                                        <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                                            View full size
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <h4 className="text-sm font-semibold text-foreground">
                                            {screenshot.title}
                                        </h4>
                                        {screenshot.description && (
                                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                                {screenshot.description}
                                            </p>
                                        )}
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                )}

                {gifs.length > 0 && (
                    <div>
                        <h3 className="mb-5 text-xl font-semibold text-foreground">Demo</h3>
                        <div className="space-y-5">
                            {gifs.map((gif) => (
                                <img
                                    key={gif}
                                    src={gif}
                                    alt="Project demo"
                                    className="w-full rounded-2xl border border-border"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {activeScreenshot && activeIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={activeScreenshot.title + " gallery"}
                    onMouseDown={(event) => {
                        if (event.currentTarget === event.target) setActiveIndex(null);
                    }}
                >
                    <div className="relative flex max-h-full w-full max-w-7xl flex-col">
                        <div className="mb-3 flex items-center justify-between gap-4 text-white">
                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold">
                                    {activeScreenshot.title}
                                </p>
                                <p className="mt-1 text-xs text-white/60">
                                    {activeIndex + 1} / {screenshots.length}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setActiveIndex(null)}
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
                                aria-label="Close gallery"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="relative min-h-0 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
                            <img
                                src={activeScreenshot.src}
                                alt={activeScreenshot.title}
                                className="max-h-[calc(100vh-150px)] w-full object-contain"
                            />

                            {screenshots.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActiveIndex(
                                                (activeIndex - 1 + screenshots.length) %
                                                    screenshots.length,
                                            )
                                        }
                                        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur transition hover:bg-black/75"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="h-6 w-6" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActiveIndex(
                                                (activeIndex + 1) % screenshots.length,
                                            )
                                        }
                                        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur transition hover:bg-black/75"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="h-6 w-6" />
                                    </button>
                                </>
                            )}
                        </div>

                        {activeScreenshot.description && (
                            <p className="mt-3 text-center text-sm text-white/65">
                                {activeScreenshot.description}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
