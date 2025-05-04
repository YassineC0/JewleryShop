"use client"

import Image from "next/image"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Product {
  category: string
  name: string
  price: string
  image: string
}

interface ProductSectionProps {
  title: string
  products: Product[]
  bgColor?: "white" | "gray"
}

export default function ProductSection({ title, products, bgColor = "white" }: ProductSectionProps) {
  const { t, i18n } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const isRTL = i18n.language === "ar"
  const visibleProducts = 4

  const nextProducts = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (products.length - visibleProducts + 1))
  }

  const prevProducts = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - visibleProducts : prevIndex - 1))
  }

  return (
    <section className={`py-20 ${bgColor === "gray" ? "bg-gray-50" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 uppercase tracking-wide">{title}</h2>

        <div className="relative">
          <button
            onClick={prevProducts}
            className={`absolute ${isRTL ? "right-0" : "left-0"} top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10 hover:bg-gray-100 transition`}
          >
            {isRTL ? (
              <ChevronRight size={24} className="text-gray-700" />
            ) : (
              <ChevronLeft size={24} className="text-gray-700" />
            )}
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
            {products.slice(currentIndex, currentIndex + visibleProducts).map((product, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 aspect-square relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="font-serif text-lg mb-2">{product.name}</h3>
                  <p className="text-xl font-medium text-gold-500 mt-2">
                    {product.price} {t("general.currency")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextProducts}
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
