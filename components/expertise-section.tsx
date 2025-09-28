"use client"
import { Card } from "@/components/ui/card"
import { CakeSlice, Lightbulb, Trophy, Plane, Bike, Scissors } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

const expertiseAreas = [

  {
    icon: Trophy,
    title: "Concours",
    description: "Depuis 2006",
    link: "/concours",
  },
  {
    icon: CakeSlice,
    title: "Le CAP pâtissier",
    description: "2015",
    link: "/cap-patissier",
  },
  {
    icon: Plane,
    title: "Ouverture sur le monde",
    description: "Voyages",
    link: "/voyages",
  },

  {
    icon: Scissors,
    title: "Créations",
    description: " Quelques exemples",
    link: "/creations",
  },
  {
    icon: Lightbulb,
    title: "100% Logique",
    description: "2024",
    link: "/logique",
  },
  {
    icon: Bike,
    title: "Aventure",
    description: "La loire à vélo",
    link: "/loire-velo",
  },
]

export function ExpertiseSection() {
 const { t } = useLanguage()

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-slate-800">
            Mes challenges
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {expertiseAreas.map((area, index) => (
            <Link key={index} href={area.link} className="block">
              <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <area.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent mx-auto mb-3 sm:mb-4" />
                <h3 className="font-semibold mb-2 sm:mb-3 text-balance text-sm sm:text-base">{area.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
