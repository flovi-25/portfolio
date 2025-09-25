export function HeroSection() {
  return (
    <section className="min-h-[50vh] sm:min-h-[40vh] md:min-h-[40vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-balance leading-tight mb-4 sm:mb-6">
            Hey, moi c'est <span className="font-bold text-foreground">Florence Viprey</span> !
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Je suis chef de projet en Recherche et Développement en Agro-alimentaire et voici qui je suis...
          </p>
        </div>
      </div>
    </section>
  )
}
