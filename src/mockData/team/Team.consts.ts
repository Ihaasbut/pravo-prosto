import type { Language } from "../../context/language/LanguageContext";
import type { TeamPersonI } from "../../types/team.types";
import { team as teamEn } from "./Team.mockData.en.ts";
import { team as teamRu } from "./Team.mockData.ru.ts";

export const TEAM_DATA: Record<Language, TeamPersonI[]> = {
  ru: teamRu,
  en: teamEn,
};
