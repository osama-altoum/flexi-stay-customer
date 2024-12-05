import { Palmtree } from "lucide-react";
import Link from "next/link";

export function FooterLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Palmtree className="h-8 w-8 text-yellow-400" />
      <span className="text-2xl font-bold text-white">Travila</span>
    </Link>
  );
}
