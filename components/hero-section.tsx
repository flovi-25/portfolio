"use client";

import { useLanguage } from "@/hooks/use-language";
import Image from "next/image";

export function HeroSection() {
	const { t } = useLanguage();

	return (
		<section className="relative h-[70vh] overflow-hidden">
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="relative h-full w-full max-w-7xl">
					<Image
						src="/images/macaron-fv.jpg"
						alt="fv"
						className="object-cover opacity-50"
						priority
						fill
					/>
				</div>
				{/* Dark overlay for better text readability */}
				<div className="absolute inset-0 bg-black/30"></div>
			</div>

			{/* Superposed Text Content */}
			<div className="relative z-10 flex min-h-[70vh] items-center justify-center px-4">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="mt-50 mb-4 font-serif text-5xl leading-tight font-normal text-balance text-white drop-shadow-lg md:mt-70 md:text-7xl">
						{t("hero_title")}
					</h1>

					<p className="mx-auto max-w-2xl px-4 text-xl leading-relaxed text-white/90 drop-shadow-md">
						{t("hero_subtitle")}
					</p>
				</div>
			</div>
		</section>
	);
}
