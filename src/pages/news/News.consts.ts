import type { Language } from "../../context/language/LanguageContext";
import { NEWS_DATA } from "../../mockData/news/News.consts";
import {
  newsCategories as newsCategoriesEn,
  request as requestEn,
  sidebarTitle as sidebarTitleEn,
  titleBlock as titleBlockEn,
  topics as topicsEn,
} from "./mockData/news-page.mockData.en.ts";
import {
  newsCategories as newsCategoriesRu,
  request as requestRu,
  sidebarTitle as sidebarTitleRu,
  titleBlock as titleBlockRu,
  topics as topicsRu,
} from "./mockData/news-page.mockData.ru.ts";
import type { PageNewsFullDataI } from "./News.types";

export const NEWS_PAGE_DATA: Record<Language, PageNewsFullDataI> = {
  ru: {
    news: NEWS_DATA.ru,
    page: {
      titleBlock: titleBlockRu,
      newsCategories: newsCategoriesRu,
      topics: topicsRu,
      request: requestRu,
      sidebarTitle: sidebarTitleRu,
    },
  },
  en: {
    news: NEWS_DATA.en,
    page: {
      titleBlock: titleBlockEn,
      newsCategories: newsCategoriesEn,
      topics: topicsEn,
      request: requestEn,
      sidebarTitle: sidebarTitleEn,
    },
  },
};
