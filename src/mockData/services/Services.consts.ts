import type { Language } from "../../context/language/LanguageContext";
import type { ServicesCategoryI } from "../../types/mockData";
import { serviceCategories as serviceCategoriesEn } from "./Services.mockData.en.ts";
import { serviceCategories as serviceCategoriesRu } from "./Services.mockData.ru.ts";

export const SERVICE_CATEGORIES_DATA: Record<Language, ServicesCategoryI[]> = {
  ru: serviceCategoriesRu,
  en: serviceCategoriesEn,
};
