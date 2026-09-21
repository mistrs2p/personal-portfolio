import {
    Mail,
    Send,
} from "lucide-react";

import { SiGithub as Github, SiLinkerd as Linkedin } from "@icons-pack/react-simple-icons";
import { motion } from "motion/react";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contacts = [
    {
        title: "Email",
        value: "MahdiMousavi40@gmail.com",
        href: "mailto:MahdiMousavi40@gmail.com",
        icon: Mail,
    },
    {
        title: "GitHub",
        value: "github.com/mistrs2p",
        href: "https://github.com/mistrs2p",
        icon: Github,
    },
    {
        title: "LinkedIn",
        value: "Add your LinkedIn profile",
        href: "#",
        icon: Linkedin,
    },
    {
        title: "Telegram",
        value: "Add your Telegram profile",
        href: "#",
        icon: Send,
    },
];

export default function Contact() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                        Get in touch
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Let&apos;s connect.
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-zinc-500">
                        Interested in a project, collaboration, or simply want to
                        talk about technology and software engineering?
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2">
                    {contacts.map((contact, index) => {
                        const Icon = contact.icon;

                        return (
                            <motion.div
                                key={contact.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <Card className="rounded-3xl border-white/10 bg-white/[0.02] transition hover:border-white/20 hover:bg-white/[0.04]">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-emerald-400">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-sm font-semibold text-white">
                                                    {contact.title}
                                                </p>

                                                <p className="mt-1 truncate text-sm text-zinc-500">
                                                    {contact.value}
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href={contact.href}
                                            target={
                                                contact.href.startsWith("http")
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                contact.href.startsWith("http")
                                                    ? "noreferrer"
                                                    : undefined
                                            }
                                            className={buttonVariants({
                                                variant: "outline",
                                                className:
                                                    "mt-6 w-full rounded-xl border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white",
                                            })}
                                        >
                                            Connect
                                        </a>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/[0.05] to-violet-500/[0.05] p-8 text-center">
                    <p className="text-sm text-zinc-500">
                        Prefer email?
                    </p>

                    <a
                        href="mailto:MahdiMousavi40@gmail.com"
                        className="mt-2 inline-block text-lg font-medium text-white transition hover:text-blue-400"
                    >
                        MahdiMousavi40@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}