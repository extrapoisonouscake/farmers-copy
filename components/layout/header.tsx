"use client";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { SearchBar } from "./search-bar";
const pages = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Places to Stay",
    href: "/places",
  },
  {
    label: "Restaurants",
    href: "/restaurants",
  },
  { label: "Contact", href: "/contact-us" },
];
export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-8 gap-4">
        <Link href="/">
          <div>Logo</div>
        </Link>
        <MobileMenu />
        <div className="hidden md:flex gap-4 items-center">
          <nav>
            <PageLinks />
          </nav>
          <SearchBar />
        </div>
      </header>
    </>
  );
}
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="ghost"
        className="block md:hidden relative z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XIcon /> : <MenuIcon />}
      </Button>
      <nav
        className={cn(
          "fixed top-0 left-0 size-full bg-background/60 z-40 backdrop-blur-lg opacity-0 transition-opacity pointer-events-none duration-300 flex justify-center items-center",
          { "opacity-100 pointer-events-auto": isOpen }
        )}
        onClick={() => setIsOpen(false)}
      >
        <div
          className="flex flex-col gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          <PageLinks onLinkClick={() => setIsOpen(false)} />
          <SearchBar forceOpen />
        </div>
      </nav>
    </>
  );
}
function PageLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();

  return (
    <ul className="flex gap-4 flex-col md:flex-row items-center md:items-start text-xl md:text-sm">
      {pages.map(({ label, href }) => (
        <li
          key={href}
          className={cn({
            "font-medium":
              href === "/" ? href === pathname : pathname.includes(href),
          })}
          onClick={onLinkClick}
        >
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
