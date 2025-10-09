"use client";

import type React from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const images = [
	{
		id: 1,
		image: "/images/macarons.jpg",
		title: "Réalisation 1",
	},
	{
		id: 2,
		image: "/images/paris-brest.jpg",
		title: "Réalisation 2",
	},
	{
		id: 3,
		image: "/images/paris-brest(1).jpg",
		title: "Réalisation 3",
	},
	{
		id: 4,
		image: "/images/buche-ananas.jpg",
		title: "Réalisation 4",
	},
	{
		id: 5,
		image: "/images/chouquettes.jpg",
		title: "Réalisation 5",
	},
	{
		id: 6,
		image: "/images/royal.jpg",
		title: "Réalisation 6",
	},
	{
		id: 7,
		image: "/images/dessert-marrons.JPG",
		title: "Réalisation 7",
	},
	{
		id: 8,
		image: "/images/macarons-boite.jpg",
		title: "Réalisation 8",
	},
	{
		id: 9,
		image: "/images/brioche-nanterre.jpg",
		title: "Réalisation 9",
	},
	{
		id: 10,
		image: "/images/tarte.jpg",
		title: "Réalisation 10",
	},
	{
		id: 11,
		image: "/images/poire-caramel.jpg",
		title: "Réalisation 11",
	},
	{
		id: 12,
		image: "/images/buche-pecan.jpg",
		title: "Réalisation 12",
	},
];

export default function CapPatissierPage() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [currentX, setCurrentX] = useState(0);
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [showCursor, setShowCursor] = useState(false);
	const sliderRef = useRef<HTMLDivElement>(null);

	const [imageLoadings, setImageLoadings] = useState<boolean[]>(
		images.map(() => true),
	);

	const handleMouseDown = (e: React.MouseEvent) => {
		setIsDragging(true);
		setStartX(e.clientX);
		setCurrentX(e.clientX);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		setCursorPosition({ x: e.clientX, y: e.clientY });

		if (!isDragging) return;
		setCurrentX(e.clientX);
	};

	const handleMouseUp = () => {
		if (!isDragging) return;

		const diff = startX - currentX;
		const threshold = 50; // Minimum distance to trigger slide change

		if (Math.abs(diff) > threshold) {
			if (diff > 0) {
				// Swipe left - next slide
				setCurrentSlide((prev) => (prev + 1) % images.length);
			} else {
				// Swipe right - previous slide
				setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
			}
		}

		setIsDragging(false);
		setStartX(0);
		setCurrentX(0);
	};

	const handleMouseEnter = () => {
		setShowCursor(true);
	};

	const handleMouseLeave = () => {
		setShowCursor(false);
		handleMouseUp();
	};

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		setIsDragging(true);
		setStartX(e.touches[0].clientX);
		setCurrentX(e.touches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging) return;
		setCurrentX(e.touches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!isDragging) return;

		const diff = startX - currentX;
		const threshold = 50; // Minimum distance to trigger slide change

		if (Math.abs(diff) > threshold) {
			if (diff > 0) {
				// Swipe left - next slide
				setCurrentSlide((prev) => (prev + 1) % images.length);
			} else {
				// Swipe right - previous slide
				setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
			}
		}

		setIsDragging(false);
		setStartX(0);
		setCurrentX(0);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
			{showCursor && (
				<div
					className="pointer-events-none fixed z-50 hidden -translate-x-1/2 -translate-y-full transform md:block"
					style={{
						left: cursorPosition.x,
						top: cursorPosition.y - 10,
					}}
				>
					<div className="rounded-md bg-black/90 px-3 py-2 text-xs font-medium tracking-wide whitespace-nowrap text-white uppercase shadow-lg">
						Cliquez & glissez
					</div>
				</div>
			)}

			{/* Header */}
			<Header />
			<header className="bg-white shadow-sm">
				<div className="mx-auto mt-34 max-w-7xl px-4 py-4 sm:px-6 lg:mt-25 lg:px-8">
					<Link
						href="/"
						className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
					>
						<ArrowLeft className="h-5 w-5" />
						Retour à l'accueil
					</Link>
				</div>
			</header>

			{/* Hero Section */}

			<section className="py-4 sm:py-6 lg:py-8">
				<div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
					<h1 className="text-foreground mb-4 font-serif text-3xl font-light text-purple-700 md:text-4xl">
						Exemples de réalisations pour préparer mon CAP Pâtissier en candidat
						libre
					</h1>
				</div>
			</section>

			{/* Slider Section */}
			<section className="py-4 sm:py-6 lg:py-8">
				<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
					<div className="relative">
						<div
							ref={sliderRef}
							className="relative overflow-hidden rounded-lg select-none"
							onMouseDown={handleMouseDown}
							onMouseMove={handleMouseMove}
							onMouseUp={handleMouseUp}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							onTouchStart={handleTouchStart}
							onTouchMove={handleTouchMove}
							onTouchEnd={handleTouchEnd}
							style={{ cursor: showCursor ? "none" : "grab" }}
						>
							<Card className="border-0 shadow-lg">
								<div className="relative aspect-square w-full max-w-[1080px]">
									<div
										className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br transition-all duration-300 ${
											isDragging ? "scale-[0.98]" : ""
										}`}
									>
										{/* Loading Spinner */}
										{imageLoadings[currentSlide] && (
											<div className="absolute inset-0 z-10 flex items-center justify-center bg-white/50">
												<div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600"></div>
											</div>
										)}

										<div className="text-muted-foreground text-center">
											<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/80">
												{images.map(({ id, image, title }, i) => (
													<Image
														key={id}
														className={cn(
															"pointer-events-none",
															currentSlide !== i && "hidden",
														)}
														src={image}
														alt={title}
														priority={i - currentSlide < 3}
														fill
														onLoadingComplete={() =>
															setImageLoadings((prev) => {
																prev[i] = false;
																return [...prev];
															})
														}
													/>
												))}
											</div>
											<p className="text-sm font-medium">
												{images[currentSlide].title}
											</p>
										</div>
									</div>
								</div>
							</Card>
						</div>

						<div className="mt-6 flex justify-center space-x-2">
							{images.map((_, index) => (
								<button
									key={index}
									onClick={() => goToSlide(index)}
									className={`relative flex items-center justify-center transition-all duration-200 ${
										index === currentSlide ? "h-6 w-6" : (
											"h-6 w-6 hover:scale-110"
										)
									}`}
									aria-label={`Aller à l'image ${index + 1}`}
								>
									{index === currentSlide ?
										<div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-purple-600 bg-transparent">
											<div className="h-2 w-2 rounded-full bg-purple-600"></div>
										</div>
									:	<div className="h-2 w-2 rounded-full bg-gray-300"></div>}
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
