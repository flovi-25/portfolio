"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 sm:gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-balance">
              {t("about_title")}
            </h2>
            <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-sm sm:text-base">{t("about_p1")}</p>
              <p className="text-sm sm:text-base">{t("about_p2")}</p>
              <p className="text-sm sm:text-base">{t("about_p3")}</p>
              <p className="text-sm sm:text-base">{t("about_p4")}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            <Card className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">8+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t("years_experience")}</div>
            </Card>
            <Card className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">20+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t("projects_completed")}</div>
            </Card>
            <Card className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">4</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t("companies_helped")}</div>
            </Card>
            <Card className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">3</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t("innovation_awards")}</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
