"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { ChatItem } from "./chat-item";
import { cn } from "@/lib/utils";

interface MessageSidebarProps {
  selectedChat: string | null;
  onSelectChat: (chatId: string) => void;
}

const chats = [
  {
    id: "1",
    name: "Savannah Nguyen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    lastMessage: "Hey, I'm interested in your property...",
    time: "2m ago",
    unread: 3,
    online: true,
  },
  {
    id: "2",
    name: "Ralph Edwards",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    lastMessage: "The check-in process was smooth...",
    time: "5h ago",
    unread: 0,
    online: false,
  },
  // Add more chats as needed
];

export function MessageSidebar({
  selectedChat,
  onSelectChat,
}: MessageSidebarProps) {
  return (
    <div
      className={cn(
        "w-full md:w-[400px] border-r flex flex-col",
        "dark:bg-zinc-950"
      )}
    >
      {/* Search */}
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search messages..." className="pl-9" />
        </div>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        <div className="p-2">
          {chats.map((chat) => (
            <ChatItem
              key={chat.id}
              {...chat}
              selected={selectedChat === chat.id}
              onClick={() => onSelectChat(chat.id)}
            />
          ))}
        </div>
      </ScrollArea>

      {/* New Message */}
      <div className="p-4 border-t">
        <Button className="w-full">New Message</Button>
      </div>
    </div>
  );
}
