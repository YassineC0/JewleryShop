"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function LocationSection() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  return (
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
  )
}
