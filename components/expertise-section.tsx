"use client";
import { Card } from "@/components/ui/card";
import {
	Bike,
	CakeSlice,
	ChefHat,
	Lightbulb,
	Plane,
	Trophy,
} from "lucide-react";
import Link from "next/link";

const expertiseAreas = [

	{
		icon: ChefHat,
		title: "Le CAP pâtissier",
		description: "2015",
		link: "/cap-patissier",
	},
		{
		icon: CakeSlice,
		title: "Mes réalisations sucrées",
		description: " Quelques exemples",
		link: "/creations",
	},
	{
		icon: Trophy,
		title: "Concours",
		description: "Depuis 2006",
		link: "/concours",
	},
	{
		icon: Plane,
		title: "Ouverture sur le monde",
		description: "Voyages",
		link: "/voyages",
	},


	{
		icon: Lightbulb,
		title: "100 % Logique",
		description: "2024",
		link: "/logique",
	},
	{
		icon: Bike,
		title: "Aventure",
		description: "La Loire à vélo",
		link: "/loire-velo",
	},
];

export function ExpertiseSection() {
	return (
		<div id="expertise-section">
		<section className="bg-gradient-to-br from-purple-50 to-pink-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 ">

			<div className="mx-auto max-w-6xl">
				<div className="mb-8 text-center sm:mb-12">
					<h2 className=" font-serif text-3xl font-bold text-slate-800 mb-4 sm:mb-6 sm:text-4xl md:text-5xl mt-5">
						Mes challenges
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
					{expertiseAreas.map((area, index) => (
						<Link key={index} href={area.link} className="block">
							<Card className="group relative cursor-pointer p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg sm:p-6 overflow-hidden">
								<div className="relative z-10">
									<area.icon className="text-accent mx-auto mb-3 h-10 w-10 sm:mb-4 sm:h-12 sm:w-12" />
									<h3 className="mb-2 text-sm font-semibold text-balance sm:mb-3 sm:text-base">
										{area.title}
									</h3>
									<p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
										{area.description}
									</p>
								</div>

								<div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-purple-900/60 opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-opacity duration-300">
									<span className="text-white text-base font-semibold">pour en découvrir plus &gt; </span>
								</div>
							</Card>
						</Link>
					))}
				</div>
			</div>

		</section>
		</div>
	);
}
