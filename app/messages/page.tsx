"use client";

import { MessageSidebar } from "@/components/messages/message-sidebar";
import { MessageContent } from "@/components/messages/message-content";
import { useState } from "react";

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex h-[calc(100vh-8rem)] overflow-hidden rounded-lg border bg-background shadow">
          <MessageSidebar
            selectedChat={selectedChat}
            onSelectChat={setSelectedChat}
          />
          <MessageContent selectedChat={selectedChat} />
        </div>
      </div>
    </div>
  );
}
