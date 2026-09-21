import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import { motion } from "motion/react";

import { experiences } from "@/data/experience";

export default function Experience() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
                        Career
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Professional Experience
                    </h1>

                    <p className="mt-5 max-w-2xl text-zinc-500">
                        A journey through web development, frontend engineering,
                        backend development, and increasingly broader software
                        engineering responsibilities.
                    </p>
                </motion.div>

                <div className="relative mt-14">
                    <div className="absolute left-[7px] top-2 hidden h-[calc(100%-2rem)] w-px bg-white/10 sm:block" />

                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <motion.article
                                key={`${experience.company}-${experience.period}`}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.04 }}
                                className="relative sm:pl-10"
                            >
                                <div className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-blue-400 bg-[#09090b] sm:block" />

                                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
                                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                        <div>
                                            <h2 className="text-xl font-semibold text-white">
                                                {experience.role}
                                            </h2>

                                            <div className="mt-2 flex items-center gap-2 text-sm text-blue-400">
                                                <BriefcaseBusiness className="h-4 w-4" />
                                                {experience.company}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-zinc-500">
                                            <CalendarDays className="h-4 w-4" />
                                            {experience.period}
                                        </div>
                                    </div>

                                    <ul className="mt-6 space-y-3">
                                        {experience.highlights.map((highlight) => (
                                            <li
                                                key={highlight}
                                                className="flex gap-3 text-sm leading-6 text-zinc-500"
                                            >
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/70" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}