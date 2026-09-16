import { SERVICE_CATEGORIES_DATA } from "../../mockData/services/Services.consts";
import type { Language } from "./LanguageContext";

export function getPathForLanguage(
  pathname: string,
  fromLanguage: Language,
  toLanguage: Language,
): string {
  const [, section, slug, ...rest] = pathname.split("/").filter(Boolean);

  if (section === "services" && slug && rest.length === 0) {
    const nextSlug = getServiceSlugForLanguage(slug, fromLanguage, toLanguage);

    if (nextSlug) {
      return `/${toLanguage}/services/${nextSlug}`;
    }
  }

  const restPath = [section, slug, ...rest].filter(Boolean).join("/");

  return restPath ? `/${toLanguage}/${restPath}` : `/${toLanguage}`;
}

function getServiceSlugForLanguage(
  slug: string,
  fromLanguage: Language,
  toLanguage: Language,
) {
  const fromCategories = SERVICE_CATEGORIES_DATA[fromLanguage];
  const toCategories = SERVICE_CATEGORIES_DATA[toLanguage];

  for (const [categoryIndex, category] of fromCategories.entries()) {
    const serviceIndex = category.services.findIndex(
      (service) => service.slug === slug,
    );

    if (serviceIndex !== -1) {
      return toCategories[categoryIndex]?.services[serviceIndex]?.slug;
    }
  }
}
