"use client";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExpertiseSection } from "@/components/expertise-section";

import { TimelineSection } from "@/components/timeline-section";
import { RecetteSection } from "@/components/recette-section";
import { ContactSection } from "@/components/contact-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Page() {
	return (
		<div className="bg-background min-h-screen">
			<Header />

			<main className="flex flex-col">
				<HeroSection />
				<AboutSection />
				<ExpertiseSection />

				<TimelineSection />
				<RecetteSection />
				<ContactSection />
			</main>
			<Footer />
		</div>
	);
}
