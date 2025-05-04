"use client"

import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import "@/i18n"

// Components
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProductSection from "@/components/product-section"
import CategoriesSection from "@/components/categories-section"
import ExcellenceSection from "@/components/excellence-section"
import PromotionSection from "@/components/promotion-section"
import LocationSection from "@/components/location-section"
import Footer from "@/components/footer"

// Data
import { useProductData } from "@/utils/product-data"

export default function Home() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"
  const { rocaillesProducts, galonsProducts, pierresProducts } = useProductData()

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
  }, [isRTL])

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      <HeroSection />

      {/* خرز وترتر - Rocailles et paillettes */}
      <ProductSection title={t("products.beadsSequins")} products={rocaillesProducts} bgColor="white" />

      {/* شرائط وآللئ - Galons et perles */}
      <ProductSection title={t("products.braidsAndPearls")} products={galonsProducts} bgColor="gray" />

      {/* أحجار للخياطة - Pierres à coudre */}
      <ProductSection title={t("products.sewingStones")} products={pierresProducts} bgColor="white" />

      <CategoriesSection />
      <ExcellenceSection />
      <PromotionSection />
      <LocationSection />
      <Footer />
    </div>
  )
}
