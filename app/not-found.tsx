"use client";

import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function NotFound() {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen flex flex-col items-center dark:bg-[#171717] justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        {/* 404 Desert Illustration */}
        <div className="relative w-full h-64 mb-8">
          {theme === "dark" ? (
            <Image
              src="/assets/images/not-found-dark.png"
              alt="404 Desert Illustration"
              fill
            />
          ) : (
            <Image
              src="/assets/images/not-found.png"
              alt="404 Desert Illustration"
              fill
            />
          )}
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          We Can&apos;t Find{" "}
          <span className="text-muted-foreground">This Page</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="bg-black hover:bg-black/90 text-white px-8"
            size="lg"
          >
            <Link href="/">
              <MoveLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </Button>
          <Button asChild variant="outline" className="px-8" size="lg">
            <Link href="/help">Help Center</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
