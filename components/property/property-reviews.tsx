"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReviewForm } from "./review/review-form";
import { ReviewCard } from "./review/review-card";

// Static data
const reviews = [
  {
    id: 1,
    name: "Ali Mansour",
    role: "Architect",
    rating: 5,
    date: "Nov 12, 2024",
    time: "10:45 am",
    content:
      "This villa offers a perfect blend of luxury and convenience. The location is fantastic, and the amenities are top-notch.",
    likes: 200,
    avatar: "https://github.com/octocat.png",
  },
  {
    id: 2,
    name: "Fatima Ahmed",
    role: "Software Engineer",
    rating: 4.5,
    date: "Nov 10, 2024",
    time: "14:00 pm",
    content:
      "A stunning property with all the comforts you could ask for. Highly recommended for families looking for a modern villa in Abu Dhabi.",
    likes: 150,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=faces&fit=crop&w=256&h=256",
  },
];

export function PropertyReviews() {
  return (
    <div className="space-y-8">
      {/* Header with Rating and Sorting */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
          <h2 className="text-2xl font-semibold">
            {4.5} ({reviews.length} reviews)
          </h2>
        </div>
        <Select defaultValue="latest">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="highest">Highest Rating</SelectItem>
            <SelectItem value="lowest">Lowest Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>

      {/* Write Review Form */}
      <ReviewForm />
    </div>
  );
}
