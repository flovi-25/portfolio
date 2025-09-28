"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export function GallerySection() {
	return (
		<section className="bg-muted/30 px-4 py-20">
			<div className="container mx-auto max-w-6xl">
				<div className="mb-12 text-center">
					<h2 className="text-foreground mb-4 font-serif text-3xl font-light text-purple-700 md:text-4xl">
						Galerie
					</h2>
					<p className="font-geometria text-muted-foreground mx-auto max-w-2xl text-lg">
						Découvrez quelques moments marquants de mes aventures et créations.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<Card className="group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
						<div className="relative aspect-[4/3] overflow-hidden">
							<Image
								src="/images/couture.jpg"
								alt="couture"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
						</div>
					</Card>

					<Card className="group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
						<div className="relative aspect-[4/3] overflow-hidden">
							<Image
								src="/images/cadeau-ludique-1.jpg"
								alt="Mise en place d'un jeu de piste vidéo ludique composé de plusieurs messages de proches et de cadeaux pour de la famille vivant à l'étranger."
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
						</div>
					</Card>

					<Card className="group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
						<div className="relative aspect-[4/3] overflow-hidden">
							<Image
								src="/images/cadeau-ludique-2.jpg"
								alt="Conception d'une boîte cadeau sous la forme d'un escape room personnalisé. Le but étant de faire passer un moment agréable et de bien mériter ses cadeaux de Noël."
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
}
