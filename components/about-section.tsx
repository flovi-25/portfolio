import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (

    <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[3fr_1fr] gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">À propos de moi</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Passionnée par l'innovation alimentaire et la Pâtisserie, j'ai construis mon parcours professionel pour
                le rendre le plus complet possible dans l'univers exigeant du sucré.
              </p>
              <p>
                Mon profil allie une double expertise; le théorique par mon Master en Innovation en Agro alimentaire (à
                l'ESIAB) et la pratique par mon CAP Pâtisserie + mon expérience terrain en production (via mon poste de
                chef de ligne chez Erhard ou les industrialisations produits réalisées chez Pasquier ou Materne).
              </p>
              <p>
                Mon expertise couvre la formulation de produits, l'analyse sensorielle, l'analyse des risques et la
                gestion de projets R&D dans l'industrie agro-alimentaire.
              </p>
              <p>
                Mes atouts pour un poste en R&D sont: - Ma créativité et ma fibre d'innovation : "ouverture d'esprit" et
                "curiosité" me caractérisent plutôt bien, le développement de produits primés ou le fait d'avoir été
                confrontée à des défis techniques majeurs demandant d'élargir sa façon de penser pour trouver des
                solutions, notamment en matière d'adaptabilité de nouveaux produits sur des lignes de production -
                Approche terrain : avec mon expérience en production et en industrialisation, garantissant une vision
                réaliste des contraintes techniques et industrielles - Management et coordination : via l'encadrement
                d'équipes (jusqu'à 12 personnes) ou d'une chef de projet junior, avec un focus sur la transmission des
                savoir-faire et la bienveillance - Mobilité et adaptabilité : je suis ouverte aux opportunités en France
                comme à l'international, avec une appétence pour les défis techniques et humains
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-1">8+</div>
              <div className="text-sm text-muted-foreground">Années d'expérience</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-1">20+</div>
              <div className="text-sm text-muted-foreground">Projets réalisés</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-1">4</div>
              <div className="text-sm text-muted-foreground">Entreprises agroalimentaires accompagnées</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-1">3</div>
              <div className="text-sm text-muted-foreground">Prix d'innovation</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
