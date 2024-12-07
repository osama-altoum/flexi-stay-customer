"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AuthDialog } from "../auth/auth-dialog";

export function AuthButton() {
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        className="gap-2"
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
