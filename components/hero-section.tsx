"use client"

import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden min-h-[70vh] sm:min-h-[60vh] md:min-h-[70vh]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
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
      <div className="relative z-10 flex items-center justify-center min-h-[20vh] sm:min-h-[60vh] md:min-h-[70vh] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-7 sm:mt-70 font-serif font-normal text-balance leading-tight mb-4 sm:mb-6 text-white drop-shadow-lg">
            {t("hero_title")}
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4 text-white/90 drop-shadow-md">
            {t("hero_subtitle")}
          </p>
        </div>
      </div>
    </section>
  )
}
