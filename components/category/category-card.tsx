"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { use } from "react";
import { useTranslation } from "react-i18next";

interface CategoryCardProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  className?: string;
}

export function CategoryCard({
  id,

  title,
  description,
  icon,
  index,
  className,
}: CategoryCardProps) {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative rounded-lg  bg-background transition-all duration-300",
        "border border-border shadow-sm",
        "hover:bg-[#363aed] hover:border-[#363aed]",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-6">
          <div className="mb-4 text-primary group-hover:!text-white  transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
            {t(title)}
          </h3>
          <p className="text-muted-foreground mb-2 flex-grow group-hover:text-white/90 transition-colors">
            {description}
          </p>
        </div>
        <div className="group bg-[#f9f9ff] dark:bg-[#212121] group-hover:bg-transparent  w-full p-5 group-hover:text-white hover:text-white transition-colors">
          <Button
            variant="ghost"
            className=""
            onClick={() => {
              const filterParams: any = {
                placeType: id,
              };
              const queryString = new URLSearchParams(filterParams).toString();
              router.push(`/properties?${queryString}`);
            }}
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
