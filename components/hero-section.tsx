"use client";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Image from "next/image";

const bounceTransition = {
	y: {
		duration: 0.6,
		repeat: Infinity,
		repeatType: "reverse",
		ease: "easeOut"
	}
};

export function HeroSection() {
	const { t } = useLanguage();

	return (
		<section className="relative object-fit-cover left-0 md:right-0 bg-cover overflow-hidden w-full bg-white bg-center p-1em min-h-screen min-w-screen">
			<div className="absolute inset-0 flex items-center justify-center min-h-screen min-w-screen">
				<div className="relative w-full h-full min-h-screen min-w-screen items-center  bg-cover display-none max-w-full  mx-auto overflow-clip ">
					<Image
						src="/images/macaron-fv2.PNG"
						alt="fv"
						priority
						fill
						className="object-cover w-full h-full md:-translate-x-16 transition-transform duration-300"
					/>
				</div>
			</div>

			{/* Superposed Text Content */}
			<div className="relative z-10 flex min-h-[70vh] items-center justify-center px-4">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="mt-60 mb-4 font-serif text-5xl leading-tight font-normal text-balance text-white drop-shadow-lg md:mt-70 md:text-7xl">
						{t("hero_title")}
					</h1>

					<p className="mx-auto  max-w-2xl px-4 text-xl leading-relaxed text-white/90 drop-shadow-md">
						{t("hero_subtitle")}
					</p>

					{/* les deux boutons */}
					<h2 className="absolute inset-0 flex items-end justify-center pointer-events-none pb-10">
						<div className="flex gap-6 pointer-events-auto flex-col mt-5 mb-8 sm:flex-row items-center">
						<Button
						asChild
						size="lg"
						className="bg-pink-800/40 hover:bg-purple-400/50 text-white border border-white/20 shadow-xl px-6 py-3 text-lg"
						>
						<a
							href="#expertise-section"
							className="flex items-center gap-2"
						>
						<FileText className="h-4 w-4" />
						{t("Découvrir mes challenges")}
						</a>
						</Button>
							<Button
							asChild
							size="lg"
							className="bg-pink-800/40 hover:bg-purple-400/50 text-white border border-white/20 shadow-xl px-6 py-3 text-lg"
							>
							<a
								href="/Florence VIPREY cv 2025.pdf"
								target="_blank"
								className="flex items-center gap-2"
								rel="noreferrer nofollow"
							>
							<FileText className="h-4 w-4" />
							{t("Ouvrir mon CV")}
							</a>
						</Button>
						</div>
					</h2>

					{/* Arrow */}
					<p className="flex justify-left  mt-30 mb-8">
										<motion.div
												animate={{
													opacity: [0, 1, 0],
													y:   [-30, 15, -30]
												}}
												transition={{
													duration: 2.4,
													repeat: Infinity,
													ease: 'easeInOut'
												}}
										>
												<Image
														width={68}
														height={52}
														src="/images/chevrons.png"
														alt="scroll down"
												/>
										</motion.div>
					</p>
				</div>
			</div>



		</section>
	);
}
