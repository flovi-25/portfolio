"use client"

import { useState, useEffect, useRef } from "react"
import { Clock, Users, ChefHat, Heart, Share2, Utensils, Flame, Camera } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const recipeData = {
  title: "Coques de Macarons",
  description:
    "Ma recette signature pour réussir des coques de macarons parfaites. Technique professionnelle pour obtenir des macarons lisses, brillants et avec une belle collerette.",
  difficulty: "Avancé",
  prepTime: "24 min",
  cookTime: "21 min",
  totalTime: "45 min",
  servings: 20,

  ingredients: [
    {
      category: "Pré-mélange sucre glace et amande",
      items: [
        { name: "Sucre glace", quantity: "184g" },
        { name: "Amande en poudre", quantity: "117g" },
      ],
    },
    {
      category: "Meringue française",
      items: [
        { name: "Blanc d'œuf (température ambiante)", quantity: "100g" },
        { name: "Sucre en poudre", quantity: "52g" },
      ],
    },
  ],
  instructions: [
    {
      step: 1,
      title: "Préparation et tamisage du pré-mélange",
      description:
        "Préchauffer le four à 120°C. Peser tous les ingrédients avec précision. Mélanger et tamiser ensemble le sucre glace et l'amande en poudre.",
      time: "7 min",
    },
    {
      step: 2,
      title: "Montage des blancs",
      description:
        "Monter les blancs dans un robot pâtissier à vitesse 2 pendant 25 secondes. Ajouter le sucre en 3 fois en montant la vitesse du batteur à chaque fois avec un intervalle de 30 secondes entre chaque incorporation.",
      time: "3 min",
    },
    {
      step: 3,
      title: "Meringue parfaite",
      description:
        "Battre la meringue jusqu'à l'obtention d'un bec d'oiseau. La meringue doit être ferme, brillante et former des pointes droites qui ne retombent pas.",
      time: "1 min",
    },
    {
      step: 4,
      title: "Macaronnage",
      description:
        "Transférer la meringue dans le mélange sucre glace et amande. Macaronner doucement et progressivement jusqu'à l'obtention d'une texture capable de former un ruban à l'écoulement.",
      time: "5 min",
    },
    {
      step: 5,
      title: "Dressage et dégazage",
      description:
        "Dresser les macarons en les espaçant suffisamment sur des plaques de cuisson recouvertes de tapis silicone. Taper énergiquement les plaques pour chasser toutes les bulles d'air.",
      time: "8 min",
    },
    {
      step: 6,
      title: "Cuisson en deux temps",
      description:
        "Enfourner 3 minutes à 120°C, porte du four entrouverte. Augmenter à 140°C et cuire 18 minutes supplémentaires, porte fermée. Laisser sécher dans le four éteint et ouvert.",
      time: "21 min + séchage",
    },
    {
      step: 7,
      title: "Assemblage",
      description:
        "Une fois les coques refroidies et décollées facilement, assembler avec une gelée de fruits, une ganache au chocolat, un caramel ou toute autre garniture de votre choix.",
      time: "Variable",
    },
  ],
}

