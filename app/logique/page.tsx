import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function LogiquePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <Header />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-4 sm:mb-6 text-purple-800">
            Ma participation à l'enregistrement d'une émission 100% logique :
          </h1>
          <p className="text-2xl sm:text-3xl md:text-5xl font-geometria font-medium mb-4 sm:mb-6 text-slate-800">
            une expérience incroyablement enrichissante
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-6 sm:py-6 lg:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg font-geometria leading-relaxed text-slate-700 text-justify">
              Participer à l'enregistrement d'une émission 100% logique a été une expérience extraordinaire qui m'a
              permis de découvrir un univers fascinant où la réflexion, la stratégie et l'analyse se mélangent dans un
              cadre ludique et stimulant. Cette aventure télévisuelle m'a confronté à des défis intellectuels variés,
              allant des énigmes mathématiques aux puzzles de logique pure, en passant par des jeux de déduction qui ont
              mis à l'épreuve ma capacité à raisonner sous pression. L'atmosphère du plateau, l'énergie de l'équipe de
              production et la bienveillance des autres candidats ont créé un environnement propice à l'épanouissement
              intellectuel. Cette expérience m'a non seulement permis de tester mes limites cognitives, mais aussi de
              partager ma passion pour les défis logiques avec un public plus large, tout en découvrant de nouvelles
              approches de résolution de problèmes grâce aux échanges avec les autres participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/100-logique-fv.png"
                  alt="100% Logique - Médaille de bronze"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/100-logique-fv-2.png"
                  alt="100% Logique"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/100-logique-plateau.jpg"
                  alt="100% Logique - Sur le plateau"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
