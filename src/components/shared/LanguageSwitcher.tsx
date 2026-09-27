import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

import type { Language } from "@/i18n";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = i18n.resolvedLanguage?.startsWith("fa") ? "fa" : "en";
  const nextLanguage: Language = current === "en" ? "fa" : "en";

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(nextLanguage)}
      className="flex h-9 items-center gap-2 rounded-lg border border-border bg-muted px-3 text-xs font-medium text-muted-foreground transition hover:border-foreground/20 hover:text-foreground"
      aria-label={t("language.label")}
      title={t(nextLanguage === "fa" ? "language.switchToPersian" : "language.switchToEnglish")}
    >
      <Languages className="h-4 w-4" />
      <span>{nextLanguage === "fa" ? "FA" : "EN"}</span>
    </button>
  );
}
