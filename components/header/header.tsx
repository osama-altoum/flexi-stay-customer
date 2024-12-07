"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Palmtree } from "lucide-react";
import { NavMenu } from "./nav-menu";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { Button } from "@/components/ui/button";
import { UserMenu } from "./user-menu";
import { FavoritesButton } from "./favorites-button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { AuthButton } from "./auth-button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
              <Facebook className="h-8 w-8 text-primary" />
              <div className="relative">
                {/* Main Text */}
                <span className="text-2xl md:text-3xl font-extrabold hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Flexi Stay
                </span>
                {/* Mirrored Reflection */}
                <span className="absolute -bottom-5 left-0 w-full text-2xl md:text-3xl font-extrabold hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 opacity-[0.15] transform scale-y-[-1]">
                  Flexi Stay
                </span>
              </div>
            </Link>

            <div className="hidden md:flex md:items-center md:space-x-6">
              <NavMenu />
            </div>

            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <FavoritesButton />
              {/* <div className="hidden md:block">
                <Button>List Property</Button>
              </div> */}
              {isLoggedIn ? <UserMenu /> : <AuthButton />}
              <MobileNav />
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
