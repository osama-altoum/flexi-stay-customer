"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function ReviewForm() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  return (
    <div className="bg-card  space-y-6  rounded-xl  py-6 px-10 mx-6 shadow-sm">
      <h3 className="text-2xl font-semibold">Write a review</h3>

      {/* Rating Stars */}
      <div className="space-y-2">
        <span className="text-sm font-medium">Rating *</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="focus:outline-none"
            >
              <Star
                className={`h-6 w-6 ${
                  star <= (hoveredRating || rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300 dark:text-gray-600"
                } transition-colors duration-1000 ease-in-out `}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        {/* <div className="space-y-2">
          <label className="text-sm font-medium">Name *</label>
          <Input placeholder="Enter Name.." className="bg-background" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email *</label>
          <Input placeholder="Enter Email.." className="bg-background" />
        </div> */}

        <div className="space-y-2">
          <label className="text-sm font-medium">Review *</label>
          <Textarea
            placeholder="Write your review.."
            className="min-h-[150px] bg-background"
          />
        </div>

        <Button className="bg-[#363aed] hover:bg-[#363aed]/90 text-white">
          Submit Review
        </Button>
      </div>
    </div>
  );
}
