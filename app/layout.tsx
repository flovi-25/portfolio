import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { LanguageProvider } from "@/hooks/use-language";

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
	title: "Florence Viprey - Portfolio",
	description:
		"Chef de projet en Recherche et Développement en Agro-alimentaire",
	generator: "v0.app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
			<body className="font-sans antialiased">
				<LanguageProvider>
					<Suspense fallback={null}>{children}</Suspense>
				</LanguageProvider>
			</body>
		</html>
	);
}
