import { cn } from "@/lib/utils";

interface PalmtreeLogoProps {
  className?: string;
  size?: number;
}

export function PalmtreeLogo({ className, size = 48 }: PalmtreeLogoProps) {
  return (
    <div
      className={cn("relative", className)}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 bg-yellow-400 rounded-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-3/4 h-3/4 text-black dark:text-black"
          fill="currentColor"
        >
          <path d="M50 90c-5-20-25-30-25-50 0-15 10-25 25-25s25 10 25 25c0 20-20 30-25 50z" />
          <path d="M50 90c5-20 25-30 25-50 0-15-10-25-25-25S25 25 25 40c0 20 20 30 25 50z" />
        </svg>
      </div>
    </div>
  );
}
