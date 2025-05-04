"use client"

import Image from "next/image"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Category {
  name: string
  image: string
}

export default function CategoriesSection() {
  const { t, i18n } = useTranslation()
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
  const isRTL = i18n.language === "ar"
  const visibleCategories = 4

  const categories = [
    { name: t("categories.beads"), image: "/rocailles.jpg" },
    { name: t("categories.sequins"), image: "/paillettes.jpg" },
    { name: t("categories.braids"), image: "/galons.jpg" },
    { name: t("categories.pearls"), image: "/perles.jpg" },
    { name: t("categories.stones"), image: "/pierres.jpg" },
    { name: t("categories.tools"), image: "/outils.jpg" },
    { name: t("categories.accessories"), image: "/accessoires.jpg" },
    { name: t("categories.kits"), image: "/kits.jpg" },
  ]

  const nextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % (categories.length - visibleCategories + 1))
  }

  const prevCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex === 0 ? categories.length - visibleCategories : prevIndex - 1))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-6 uppercase tracking-wide">
          {t("categories.title")}
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">{t("categories.subtitle")}</p>

        <div className="relative">
          <button
            onClick={prevCategory}
            className={`absolute ${isRTL ? "right-0" : "left-0"} top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10 hover:bg-gray-100 transition`}
          >
            {isRTL ? (
              <ChevronRight size={24} className="text-gray-700" />
            ) : (
              <ChevronLeft size={24} className="text-gray-700" />
            )}
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
            {categories.slice(currentCategoryIndex, currentCategoryIndex + visibleCategories).map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-50 aspect-square relative overflow-hidden rounded-md shadow-sm">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-2xl">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextCategory}
            className={`absolute ${isRTL ? "left-0" : "right-0"} top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10 hover:bg-gray-100 transition`}
          >
            {isRTL ? (
              <ChevronLeft size={24} className="text-gray-700" />
            ) : (
              <ChevronRight size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
