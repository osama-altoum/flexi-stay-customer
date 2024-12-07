"use client";

import { ReviewCard } from "@/components/property/review/review-card";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    role: "Guest",
    rating: 5,
    date: "Mar 15, 2024",
    time: "09:30 am",
    content:
      "Amazing property with stunning views. The host was very accommodating and responsive. Would definitely stay here again!",
    likes: 24,
    avatar: "https://github.com/shadcn.png",
  },
  // Add more reviews...
];

export function ReviewsList() {
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <ReviewCard key={review.id} {...review} />
      ))}
    </div>
  );
}
