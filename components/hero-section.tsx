"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function HeroSection() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error)
      })
    }
  }, [])

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-black">
        <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="/jewlery.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <Image src="/hero-jewelry.jpg" alt={t("hero.title")} fill className="object-cover" priority />
        </video>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className={`absolute inset-0 flex flex-col justify-center px-4 md:px-16`}>
        <div className={`max-w-3xl ${isRTL ? "ml-auto text-right" : "mr-auto text-left"}`}>
          <p className="text-white text-xl md:text-2xl italic mb-4 font-light">{t("hero.discover")}</p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-white text-xl md:text-2xl mb-10 font-light">{t("hero.subtitle")}</p>
          <button className="bg-gold-500 text-white px-10 py-4 uppercase tracking-wider hover:bg-gold-600 transition duration-300 text-base font-medium">
            {t("general.shopNow")}
          </button>
        </div>
      </div>
    </section>
  )
}
