"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Instagram,
  Facebook,
  Twitter,
  ShoppingCart,
  Heart,
  Search,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "@/components/language-switcher"
import MobileMenu from "@/components/mobile-menu"
import "@/i18n"

export default function Home() {
  const { t, i18n } = useTranslation()
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
  const [currentRocaillesIndex, setCurrentRocaillesIndex] = useState(0)
  const [currentGalonsIndex, setCurrentGalonsIndex] = useState(0)
  const [currentPierresIndex, setCurrentPierresIndex] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isRTL = i18n.language === "ar"

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

  // خرز وترتر - Rocailles et paillettes
  const rocaillesProducts = [
    {
      category: t("categories.beads"),
      name: isRTL ? "خرز زجاجي متعدد الألوان - 50 غرام" : "Perles de verre multicolores - 50g",
      price: "45,00",
      image: "/rocailles1.jpg",
    },
    {
      category: t("categories.beads"),
      name: isRTL ? "خرز كريستال شفاف - 30 غرام" : "Perles de cristal transparent - 30g",
      price: "60,00",
      image: "/rocailles2.jpeg",
    },
    {
      category: t("categories.sequins"),
      name: isRTL ? "ترتر ذهبي لامع - حزمة 20 غرام" : "Paillettes dorées brillantes - 20g",
      price: "35,00",
      image: "/paillettes1.jpg",
    },
    {
      category: t("categories.sequins"),
      name: isRTL ? "ترتر متعدد الألوان للتطريز - 25 غرام" : "Paillettes multicolores pour broderie - 25g",
      price: "40,00",
      image: "/paillettes2.jpg",
    },
    {
      category: t("categories.beads"),
      name: isRTL ? "خرز خشبي طبيعي - 100 قطعة" : "Perles en bois naturel - 100 pièces",
      price: "55,00",
      image: "/rocailles3.jpg",
    },
    {
      category: t("categories.sequins"),
      name: isRTL ? "ترتر فضي نجمي - 15 غرام" : "Paillettes argentées étoilées - 15g",
      price: "30,00",
      image: "/paillettes3.png",
    },
    {
      category: t("categories.beads"),
      name: isRTL ? "خرز سيراميك ملون - 40 غرام" : "Perles en céramique colorées - 40g",
      price: "65,00",
      image: "/rocailles4.jpg",
    },
    {
      category: t("categories.sequins"),
      name: isRTL ? "ترتر هولوغرافي - 20 غرام" : "Paillettes holographiques - 20g",
      price: "50,00",
      image: "/paillettes4.jpg",
    },
  ]

  // شرائط وآللئ - Galons et perles
  const galonsProducts = [
    {
      category: t("categories.braids"),
      name: isRTL ? "شريط مطرز ذهبي - 2 متر" : "Galon brodé doré - 2 mètres",
      price: "75,00",
      image: "/galon1.jpg",
    },
    {
      category: t("categories.pearls"),
      name: isRTL ? "لؤلؤ اصطناعي أبيض - 50 قطعة" : "Perles artificielles blanches - 50 pièces",
      price: "90,00",
      image: "/perle1.webp",
    },
    {
      category: t("categories.braids"),
      name: isRTL ? "شريط زخرفي أحمر - 3 متر" : "Galon décoratif rouge - 3 mètres",
      price: "65,00",
      image: "/galon2.jpg",
    },
    {
      category: t("categories.pearls"),
      name: isRTL ? "لؤلؤ اصطناعي ملون - 30 قطعة" : "Perles artificielles colorées - 30 pièces",
      price: "80,00",
      image: "/perle2.webp",
    },
    {
      category: t("categories.braids"),
      name: isRTL ? "شريط مخملي أسود - 1.5 متر" : "Galon velours noir - 1,5 mètres",
      price: "55,00",
      image: "/galon3.jpg",
    },
    {
      category: t("categories.pearls"),
      name: isRTL ? "لؤلؤ كبير الحجم - 20 قطعة" : "Grosses perles - 20 pièces",
      price: "110,00",
      image: "/perle3.jpg",
    },
    {
      category: t("categories.braids"),
      name: isRTL ? "شريط ساتان أزرق - 2.5 متر" : "Galon satin bleu - 2,5 mètres",
      price: "70,00",
      image: "/galon4.jpg",
    },
    {
      category: t("categories.pearls"),
      name: isRTL ? "لؤلؤ مسطح للخياطة - 40 قطعة" : "Perles plates à coudre - 40 pièces",
      price: "95,00",
      image: "/perle4.jpg",
    },
  ]

  // أحجار للخياطة - Pierres à coudre
  const pierresProducts = [
    {
      category: t("categories.stones"),
      name: isRTL ? "أحجار كريستال شفافة للخياطة - 20 قطعة" : "Pierres en cristal transparent à coudre - 20 pièces",
      price: "120,00",
      image: "/pierre1.jpg",
    },
    {
      category: t("categories.stones"),
      name: isRTL ? "أحجار ملونة مستديرة - 15 قطعة" : "Pierres colorées rondes - 15 pièces",
      price: "95,00",
      image: "/pierre2.jpg",
    },
    {
      category: t("categories.stones"),
      name: isRTL ? "أحجار أكريليك لامعة - 25 قطعة" : "Pierres acryliques brillantes - 25 pièces",
      price: "85,00",
      image: "/pierre3.jpg",
    },
    {
      category: t("categories.stones"),
      name: isRTL ? "أحجار زجاجية مربعة - 12 قطعة" : "Pierres en verre carrées - 12 pièces",
      price: "130,00",
      image: "/pierre4.png",
    },
    {
      category: t("categories.stones"),
      name: isRTL ? "أحجار كريستال ملونة - 18 قطعة" : "Pierres en cristal colorées - 18 pièces",
      price: "140,00",
      image: "/pierre5.jpg",
    },
    {
      category: t("categories.stones"),
      name: isRTL ? "أحجار فاخرة للتطريز - 10 قطعة" : "Pierres de luxe pour broderie - 10 pièces",
      price: "160,00",
      image: "/pierre6.jpg",
    },
    {
      category: t("categories.stones"),
      name: isRTL ? "أحجار بيضاوية متنوعة - 15 قطعة" : "Pierres ovales assorties - 15 pièces",
      price: "110,00",
      image: "/pierre7.jpg",
    },
    {
      category: t("categories.stones"),
      name: isRTL ? "أحجار نجمية للتزيين - 20 قطعة" : "Pierres étoilées pour décoration - 20 pièces",
      price: "105,00",
      image: "/pierre8.jpg",
    },
  ]

  const visibleCategories = 4
  const visibleProducts = 4

  const nextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % (categories.length - visibleCategories + 1))
  }

  const prevCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex === 0 ? categories.length - visibleCategories : prevIndex - 1))
  }

  const nextRocailles = () => {
    setCurrentRocaillesIndex((prevIndex) => (prevIndex + 1) % (rocaillesProducts.length - visibleProducts + 1))
  }

  const prevRocailles = () => {
    setCurrentRocaillesIndex((prevIndex) =>
      prevIndex === 0 ? rocaillesProducts.length - visibleProducts : prevIndex - 1,
    )
  }

  const nextGalons = () => {
    setCurrentGalonsIndex((prevIndex) => (prevIndex + 1) % (galonsProducts.length - visibleProducts + 1))
  }

  const prevGalons = () => {
    setCurrentGalonsIndex((prevIndex) => (prevIndex === 0 ? galonsProducts.length - visibleProducts : prevIndex - 1))
  }

  const nextPierres = () => {
    setCurrentPierresIndex((prevIndex) => (prevIndex + 1) % (pierresProducts.length - visibleProducts + 1))
  }

  const prevPierres = () => {
    setCurrentPierresIndex((prevIndex) => (prevIndex === 0 ? pierresProducts.length - visibleProducts : prevIndex - 1))
  }

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error)
      })
    }
  }, [])

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
  }, [isRTL])

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-serif text-gold-500 font-bold">
              <Link href="/">
                <span className="text-gold-500">{isRTL ? "متجر ستراس" : "Strass Shop"}</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-10 rtl:space-x-reverse">
              <Link href="/" className="text-white hover:text-gold-300 text-base font-medium uppercase tracking-wider">
                {t("header.home")}
              </Link>
              <Link
                href="/a-propos"
                className="text-white hover:text-gold-300 text-base font-medium uppercase tracking-wider"
              >
                {t("header.about")}
              </Link>
              <Link
                href="/bijoux"
                className="text-white hover:text-gold-300 text-base font-medium uppercase tracking-wider"
              >
                {t("header.products")}
              </Link>
              <Link
                href="/bijoux-antiques"
                className="text-white hover:text-gold-300 text-base font-medium uppercase tracking-wider"
              >
                {t("header.sewingSupplies")}
              </Link>
              <Link
                href="/atelier"
                className="text-white hover:text-gold-300 text-base font-medium uppercase tracking-wider"
              >
                {t("header.workshop")}
              </Link>
              <Link
                href="/blog"
                className="text-white hover:text-gold-300 text-base font-medium uppercase tracking-wider"
              >
                {t("header.blog")}
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-gold-300 text-base font-medium uppercase tracking-wider"
              >
                {t("header.contact")}
              </Link>
            </nav>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <LanguageSwitcher />
              <button className="text-white hover:text-gold-300">
                <Search size={22} />
              </button>
              <button className="text-white hover:text-gold-300">
                <Heart size={22} />
              </button>
              <button className="text-white hover:text-gold-300 flex items-center">
                <ShoppingCart size={22} />
                <span
                  className={`${isRTL ? "mr-1" : "ml-1"} text-xs bg-gold-500 text-white rounded-full h-5 w-5 flex items-center justify-center`}
                >
                  0
                </span>
              </button>
              <span className="text-white text-sm font-medium">0.00 {t("general.currency")}</span>
              <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Hero Section with Video */}
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

      {/* خرز وترتر - Rocailles et paillettes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 uppercase tracking-wide">
            {t("products.beadsSequins")}
          </h2>

          <div className="relative">
            <button
              onClick={prevRocailles}
              className={`absolute ${isRTL ? "right-0" : "left-0"} top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10 hover:bg-gray-100 transition`}
            >
              {isRTL ? (
                <ChevronRight size={24} className="text-gray-700" />
              ) : (
                <ChevronLeft size={24} className="text-gray-700" />
              )}
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
              {rocaillesProducts
                .slice(currentRocaillesIndex, currentRocaillesIndex + visibleProducts)
                .map((product, index) => (
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
              onClick={nextRocailles}
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

      {/* شرائط وآللئ - Galons et perles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 uppercase tracking-wide">
            {t("products.braidsAndPearls")}
          </h2>

          <div className="relative">
            <button
              onClick={prevGalons}
              className={`absolute ${isRTL ? "right-0" : "left-0"} top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10 hover:bg-gray-100 transition`}
            >
              {isRTL ? (
                <ChevronRight size={24} className="text-gray-700" />
              ) : (
                <ChevronLeft size={24} className="text-gray-700" />
              )}
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
              {galonsProducts.slice(currentGalonsIndex, currentGalonsIndex + visibleProducts).map((product, index) => (
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
              onClick={nextGalons}
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

      {/* أحجار للخياطة - Pierres à coudre */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 uppercase tracking-wide">
            {t("products.sewingStones")}
          </h2>

          <div className="relative">
            <button
              onClick={prevPierres}
              className={`absolute ${isRTL ? "right-0" : "left-0"} top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10 hover:bg-gray-100 transition`}
            >
              {isRTL ? (
                <ChevronRight size={24} className="text-gray-700" />
              ) : (
                <ChevronLeft size={24} className="text-gray-700" />
              )}
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
              {pierresProducts
                .slice(currentPierresIndex, currentPierresIndex + visibleProducts)
                .map((product, index) => (
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
              onClick={nextPierres}
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

      {/* Achetez par Catégorie */}
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
              {categories
                .slice(currentCategoryIndex, currentCategoryIndex + visibleCategories)
                .map((category, index) => (
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

      {/* L'Expérience Excellence */}
      <section className="py-20 bg-white mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 uppercase tracking-wide">
            {t("excellence.title")}
          </h2>

          <div className={`flex overflow-x-auto pb-8 ${isRTL ? "space-x-reverse" : ""} space-x-8`}>
            <div className="text-center min-w-[280px] bg-white p-8 rounded-lg shadow-lg transition-transform hover:translate-x-2">
              <div className="flex justify-center mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38" />
                </svg>
              </div>
              <h3 className="uppercase font-medium mb-4 tracking-wide text-xl">{t("excellence.easyReturn.title")}</h3>
              <p className="text-gray-600 px-4 text-base">{t("excellence.easyReturn.description")}</p>
            </div>

            <div className="text-center min-w-[280px] bg-white p-8 rounded-lg shadow-lg transition-transform hover:translate-x-2">
              <div className="flex justify-center mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
              </div>
              <h3 className="uppercase font-medium mb-4 tracking-wide text-xl">{t("excellence.fastDelivery.title")}</h3>
              <p className="text-gray-600 px-4 text-base">{t("excellence.fastDelivery.description")}</p>
            </div>

            <div className="text-center min-w-[280px] bg-white p-8 rounded-lg shadow-lg transition-transform hover:translate-x-2">
              <div className="flex justify-center mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 12v10H4V12" />
                  <path d="M2 7h20v5H2z" />
                  <path d="M12 22V7" />
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
              </div>
              <h3 className="uppercase font-medium mb-4 tracking-wide text-xl">
                {t("excellence.elegantPackaging.title")}
              </h3>
              <p className="text-gray-600 px-4 text-base">{t("excellence.elegantPackaging.description")}</p>
            </div>

            <div className="text-center min-w-[280px] bg-white p-8 rounded-lg shadow-lg transition-transform hover:translate-x-2">
              <div className="flex justify-center mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="uppercase font-medium mb-4 tracking-wide text-xl">{t("excellence.highQuality.title")}</h3>
              <p className="text-gray-600 px-4 text-base">{t("excellence.highQuality.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Promotionnelle */}
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

      {/* Section Localisation et Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 uppercase tracking-wide">
            {t("location.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`${isRTL ? "text-right order-2 md:order-1" : "text-left order-2 md:order-1"}`}>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">{t("location.subtitle")}</h3>
              <p className="text-gray-700 text-lg mb-8">{t("location.description")}</p>

              <div className="space-y-4 mb-8">
                <div className={`flex items-center ${isRTL ? "space-x-reverse" : ""} space-x-4`}>
                  <div className={`bg-gray-100 p-3 rounded-full ${!isRTL && "order-first"}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <h4 className="font-medium text-lg">{t("location.address.title")}</h4>
                    <p className="text-gray-600">{t("location.address.value")}</p>
                    <a
                      href="https://maps.app.goo.gl/aKTc1BFGLgHwWBBq8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-500 hover:underline"
                    >
                      {t("location.address.directions")}
                    </a>
                  </div>
                </div>

                <div className={`flex items-center ${isRTL ? "space-x-reverse" : ""} space-x-4`}>
                  <div className={`bg-gray-100 p-3 rounded-full ${!isRTL && "order-first"}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <h4 className="font-medium text-lg">{t("location.phone.title")}</h4>
                    <p className="text-gray-600">+212 670 366 581</p>
                    <p className="text-gray-600">+212 535 501 598</p>
                  </div>
                </div>

                <div className={`flex items-center ${isRTL ? "space-x-reverse" : ""} space-x-4`}>
                  <div className={`bg-gray-100 p-3 rounded-full ${!isRTL && "order-first"}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <h4 className="font-medium text-lg">{t("location.email.title")}</h4>
                    <p className="text-gray-600">denon_taha@hotmail.fr</p>
                  </div>
                </div>

                <div className={`flex items-center ${isRTL ? "space-x-reverse" : ""} space-x-4`}>
                  <div className={`bg-gray-100 p-3 rounded-full ${!isRTL && "order-first"}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <h4 className="font-medium text-lg">{t("location.hours.title")}</h4>
                    <p className="text-gray-600">{t("location.hours.weekdays")}</p>
                    <p className="text-gray-600">{t("location.hours.sunday")}</p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-gold-500 text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-gold-600 transition duration-300 font-medium inline-block"
              >
                {t("general.contactUs")}
              </Link>
            </div>

            <div className="h-[450px] rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5750901652584!2d-5.0047873!3d34.0134342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b9a6b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sStrass%20Shop!5e0!3m2!1sfr!2sma!4v1617123456789!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("location.title")}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-gold-500 text-2xl font-serif mb-6">{isRTL ? "متجر ستراس" : "Strass Shop"}</h3>
              <p className="text-gray-400 mb-8 text-base">{t("footer.description")}</p>
              <div className={`flex ${isRTL ? "space-x-reverse" : ""} space-x-6`}>
                <a href="#" className="text-white hover:text-gold-300 transition-colors">
                  <Instagram size={24} />
                  {/* Social media link */}
                </a>
                <a href="#" className="text-white hover:text-gold-300 transition-colors">
                  <Facebook size={24} />
                  {/* Social media link */}
                </a>
                <a href="#" className="text-white hover:text-gold-300 transition-colors">
                  <Twitter size={24} />
                  {/* Social media link */}
                </a>
                <a href="#" className="text-white hover:text-gold-300 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  {/* Social media link */}
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6 uppercase text-lg">{t("footer.categories")}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 transition-colors">
                    {t("categories.beads")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 transition-colors">
                    {t("categories.sequins")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 transition-colors">
                    {t("categories.braids")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 transition-colors">
                    {t("categories.pearls")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 transition-colors">
                    {t("categories.stones")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 transition-colors">
                    {t("categories.tools")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 transition-colors">
                    {t("categories.kits")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6 uppercase text-lg">{t("footer.information")}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 transition-colors">
                    {t("footer.about")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 transition-colors">
                    {t("footer.delivery")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 transition-colors">
                    {t("footer.terms")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 transition-colors">
                    {t("footer.privacy")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 transition-colors">
                    {t("footer.faq")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 transition-colors">
                    {t("footer.blog")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 transition-colors">
                    {t("footer.news")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6 uppercase text-lg">{t("footer.contact")}</h4>
              <ul className="space-y-3 text-gray-400">
                <li>{t("location.address.value")}</li>
                <li>+212 670 366 581</li>
                <li>+212 535 501 598</li>
                <li>denon_taha@hotmail.fr</li>
                <li className="pt-4">
                  <button className="bg-gold-500 text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-gold-600 transition duration-300 font-medium">
                    {t("general.contactUs")}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} {isRTL ? "متجر ستراس" : "Strass Shop"}. {t("footer.rights")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
