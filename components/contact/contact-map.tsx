"use client";

import { motion } from "framer-motion";

export function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="h-[400px] w-full"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.1743556444437!2d54.353549!3d24.480577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e65ed16e9d2d3%3A0x3e5e65ed16e9d2d3!2sAbu%20Dhabi%2C%20UAE!5e0!3m2!1sen!2s!4v1624972811000!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
}
