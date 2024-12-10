"use client";

import { ArrowRight, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import topRatedPropertys from "@/data/properteis.json";

import { useTheme } from "next-themes";
import { PropertyCard } from "./property-card";
import { useRouter } from "next/navigation";

export function TopRated() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const router = useRouter();
  return (
    <section
      className={`py-24 ${
        isDarkMode
          ? "bg-[#121212] bg-[url('/assets/images/bg-top-rate-2.png')]"
          : "bg-[#fbf7f6] bg-[url('/assets/images/bg-top-rated.png')]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-2">Top Rated Properties</h2>
            <p className="text-muted-foreground">
              Quality as judged by customers. Book at the ideal price!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => {
                router.push("/properties");
              }}
            >
              View More <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {topRatedPropertys?.map((property, index: number) => (
              <CarouselItem
                key={property.id}
                className="p-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <PropertyCard {...property} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  );
}
