import { Monitor, Moon, Sun } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <button className="text-orange-500 outline-0">
                {theme === "light" ? (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                ): theme === "dark" ? (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                ): (
                    <Monitor className="h-[1.2rem] w-[1.2rem]" />
                )}
                <span className="sr-only">Toggle theme</span>
            </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
                System
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
