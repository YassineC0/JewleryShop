"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  // Toggle dropdown
  const toggleDropdown = () => setIsOpen(!isOpen)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  // Change language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    // Update document direction based on language
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"
    setIsOpen(false)
  }

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <button
        className="flex items-center space-x-1 rtl:space-x-reverse text-white hover:text-gold-300 transition-colors"
        onClick={toggleDropdown}
        aria-label="Change language"
      >
        <Globe size={20} />
        <span className="text-sm hidden sm:inline">{i18n.language === "ar" ? "العربية" : "Français"}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 rtl:left-0 rtl:right-auto bg-white shadow-md rounded-md py-1 z-50 min-w-[120px]">
          <button
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
              i18n.language === "ar" ? "font-bold" : ""
            }`}
            onClick={() => changeLanguage("ar")}
          >
            {t("language.ar")}
          </button>
          <button
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
              i18n.language === "fr" ? "font-bold" : ""
            }`}
            onClick={() => changeLanguage("fr")}
          >
            {t("language.fr")}
          </button>
        </div>
      )}
    </div>
  )
}
