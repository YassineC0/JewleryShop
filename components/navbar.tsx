"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { ShoppingCart, Heart, Search, Menu } from "lucide-react"
import { useState } from "react"
import LanguageSwitcher from "./language-switcher"
import MobileMenu from "./mobile-menu"

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isRTL = i18n.language === "ar"

  return (
    <>
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
    </>
  )
}
