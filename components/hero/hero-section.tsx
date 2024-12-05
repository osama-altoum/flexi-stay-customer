"use client";

import { useState, useCallback } from "react";
import { SearchForm } from "./search-form";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import slides from "@/data/hero.json";

const categories = ["Apartments", "Houses", "Villas", "Studios", "Townhouses"];

export function HeroSection() {
  const { theme } = useTheme();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      setSelectedIndex(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const getNextSlides = () => {
    const nextSlides = [];
    let currentIndex = selectedIndex;

    for (let i = 0; i < 3; i++) {
      currentIndex = (currentIndex + 1) % slides.length;
      nextSlides.push(slides[currentIndex]);
    }

    return nextSlides;
  };

  return (
    <section className="relative ">
      <div ref={emblaRef} className="overflow-hidden " onSelect={onSelect}>
        <div className="backface-hidden -ml-4 flex touch-pan-y">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative  md:h-[85vh] min-w-full pl-4"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `
                  ${
                    theme === "dark"
                      ? "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))"
                      : "linear-gradient(to top, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))"
                  }, 
                  url("${slide.image}")
                `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="relative h-full z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-full flex flex-col justify-center pt-20 md:pt-0">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block bg-yellow-300 text-black px-4 py-1 rounded-full text-sm font-medium mb-4 w-fit"
                  >
                    {slide.tag}
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
                  >
                    {slide.title}
                    <br />
                    {slide.subtitle}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base md:text-xl text-white/90 mb-8 max-w-3xl"
                  >
                    {slide.description}
                  </motion.p>

                  {/* Categories */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap gap-2 mb-8"
                  >
                    {categories.map((category, index) => (
                      <Button
                        key={category}
                        variant={index === 0 ? "default" : "outline"}
                        className={`rounded-full text-sm md:text-base ${
                          index === 0
                            ? "bg-black text-white hover:bg-black/90"
                            : "bg-white/10 text-white hover:bg-white/20 border-white/20"
                        }`}
                      >
                        {category}
                      </Button>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-full  md:hidden block mb-2"
                  >
                    <SearchForm />
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full hidden md:block "
        >
          <div className="absolute -bottom-10 left-1/2 z-10 -translate-x-1/2 shadow-lg">
            <SearchForm />
          </div>
        </motion.div>
      </div>

      {/* Small Images */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-4">
        {getNextSlides().map((slide, index) => (
          <button
            key={slide.id}
            onClick={() =>
              scrollTo((selectedIndex + index + 1) % slides.length)
            }
            className="w-40 h-28 rounded-lg overflow-hidden border-2 border-white/50 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            <div className="relative w-full h-full">
              <Image
                width={160}
                height={112}
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
