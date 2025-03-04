"use client";
import { useTranslation } from "react-i18next";

interface FooterSection {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

const footerSections: FooterSection[] = [
  {
    title: "Support",
    links: [
      { name: "Forum support", href: "/forum-support" },
      { name: "Help Center", href: "/help-center" },
      { name: "Live chat", href: "/live-chat" },
      { name: "How it works", href: "/how-it-works" },
      { name: "Security", href: "/security" },
      { name: "Privacy", href: "/privacy" },
      { name: "Charges logs", href: "/charges" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/" },
      { name: "Community Blog", href: "/blog" },
      { name: "Jobs and Careers", href: "/careers" },
      { name: "Contact Us", href: "/" },
      { name: "Our Awards", href: "/awards" },
      { name: "Agencies", href: "/agencies" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Property Guide", href: "/property-guide" },
      { name: "Property Booking", href: "/property-booking" },
      { name: "Hotel Booking", href: "/hotel-booking" },
      { name: "Ticket Booking", href: "/ticket-booking" },
      { name: "Rental Services", href: "/rental-services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Cookies Policy", href: "/cookies" },
      { name: "Data Processing", href: "/data-processing" },
      { name: "Data Policy", href: "/data-policy" },
      { name: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export function FooterLinks() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      {footerSections.map((section) => (
        <div key={section.title}>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
            {t(section.title)}
          </h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black transition-colors"
                >
                  {t(link.name)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
