import type { Language } from "../../context/language/LanguageContext";
import { NEWS_DATA } from "../../mockData/news/News.consts";
import { SERVICE_CATEGORIES_DATA } from "../../mockData/services/Services.consts";
import { TEAM_DATA } from "../../mockData/team/Team.consts";
import type { PageHomeFullDataI } from "./Home.types";
import * as homeEn from "./mockData/Home.mockData.en.ts";
import * as homeRu from "./mockData/Home.mockData.ru.ts";

export const HOME_DATA: Record<Language, PageHomeFullDataI> = {
  ru: {
    hero: homeRu.hero,
    about: homeRu.about,
    services: {
      titleBlock: homeRu.servicesBlock,
      category: SERVICE_CATEGORIES_DATA.ru[0],
    },
    process: homeRu.process,
    team: {
      titleBlock: homeRu.teamBlock,
      team: TEAM_DATA.ru,
    },
    news: {
      titleBlock: homeRu.newsBlock,
      news: NEWS_DATA.ru.slice(0, 4),
    },
    request: homeRu.request,
  },
  en: {
    hero: homeEn.hero,
    about: homeEn.about,
    services: {
      titleBlock: homeEn.servicesBlock,
      category: SERVICE_CATEGORIES_DATA.en[0],
    },
    process: homeEn.process,
    team: {
      titleBlock: homeEn.teamBlock,
      team: TEAM_DATA.en,
    },
    news: {
      titleBlock: homeEn.newsBlock,
      news: NEWS_DATA.en.slice(0, 4),
    },
    request: homeEn.request,
  },
};
