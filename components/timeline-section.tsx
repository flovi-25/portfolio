import { Calendar, MapPin, Award, Camera } from "lucide-react"

const timelineData = [
  {
    id: 1,
    year: "2010",
    title: "Chine",
    company: "Voyage personnel",
    location: "Côte Est, Chine",
    description:
      "Il s'agit là de mon tout premier voyage, pas encore majeur mais déjà avec un soif d'aller découvrir le monde et ses habitants. C'est deux mois passé à partager le quotidien d'une famille chinoise n'ont éclairé sur le fait que nous avons tous à apprendre des autres cultures.",
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

export function TimelineSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-800">Mon Parcours</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Une évolution professionnelle riche, alliant expertise technique et passion créative
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-500 h-full rounded-full shadow-lg"></div>

          {timelineData.map((item, index) => (
            <div key={item.id} className="relative mb-16 last:mb-0">
              {/* Dot sur la ligne */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-400 rounded-full shadow-lg z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>

              {/* Contenu alterné */}
              <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                {/* Icône Camera */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                  <div className={`${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-200">
                      <Camera className="w-16 h-16 text-blue-500" />
                    </div>
                  </div>
                </div>

                {/* Descriptif */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100">
                    {/* Badge année */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      <Calendar className="w-4 h-4" />
                      {item.year}
                    </div>

                    {/* Titre et entreprise */}
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                      <Award className="w-4 h-4" />
                      {item.company}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>

                    {/* Description */}
                    <div className="text-slate-600 leading-relaxed mb-6">{item.description}</div>

                    {/* Réalisations */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wide">
                        Réalisations clés
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100"
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
          ))}
        </div>
      </div>
    </section>
  )
}
