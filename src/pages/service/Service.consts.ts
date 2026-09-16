import type { Language } from "../../context/language/LanguageContext";
import { servicePageStaticData as servicePageStaticDataEn } from "./mockData/service-page.mockData.en.ts";
import { servicePageStaticData as servicePageStaticDataRu } from "./mockData/service-page.mockData.ru.ts";
import type { ServicePageStaticI } from "./Service.types";

export const SERVICE_PAGE_STATIC_DATA: Record<Language, ServicePageStaticI> = {
  ru: servicePageStaticDataRu,
  en: servicePageStaticDataEn,
};
