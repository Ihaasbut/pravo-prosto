import type { Language } from "../../context/language/LanguageContext";
import type { ServiceExtrasBySlugI } from "../../types/mockData";
import { serviceExtras as serviceExtrasEn } from "./serviceExtras.mockData.en.ts";
import { serviceExtras as serviceExtrasRu } from "./serviceExtras.mockData.ru.ts";

export const SERVICE_EXTRAS_DATA: Record<Language, ServiceExtrasBySlugI> = {
  ru: serviceExtrasRu,
  en: serviceExtrasEn,
};
