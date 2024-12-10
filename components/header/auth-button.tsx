"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AuthDialog } from "../auth/auth-dialog";

export function AuthButton() {
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        className="gap-2 rounded-full bg-[#f9f9ff] shadow-inner border border-gray-200 text-gray-700 hover:shadow-md hover:shadow-gray-300 active:shadow-none active:bg-gray-100 transition-all duration-200"
        onClick={() => setShowAuthDialog(true)}
      >
        Sign In
      </Button>

      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
      />
    </>
  );
}
