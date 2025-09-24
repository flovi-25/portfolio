import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 sm:gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-balance">
              À propos de moi
            </h2>
            <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-sm sm:text-base">
                Passionnée par l'innovation alimentaire et la Pâtisserie, j'ai construis mon parcours professionel pour
                le rendre le plus complet possible dans l'univers exigeant du sucré.
              </p>
              <p className="text-sm sm:text-base">
                Mon profil allie une double expertise; le théorique par mon Master en Innovation en Agro alimentaire (à
                l'ESIAB) et la pratique par mon CAP Pâtisserie + mon expérience terrain en production (via mon poste de
                chef de ligne chez Erhard ou les industrialisations produits réalisées chez Pasquier ou Materne).
              </p>
              <p className="text-sm sm:text-base">
                Mon expertise couvre la formulation de produits, l'analyse sensorielle, l'analyse des risques et la
                gestion de projets R&D dans l'industrie agro-alimentaire.
              </p>
              <p className="text-sm sm:text-base">
                Mes atouts pour un poste en R&D sont: Ma créativité et ma fibre d'innovation, mon approche terrain avec
                mon expérience en production et en industrialisation, mes compétences en management et coordination,
                ainsi que ma mobilité et adaptabilité pour les opportunités en France comme à l'international.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            <Card className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">8+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Années d'expérience</div>
            </Card>
            <Card className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">20+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Projets réalisés</div>
            </Card>
            <Card className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">4</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Entreprises accompagnées</div>
            </Card>
            <Card className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">3</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Prix d'innovation</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
