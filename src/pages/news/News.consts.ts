import type { Language } from "../../context/language/LanguageContext";
import { NEWS_DATA } from "../../mockData/news/News.consts";
import type { PageNewsFullDataI } from "./News.types";
import {
  headerPage as headerPageEn,
  newsCategories as newsCategoriesEn,
  request as requestEn,
  topics as topicsEn,
} from "./mockData/news-page.mockData.en.ts";
import {
  headerPage as headerPageRu,
  newsCategories as newsCategoriesRu,
  request as requestRu,
  topics as topicsRu,
} from "./mockData/news-page.mockData.ru.ts";

export const NEWS_PAGE_DATA: Record<Language, PageNewsFullDataI> = {
  ru: {
    news: NEWS_DATA.ru,
    page: {
      headerPage: headerPageRu,
      newsCategories: newsCategoriesRu,
      topics: topicsRu,
      request: requestRu,
    },
  },
  en: {
    news: NEWS_DATA.en,
    page: {
      headerPage: headerPageEn,
      newsCategories: newsCategoriesEn,
      topics: topicsEn,
      request: requestEn,
    },
  },
};
