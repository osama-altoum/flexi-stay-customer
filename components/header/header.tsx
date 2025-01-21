"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavMenu } from "./nav-menu";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { FavoritesButton } from "./favorites-button";
import { UserMenu } from "./user-menu";
import { AuthButton } from "./auth-button";
import { PalmtreeLogo } from "../auth/palmtree-logo";
import { cn } from "@/lib/utils";
import { getToken } from "@/api/storage";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const token = getToken();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const navMenuVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const iconsVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Animation */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <PalmtreeLogo />
                <div className="relative">
                  <span className="text-2xl md:text-3xl font-extrabold hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    Stay Way
                  </span>
                  <span className="absolute -bottom-5 left-0 w-full text-2xl md:text-3xl font-extrabold hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 opacity-[0.15] transform scale-y-[-1]">
                    Stay Way
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Navigation Menu Animation */}
            <motion.div
              className="hidden md:flex md:items-center md:space-x-6"
              variants={navMenuVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.1, ease: "easeOut", delay: 0.2 }}
            >
              <NavMenu />
            </motion.div>

            {/* Icons Animation */}
            <motion.div
              className="flex items-center space-x-4"
              variants={iconsVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.1, ease: "easeOut", delay: 0.4 }}
            >
              <LanguageSwitcher />
              <ThemeToggle />
              <FavoritesButton />
              {isLoggedIn ? <UserMenu /> : <AuthButton />}
              <MobileNav />
            </motion.div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
