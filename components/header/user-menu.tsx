"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, LogIn, LogOut, Settings, User } from "lucide-react";
import { AuthButton } from "./auth-button";
import { deleteToken } from "@/api/storage";
import { useRouter } from "next/navigation";

export function UserMenu() {
  const router = useRouter();
  const handleLogout = () => {
    deleteToken();
    // window.location.reload();
    router.refresh();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full border     border-black dark:border-white hover:bg-muted"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://khtab-web-dev.netlify.app/about.7c3481e0.png"
              alt="@username"
            />
            <AvatarFallback>kh</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Khtab Tom</p>
            <p className="text-xs leading-none text-muted-foreground">
              khtab@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Heart className="mr-2 h-4 w-4" />
          <span>Favorites</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem className="text-green-600">
          <LogIn className="mr-2 h-4 w-4" />
          <AuthButton />
        </DropdownMenuItem> */}
        <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
