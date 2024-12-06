import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ListingViewToggleProps {
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
}

export function ListingViewToggle({
  view,
  onViewChange,
}: ListingViewToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant={view === "grid" ? "default" : "ghost"}
        size="icon"
        onClick={() => onViewChange("grid")}
      >
        <LayoutGrid className="h-4 w-4" />
      </Button>
      <Button
        variant={view === "list" ? "default" : "ghost"}
        size="icon"
        onClick={() => onViewChange("list")}
      >
        <List className="h-4 w-4" />
      </Button>
    </div>
  );
}
