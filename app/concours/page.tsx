"use client"

import { ArrowLeft, X } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function ConcoursPage() {
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false])

  useEffect(() => {
    setIsVisible(true)

    // Animate cards one by one
    const timers = visibleCards.map((_, index) =>
      setTimeout(
        () => {
          setVisibleCards((prev) => {
            const newState = [...prev]
            newState[index] = true
            return newState
          })
        },
        200 + index * 150,
      ),
    )

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [])

  const recipes = [
    {
      title: "Publication d'une recette",
      image: "/livre-cake-show.jpg",
      description:
        "Publication d'une recette dans le livre Le Cake Show de Sophie. Livre de recette paru en 2006 suite à une sélection par Sophie Dudemaine de 80 recettes inédites parmi des milliers de propositions de ces précédents lecteurs.",
      liens: "Vers le livre: ici",
    },
    {
      title: "Seconde place à un concours régional de cuisine",
      image: "/est-republicain.jpg",
      description: "2007 : organisé par le journal local.",
      liens: "",
    },
    {
      title: "Premier prix au concours interne ESIAB Mon projet en 180'S ",
      image: "/dessert-magique.png",
      description:
        "2015 : il s'agit d'une crème dessert ludique pouvant changer de goût et de couleur en fonction de la volonté du consommateur.",
      liens: " ",
    },
    {
      title: "Prix spécial du jury lors de la 10ème édition du Trophée Louis Pasteur",
      image: "/louis-pasteur.jpg",
      description:
        "2015 : Notre récompense : passer une journée en compagnie du parrain du concours : Hervé THIS le célèbre chimiste de l’INRA à l’origine de la Gastronomie moléculaire. ",
      liens: "Communiqué de presse <br /> Article Capital n288 2015 page 20",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="group text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-all duration-200 hover:gap-3"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Retour à l'accueil</span>
          </Link>
        </div>
      </header>

      <main className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-wider text-purple-600 mb-8 hover:text-purple-700 transition-colors duration-300">
              Concours
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl font-geometria text-gray-700 leading-relaxed">
                ou comment sortir de sa zone de confiance.
              </p>
            </div>
          </div>

          {/* Recipe Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {recipes.map((recipe, index) => (
              <Card
                key={index}
                className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer transform hover:-translate-y-2 hover:rotate-1 ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                onClick={() => setSelectedRecipe(index)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={recipe.image || "/placeholder.svg"}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 group-hover:brightness-110"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:from-black/90 transition-all duration-300">
                    <h3 className="text-white font-serif font-medium text-sm sm:text-base group-hover:text-purple-200 transition-colors duration-300">
                      {recipe.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {selectedRecipe !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
            <div className="relative p-6">
              <button
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:rotate-90 hover:scale-110 group"
              >
                <X className="h-5 w-5 group-hover:text-red-500 transition-colors" />
              </button>

              <div className="pr-12">
                <div className="mb-4">
                  <h2 className="text-2xl font-serif text-purple-600">{recipes[selectedRecipe].title}</h2>
                </div>

                <div className="mb-4">
                  <img
                    src={recipes[selectedRecipe].image || "/placeholder.svg"}
                    alt={recipes[selectedRecipe].title}
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold font-geometria text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-700 leading-relaxed">{recipes[selectedRecipe].description}</p>
                  </div>

                  {recipes[selectedRecipe].liens && recipes[selectedRecipe].liens.trim() !== "" && (
                    <div>
                      <h3 className="font-semibold font-geometria text-gray-900 mb-2">Liens</h3>
                      <p
                        className="text-gray-700"
                        dangerouslySetInnerHTML={{ __html: recipes[selectedRecipe].liens }}
                      ></p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
