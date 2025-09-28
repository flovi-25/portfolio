"use client";

import { useState, useEffect, useRef } from "react";
import {
	Clock,
	Users,
	ChefHat,
	Heart,
	Share2,
	Utensils,
	Flame,
} from "lucide-react";
import Image from "next/image"; // Added missing Image import from Next.js
import { useLanguage } from "@/hooks/use-language";
import { Card } from "@/components/ui/card";

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
};

export function RecetteSection() {
	const { t } = useLanguage();
	const [activeStep, setActiveStep] = useState(0);
	const [isFavorite, setIsFavorite] = useState(false);
	const [checkedIngredients, setCheckedIngredients] = useState(new Set());
	const [screenWakeLock, setScreenWakeLock] = useState(true);
	const wakeLockRef = useRef(null);
	const timeoutRef = useRef(null);

	useEffect(() => {
		const savedFavorite = localStorage.getItem("recipe-favorite");
		if (savedFavorite !== null) {
			setIsFavorite(JSON.parse(savedFavorite));
		}
	}, []);

	const toggleFavorite = () => {
		const newFavoriteState = !isFavorite;
		setIsFavorite(newFavoriteState);
		localStorage.setItem("recipe-favorite", JSON.stringify(newFavoriteState));
	};

	useEffect(() => {
		const requestWakeLock = async () => {
			if (screenWakeLock && "wakeLock" in navigator) {
				try {
					wakeLockRef.current = await navigator.wakeLock.request("screen");
					console.log("[v0] Screen wake lock activated");

					// Set timeout for 10 minutes
					timeoutRef.current = setTimeout(
						() => {
							if (wakeLockRef.current) {
								wakeLockRef.current.release();
								wakeLockRef.current = null;
								console.log("[v0] Screen wake lock released after 10 minutes");
							}
						},
						10 * 60 * 1000,
					); // 10 minutes
				} catch (err) {
					console.log("[v0] Failed to activate screen wake lock:", err);
				}
			}
		};

		const releaseWakeLock = () => {
			if (wakeLockRef.current) {
				wakeLockRef.current.release();
				wakeLockRef.current = null;
				console.log("[v0] Screen wake lock released");
			}
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = null;
			}
		};

		if (screenWakeLock) {
			requestWakeLock();
		} else {
			releaseWakeLock();
		}

		// Cleanup on unmount
		return () => {
			releaseWakeLock();
		};
	}, [screenWakeLock]);

	const toggleIngredient = (categoryIndex, itemIndex) => {
		const key = `${categoryIndex}-${itemIndex}`;
		const newChecked = new Set(checkedIngredients);
		if (newChecked.has(key)) {
			newChecked.delete(key);
		} else {
			newChecked.add(key);
		}
		setCheckedIngredients(newChecked);
	};

	return (
		<section className="bg-gradient-to-br from-purple-50 to-pink-50 px-6 py-12">
			<div className="mx-auto max-w-6xl">
				{/* Header */}
				<div className="mb-16 text-center">
					<h2 className="mb-6 font-serif text-4xl font-bold text-slate-800 md:text-5xl">
						{t("recipe_bonus")}
					</h2>
				</div>

				{/* Header de la recette */}
				<div className="mb-8 overflow-hidden rounded-3xl bg-white shadow-2xl">
					<div className="md:flex">
						{/* Image */}
						<Card className="group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
							<div className="relative aspect-[4/3] overflow-hidden">
								<Image
									src="/images/macaron-recette.jpg"
									alt="macarons"
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							</div>
						</Card>

						{/* Informations principales */}
						<div className="p-8 md:w-3/5">
							<div className="mb-4 flex items-start justify-between">
								<div>
									<h1 className="mb-3 font-serif text-3xl font-bold text-gray-800 md:text-4xl">
										{t("recipe_title")}
									</h1>
									<p className="mb-4 leading-relaxed text-gray-600">
										{t("recipe_description")}
									</p>
								</div>
								<div className="flex gap-2">
									<button
										onClick={toggleFavorite}
										className={`rounded-full p-2 transition-colors ${isFavorite ? "bg-red-100 text-red-500" : "bg-gray-100 text-gray-500"}`}
									>
										<Heart
											className="h-5 w-5"
											fill={isFavorite ? "currentColor" : "none"}
										/>
									</button>
									<button className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-gray-200">
										<Share2 className="h-5 w-5" />
									</button>
								</div>
							</div>

							{/* Métriques */}
							<div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3">
								<div className="rounded-xl bg-purple-50 p-3 text-center">
									<Clock className="mx-auto mb-1 h-5 w-5 text-purple-500" />
									<div className="text-sm font-semibold text-gray-700">
										{recipeData.totalTime}
									</div>
									<div className="text-xs text-gray-500">{t("total")}</div>
								</div>
								<div className="rounded-xl bg-blue-50 p-3 text-center">
									<Users className="mx-auto mb-1 h-5 w-5 text-blue-500" />
									<div className="text-sm font-semibold text-gray-700">
										{recipeData.servings}
									</div>
									<div className="text-xs text-gray-500">{t("people")}</div>
								</div>
								<div className="rounded-xl bg-green-50 p-3 text-center">
									<Flame className="mx-auto mb-1 h-5 w-5 text-green-500" />
									<div className="text-sm font-semibold text-gray-700">
										{recipeData.difficulty}
									</div>
									<div className="text-xs text-gray-500">{t("difficulty")}</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="grid gap-8 lg:grid-cols-3">
					{/* Ingrédients */}
					<div className="lg:col-span-1">
						<div className="sticky top-6 rounded-2xl bg-white p-6 shadow-xl">
							<div className="mb-6 flex items-center gap-2">
								<Utensils className="h-5 w-5 text-purple-500" />
								<h2 className="text-xl font-bold text-gray-800">
									{t("ingredients")}
								</h2>
							</div>

							{recipeData.ingredients.map((category, categoryIndex) => (
								<div key={categoryIndex} className="mb-6 last:mb-0">
									<h3 className="mb-3 border-b border-gray-200 pb-2 text-sm font-semibold tracking-wide text-gray-700 uppercase">
										{category.category}
									</h3>
									<ul className="space-y-2">
										{category.items.map((ingredient, itemIndex) => (
											<li key={itemIndex} className="flex items-center gap-3">
												<input
													type="checkbox"
													id={`ingredient-${categoryIndex}-${itemIndex}`}
													className="h-4 w-4 rounded text-purple-500 focus:ring-purple-500"
													onChange={() =>
														toggleIngredient(categoryIndex, itemIndex)
													}
												/>
												<label
													htmlFor={`ingredient-${categoryIndex}-${itemIndex}`}
													className={`flex-1 cursor-pointer text-sm ${
														(
															checkedIngredients.has(
																`${categoryIndex}-${itemIndex}`,
															)
														) ?
															"text-gray-400 line-through"
														:	"text-gray-700"
													}`}
												>
													<span className="font-medium text-purple-600">
														{ingredient.quantity}
													</span>{" "}
													{ingredient.name}
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
						<div className="rounded-2xl bg-white p-6 shadow-xl">
							<div className="mb-6 flex items-center justify-between">
								<h2 className="flex items-center gap-2 text-xl font-bold text-gray-800">
									<ChefHat className="h-5 w-5 text-purple-500" />
									{t("instructions")}
								</h2>
								<div className="flex items-center gap-3">
									<label
										htmlFor="screen-wake-lock"
										className="text-sm font-medium text-gray-700"
									>
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
											className={`h-6 w-11 cursor-pointer rounded-full transition-colors ${
												screenWakeLock ? "bg-purple-500" : "bg-gray-300"
											}`}
											onClick={() => setScreenWakeLock(!screenWakeLock)}
										>
											<div
												className={`h-4 w-4 transform rounded-full bg-white shadow-md transition-transform ${
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
										className={`cursor-pointer rounded-xl border p-6 transition-all ${
											activeStep === index ?
												"border-purple-300 bg-purple-50"
											:	"border-gray-200 hover:border-gray-300"
										}`}
										onClick={() => setActiveStep(index)}
									>
										<div className="flex items-start gap-4">
											<div
												className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${
													activeStep === index ?
														"bg-purple-500 text-white"
													:	"bg-gray-200 text-gray-600"
												}`}
											>
												{instruction.step}
											</div>
											<div className="flex-1">
												<div className="mb-2 flex items-center justify-between">
													<h3 className="font-semibold text-gray-800">
														{instruction.title}
													</h3>
													<span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500">
														{instruction.time}
													</span>
												</div>
												<p className="leading-relaxed text-gray-600">
													{instruction.description}
												</p>
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
	);
}
