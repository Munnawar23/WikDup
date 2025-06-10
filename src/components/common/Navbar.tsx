"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { navLinks } from "@/data/navData";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Lock body scroll when menu is open → optional
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-emerald-950 dark:text-emerald-100">
              MySite
            </Link>
          </div>

          {/* Right: NavigationMenu (desktop) */}
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-4 items-center">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className="text-emerald-950 dark:text-emerald-100 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Button size="sm">Contact</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Hamburger (mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-emerald-950 dark:text-emerald-100 focus:outline-none text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md px-4 py-4 flex flex-col items-start space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base text-emerald-950 dark:text-emerald-100 hover:text-emerald-700 dark:hover:text-emerald-300 w-full"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {link.name}
              </Link>
            ))}
            <Button size="sm" className="w-full mt-2">
              Contact
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full"
            >
              {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
