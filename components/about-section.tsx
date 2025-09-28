"use client";

import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";

export function AboutSection() {
	const { t } = useLanguage();

	return (
		<section className="bg-gradient-to-br from-pink-50 to-purple-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-[2fr_1fr] lg:gap-20">
					<div>
						<h2 className="mb-4 font-serif text-3xl font-bold text-balance sm:mb-6 sm:text-4xl md:text-5xl">
							{t("about_title")}
						</h2>
						<div className="text-muted-foreground space-y-4 leading-relaxed sm:space-y-6 sm:text-justify">
							<p className="text-sm sm:text-base">{t("about_p1")}</p>
							<p className="text-sm sm:text-base">{t("about_p2")}</p>
							<p className="text-sm sm:text-base">{t("about_p3")}</p>
							<p className="text-sm sm:text-base">{t("about_p4")}</p>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1">
						<Card className="p-4 text-center sm:p-6">
							<div className="text-accent mb-1 text-2xl font-bold sm:text-3xl">
								8+
							</div>
							<div className="text-muted-foreground text-xs sm:text-sm">
								{t("years_experience")}
							</div>
						</Card>
						<Card className="p-4 text-center sm:p-6">
							<div className="text-accent mb-1 text-2xl font-bold sm:text-3xl">
								20+
							</div>
							<div className="text-muted-foreground text-xs sm:text-sm">
								{t("projects_completed")}
							</div>
						</Card>
						<Card className="p-4 text-center sm:p-6">
							<div className="text-accent mb-1 text-2xl font-bold sm:text-3xl">
								4
							</div>
							<div className="text-muted-foreground text-xs sm:text-sm">
								{t("companies_helped")}
							</div>
						</Card>
						<Card className="p-4 text-center sm:p-6">
							<div className="text-accent mb-1 text-2xl font-bold sm:text-3xl">
								3
							</div>
							<div className="text-muted-foreground text-xs sm:text-sm">
								{t("innovation_awards")}
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
