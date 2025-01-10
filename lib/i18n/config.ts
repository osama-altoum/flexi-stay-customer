"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "./locales/en.json";
import arTranslations from "./locales/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    ar: { translation: arTranslations },
  },
  fallbackLng: "en",
  detection: {
    order: ["localStorage", "cookie", "htmlTag", "navigator"],
    caches: ["localStorage", "cookie"],
  },
  interpolation: { escapeValue: false },
});

export default i18n;
