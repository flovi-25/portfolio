import { Card } from "@/components/ui/card"
import { CakeSlice, Lightbulb, Trophy, Plane, Bike, Scissors } from "lucide-react"

const expertiseAreas = [
   {
    icon: Trophy,
    title: "Concours",
    description: "Depuis 2006",
  },
  {
    icon: CakeSlice,
    title: "Le CAP pâtissier",
    description: "2015",
  },
  {
    icon: Plane,
    title: "Ouverture sur le monde",
    description: "Voyages"
    },  
    
     {
    icon: Scissors,
    title: "Créations Ludiques",
    description: " Quelques exemples",
  },
  {
    icon: Lightbulb,
    title: "100% Logique",
    description: "2024",
  },
  {
    icon: Bike,
    title: "Aventure",
    description: "La loire à vélo",
  },
]


export function ExpertiseSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text--slate-800">Mes challenges</h2>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <area.icon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-3 text-balance">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
