"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, ThumbsUp } from "lucide-react";

interface ReviewCardProps {
  name: string;
  role: string;
  rating: number;
  date: string;
  time: string;
  content: string;
  likes: number;
  avatar: string;
}

export function ReviewCard({
  name,
  role,
  rating,
  date,
  time,
  content,
  likes,
  avatar,
}: ReviewCardProps) {
  return (
    <div className=" bg-card  space-y-4 rounded-xl py-6 px-10 mx-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">{time}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </div>

      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="text-muted-foreground">{content}</p>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="gap-2">
          <ThumbsUp className="h-4 w-4" />
          <span>{likes}</span>
        </Button>
        <Button variant="ghost" size="sm" className="text-[#363aed]">
          Reply
        </Button>
      </div>
    </div>
  );
}
