import type { TeamPersonI } from "../../../../types/team.types";
import type { TitleBlockI } from "../../../../types/titleBlock.types";

export interface HomeTeamDataI {
  titleBlock: TitleBlockI;
  team: TeamPersonI[];
}

export interface HomeTeamPropsI {
  data: HomeTeamDataI;
}
