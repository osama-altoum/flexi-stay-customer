"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ChatItemProps {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  selected: boolean;
  onClick: () => void;
}

export function ChatItem({
  name,
  avatar,
  lastMessage,
  time,
  unread,
  online,
  selected,
  onClick,
}: ChatItemProps) {
  return (
    <button
      className={cn(
        "w-full flex items-center gap-3 p-3 rounded-lg transition-colors",
        "hover:bg-muted",
        selected && "bg-muted",
        "dark:hover:bg-zinc-800/50",
        "dark:focus:bg-zinc-800"
      )}
      onClick={onClick}
    >
      <div className="relative">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        {online && (
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-background" />
        )}
      </div>
      <div className="flex-1 text-left">
        <div className="flex items-center justify-between">
          <span className="font-semibold">{name}</span>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground truncate">
            {lastMessage}
          </p>
          {unread > 0 && (
            <Badge variant="default" className="ml-2">
              {unread}
            </Badge>
          )}
        </div>
      </div>
    </button>
  );
}
