import { Facebook } from "lucide-react";
import Link from "next/link";
import { PalmtreeLogo } from "../auth/palmtree-logo";

export function FooterLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <PalmtreeLogo className="" />
      <div className="relative">
        {/* Main Text */}
        <span className="text-2xl md:text-3xl font-extrabold hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Stay Way
        </span>
        {/* Mirrored Reflection */}
        <span className="absolute -bottom-5 left-0 w-full text-2xl md:text-3xl font-extrabold hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 opacity-[0.15] transform scale-y-[-1]">
          Stay Way
        </span>
      </div>
    </Link>
  );
}
