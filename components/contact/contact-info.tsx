"use client";

import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["43 dyair - al-khalidiya", "Abu Dhabi - UAE"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+971-555-555-555", "+971-555-555-556"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@flexistay.com", "info@flexistay.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-card rounded-xl border p-8 space-y-8"
    >
      {contactInfo.map(({ icon: Icon, title, details }) => (
        <div key={title} className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{title}</h3>
            {details.map((detail) => (
              <p key={detail} className="text-muted-foreground">
                {detail}
              </p>
            ))}
          </div>
        </div>
      ))}

      <div className="pt-6 border-t">
        <h3 className="font-semibold mb-4">Follow Us</h3>
        <div className="flex gap-3">
          {socialLinks.map(({ icon: Icon, href }) => (
            <Button
              key={href}
              variant="outline"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
