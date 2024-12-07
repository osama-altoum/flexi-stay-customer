"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PropertyInfo() {
  return (
    <div className="bg-card rounded-lg border p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Description</h2>
      <p className="text-muted-foreground">
        Real estate is typically bought and sold through real estate agents or
        brokers, who act as intermediaries between buyers and sellers. The real
        estate industry also includes such as appraisers, inspectors, and
        attorneys who provide various services related.
      </p>
      <Button variant="link" className="p-0 h-auto text-indigo-600">
        Read More <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
