"use client";
import { Card } from "@/components/ui/card";
import {
	Bike,
	CakeSlice,
	Lightbulb,
	Plane,
	Scissors,
	Trophy,
} from "lucide-react";
import Link from "next/link";

const expertiseAreas = [
	{
		icon: Trophy,
		title: "Concours",
		description: "Depuis 2006",
		link: "/concours",
	},
	{
		icon: CakeSlice,
		title: "Le CAP pâtissier",
		description: "2015",
		link: "/cap-patissier",
	},
	{
		icon: Plane,
		title: "Ouverture sur le monde",
		description: "Voyages",
		link: "/voyages",
	},

	{
		icon: Scissors,
		title: "Créations",
		description: " Quelques exemples",
		link: "/creations",
	},
	{
		icon: Lightbulb,
		title: "100% Logique",
		description: "2024",
		link: "/logique",
	},
	{
		icon: Bike,
		title: "Aventure",
		description: "La loire à vélo",
		link: "/loire-velo",
	},
];

export function ExpertiseSection() {
	return (
		<section className="bg-gradient-to-br from-purple-50 to-pink-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<div className="mb-8 text-center sm:mb-12">
					<h2 className="mb-4 font-serif text-3xl font-bold text-slate-800 sm:mb-6 sm:text-4xl md:text-5xl">
						Mes challenges
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
					{expertiseAreas.map((area, index) => (
						<Link key={index} href={area.link} className="block">
							<Card className="cursor-pointer p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg sm:p-6">
								<area.icon className="text-accent mx-auto mb-3 h-10 w-10 sm:mb-4 sm:h-12 sm:w-12" />
								<h3 className="mb-2 text-sm font-semibold text-balance sm:mb-3 sm:text-base">
									{area.title}
								</h3>
								<p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
									{area.description}
								</p>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
