"use client";

import { useTranslation } from "react-i18next";

export function FooterBottom() {
  const { t } = useTranslation();
  return (
    <div className="border-t border-gray-800 mt-12 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} {t("StayWay. All rights reserved.")}
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="/terms"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            {t("Terms")}
          </a>
          <a
            href="/privacy"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            {t(" Privacy policy")}
          </a>
          <a
            href="/legal"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            {t("Legal notice")}
          </a>
          <a
            href="/accessibility"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            {t("Accessibility")}
          </a>
        </div>
      </div>
    </div>
  );
}
