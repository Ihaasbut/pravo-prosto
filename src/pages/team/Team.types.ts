import type { HomeProcessDataI } from "../home/components/homeProcess/HomeProcess.types";
import type { RequestSectionDataI } from "../../components/sections/requestSection/RequestSection.types";
import type { TeamPersonI } from "../../types/team.types";

export interface PageTeamI {
  title: string;
  description: string;
  process: HomeProcessDataI;
  request: RequestSectionDataI;
}

export interface PageTeamFullDataI {
  team: TeamPersonI[];
  page: PageTeamI;
}
