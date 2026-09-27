import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface I18nProviderProps { children: React.ReactNode; }

export function I18nProvider({ children }: I18nProviderProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const applyLanguage = (language: string) => {
      const isPersian = language.startsWith("fa");
      document.documentElement.lang = isPersian ? "fa" : "en";
      document.documentElement.dir = isPersian ? "rtl" : "ltr";
      localStorage.setItem("arayina-language", isPersian ? "fa" : "en");
    };

    applyLanguage(i18n.resolvedLanguage ?? i18n.language);
    i18n.on("languageChanged", applyLanguage);
    return () => i18n.off("languageChanged", applyLanguage);
  }, [i18n]);

  return children;
}
