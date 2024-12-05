"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Palmtree } from "lucide-react";
import { NavMenu } from "./nav-menu";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Palmtree className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Flexi Stay</span>
            </Link>

            <div className="hidden md:flex md:items-center md:space-x-6">
              <NavMenu />
            </div>

            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <div className="hidden md:block">
                <Button>List Property</Button>
              </div>
              <MobileNav />
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
