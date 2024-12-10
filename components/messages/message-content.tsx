"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Phone,
  Video,
  MoreVertical,
  Send,
  Image as ImageIcon,
} from "lucide-react";
import { MessageBubble } from "./message-bubble";
import { cn } from "@/lib/utils";

interface MessageContentProps {
  selectedChat: string | null;
}

const messages = [
  {
    id: "1",
    content: "Hey, I'm interested in your property. Is it still available?",
    timestamp: "09:15 AM",
    sender: "user",
  },
  {
    id: "2",
    content: "Yes, it's available! When would you like to check in?",
    timestamp: "09:17 AM",
    sender: "host",
  },
  {
    id: "3",
    content: "I'm planning to visit next month, from the 15th to the 20th.",
    timestamp: "09:20 AM",
    sender: "user",
  },
  // Add more messages
];

export function MessageContent({ selectedChat }: MessageContentProps) {
  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center text-muted-foreground">
        Select a conversation to start messaging
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div
        className={cn(
          "p-4 border-b flex items-center justify-between",
          "dark:bg-zinc-950"
        )}
      >
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">Savannah Nguyen</h3>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} {...message} />
          ))}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <ImageIcon className="h-5 w-5" />
          </Button>
          <Input placeholder="Type a message..." className="flex-1" />
          <Button size="icon">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
