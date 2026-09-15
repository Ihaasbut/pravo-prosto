import type { Language } from "../../context/language/LanguageContext";
import { NEWS_DATA } from "../../mockData/news/News.consts";
import { SERVICE_CATEGORIES_DATA } from "../../mockData/services/Services.consts";
import { TEAM_DATA } from "../../mockData/team/Team.consts";
import type { PageHomeFullDataI } from "./Home.types";
import * as homeEn from "./mockData/Home.mockData.en.ts";
import * as homeRu from "./mockData/Home.mockData.ru.ts";

function createHomeData(
  language: Language,
  page: typeof homeRu,
): PageHomeFullDataI {
  const featuredCategory = SERVICE_CATEGORIES_DATA[language][0];

  if (!featuredCategory) {
    throw new Error("Home page requires at least one service category");
  }

  return {
    hero: page.hero,
    about: page.about,
    servicesBlock: page.servicesBlock,
    featuredCategory,
    process: page.process,
    teamBlock: page.teamBlock,
    team: TEAM_DATA[language],
    newsBlock: page.newsBlock,
    featuredNews: NEWS_DATA[language].slice(0, 4),
    request: page.request,
  };
}

export const HOME_DATA: Record<Language, PageHomeFullDataI> = {
  ru: createHomeData("ru", homeRu),
  en: createHomeData("en", homeEn),
};
