"use client"

import { useTranslation } from "react-i18next"

export default function ExcellenceSection() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  return (
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
  )
}
