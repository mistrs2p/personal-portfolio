import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 bg-[#09090b]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm font-medium text-white">Arayina</p>
          <p className="mt-1 text-xs text-zinc-600">{t("footer.role")}</p>
        </div>
        <div className="flex items-center gap-2">
          <a href="mailto:MahdiMousavi40@gmail.com" aria-label={t("footer.email")} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-500 transition hover:text-white">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://github.com/mistrs2p" target="_blank" rel="noreferrer" aria-label={t("footer.github")} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-500 transition hover:text-white">
            <SiGithub size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
