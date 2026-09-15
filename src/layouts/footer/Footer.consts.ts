import type { Language } from "../../context/language/LanguageContext";
import type { FooterI } from "./Footer.types";
import { footerData as footerDataEn } from "./mockData/Footer.mockData.en.ts";
import { footerData as footerDataRu } from "./mockData/Footer.mockData.ru.ts";

export const FOOTER_DATA: Record<Language, FooterI> = {
  ru: footerDataRu,
  en: footerDataEn,
};

export const YANDEX_MAPS_URL =
  "https://yandex.ru/maps/?text=%D0%9F%D1%80%D0%B0%D0%B2%D0%BE%20%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%20%D0%A1%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C";
