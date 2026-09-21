import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem("theme");

        if (saved === "light") {
            setDark(false);
            document.documentElement.classList.remove("dark");
        } else {
            setDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const nextDark = !dark;

        setDark(nextDark);

        if (nextDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition hover:border-white/20 hover:text-white"
            aria-label="Toggle theme"
        >
            {dark ? (
                <Sun className="h-4 w-4" />
            ) : (
                <Moon className="h-4 w-4" />
            )}
        </button>
    );
}