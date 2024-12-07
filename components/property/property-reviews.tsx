"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Kiss Laura",
    role: "Product Designer",
    rating: 5,
    date: "Mar 03, 2023",
    time: "09:01 am",
    content:
      "I highly recommend [real estate agent's name] as a professional and knowledgeable real estate agent. They provided valuable guidance throughout the selling process",
    likes: 178,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
];

export function PropertyReviews() {
  const [rating, setRating] = useState<number>(0);

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

      {/* Write Review */}
      <div className="space-y-4 p-6 bg-muted/50 rounded-lg">
        <h3 className="text-xl font-semibold">Write a review</h3>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="focus:outline-none"
            >
              <Star
                className={`h-6 w-6 ${
                  rating >= star
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Enter Name.." />
          <Input placeholder="Enter Email.." />
        </div>
        <Textarea placeholder="Write your review.." className="min-h-[150px]" />
        <Button>Submit Review</Button>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{review.time}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-muted-foreground">{review.content}</p>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <ThumbsUp className="h-4 w-4" />
                <span>{review.likes}</span>
              </Button>
              <Button variant="ghost" size="sm">
                Reply
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
