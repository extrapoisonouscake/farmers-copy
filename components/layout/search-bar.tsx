import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function SearchBar({
  forceOpen = false,
  className,
}: {
  forceOpen?: boolean;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(forceOpen);
  return (
    <div className="flex border border-input rounded-md bg-background">
      <Button
        size="icon"
        variant="ghost"
        className={cn({ "pointer-events-none": forceOpen })}
        onClick={() => !forceOpen && setIsOpen(!isOpen)}
      >
        <SearchIcon />
      </Button>
      <Input
        placeholder={'"Best hotels in Regina"'}
        className={cn(
          "w-0 border-0 px-0 shadow-none ring-0 transition-all",
          {
            "w-[200px]": isOpen,
          },
          className
        )}
      />
    </div>
  );
}
