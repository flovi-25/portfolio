import { Button } from "@/components/ui/button"
import { FileText, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Linkedin, Instagram} from "lucide-react"

export function Header() {
  return (
    <header className="w-full px-6 py-4 bg-gradient-to-br from-pink-50 to-purple-50 flex items-center gap-20 ">
      <div className="text-accent font-medium text-lg">florence viprey</div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="xl" className="text-foreground hover:text-accent">
          <FileText className="w-5 h-5 mr-2" />
          CV en FR
        </Button>

 <div className="flex items-center gap-3">
  <Button variant="ghost" size="xl" className="text-foreground hover:text-accent flex items-center gap-2">
    <Linkedin className="w-5 h-5" />
    <span className="font-semibold">LinkedIn</span>
  </Button>
  
  <Button variant="ghost" size="xl" className="text-foreground hover:text-accent flex items-center gap-2">
    <Instagram className="w-5 h-5" />
    <span className="font-semibold">Instagram</span>
  </Button>
</div>
                  <Button variant="ghost" size="xl" className="text-foreground hover:text-accent">
          <Mail className="w-4 h-4 mr-2" />
          CONTACT
        </Button>
      </div>
    </header>
  )
}