export function RecetteSection() {
  const { t } = useLanguage()
  const [activeStep, setActiveStep] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [checkedIngredients, setCheckedIngredients] = useState(new Set())
  const [screenWakeLock, setScreenWakeLock] = useState(true)
  const wakeLockRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const savedFavorite = localStorage.getItem("recipe-favorite")
    if (savedFavorite !== null) {
      setIsFavorite(JSON.parse(savedFavorite))
    }
  }, [])

  const toggleFavorite = () => {
    const newFavoriteState = !isFavorite
    setIsFavorite(newFavoriteState)
    localStorage.setItem("recipe-favorite", JSON.stringify(newFavoriteState))
  }

  useEffect(() => {
    const requestWakeLock = async () => {
      if (screenWakeLock && "wakeLock" in navigator) {
        try {
          wakeLockRef.current = await navigator.wakeLock.request("screen")
          console.log("[v0] Screen wake lock activated")

          // Set timeout for 10 minutes
          timeoutRef.current = setTimeout(
            () => {
              if (wakeLockRef.current) {
                wakeLockRef.current.release()
                wakeLockRef.current = null
                console.log("[v0] Screen wake lock released after 10 minutes")
              }
            },
            10 * 60 * 1000,
          ) // 10 minutes
        } catch (err) {
          console.log("[v0] Failed to activate screen wake lock:", err)
        }
      }
    }

    const releaseWakeLock = () => {
      if (wakeLockRef.current) {
        wakeLockRef.current.release()
        wakeLockRef.current = null
        console.log("[v0] Screen wake lock released")
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }

    if (screenWakeLock) {
      requestWakeLock()
    } else {
      releaseWakeLock()
    }

    // Cleanup on unmount
    return () => {
      releaseWakeLock()
    }
  }, [screenWakeLock])

  const toggleIngredient = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`
    const newChecked = new Set(checkedIngredients)
    if (newChecked.has(key)) {
      newChecked.delete(key)
    } else {
      newChecked.add(key)
    }
    setCheckedIngredients(newChecked)
  }

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-800">{t("recipe_bonus")}</h2>
        </div>

        {/* Header de la recette */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          <div className="md:flex">
            {/* Icône Camera */}
            <div className="md:w-2/5">
              <div className="h-80 md:h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                <Camera className="w-24 h-24 text-purple-500" />
              </div>
            </div>

            {/* Informations principales */}
            <div className="md:w-3/5 p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-3">{t("recipe_title")}</h1>
                  <p className="text-gray-600 leading-relaxed mb-4">{t("recipe_description")}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={toggleFavorite}
                    className={`p-2 rounded-full transition-colors ${isFavorite ? "bg-red-100 text-red-500" : "bg-gray-100 text-gray-500"}`}
                  >
                    <Heart className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Métriques */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-purple-50 rounded-xl">
                  <Clock className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-700">{recipeData.totalTime}</div>
                  <div className="text-xs text-gray-500">{t("total")}</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-xl">
                  <Users className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-700">{recipeData.servings}</div>
                  <div className="text-xs text-gray-500">{t("people")}</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-xl">
                  <Flame className="w-5 h-5 text-green-500 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-700">{recipeData.difficulty}</div>
                  <div className="text-xs text-gray-500">{t("difficulty")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ingrédients */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6">
              <div className="flex items-center gap-2 mb-6">
                <Utensils className="w-5 h-5 text-purple-500" />
                <h2 className="text-xl font-bold text-gray-800">{t("ingredients")}</h2>
              </div>

              {recipeData.ingredients.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-6 last:mb-0">
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((ingredient, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id={`ingredient-${categoryIndex}-${itemIndex}`}
                          className="w-4 h-4 text-purple-500 rounded focus:ring-purple-500"
                          onChange={() => toggleIngredient(categoryIndex, itemIndex)}
                        />
                        <label
                          htmlFor={`ingredient-${categoryIndex}-${itemIndex}`}
                          className={`flex-1 text-sm cursor-pointer ${
                            checkedIngredients.has(`${categoryIndex}-${itemIndex}`)
                              ? "line-through text-gray-400"
                              : "text-gray-700"
                          }`}
                        >
                          <span className="font-medium text-purple-600">{ingredient.quantity}</span> {ingredient.name}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-purple-500" />
                  {t("instructions")}
                </h2>
                <div className="flex items-center gap-3">
                  <label htmlFor="screen-wake-lock" className="text-sm font-medium text-gray-700">
                    {t("maintain_screen_on")}
                  </label>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="screen-wake-lock"
                      checked={screenWakeLock}
                      onChange={(e) => setScreenWakeLock(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-11 h-6 rounded-full transition-colors cursor-pointer ${
                        screenWakeLock ? "bg-purple-500" : "bg-gray-300"
                      }`}
                      onClick={() => setScreenWakeLock(!screenWakeLock)}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                          screenWakeLock ? "translate-x-6" : "translate-x-1"
                        } mt-1`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {recipeData.instructions.map((instruction, index) => (
                  <div
                    key={index}
                    className={`border rounded-xl p-6 transition-all cursor-pointer ${
                      activeStep === index ? "border-purple-300 bg-purple-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          activeStep === index ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {instruction.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold text-gray-800">{instruction.title}</h3>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {instruction.time}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{instruction.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
