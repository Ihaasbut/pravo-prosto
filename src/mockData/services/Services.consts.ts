import type { Language } from "../../context/language/LanguageContext";
import type { ServicesCategoryI } from "../../types/mockData";
import { serviceCategories as serviceCategoriesEn } from "./Services.mockData.en.ts";
import { serviceCategories as serviceCategoriesRu } from "./Services.mockData.ru.ts";

export const SERVICE_CATEGORIES_DATA: Record<Language, ServicesCategoryI[]> = {
  ru: serviceCategoriesRu,
  en: serviceCategoriesEn,
};

export function getLocalizedPath(
  pathname: string,
  fromLanguage: Language,
  toLanguage: Language,
): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 3 && segments[1] === "services" && segments[2]) {
    const currentServiceCategories = SERVICE_CATEGORIES_DATA[fromLanguage];
    const nextServiceCategories = SERVICE_CATEGORIES_DATA[toLanguage];

    for (
      let categoryIndex = 0;
      categoryIndex < currentServiceCategories.length;
      categoryIndex++
    ) {
      const currentCategory = currentServiceCategories[categoryIndex];
      const serviceIndex = currentCategory?.services.findIndex(
        (service) => service.slug === segments[2],
      );

      if (serviceIndex === undefined || serviceIndex === -1) {
        continue;
      }

      const nextSlug =
        nextServiceCategories[categoryIndex]?.services[serviceIndex]?.slug;

      if (nextSlug) {
        return `/${toLanguage}/services/${nextSlug}`;
      }
    }
  }

  return segments.length > 0
    ? `/${toLanguage}/${segments.slice(1).join("/")}`
    : `/${toLanguage}`;
}
