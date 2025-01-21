"use client";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function FooterSocial() {
  const { t } = useTranslation();
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
        {t("Follow us")}
      </h3>
      <div className="flex space-x-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="text-gray-600 dark:text-gray-400 dark:hover:text-white hover:text-black transition-colors"
            aria-label={`Follow us on ${social.name}`}
          >
            <social.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
}
