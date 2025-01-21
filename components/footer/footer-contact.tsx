"use client";
import { MapPin, Clock, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export function FooterContact() {
  const { t } = useTranslation();
  return (
    <div className="text-gray-600 dark:text-gray-400">
      <h3 className="text-lg font-semibold text-black dark:text-white  mb-4">
        {t("Contact Us")}
      </h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="h-10 w-10 mt-1" />
          <span>{t("43 dyair - al-khalidiya Abu Dhabi - UAE")}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Clock className="h-8 w-8" />
          <span>{t("Hours: 8:00 - 17:00, Mon - Sat")}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="h-10 w-10" />
          <a
            href="mailto:support@stayway.com"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            {t("support@stayway.com")}
          </a>
        </div>
      </div>
    </div>
  );
}
