"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    content:
      "The platform has completely transformed how we manage our properties. The team's support is exceptional!",
    author: "Alex Thompson",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    content:
      "Finding my dream apartment was so easy with this platform. The interface is intuitive and user-friendly.",
    author: "Maria Garcia",
    role: "Happy Tenant",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    content:
      "As a property owner, I appreciate the transparency and efficiency this platform brings to the rental process.",
    author: "David Chen",
    role: "Property Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
];

export function AboutTestimonials() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <p className="text-muted-foreground">
            Don&apos;t just take our word for it - hear from our satisfied
            customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <p className="text-lg mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
