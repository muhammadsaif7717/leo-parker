"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;


  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost">
            {theme === "dark" ? (
              <BsSunFill className="text-yellow-400" size={18} />
            ) : (
              <FaMoon className="text-gray-800 dark:text-white" size={15} />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Button variant="ghost" className={`w-full`} onClick={() => setTheme("light")}>Light</Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button variant="ghost" className={`w-full`} onClick={() => setTheme("dark")}>Dark</Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button variant="ghost" className={`w-full`} onClick={() => setTheme("system")}>System</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
