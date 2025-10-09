import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VoyagesPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
			{/* Header */}
			<Header />
			<header className="bg-white shadow-sm">
				<div className="mt-34 lg:mt-25 mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
					<Link
						href="/"
						className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
					>
						<ArrowLeft className="h-5 w-5" />
						Retour à l'accueil
					</Link>
				</div>
			</header>

			{/* Quote Section */}
			<section className="bg-white px-4 py-16">
				<div className="mx-auto max-w-4xl text-center">
					{/* Placeholder Image */}
					<div className="mb-8">
						<div className="mx-auto flex w-full max-w-2xl items-center justify-center border-2 border-gray-300 bg-gray-50">
							<Image
								src="/images/carte-monde.png"
								alt="Carte du monde"
								width={800}
								height={400}
								className="h-full w-full object-cover"
							/>
						</div>
					</div>

					{/* Quote */}
					<blockquote className="font-geometria mb-4 text-lg leading-relaxed text-gray-800 md:text-xl">
						"Le véritable voyage de découverte ne consiste pas à chercher de
						nouveaux paysages, mais à avoir de nouveaux yeux."
					</blockquote>

					{/* Attribution */}
					<cite className="text-base text-gray-600 italic">Marcel Proust</cite>
				</div>
			</section>

			{/* Travel Content Section */}
			<section className="bg-gray-100 px-4 py-16">
				<div className="mx-auto max-w-4xl">
					{/* Main Title */}
					<h1 className="font-geometria mb-8 text-xl leading-tight font-bold text-black md:text-xl">
						<span className="font-serif font-light text-purple-600">
							Voyager
						</span>
						, c'est partir à l'aventure à chaque instant.
					</h1>

					{/* Content Paragraphs */}
					<div className="font-geometria space-y-6 text-base leading-relaxed text-gray-800 md:text-lg">
						<p>
							Un voyage est une expérience chargée d'émotions et en apprentissages.
							Il est une source inépuisable de nouveaux défis et de découvertes.
							Il est aussi l'occasion de sortir de sa routine et de se
							dépasser face à des situations nouvelles et souvent imprévues.
							Voyager, c'est aussi apprendre à se passer du superflu et à aller à
							l'essentiel en appréciant les bonheurs les plus simples.
						</p>

						<p>
							En outre, le voyage permet surtout d'ouvrir son esprit à d'autres
							façons de penser et à développer sa créativité.
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
