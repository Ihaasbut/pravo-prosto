import type { Language } from "../../context/language/LanguageContext";
import { SERVICE_CATEGORIES_DATA } from "../../mockData/services/Services.consts";
import {
  audiences as audiencesEn,
  request as requestEn,
  titleBlock as titleBlockEn,
} from "./mockData/services-page.mockData.en.ts";
import {
  audiences as audiencesRu,
  request as requestRu,
  titleBlock as titleBlockRu,
} from "./mockData/services-page.mockData.ru.ts";
import type { PageServicesFullDataI } from "./Services.types";

export const SERVICES_PAGE_DATA: Record<Language, PageServicesFullDataI> = {
  ru: {
    serviceCategories: SERVICE_CATEGORIES_DATA.ru,
    page: {
      titleBlock: titleBlockRu,
      audiences: audiencesRu,
      request: requestRu,
    },
  },
  en: {
    serviceCategories: SERVICE_CATEGORIES_DATA.en,
    page: {
      titleBlock: titleBlockEn,
      audiences: audiencesEn,
      request: requestEn,
    },
  },
};
