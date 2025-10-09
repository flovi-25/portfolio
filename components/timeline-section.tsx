"use client";

import { cn } from "@/lib/utils";
import { Award, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const animationData = [
	{
		style: "slideBottom",
		repeat: "once",
		duration: "1200ms",
		delay: "0ms",
		intensity: "30px",
		starting_opacity: "0%",
	},
	{
		style: "fade",
		repeat: "once",
		duration: "1200ms",
		delay: "50ms",
		intensity: "20px",
		starting_opacity: "0%",
	},
	{
		style: "slideBottom",
		repeat: "once",
		duration: "1200ms",
		delay: "100ms",
		intensity: "30px",
		starting_opacity: "0%",
	},
	{
		style: "fade",
		repeat: "once",
		duration: "1200ms",
		delay: "150ms",
		intensity: "20px",
		starting_opacity: "0%",
	},
	{
		style: "slideBottom",
		repeat: "once",
		duration: "1200ms",
		delay: "200ms",
		intensity: "30px",
		starting_opacity: "0%",
	},
	{
		style: "fade",
		repeat: "once",
		duration: "1200ms",
		delay: "250ms",
		intensity: "20px",
		starting_opacity: "0%",
	},
	{
		style: "slideBottom",
		repeat: "once",
		duration: "1200ms",
		delay: "300ms",
		intensity: "30px",
		starting_opacity: "0%",
	},
	{
		style: "fade",
		repeat: "once",
		duration: "1200ms",
		delay: "350ms",
		intensity: "20px",
		starting_opacity: "0%",
	},
	{
		style: "slideBottom",
		repeat: "once",
		duration: "1200ms",
		delay: "400ms",
		intensity: "30px",
		starting_opacity: "0%",
	},
];

const timelineData = [
	{
		id: 1,
		year: "2010",
		title: "Chine",
		company: "Voyage personnel",
		location: "Côte Est, Chine",
		description:
			"Il s’agit là de mon tout premier voyage, pas encore majeure, mais déjà avec une soif d’aller découvrir le monde et ses habitants. Ces deux mois passés à partager le quotidien d’une famille chinoise m’ont éclairée sur le fait que nous avons tous à apprendre des autres cultures.",
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
		achievements: [
			"Prix spécial du concours Louis Pasteur 2015",
			"Prix Mon projet en 180 secondes",
			"Participation à une interview professionnelle",
		],
	},
	{
		id: 3,
		year: "2014",
		title: "Stage recherche au Pays de Galles",
		company: "Wrexham University",
		location: "Pays de Galles",
		description:
			"Wrexham University est un lieu de savoir cosmopolite où les étudiants et les professeurs des quatre coins du monde se rencontrent.",
		achievements: ["Apprentissage de l'anglais"],
	},
	{
		id: 4,
		year: "2015",
		title: "Stage recherche et développement",
		company: "De Kroes Feuilletage",
		location: "Semur-en-Auxois (21), France",
		description:
			"De Kroes Feuilletage m'a fait confiance malgré mon jeune âge lors de ce stage pour me laisser les rênes du développement d'un produit pour l'un de ses importants clients. La tâche fut rude pour convertir une ligne de production à un nouveau process mais fut couronnée de succès.",
		achievements: [
			"Commercialisation d'un cracker, 70 % d'avis clients positifs",
			"Autonomie",
		],
	},
	{
		id: 5,
		year: "2015 - 2016",
		title: "CAP Pâtissier",
		company: "Académie de Besançon",
		location: "Besançon (25), France",
		description:
			"Ce CAP est un tremplin vers un univers gourmand où les combinaisons sont infinies. Il est également un atout précieux sur le marché du travail pour allier la pratique à la théorie de mes études en innovation en agroalimentaire.",
		achievements: ["Perfectionnement des techniques pâtissières",  "Mise en place de méthodes d’organisation efficaces pour rationaliser les processus de production"],
	},
	{
		id: 6,
		year: "2017 - 2021",
		title: "Chef de ligne de production et assistant approvisionnement",
		company: "Erhard",
		location: "Thurey-Le-Mont (25), France",
		description:
			"Erhard avec son catalogue de produits très étoffé, offre de nombreuses compétences produits et industrielles.",
		achievements: [
			"Suppression de 100% des ruptures journalières",
			"Exigence qualité maintenue à 100%",
			"Zéro réclamation",
		],
	},
	{
		id: 7,
		year: "2021 - 2025",
		title: "Chef de projet recherche et développement",
		company: "Pasquier",
		location: "Vron (80), France",
		description:
			"De l'identification des besoins au lancement d'un produit, les étapes sont passionnantes et diversifiées. Le groupe Pasquier offre l'opportunité de s'épanouir lors du processus de développement en mettant la main à la pâte et en étant un pilier central.",
		achievements: [
			"Elargissement de l'offre de plus de 50 % pour un client majeur international",
			"Industrialisation de deux innovations primées au Snacking d'Or 2025",
		],
	},
	{
		id: 8,
		year: "2024",
		title: "Australie",
		company: "Voyage personnel",
		location: "Perth, Australie-Occidentale",
		description:
			'Immersion dans un pays où le "no worries" (traduction : "pas de problème") illustre parfaitement l\'état d\'esprit de ses habitants.',
		achievements: ["Immersion dans une nouvelle culture"],
	},
	{
		id: 9,
		year: "2025",
		title: "Chef de projet recherche et développement",
		company: "Materne Industries",
		location: "Boué (02), France",
		description:"Évolution dans un environnement business B-to-B, en France et à l’international. J’ai participé à des projets techniquement riches et variés, en collaboration avec des interlocuteurs pluridisciplinaires. J’ai planifié, suivi et finalisé des projets R&D dans un environnement industriel dynamique et exigeant. J’ai encadré une cheffe de projet R&D junior.",
		achievements: [
			"Acquisition d'un nouveau marché à plus de 100 T/an",
			"Pratique de l'anglais professionnel",
			"Management",
		],
	},
];

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
};

