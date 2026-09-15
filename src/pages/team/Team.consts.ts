import type { Language } from "../../context/language/LanguageContext";
import { TEAM_DATA } from "../../mockData/team/Team.consts";
import type { PageTeamFullDataI } from "./Team.types";
import { pageTeam as pageTeamEn } from "./mockData/team-page.mockData.en.ts";
import { pageTeam as pageTeamRu } from "./mockData/team-page.mockData.ru.ts";

export const TEAM_PAGE_DATA: Record<Language, PageTeamFullDataI> = {
  ru: {
    team: TEAM_DATA.ru,
    page: pageTeamRu,
  },
  en: {
    team: TEAM_DATA.en,
    page: pageTeamEn,
  },
};
