import { Menu } from "lucide-react";
import {
    SiGithub,
    SiLinkerd,
} from "@icons-pack/react-simple-icons";
import { NavLink } from "react-router";

const links = [
    { label: "About", to: "/about" },
    { label: "Experience", to: "/experience" },
    { label: "Projects", to: "/projects" },
    { label: "Resume", to: "/resume" },
    { label: "Contact", to: "/contact" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/75 backdrop-blur-xl">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
                <NavLink
                    to="/"
                    className="group flex items-center gap-3"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-white transition group-hover:border-blue-400/40 group-hover:bg-blue-400/10">
                        MM
                    </div>

                    <div className="hidden sm:block">
                        <div className="text-sm font-semibold tracking-tight text-white">
                            Mahdi Mousavi
                        </div>
                        <div className="text-xs text-zinc-500">
                            Software Engineer
                        </div>
                    </div>
                </NavLink>

                <nav className="hidden items-center gap-7 md:flex">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                [
                                    "text-sm transition-colors",
                                    isActive
                                        ? "text-white"
                                        : "text-zinc-500 hover:text-white",
                                ].join(" ")
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden items-center gap-2 md:flex">
                    <a
                        href="https://github.com/mistrs2p"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition hover:border-white/20 hover:text-white"
                        aria-label="GitHub"
                    >
                        <SiGithub size={16} />
                    </a>

                    <a
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition hover:border-white/20 hover:text-white"
                        aria-label="LinkedIn"
                    >
                        <SiLinkerd size={16} />
                    </a>
                </div>

                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 md:hidden"
                    aria-label="Open navigation"
                >
                    <Menu className="h-5 w-5" />
                </button>
            </div>
        </header>
    );
}