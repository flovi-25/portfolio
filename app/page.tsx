"use client";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { RecipeSection } from "@/components/recipe-section";
import { TimelineSection } from "@/components/timeline-section";

export default function Page() {
	return (
	 <div className="bg-white min-h-screen">
			<main className="flex flex-col">
				<HeroSection />
				<Header />
				<AboutSection />
				<TimelineSection />
				<ExpertiseSection />
				<RecipeSection />
				<ContactSection />
			</main>
			<Footer />
	</div>
	);
}
