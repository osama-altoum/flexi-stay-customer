"use client";

import { ArrowLeft, ArrowRight, Link } from "lucide-react";
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
import { useGetplaces } from "@/api/property";
import LoadingCard from "../skeletons/loading-card";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/use-language";
import { Arrow } from "@radix-ui/react-dropdown-menu";

export function TopRated() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const router = useRouter();
  const { language } = useLanguage();

  const { propertyList, propertyLoading, revalidatePropertyList } =
    useGetplaces({ page: 1, pageSize: 10 });

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
            <h2 className="text-4xl font-bold mb-2">
              {t("Top Rated Properties")}
            </h2>
            <p className="text-muted-foreground">
              {t("Quality as judged by customers. Book at the ideal price!")}
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
              {t("View More")}{" "}
              {language === "en" ? (
                <ArrowRight className="w-4 h-4" />
              ) : (
                <ArrowLeft className="w-4 h-4" />
              )}
            </Button>
          </motion.div>
        </div>

        <div className="  flex items-center justify-between w-full">
          {propertyLoading &&
            Array.from({ length: 4 }).map((_, index) => (
              <LoadingCard key={index} index={index} />
            ))}
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            direction: language === "ar" ? "rtl" : "ltr",
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {propertyList &&
              !propertyLoading &&
              propertyList?.map((property: any, index: number) => (
                <CarouselItem
                  key={property.id}
                  className="p-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <PropertyCard property={property} index={index} />
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
