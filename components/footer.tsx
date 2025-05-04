"use client"
import { useTranslation } from "react-i18next"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  return (
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
  )
}
