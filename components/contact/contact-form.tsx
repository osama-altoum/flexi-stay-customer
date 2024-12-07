"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card rounded-xl border p-8"
    >
      <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
      <p className="text-muted-foreground mb-6">
        Fill out the form below and we&apos;ll get back to you as soon as
        possible.
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">First Name</label>
            <Input placeholder="Enter your first name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Last Name</label>
            <Input placeholder="Enter your last name" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="Enter your email" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Subject</label>
          <Input placeholder="How can we help?" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Message</label>
          <Textarea
            placeholder="Write your message here..."
            className="min-h-[150px]"
          />
        </div>

        <Button className="w-full">Send Message</Button>
      </form>
    </motion.div>
  );
}
