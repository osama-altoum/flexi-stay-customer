"use client";

import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  content: any;
  timestamp: any;
  sender: any;
}

export function MessageBubble({
  content,
  timestamp,
  sender,
}: MessageBubbleProps) {
  return (
    <div
      className={cn(
        "flex",
        sender === "user" ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[70%] rounded-lg px-4 py-2",
          sender === "user" ? "bg-indigo-600 text-white" : "bg-muted",
          "dark:bg-zinc-800"
        )}
      >
        <p className="text-sm">{content}</p>
        <p
          className={cn(
            "text-xs mt-1",
            sender === "user" ? "text-indigo-200" : "text-muted-foreground"
          )}
        >
          {timestamp}
        </p>
      </div>
    </div>
  );
}
