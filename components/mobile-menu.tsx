"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { X } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
      // Restore scrolling when menu is closed
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto" 
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="flex justify-end p-4">
        <button 
          onClick={onClose} 
          className="text-white hover:text-gold-300 transition-colors"
          aria-label={isRTL ? "إغلاق القائمة" : "Fermer le menu"}
        >
          <X size={30} />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-8 space-y-6">
        <Link 
          href="/" 
          className="text-white hover:text-gold-300 text-xl font-medium tracking-wider transition-colors" 
          onClick={onClose}
        >
          {t("header.home")}
        </Link>
        <Link 
          href="/a-propos" 
          className="text-white hover:text-gold-300 text-xl font-medium tracking-wider transition-colors" 
          onClick={onClose}
        >
          {t("header.about")}
        </Link>
        <Link 
          href="/bijoux" 
          className="text-white hover:text-gold-300 text-xl font-medium tracking-wider transition-colors" 
          onClick={onClose}
        >
          {t("header.products")}
        </Link>
        <Link 
          href="/bijoux-antiques" 
          className="text-white hover:text-gold-300 text-xl font-medium tracking-wider transition-colors" 
          onClick={onClose}
        >
          {t("header.sewingSupplies")}
        </Link>
        <Link 
          href="/atelier" 
          className="text-white hover:text-gold-300 text-xl font-medium tracking-wider transition-colors" 
          onClick={onClose}
        >
          {t("header.workshop")}
        </Link>
        <Link 
          href="/blog" 
          className="text-white hover:text-gold-300 text-xl font-medium tracking-wider transition-colors" 
          onClick={onClose}
        >
          {t("header.blog")}
        </Link>
        <Link 
          href="/contact" 
          className="text-white hover:text-gold-300 text-xl font-medium tracking-wider transition-colors" 
          onClick={onClose}
        >
          {t("header.contact")}
        </Link>
        
        {/* Shopping cart button */}
        <div className="mt-6 pt-6 border-t border-gray-800 w-full flex justify-center">
          <button className="bg-gold-500 text-white px-8 py-3 text-base uppercase tracking-wider hover:bg-gold-600 transition duration-300 font-medium">
            {t("general.shopNow")}
          </button>
        </div>
      </div>
    </div>
  )
}