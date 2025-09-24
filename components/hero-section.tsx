export function HeroSection() {
  return (
  
    <section className="min-h-[60vh] flex items-center justify-center px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-balance leading-tight mb-6">
            Hey, moi c'est <span className="font-bold text-foreground">Florence Viprey</span> !
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Je suis chef de projet en Recherche et Développement en Agro-alimentaire et voici qui je suis...
          </p>
        </div>
      </div>
    </section>
  )
}
