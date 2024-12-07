"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Star,
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function PropertyHeader() {
  return (
    <div className="bg-card rounded-lg border p-6 space-y-4">
      <div className="flex items-center justify-between">
        <Badge className="bg-indigo-600 hover:bg-indigo-700">For Rent</Badge>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Instagram className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Linkedin className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <h1 className="text-2xl font-bold">
        RCE Theaters - 907 S Beckford Dr, Henderson, NC 27536
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <span>3890 Poplar Dr.</span>
          <span className="text-indigo-600">ID: 12546</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>4.5 (66 reviews)</span>
        </div>
        <div>Published: Feb 9, 23</div>
      </div>

      <div className="flex flex-wrap items-center gap-8 pt-4 border-t">
        <div className="flex items-center gap-2">
          <span className="font-semibold">7</span>
          <span className="text-muted-foreground">Room</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">7</span>
          <span className="text-muted-foreground">Bed</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">3</span>
          <span className="text-muted-foreground">Bath</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">702</span>
          <span className="text-muted-foreground">sqft</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">2023</span>
          <span className="text-muted-foreground">Year</span>
        </div>
      </div>
    </div>
  );
}
