"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AuthDialog } from "../auth/auth-dialog";
import { useTranslation } from "react-i18next";

export function AuthButton() {
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Button
        variant="outline"
        className="glow-on-hover after:bg-white/90 dark:after:bg-black/90"
        onClick={() => setShowAuthDialog(true)}
      >
        {t("Sign In")}
      </Button>

      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
      />
    </>
  );
}
