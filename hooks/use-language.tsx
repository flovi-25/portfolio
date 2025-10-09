"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";

type Language = "fr" | "en";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

// Translation dictionaries
const translations = {
	fr: {
		// Header
		menu: "Menu",
		about: "À propos",
		cv_fr: "CV en FR",
		linkedin: "LinkedIn",
		instagram: "Instagram",
		contact: "CONTACT",

		// Hero Section
		hero_title: "Hey, moi, c'est Florence Viprey !",
		hero_subtitle:
			"Je suis chef de projet en Recherche et Développement en agroalimentaire et voici qui je suis...",

		// About Section
		about_title: "À propos de moi",
		about_p1:
			"Passionnée par l'innovation alimentaire et la pâtisserie, j'ai construit mon parcours professionnel pour le rendre le plus complet possible dans l'univers exigeant du sucré.",
		about_p2:
			"Mon profil allie une double expertise : la théorie par mon master en Innovation en Agro alimentaire (à l'ESIAB) et la pratique par mon CAP Pâtisserie ainsi que mon expérience terrain en production (via mon poste de chef de ligne chez Erhard et les industrialisations de produits réalisées chez Pasquier ou Materne).",
		about_p3:
			"Mon expertise couvre la formulation de produits, l'analyse sensorielle, l'analyse des risques et la gestion de projets R&D dans l'industrie agroalimentaire.",
		about_p4:
			"Mes atouts pour un poste en R&D sont : ma créativité et ma fibre innovante, mon approche terrain avec mon expérience en production et en industrialisation, mes compétences en management et coordination, ainsi que ma mobilité et mon adaptabilité pour les opportunités en France comme à l'international.",
		years_experience: "Années d'expérience",
		projects_completed: "Projets réalisés",
		companies_helped: "Entreprises accompagnées",
		innovation_awards: "Prix d'innovation",

		// Recipe Section
		recipe_bonus: "Bonus",
		recipe_title: "Coques de Macarons",
		recipe_description:
			"Ma recette signature pour réussir des coques de macarons parfaites. Technique professionnelle pour obtenir des macarons lisses, brillants et avec une belle collerette.",
		difficulty: "Difficulté",
		advanced: "Avancé",
		total: "Total",
		people: "Personnes",
		ingredients: "Ingrédients",
		instructions: "Instructions",
		maintain_screen_on: "Maintenir l'écran allumé",

		// Language selector
		language: "Langue",
	},
	en: {
		// Header
		menu: "Menu",
		about: "About",
		cv_fr: "CV in FR",
		linkedin: "LinkedIn",
		instagram: "Instagram",
		contact: "CONTACT",

		// Hero Section
		hero_title: "Hey, I'm Florence Viprey!",
		hero_subtitle:
			"I'm a project manager in Food Research and Development and here's who I am...",

		// About Section
		about_title: "About me",
		about_p1:
			"Passionate about food innovation and Pastry, I have built my professional career to make it as complete as possible in the demanding world of sweet treats.",
		about_p2:
			"My profile combines dual expertise; theoretical through my Master's in Food Innovation (at ESIAB) and practical through my CAP Pastry + my field experience in production (via my position as line manager at Erhard or product industrializations carried out at Pasquier or Materne).",
		about_p3:
			"My expertise covers product formulation, sensory analysis, risk analysis and R&D project management in the food industry.",
		about_p4:
			"My strengths for an R&D position are: My creativity and innovation fiber, my field approach with my experience in production and industrialization, my management and coordination skills, as well as my mobility and adaptability for opportunities in France and internationally.",
		years_experience: "Years of experience",
		projects_completed: "Projects completed",
		companies_helped: "Companies helped",
		innovation_awards: "Innovation awards",

		// Recipe Section
		recipe_bonus: "Bonus",
		recipe_title: "Macaron Shells",
		recipe_description:
			"My signature recipe for perfect macaron shells. Professional technique to achieve smooth, shiny macarons with a beautiful collar.",
		difficulty: "Difficulty",
		advanced: "Advanced",
		total: "Total",
		people: "People",
		ingredients: "Ingredients",
		instructions: "Instructions",
		maintain_screen_on: "Keep screen ON",

		// Language selector
		language: "Language",
	},
};

function detectBrowserLanguage(): Language {
	if (typeof window === "undefined") return "fr";

	const browserLang = navigator.language.toLowerCase();
	if (browserLang.startsWith("en")) return "en";
	return "fr"; // Default to French
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguageState] = useState<Language>("fr");

	useEffect(() => {
		// Check localStorage first, then browser preference
		const savedLang = localStorage.getItem("preferred-language") as Language;
		if (savedLang && (savedLang === "fr" || savedLang === "en")) {
			setLanguageState(savedLang);
		} else {
			const detectedLang = detectBrowserLanguage();
			setLanguageState(detectedLang);
		}
	}, []);

	const setLanguage = (lang: Language) => {
		setLanguageState(lang);
		localStorage.setItem("preferred-language", lang);
	};

	const t = (key: string): string => {
		return (
			translations[language][
				key as keyof (typeof translations)[typeof language]
			] || key
		);
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
