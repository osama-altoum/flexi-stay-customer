import { Palmtree } from "lucide-react";
import Link from "next/link";

export function FooterLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Palmtree className="h-8 w-8 text-black dark:text-white" />
      <span className="text-2xl font-bold text-black dark:text-white">
        Flexi Stay
      </span>
    </Link>
  );
}
