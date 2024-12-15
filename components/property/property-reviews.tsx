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

export function PropertyReviews({ property }: any) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
          <h2 className="text-2xl font-semibold">
            {property.rating} ({property.reviewsTotal} reviews)
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
        {property?.reviews?.map((review: any) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>

      {/* Write Review Form */}
      <ReviewForm />
    </div>
  );
}
