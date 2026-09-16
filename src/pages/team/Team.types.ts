import type { RequestSectionDataI } from "../../components/sections/requestSection/RequestSection.types";
import type { TeamPersonI } from "../../types/team.types";
import type { TitleBlockI } from "../../types/titleBlock.types";
import type { HomeProcessDataI } from "../home/components/homeProcess/HomeProcess.types";

export interface PageTeamI {
  titleBlock: TitleBlockI;
  process: HomeProcessDataI;
  request: RequestSectionDataI;
}

export type PageTeamFullDataI = PageTeamI & {
  team: TeamPersonI[];
};
