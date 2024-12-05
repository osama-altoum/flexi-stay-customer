import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function FooterSocial() {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-white mb-4">Follow us</h3>
      <div className="flex space-x-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={`Follow us on ${social.name}`}
          >
            <social.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
}
