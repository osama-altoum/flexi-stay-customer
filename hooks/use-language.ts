"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import i18n from "@/lib/i18n/config";

interface LanguageState {
  language: string;
  direction: "ltr" | "rtl";
  setLanguage: (lang: string) => void;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set) => ({
      language: i18n.language || "en",
      direction: i18n.language === "ar" ? "rtl" : "ltr",
      setLanguage: (lang: string) => {
        const direction = lang === "ar" ? "rtl" : "ltr";
        i18n.changeLanguage(lang);
        document.documentElement.dir = direction;
        document.documentElement.lang = lang;
        set({ language: lang, direction });
      },
    }),
    {
      name: "language-storage",
    }
  )
);
