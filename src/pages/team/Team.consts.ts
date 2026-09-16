import type { Language } from "../../context/language/LanguageContext";
import { TEAM_DATA } from "../../mockData/team/Team.consts";
import { pageTeam as pageTeamEn } from "./mockData/team-page.mockData.en.ts";
import { pageTeam as pageTeamRu } from "./mockData/team-page.mockData.ru.ts";
import type { PageTeamFullDataI } from "./Team.types";

export const TEAM_PAGE_DATA: Record<Language, PageTeamFullDataI> = {
  ru: {
    team: TEAM_DATA.ru,
    titleBlock: pageTeamRu.titleBlock,
    process: pageTeamRu.process,
    request: pageTeamRu.request,
  },
  en: {
    team: TEAM_DATA.en,
    titleBlock: pageTeamEn.titleBlock,
    process: pageTeamEn.process,
    request: pageTeamEn.request,
  },
};
