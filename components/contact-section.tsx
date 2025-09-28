"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Linkedin, Instagram, Mail } from "lucide-react"

export function ContactSection() {
 const { t } = useLanguage()
 
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-slate-800">
          Contact pro.
        </h2>
        <div className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          <p className="mb-2">Florence Viprey, chef de projet en Recherche et Développement et pâtissière</p>
          <p className="mb-2">Envie d'en connaître davantage ?</p>
          <p>Échangeons !</p>
        </div>

        <div className="mb-6 sm:mb-10">
          <div className="max-w-md mx-auto">
            <Button
              size="lg"
              className="w-full px-8 sm:px-12 md:px-16 py-3 sm:py-4 bg-accent hover:bg-accent/90 text-base sm:text-lg md:text-xl text-accent-foreground"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Prendre Contact
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-md mx-auto">
          <Card className="p-4 sm:p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <Linkedin className="w-8 h-8 sm:w-9 sm:h-9 text-accent mx-auto mb-3 sm:mb-4" />
            <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">LinkedIn</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">Florence Viprey</p>
          </Card>

          <Card className="p-4 sm:p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <Instagram className="w-8 h-8 sm:w-9 sm:h-9 text-accent mx-auto mb-3 sm:mb-4" />
            <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Instagram</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">@florences_challenges</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