export function TimelineSection() {
	const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
	const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());
	const sectionRef = useRef<HTMLDivElement>(null);
	const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
	const reversedTimelineData = [...timelineData].reverse();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = Number.parseInt(
							entry.target.getAttribute("data-index") || "0",
						);
						if (!animatedItems.has(index)) {
							setVisibleItems((prev) => new Set([...prev, index]));
							setAnimatedItems((prev) => new Set([...prev, index]));
							observer.unobserve(entry.target);
						}
					}
				});
			},
			{ threshold: 0.1, rootMargin: "100px" },
		);

		itemRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => observer.disconnect();
	}, [animatedItems]);

	return (
		<section className="bg-gradient-to-br from-pink-50 to-purple-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
			<div className="mx-auto max-w-6xl" ref={sectionRef}>
				{/* Header */}
				<div className="mb-8 text-center sm:mb-12 md:mb-16">
					<h2 className="mb-4 font-serif text-3xl font-bold text-slate-800 sm:mb-6 sm:text-4xl md:text-5xl">
						Mon Parcours
					</h2>
					<p className="mx-auto px-4 text-base text-slate-600 sm:text-lg">
						Une évolution professionnelle riche, alliant expertise technique et
						passion créative.
					</p>
				</div>

				{/* Timeline */}
				<div className="relative">
					<div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform rounded-full bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg md:block"></div>

					{reversedTimelineData.map((item, index) => {
						const animConfig = animationData[index % animationData.length];
						const isVisible = visibleItems.has(index);

						const animationStyle = {
							opacity: isVisible ? "1" : animConfig.starting_opacity,
							transform:
								isVisible ? "translateY(0) translateX(0) scale(1)"
								: animConfig.style === "slideBottom" ?
									`translateY(${animConfig.intensity}) scale(0.95)`
								:	"translateY(0) scale(0.95)",
							transition:
								isVisible ?
									`all ${animConfig.duration} cubic-bezier(0.4, 0, 0.2, 1) ${animConfig.delay}`
								:	"none",
						};

						return (
							<div
								key={item.id}
								className="relative mb-8 last:mb-0 sm:mb-12 md:mb-16"
								ref={(el) => {
									itemRefs.current[index] = el;
								}}
								data-index={index}
								style={animationStyle}
							>
								<div
									className={`md:flex md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
									style={{
										willChange: isVisible ? "auto" : "transform, opacity",
									}}
								>
									{/* Icon section */}
									<div
										className={`mb-4 w-full md:mb-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
									>
										<div
											className={cn(
												"text-center",
												index % 2 === 0 ? "md:text-right" : "md:text-left",
											)}
										>
											<div className="inline-flex h-50 w-50 items-center justify-center overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:h-70 sm:w-70 md:h-90 md:w-90">
												<Image
													src={
														timelineImages[item.id] || "/images/placeholder.jpg"
													}
													alt={`${item.title} - ${item.company}`}
													width={360}
													height={360}
													className="h-full w-full object-cover"
												/>
											</div>
										</div>
									</div>

									{/* Content section */}
									<div
										className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
									>
										<div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-xl transition-all duration-300 hover:shadow-2xl sm:p-6 md:p-8">
											{/* Badge année */}
											<div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 text-xs font-semibold text-white sm:mb-4 sm:px-4 sm:py-2 sm:text-sm">
												<Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
												{item.year}
											</div>

											{/* Titre et entreprise */}
											<h3 className="mb-2 text-lg font-bold text-slate-800 sm:text-xl md:text-2xl">
												{item.title}
											</h3>
											<div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-600 sm:text-base">
												<Award className="h-3 w-3 sm:h-4 sm:w-4" />
												{item.company}
											</div>
											<div className="mb-3 flex items-center gap-2 text-xs text-slate-500 sm:mb-4 sm:text-sm">
												<MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
												{item.location}
											</div>

											{/* Description */}
											<div className="mb-4 text-sm leading-relaxed text-slate-600 sm:mb-6 sm:text-base">
												{item.description}
											</div>

											{/* Réalisations */}
											<div className="space-y-2">
												<h4 className="text-xs font-semibold tracking-wide text-slate-700 uppercase sm:text-sm">
													Réalisations clés
												</h4>
												<div className="flex flex-wrap gap-1 sm:gap-2">
													{item.achievements.map((achievement, i) => (
														<span
															key={i}
															className="rounded-full border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 px-2 py-1 text-xs font-medium text-blue-700 sm:px-3 sm:py-1"
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
						);
					})}
				</div>
			</div>
		</section>
	);
}
