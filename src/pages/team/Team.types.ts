import type { HomeProcessDataI } from "../home/components/homeProcess/HomeProcess.types";
import type { HomeRequestDataI } from "../home/components/homeRequest/HomeRequest.types";
import type { TeamPersonI } from "../../types/team.types";

export interface PageTeamI {
  title: string;
  description: string;
  process: HomeProcessDataI;
  request: HomeRequestDataI;
}

export interface PageTeamFullDataI {
  team: TeamPersonI[];
  page: PageTeamI;
}
