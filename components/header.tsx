"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FileText, Mail, Menu } from "lucide-react"
import { Linkedin, Instagram } from "lucide-react"
import { Logo } from "@/components/logo"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/hooks/use-language"

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-br from-pink-50 to-purple-50 ">
      <div className="max-w-7xl mx-auto relative flex items-center justify-center mt-3 mb-25 sm:mb-15">
        <div className="absolute left-0 z-50">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-accent bg-white/80 backdrop-blur-sm border border-white/20 shadow-sm"
              >
                <Menu className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">{t("menu")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              side="bottom"
              className="w-48 mt-2 bg-white/95 backdrop-blur-md border border-white/20 shadow-lg"
              sideOffset={8}
            >
              <DropdownMenuItem>
                <FileText className="w-4 h-4 mr-2" />
                <a
                  href="Florence VIPREY cv 2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-full text-left hover:text-accent-foreground"
                >
                  {t("cv_fr")}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Linkedin className="w-4 h-4 mr-2" />
                {t("linkedin")}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Instagram className="w-4 h-4 mr-2" />
                {t("instagram")}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Mail className="w-4 h-4 mr-2" />
                {t("contact")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="absolute center z-50 mt-25 sm:mt-1">
          <Logo />
        </div>

        <div className="absolute right-0 z-50">
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}
