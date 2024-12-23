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
        className="glow-on-hover after:bg-white/90 dark:after:bg-black/90"
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
