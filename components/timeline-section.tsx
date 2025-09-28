"use client"

import { Calendar, MapPin, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const animationData = [
  { style: "slideBottom", repeat: "once", duration: "1200ms", delay: "0ms", intensity: "30px", starting_opacity: "0%" },
  { style: "fade", repeat: "once", duration: "1200ms", delay: "150ms", intensity: "20px", starting_opacity: "0%" },
  {
    style: "slideBottom",
    repeat: "once",
    duration: "1200ms",
    delay: "300ms",
    intensity: "30px",
    starting_opacity: "0%",
  },
  { style: "fade", repeat: "once", duration: "1200ms", delay: "450ms", intensity: "20px", starting_opacity: "0%" },
  {
    style: "slideBottom",
    repeat: "once",
    duration: "1200ms",
    delay: "600ms",
    intensity: "30px",
    starting_opacity: "0%",
  },
  { style: "fade", repeat: "once", duration: "1200ms", delay: "750ms", intensity: "20px", starting_opacity: "0%" },
  {
    style: "slideBottom",
    repeat: "once",
    duration: "1200ms",
    delay: "900ms",
    intensity: "30px",
    starting_opacity: "0%",
  },
  { style: "fade", repeat: "once", duration: "1200ms", delay: "1050ms", intensity: "20px", starting_opacity: "0%" },
  {
    style: "slideBottom",
    repeat: "once",
    duration: "1200ms",
    delay: "1200ms",
    intensity: "30px",
    starting_opacity: "0%",
  },
]

const timelineData = [
  {
    id: 1,
    year: "2010",
    title: "Chine",
    company: "Voyage personnel",
    location: "Côte Est, Chine",
    description:
      "Il s'agit là de mon tout premier voyage, pas encore majeur mais déjà avec une soif d'aller découvrir le monde et ses habitants. Ces deux mois passé à partager le quotidien d'une famille chinoise n'ont éclairé sur le fait que nous avons tous à apprendre des autres cultures.",
    achievements: ["Aventure"],
  },
  {
    id: 2,
    year: "2014 - 2015",
    title: "Projet d'étude : le dessert magique",
    company: "Master Innovation en Industrie Agroalimentaire",
    location: "ESIAB Quimper, France",
    description:
      "La conception du dessert magique, la naissance d'un dessert innovant et ludique à destination des enfants.",
    achievements: ["Prix spécial concours Louis Pasteur 2015", "Prix mon projet en 180sec", "Interview professionnel"],
  },
  {
    id: 3,
    year: "2014",
    title: "Stage recherche au Pays de Galles",
    company: "Wrexham University",
    location: "Pays de Galles",
    description:
      "Wrexham University est un lieu de savoir cosmopolite où les étudiants et les professeurs des quatre coins du monde se rencontrent.",
    achievements: ["Apprentisage de l'anglais"],
  },
  {
    id: 4,
    year: "2015",
    title: "Stage recherche et développement",
    company: "De Kroes Feuilletage",
    location: "Semur en Auxois(21), France",
    description:
      "De Kroes Feuilletage m'a fait confiance malgré mon jeune âge lors de ce stage pour mes laisser les reines du développement d'un produit pour l'un de ces importants clients. La tâche fut rude pour convertir une ligne de production à un nouveau proccess mais fut couronné de succès.",
    achievements: ["Commercialisation d'un cracker, 70% d'avis client positifs", "Autonomie"],
  },
  {
    id: 5,
    year: "2015 - 2016",
    title: "CAP Pâtissier",
    company: "Academie de Besançon",
    location: "Besançon (25), France",
    description:
      "Il est un tremplin vers un univers gourmand où les combinaisons sont infinies. Il est également un atout précieux sur le marché du travail pour allier la pratique à la théorie de mes études en innovation en agroalimentaire.",
    achievements: ["Acquisition de techniques"],
  },
  {
    id: 6,
    year: "2017 - 2021",
    title: "Chef de ligne de production et assistant approvisionnement",
    company: "Erhard",
    location: "Thurey Le Mont (25), France",
    description:
      "Erhard avec son catalogue de produits très étoffé et diversifié, cette société offre de nombreuses compétences produits et industrielles.",
    achievements: ["Baisse de 100% des ruptures journalières", "Exigence qualité maintenue à 100%", "Zéro réclamation"],
  },
  {
    id: 7,
    year: "2021 - 2025",
    title: "Chef de projet recherche et développement",
    company: "Pasquier",
    location: "Vron (80), France",
    description:
      "De l'identification des besoins, au lancement d'un produit, les étapes sont passionnantes et diversifiées. Le groupe Pasquier offre l'avantage de pouvoir laisser s'éclater lors du processus de développement en mettant la main à la pâte et en étant un pilier central.",
    achievements: [
      "Elargissement de l'offre de plus 50% pour un client majeur international",
      "Industrialisation des Duos",
    ],
  },
  {
    id: 8,
    year: "2024",
    title: "Australie",
    company: "Voyage personnel",
    location: "Perth, WA",
    description:
      "Immersion dans un pays où le \"no worries\" (traduction : Pas de problème) illustre parfaitement l'état d'esprit de ses habitants.",
    achievements: ["Immersion dans une nouvelle culture"],
  },
  {
    id: 9,
    year: "2025",
    title: "Chef de projet recherche et développement",
    company: "Materne Industries",
    location: "Boué (02), France",
    description:
      "Business B to B Français et International. Participer à des projets techniquement riches et variés, en collaboration avec des interlocuteurs pluridisciplinaires. Planifier, suivre et finaliser de projets R&D dans un environnement industriel dynamique et exigeant. Encadrement d'une chef de projet R&D junior.",
    achievements: [
      "Acquisition d'un nouveau marché à plus de 100T/an",
      "Pratique de l'anglais professionel",
      "Management",
    ],
  },
]

const timelineImages: { [key: number]: string } = {
  1: "/images/chine.jpg", // Chine
  2: "/images/dessert-magique.png", // Projet d'étude : le dessert magique
  3: "/images/campus-wrexham.jpg", // Stage recherche au Pays de Galles
  4: "/images/de-kroes.png", // Stage recherche et développement - De Kroes
  5: "/images/cap-patissier.jpeg", // CAP Pâtissier
  6: "/images/usine-erhard.jpg", // Chef de ligne - Erhard
  7: "/images/pasquier.jpg", // Chef de projet R&D - Pasquier
  8: "/images/australie.JPG", // Australie
  9: "/images/mom.png", // Chef de projet R&D - Materne (using pasquier as placeholder)
}

export function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const reversedTimelineData = [...timelineData].reverse()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            if (!animatedItems.has(index)) {
              setVisibleItems((prev) => new Set([...prev, index]))
              setAnimatedItems((prev) => new Set([...prev, index]))
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: "100px" },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [animatedItems])

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-slate-800">
            Mon Parcours
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Une évolution professionnelle riche, alliant expertise technique et passion créative
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-500 h-full rounded-full shadow-lg"></div>

          {reversedTimelineData.map((item, index) => {
            const animConfig = animationData[index % animationData.length]
            const isVisible = visibleItems.has(index)

            const animationStyle = {
              opacity: isVisible ? "1" : animConfig.starting_opacity,
              transform: isVisible
                ? "translateY(0) translateX(0) scale(1)"
                : animConfig.style === "slideBottom"
                  ? `translateY(${animConfig.intensity}) scale(0.95)`
                  : "translateY(0) scale(0.95)",
              transition: isVisible
                ? `all ${animConfig.duration} cubic-bezier(0.4, 0, 0.2, 1) ${animConfig.delay}`
                : "none",
            }

            return (
              <div
                key={item.id}
                className="relative mb-8 sm:mb-12 md:mb-16 last:mb-0"
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                style={animationStyle}
              >
                <div
                  className={`md:flex md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  style={{ willChange: isVisible ? "auto" : "transform, opacity" }}
                >
                  {/* Icon section */}
                  <div
                    className={`w-full md:w-1/2 mb-4 md:mb-0 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <div className={`md:${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <div className="inline-flex items-center justify-center w-50 h-50 sm:w-70 sm:h-70 md:w-90 md:h-90 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-200 overflow-hidden">
                        <Image
                          src={timelineImages[item.id] || "/images/placeholder.jpg"}
                          alt={`${item.title} - ${item.company}`}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100">
                      {/* Badge année */}
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        {item.year}
                      </div>

                      {/* Titre et entreprise */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2 text-sm sm:text-base">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                        {item.company}
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm mb-3 sm:mb-4">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        {item.location}
                      </div>

                      {/* Description */}
                      <div className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                        {item.description}
                      </div>

                      {/* Réalisations */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-slate-700 text-xs sm:text-sm uppercase tracking-wide">
                          Réalisations clés
                        </h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {item.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium border border-blue-100"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
