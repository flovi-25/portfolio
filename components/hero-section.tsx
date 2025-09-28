"use client";

import Image from "next/image";
import { useLanguage } from "@/hooks/use-language";

export function HeroSection() {
	const { t } = useLanguage();

	return (
		<section className="relative min-h-[70vh] overflow-hidden sm:min-h-[60vh] md:min-h-[70vh]">
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="relative h-full w-full">
					<Image
						src="/images/macaron-fv.jpg"
						alt="fv"
						className="object-cover opacity-50"
						priority
					/>
				</div>
				{/* Dark overlay for better text readability */}
				<div className="absolute inset-0 bg-black/30"></div>
			</div>

			{/* Superposed Text Content */}
			<div className="relative z-10 flex min-h-[20vh] items-center justify-center px-4 sm:min-h-[60vh] sm:px-6 md:min-h-[70vh] lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="mt-7 mb-4 font-serif text-3xl leading-tight font-normal text-balance text-white drop-shadow-lg sm:mt-70 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
						{t("hero_title")}
					</h1>

					<p className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-white/90 drop-shadow-md sm:text-lg md:text-xl">
						{t("hero_subtitle")}
					</p>
				</div>
			</div>
		</section>
	);
}
