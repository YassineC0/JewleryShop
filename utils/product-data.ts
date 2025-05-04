import { useTranslation } from "react-i18next"

export interface Product {
  category: string
  name: string
  price: string
  image: string
}

export function useProductData() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

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

  return {
    rocaillesProducts,
    galonsProducts,
    pierresProducts,
  }
}
