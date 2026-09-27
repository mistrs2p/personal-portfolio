import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import fa from "./locales/fa";

export const supportedLanguages = ["en", "fa"] as const;
export type Language = (typeof supportedLanguages)[number];

const storedLanguage = localStorage.getItem("arayina-language");
const initialLanguage: Language = storedLanguage === "fa" ? "fa" : "en";

i18n
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, fa: { translation: fa } },
    lng: initialLanguage,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
