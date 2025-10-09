"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Card } from "@/components/ui/card";
import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ConcoursPage() {
	const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

	const recipes = [
		{
			title: "Publication d'une recette",
			image: "/images/livre-cake-show.jpg",
			description:
				"Publication d'une recette dans le livre Le Cake Show de Sophie. Livre de recette paru en 2006 suite à une sélection par Sophie Dudemaine de 80 recettes inédites parmi des milliers de propositions de ces précédents lecteurs.",
			liens: `<a
								href="https://www.fnac.com/a1857553/Sophie-Dudemaine-Cake-show-de-Sophie"
								target="_blank"
								class="underline text-blue-500"
								rel="noreferrer nofollow"
							>
								Voir le livre sur le site de la FNAC
							</a>`,
		},
		{
			title: "Seconde place à un concours régional de cuisine",
			image: "/images/est-republicain.jpg",
			description: "2007 – Organisé par le journal local.",
			liens: "",
		},
		{
			title: "Premier prix au concours interne ESIAB Mon projet en 180'S ",
			image: "/images/dessert-magique.png",
			description:
				"2015 – Il s'agit d'une crème dessert ludique pouvant changer de goût et de couleur en fonction de la volonté du consommateur.",
			liens: " ",
		},
		{
			title:
				"Prix spécial du jury lors de la 10ème édition du Trophée Louis Pasteur",
			image: "/images/louis-pasteur.jpg",
			description:
				"2015 – Notre récompense : passer une journée en compagnie du parrain du concours, Hervé THIS, le célèbre chimiste de l'INRA à l'origine de la Gastronomie moléculaire.",
			liens: `<a
								href="/Communiqué  de presse Trophées  Louis Pasteur Juin2015.pdf"
								target="_blank"
								class="underline text-blue-500"
								rel="noreferrer nofollow"
							>
								Communiqué de presse
							</a> <br /> <a
								href="/Capital 288.pdf"
								target="_blank"
								class="underline text-blue-500"
								rel="noreferrer nofollow"
							>
								Article Capital n288 2015 page 20
							</a>`,
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<Header />

			<header className="bg-white shadow-sm">
				<div className="mx-auto  max-w-7xl px-4 py-4 sm:px-6 lg:mt-25 lg:px-8">
					<Link
						href="/"
						className="group flex items-center gap-2 text-blue-600 transition-all duration-200 hover:gap-3 hover:text-blue-800"
					>
						<ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
						<span className="font-medium">Retour à l'accueil</span>
					</Link>
				</div>
			</header>

			<main className="py-16 sm:py-20 lg:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					{/* Title Section */}
					<div className="mb-12 translate-y-0 text-center opacity-100 transition-all duration-1000">
						<h1 className="mb-8 font-serif text-4xl font-light tracking-wider text-purple-600 transition-colors duration-300 hover:text-purple-700 sm:text-5xl md:text-6xl">
							Concours :
						</h1>
						<div className="mx-auto max-w-4xl">
							<p className="font-geometria text-lg leading-relaxed text-gray-700 sm:text-xl">
								là où commence le dépassement de soi.
							</p>
						</div>
					</div>

					{/* Recipe Cards Grid */}
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
						{recipes.map((recipe, index) => (
							<Card
								key={index}
								className="group translate-y-0 transform cursor-pointer overflow-hidden border-0 bg-white opacity-100 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl"
								onClick={() => setSelectedRecipe(index)}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								<div className="relative overflow-hidden">
									<div className="aspect-[4/5] overflow-hidden">
										<Image
											className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
											src={recipe.image || "/placeholder.svg"}
											alt={recipe.title}
											fill
										/>
									</div>
									<div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-all duration-300 group-hover:from-black/90">
										<h3 className="font-serif text-sm font-medium text-white transition-colors duration-300 group-hover:text-purple-200 sm:text-base">
											{recipe.title}
										</h3>
									</div>
									<div className="absolute top-4 right-4 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
										<div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</main>

			{selectedRecipe !== null && (
				<div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm duration-300">
					<div className="animate-in slide-in-from-bottom-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white shadow-2xl duration-500">
						<div className="relative p-6">
							<button
								onClick={() => setSelectedRecipe(null)}
								className="group absolute top-4 right-4 rounded-full p-2 transition-all duration-200 hover:scale-110 hover:rotate-90 hover:bg-gray-100"
							>
								<X className="h-5 w-5 transition-colors group-hover:text-red-500" />
							</button>

							<div className="pr-12">
								<div className="mb-4">
									<h2 className="font-serif text-2xl text-purple-600">
										{recipes[selectedRecipe].title}
									</h2>
								</div>

								<div className="mb-4">
									<Image
										className="h-64 w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
										src={recipes[selectedRecipe].image || "/placeholder.svg"}
										alt={recipes[selectedRecipe].title}
										width={600}
										height={600}
									/>
								</div>

								<div className="space-y-4">
									<div>
										<h3 className="font-geometria mb-2 font-semibold text-gray-900">
											Description
										</h3>
										<p className="leading-relaxed text-gray-700">
											{recipes[selectedRecipe].description}
										</p>
									</div>

									{recipes[selectedRecipe].liens &&
										recipes[selectedRecipe].liens.trim() !== "" && (
											<div>
												<h3 className="font-geometria mb-2 font-semibold text-gray-900">
													Liens
												</h3>
												<p
													className="text-gray-700"
													dangerouslySetInnerHTML={{
														__html: recipes[selectedRecipe].liens,
													}}
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
	);
}
