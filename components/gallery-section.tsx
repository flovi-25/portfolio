"use client"

import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { Card } from "@/components/ui/card"

export function GallerySection() {
  const { t } = useLanguage()
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light font-serif text-purple-700 text-foreground mb-4">Galerie</h2>
          <p className="text-lg font-geometria text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques moments marquants de mes aventures et créations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/images/couture.jpg"
                alt="couture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Card>

          <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/images/cadeau-ludique-1.jpg"
                alt="Mise en place d'un jeu de piste vidéo ludique composé de plusieurs messages de proches et de cadeaux pour de la famille vivant à l'étranger."
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Card>

          <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/images/cadeau-ludique-2.jpg"
                alt="Conception d'une boîte cadeau sous la forme d'un escape room personnalisé. Le but étant de faire passer un moment agréable et de bien mériter ses cadeaux de Noël."
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
