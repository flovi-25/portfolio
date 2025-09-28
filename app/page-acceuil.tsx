import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { TimelineSection } from "@/components/timeline-section";
import { RecetteSection } from "@/components/recette-section";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header />
			<HeroSection />
			<AboutSection />
			<ExpertiseSection />
			<TimelineSection />
			<RecetteSection />
			<ContactSection />
			<Footer />
		</main>
	);
}
