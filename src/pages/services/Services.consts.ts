import type { Language } from "../../context/language/LanguageContext";
import { SERVICE_CATEGORIES_DATA } from "../../mockData/services/Services.consts";
import type { PageServicesFullDataI } from "./Services.types";
import {
  audiences as audiencesEn,
  headerPage as headerPageEn,
  request as requestEn,
} from "./mockData/services-page.mockData.en.ts";
import {
  audiences as audiencesRu,
  headerPage as headerPageRu,
  request as requestRu,
} from "./mockData/services-page.mockData.ru.ts";

export const SERVICES_PAGE_DATA: Record<Language, PageServicesFullDataI> = {
  ru: {
    serviceCategories: SERVICE_CATEGORIES_DATA.ru,
    page: {
      headerPage: headerPageRu,
      audiences: audiencesRu,
      request: requestRu,
    },
  },
  en: {
    serviceCategories: SERVICE_CATEGORIES_DATA.en,
    page: {
      headerPage: headerPageEn,
      audiences: audiencesEn,
      request: requestEn,
    },
  },
};
