"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
	const { t } = useLanguage();

	return (
		<section className="bg-gradient-to-br from-pink-50 to-purple-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
			<div className="mx-auto max-w-4xl text-center">
				<h2 className="mb-4 font-serif text-3xl font-bold text-slate-800 sm:mb-6 sm:text-4xl md:text-5xl">
					Contact pro.
				</h2>
				<div className="text-muted-foreground mx-auto mb-8 max-w-2xl px-4 text-base sm:mb-12 sm:text-lg">
					<p className="mb-2">
						Florence Viprey, chef de projet en Recherche et Développement et
						pâtissière
					</p>
					<p className="mb-2">Envie d'en connaître davantage ?</p>
					<p>Échangeons !</p>
				</div>

				<div className="mb-6 sm:mb-10">
					<div className="mx-auto max-w-md">
						<Button
							asChild
							size="lg"
							className="bg-accent hover:bg-accent/90 text-accent-foreground w-full px-8 py-3 text-base sm:px-12 sm:py-4 sm:text-lg md:px-16 md:text-xl"
						>
							<a
								href="mailto:viprey.florence@gmail.com"
								rel="noreferrer nofollow"
							>
								<Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
								Prendre Contact
							</a>
						</Button>
					</div>
				</div>

				<div className="mx-auto mb-6 grid max-w-md grid-cols-1 gap-4 sm:mb-8 sm:grid-cols-2 sm:gap-6">
					<a
						href="http://www.linkedin.com/in/florence-viprey-ba490893"
						target="_blank"
						rel="noreferrer nofollow"
					>
						<Card className="p-4 text-center transition-shadow hover:shadow-lg sm:p-6 md:p-8">
							<Linkedin className="text-accent mx-auto mb-3 h-8 w-8 sm:mb-4 sm:h-9 sm:w-9" />
							<h3 className="mb-1 text-sm font-semibold sm:mb-2 sm:text-base">
								LinkedIn
							</h3>
							<p className="text-muted-foreground text-xs sm:text-sm">
								Florence Viprey
							</p>
						</Card>
					</a>

					<a
						href="https://www.instagram.com/florences_challenges/"
						target="_blank"
						rel="noreferrer nofollow"
					>
						<Card className="p-4 text-center transition-shadow hover:shadow-lg sm:p-6 md:p-8">
							<Instagram className="text-accent mx-auto mb-3 h-8 w-8 sm:mb-4 sm:h-9 sm:w-9" />
							<h3 className="mb-1 text-sm font-semibold sm:mb-2 sm:text-base">
								Instagram
							</h3>
							<p className="text-muted-foreground text-xs sm:text-sm">
								@florences_challenges
							</p>
						</Card>
					</a>
				</div>
			</div>
		</section>
	);
}
