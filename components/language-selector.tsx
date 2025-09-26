"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-foreground hover:text-accent bg-white/80 backdrop-blur-sm border border-white/20 shadow-sm"
        >
          <Languages className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        className="w-32 mt-2 bg-white/95 backdrop-blur-md border border-white/20 shadow-lg"
        sideOffset={8}
      >
        <DropdownMenuItem onClick={() => setLanguage("fr")} className={language === "fr" ? "bg-accent/10" : ""}>
          <span className="text-sm">🇫🇷 FR</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-accent/10" : ""}>
          <span className="text-sm">🇬🇧 EN</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
