import { LanguageProvider } from "@/hooks/use-language";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import type React from "react";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Florence Viprey",
	description:
		"Chef de projet en Recherche et Développement en Agro-alimentaire",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// TODO: ensure `lang` is updated when changing language
		<html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
			<body className="font-sans antialiased">
				<LanguageProvider>
					<Suspense fallback={null}>{children}</Suspense>
				</LanguageProvider>
			</body>
			<Script
				src="https://plsbl.zwyx.dev/js/script.js"
				data-domain="florenceviprey.com"
				defer
			/>
		</html>
	);
}
