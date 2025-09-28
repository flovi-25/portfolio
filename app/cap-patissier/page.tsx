"use client"

import type React from "react"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { useState, useRef } from "react"

export default function LogiquePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [showCursor, setShowCursor] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const images = [
    {
      id: 1,
      image: "/images/macarons.jpg",
      title: "Réalisation 1",
    },
    {
      id: 2,
      image: "/images/buche-praline.jpg",
      title: "Réalisation 2",
    },
    {
      id: 3,
      image: "/images/chouquettes.jpg",
      title: "Réalisation 3",
    },
    {
      id: 4,
      image: "/images/brioche.jpg",
      title: "Réalisation 4",
    },
    {
      id: 5,
      image: "/images/tarte.jpg",
      title: "Réalisation 5",
    },
  ]

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setCurrentX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })

    if (!isDragging) return
    setCurrentX(e.clientX)
  }

  const handleMouseUp = () => {
    if (!isDragging) return

    const diff = startX - currentX
    const threshold = 50 // Minimum distance to trigger slide change

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left - next slide
        setCurrentSlide((prev) => (prev + 1) % images.length)
      } else {
        // Swipe right - previous slide
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
      }
    }

    setIsDragging(false)
    setStartX(0)
    setCurrentX(0)
  }

  const handleMouseEnter = () => {
    setShowCursor(true)
  }

  const handleMouseLeave = () => {
    setShowCursor(false)
    handleMouseUp()
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setCurrentX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    setCurrentX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return

    const diff = startX - currentX
    const threshold = 50 // Minimum distance to trigger slide change

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left - next slide
        setCurrentSlide((prev) => (prev + 1) % images.length)
      } else {
        // Swipe right - previous slide
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
      }
    }

    setIsDragging(false)
    setStartX(0)
    setCurrentX(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {showCursor && (
        <div
          className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-full hidden md:block"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y - 10,
          }}
        >
          <div className="bg-black/90 text-white px-3 py-2 rounded-md text-xs font-medium uppercase tracking-wide whitespace-nowrap shadow-lg">
            Click & Swipe
          </div>
        </div>
      )}

      {/* Header */}
      <Header />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-purple-800">
            Exemples de réalisations pour préparer mon CAP Pâtissier en candidat libre
          </h1>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-4 sm:py-6 lg:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="aspect-[4/3] relative">
                   <img
                      src={currentSlide.image}
                      alt={currentSlide.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 group-hover:brightness-110"
                    />
                    
        
               
                </div>
              </Card>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative transition-all duration-200 flex items-center justify-center ${
                    index === currentSlide ? "w-6 h-6" : "w-6 h-6 hover:scale-110"
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                >
                  {index === currentSlide ? (
                    <div className="w-6 h-6 rounded-full border-2 border-purple-600 bg-transparent flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                    </div>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
