import { Button } from "@/components/ui/button"
import { FileText, Mail, Menu, User } from "lucide-react"
import { Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-accent font-medium text-base sm:text-lg md:text-xl hover:opacity-80 transition-opacity"
        >
          florence viprey
        </Link>

        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          <Button variant="ghost" size="sm" className="text-foreground hover:text-accent text-sm" asChild>
            <Link href="/about">
              <User className="w-4 h-4 mr-1" />À propos
            </Link>
          </Button>

          <Button variant="ghost" size="sm" className="text-foreground hover:text-accent text-sm">
            <FileText className="w-4 h-4 mr-1" />
            CV en FR
          </Button>

          <Button variant="ghost" size="sm" className="text-foreground hover:text-accent text-sm">
            <Linkedin className="w-4 h-4 mr-1" />
            LinkedIn
          </Button>

          <Button variant="ghost" size="sm" className="text-foreground hover:text-accent text-sm">
            <Instagram className="w-4 h-4 mr-1" />
            Instagram
          </Button>

          <Button variant="ghost" size="sm" className="text-foreground hover:text-accent text-sm">
            <Mail className="w-4 h-4 mr-1" />
            CONTACT
          </Button>
        </div>

        <Button variant="ghost" size="sm" className="lg:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  )
}
