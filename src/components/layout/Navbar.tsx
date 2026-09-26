import { Menu, X } from "lucide-react";
import {
    SiGithub,
    SiLinkerd,
} from "@icons-pack/react-simple-icons";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { NavLink } from "react-router";
import { useState } from "react";

const links = [
    { label: "About", to: "/about" },
    { label: "Experience", to: "/experience" },
    { label: "Projects", to: "/projects" },
    { label: "Resume", to: "/resume" },
    { label: "Contact", to: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Logo */}
                <NavLink
                    to="/"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-muted p-1 transition group-hover:border-blue-400/40 group-hover:bg-blue-400/10">
                        <img
                            src="/favicon.svg"
                            alt="Arayina"
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <div className="hidden sm:block">
                        <div className="text-sm font-semibold tracking-tight text-foreground">
                            Arayina
                        </div>

                        <div className="text-xs text-muted-foreground">
                            Software Engineer
                        </div>
                    </div>
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-7 md:flex">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                [
                                    "text-sm transition-colors",
                                    isActive
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground",
                                ].join(" ")
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Desktop Social */}
                <div className="hidden items-center gap-2 md:flex">
                    <ThemeToggle />
                    <a
                        href="https://github.com/mistrs2p"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition hover:border-foreground/20 hover:text-foreground"
                        aria-label="GitHub"
                    >
                        <SiGithub size={16} />
                    </a>

                    <a
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition hover:border-foreground/20 hover:text-foreground"
                        aria-label="LinkedIn"
                    >
                        <SiLinkerd size={16} />
                    </a>
                </div>

                {/* Mobile Button */}
                <button
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition hover:bg-secondary md:hidden"
                    aria-label={open ? "Close navigation" : "Open navigation"}
                    aria-expanded={open}
                >
                    {open ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {open && (
                <div className="border-t border-border bg-background/95 px-6 py-5 backdrop-blur-xl md:hidden">
                    <nav className="flex flex-col gap-2">
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    [
                                        "rounded-xl px-4 py-3 text-sm transition-colors",
                                        isActive
                                            ? "bg-secondary text-foreground"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                    ].join(" ")
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="mt-4 flex gap-2 border-t border-border pt-4">
                        <a
                            href="https://github.com/mistrs2p"
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-muted text-sm text-muted-foreground"
                        >
                            <SiGithub size={16} />
                            GitHub
                        </a>

                        <a
                            href="#"
                            className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-muted text-sm text-muted-foreground"
                        >
                            <SiLinkerd size={16} />
                            LinkedIn
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}