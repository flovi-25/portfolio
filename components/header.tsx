"use client"

import { Button } from "@/components/ui/button"
import { FileText, Mail, Menu } from "lucide-react"
import { Linkedin, Instagram } from "lucide-react"
import { Logo } from "@/components/logo"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/hooks/use-language"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto relative flex items-center justify-center mt-3 mb-25 sm:mb-15">
        <div className="absolute left-0 z-50">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Menu className="h-4 w-4" />
                Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <a
                  href="/florence-viprey-cv-2025.html"
                  target="_blank"
                  className="flex items-center gap-2"
                  rel="noreferrer"
                >
                  <FileText className="h-4 w-4" />
                  {t("Ouvrir mon CV")}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="http://www.linkedin.com/in/florence-viprey-ba490893"
                  target="_blank"
                  className="flex items-center gap-2"
                  rel="noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://www.instagram.com/florences_challenges/"
                  target="_blank"
                  className="flex items-center gap-2"
                  rel="noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="mailto:viprey.florence@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
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
