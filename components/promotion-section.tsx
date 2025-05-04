"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function PromotionSection() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={isRTL ? "text-right" : "text-left"}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              {t("promotion.discount")}
            </h2>
            <h3 className="text-2xl md:text-3xl font-serif mb-6">{t("promotion.title")}</h3>
            <p className="text-gray-700 text-lg mb-8">{t("promotion.description")}</p>
            <div className={`flex ${isRTL ? "justify-end space-x-reverse" : "justify-start"} space-x-4`}>
              <Link
                href="/shop"
                className="bg-white border-2 border-gray-800 text-gray-800 px-6 py-3 text-sm uppercase tracking-wider hover:bg-gray-100 transition duration-300 font-medium"
              >
                {t("general.discoverMore")}
              </Link>
              <Link
                href="/shop"
                className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300 font-medium"
              >
                {t("general.shopNow")}
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] bg-black rounded-lg overflow-hidden">
            <Image src="/promo-image.jpg" alt={t("promotion.title")} fill className="object-cover opacity-90" />
          </div>
        </div>
      </div>
    </section>
  )
}
