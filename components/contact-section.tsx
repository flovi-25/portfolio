import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Linkedin, Instagram } from "lucide-react"
import { Mail } from "lucide-react"

const expertiseAreas = [
  {
    icon: Mail,
    title: "Prendre contact",
    description: "Contactez-moi pour discuter de vos projets",
  },
]

export function ContactSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-800">Contact pro.</h2>
        <div className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          <p className="mb-2">Florence Viprey, chef de projet en Recherche et Développement et pâtissière</p>
          <p className="mb-2">Envie d'en connaître davantage ?</p>
          <p>Échangeons !</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-md mx-auto">
          <Card className="p-8 text-center">
            <Linkedin className="w-9 h-9 text-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground">Florence Viprey</p>
          </Card>

          <Card className="p-4 text-center max-w-2xl mx-auto">
            <Instagram className="w-9 h-9 text-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-6">Instagram</h3>
            <p className="text-muted-foreground">@florences_challenges</p>
          </Card>
        </div>

        {/* garder un des deux prendre contact*/}
        <div className="mb-10">
          <Button size="xl" className="px-36 py-12 bg-accent hover:bg-accent/90 text-xl text-accent-foreground">
            Prendre Contact
          </Button>
        </div>

        <div className="grid md:grid-cols-1 gap-6 mb-8 max-w-md mx-auto">
          {expertiseAreas.map((area, index) => (// test
      
            <Card key={index} className="p-8 text-center hover:mx-auto">
              <area.icon className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-3 text-balance">{area.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
