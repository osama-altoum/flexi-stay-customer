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

const reviews = [
  {
    id: 1,
    name: "Marvin McKinney",
    role: "Product Designer",
    rating: 5,
    date: "Mar 03, 2023",
    time: "09:01 am",
    content:
      "I highly recommend [real estate agent's name] as a professional and knowledgeable real estate agent. They provided valuable guidance throughout the selling process",
    likes: 178,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Jenny Wilson",
    role: "Software Engineer",
    rating: 4,
    date: "Mar 02, 2023",
    time: "14:30 pm",
    content:
      "Outstanding service and attention to detail. The property exceeded my expectations in every way. Highly recommended!",
    likes: 142,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export function PropertyReviews() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
          <h2 className="text-2xl font-semibold">4.7 (21 reviews)</h2>
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
