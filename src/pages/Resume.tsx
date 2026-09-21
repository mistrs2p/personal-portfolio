import {
    Download,
    ExternalLink,
    FileText,
} from "lucide-react";
import { motion } from "motion/react";

import { buttonVariants } from "@/components/ui/button";

const resumeUrl = "/resume/Mahdi-Mousavi-Resume.pdf";

export default function Resume() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-4xl px-6 py-20 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-400">
                        <FileText className="h-7 w-7" />
                    </div>

                    <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                        Resume
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Professional Resume
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-zinc-500">
                        A detailed overview of my professional experience, technical
                        skills, and selected projects.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={buttonVariants({
                                className:
                                    "rounded-xl bg-white text-black hover:bg-zinc-200",
                            })}
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Resume
                        </a>

                        <a
                            href={resumeUrl}
                            download
                            className={buttonVariants({
                                variant: "outline",
                                className:
                                    "rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10",
                            })}
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60"
                >
                    <div className="flex aspect-[1/1.414] items-center justify-center bg-gradient-to-br from-blue-500/[0.04] via-violet-500/[0.03] to-transparent p-8 text-center">
                        <div>
                            <FileText className="mx-auto h-10 w-10 text-zinc-700" />

                            <p className="mt-4 text-sm text-zinc-600">
                                Resume preview will appear here.
                            </p>

                            <p className="mt-2 text-xs text-zinc-700">
                                Add your PDF to public/resume/Mahdi-Mousavi-Resume.pdf
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}