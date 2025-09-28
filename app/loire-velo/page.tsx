import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LoireVeloPage() {
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

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-purple-900 mb-6">
            La Loire à Vélo
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl font-geometria font-bold mb-2 sm:mb-4 text-slate-800">
            170 km en vélo à la découverte des châteaux de la Loire
          </p>
        </div>
      </section>

      <section className=" relative overflow-hidden">
        <div className="w- full h-full">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            {/* Background Image with xx% opacity */}
            <div className="absolute inset-0">
              <Image
                src="/images/velo.jpg"
                alt="Vélo avec sa remorque et notre tente de camping lors de notre voyage Loire à vélo"
                className="w-full h-full object-cover opacity-70"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Superposed Text Content */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 min-h-[1000px] flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
                Un Parcours Exceptionnel
              </h2>
              <div className="bg-white/10 backdrop-blur-2xs rounded-xl p-6 sm:p-8">
                <p className="text-lg sm:text-xl leading-relaxed font-geometria text-white drop-shadow-md text-justify">
                  De Blois à Chambord en passant par Chaumond, Amboise, Chenonceau ou Cheverny, que notre patrimoine
                  français est époustouflant. Ce périple fut une parenthèse suspendue dans le temps au rythme doux de
                  mon pédalier et de ma fille de 3 ans (bien installée dans sa remorque 😴). Il marqua un tournant dans
                  nos vies, nous prouvant que les aventures n'ont pas d'âge requis et que la seule limite à nos défis
                  est notre volonté à les accomplir.
                </p>
                <br />
                <p className="text-lg sm:text-xl leading-relaxed font-geometria text-white drop-shadow-md text-justify">
                  De Nevers à Saint-Nazaire, en passant par Orléans, Blois, Tours et Angers, chaque étape révèle les
                  trésors du Val de Loire, classé au patrimoine mondial de l'UNESCO. Une aventure qui mêle sport,
                  culture et découverte du patrimoine français.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
