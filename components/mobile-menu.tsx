"use client"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-auto">
      <div className="flex justify-end p-6">
        <button onClick={onClose} className="text-white hover:text-gold-300">
          <X size={30} />
        </button>
      </div>

      <nav className="flex flex-col items-center justify-center px-4 py-8 space-y-6">
        <Link href="/" className="text-white hover:text-gold-300 text-xl font-medium tracking-wider" onClick={onClose}>
          {t("header.home")}
        </Link>
        <Link
          href="/a-propos"
          className="text-white hover:text-gold-300 text-xl font-medium tracking-wider"
          onClick={onClose}
        >
          {t("header.about")}
        </Link>
        <Link
          href="/bijoux"
          className="text-white hover:text-gold-300 text-xl font-medium tracking-wider"
          onClick={onClose}
        >
          {t("header.products")}
        </Link>
        <Link
          href="/bijoux-antiques"
          className="text-white hover:text-gold-300 text-xl font-medium tracking-wider"
          onClick={onClose}
        >
          {t("header.sewingSupplies")}
        </Link>
        <Link
          href="/atelier"
          className="text-white hover:text-gold-300 text-xl font-medium tracking-wider"
          onClick={onClose}
        >
          {t("header.workshop")}
        </Link>
        <Link
          href="/blog"
          className="text-white hover:text-gold-300 text-xl font-medium tracking-wider"
          onClick={onClose}
        >
          {t("header.blog")}
        </Link>
        <Link
          href="/contact"
          className="text-white hover:text-gold-300 text-xl font-medium tracking-wider"
          onClick={onClose}
        >
          {t("header.contact")}
        </Link>
      </nav>
    </div>
  )
}
