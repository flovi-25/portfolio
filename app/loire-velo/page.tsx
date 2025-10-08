import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoireVeloPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
			{/* Header */}
			<Header />
			<header className="bg-white shadow-sm">
				<div className="mt-25 mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
					<Link
						href="/"
						className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
					>
						<ArrowLeft className="h-5 w-5" />
						Retour à l'accueil
					</Link>
				</div>
			</header>

			<section className="py-12 sm:py-16 lg:py-20">
				<div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
					<h1 className="mb-6 font-serif text-4xl font-light text-purple-900 sm:text-5xl lg:text-6xl">
						La Loire à Vélo
					</h1>
					<p className="font-geometria mb-2 text-3xl font-bold text-slate-800 sm:mb-4 sm:text-4xl md:text-5xl">
						170 km en vélo à la découverte des châteaux de la Loire
					</p>
				</div>
			</section>

			<section className="relative overflow-hidden">
				<div className="w- full h-full">
					<div className="relative overflow-hidden rounded-2xl shadow-xl">
						{/* Background Image with xx% opacity */}
						<div className="absolute inset-0">
							<Image
								className="h-full w-full object-cover opacity-70"
								src="/images/velo.jpg"
								alt="Vélo avec sa remorque et notre tente de camping lors de notre voyage Loire à vélo"
								fill
							/>
							{/* Dark overlay for better text readability */}
							<div className="absolute inset-0 bg-black/20"></div>
						</div>

						{/* Superposed Text Content */}
						<div className="relative z-10 flex min-h-[1000px] flex-col justify-center p-8 sm:p-12 lg:p-16">
							<h2 className="mb-8 text-3xl font-bold text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
								Un Parcours Exceptionnel
							</h2>
							<div className="backdrop-blur-2xs rounded-xl bg-white/10 p-6 sm:p-8">
								<p className="font-geometria text-lg leading-relaxed text-white drop-shadow-md sm:text-justify sm:text-xl">
									De Blois à Chambord en passant par Chaumond, Amboise,
									Chenonceau ou Cheverny, que notre patrimoine français est
									époustouflant. Ce périple fut une parenthèse suspendue dans le
									temps au rythme doux de mon pédalier et de ma fille de 3 ans
									(bien installée dans sa remorque 😴). Il marqua un tournant
									dans nos vies, nous prouvant que les aventures n'ont pas d'âge
									requis et que la seule limite à nos défis est notre volonté à
									les accomplir.
								</p>
								<br />
								<p className="font-geometria text-lg leading-relaxed text-white drop-shadow-md sm:text-justify sm:text-xl">
									De Nevers à Saint-Nazaire, en passant par Orléans, Blois,
									Tours et Angers, chaque étape révèle les trésors du Val de
									Loire, classé au patrimoine mondial de l'UNESCO. Une aventure
									qui mêle sport, culture et découverte du patrimoine français.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
