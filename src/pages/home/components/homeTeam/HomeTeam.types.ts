import type { TeamPersonI } from "../../../../types/team.types";
import type { TitleBlockI } from "../../../../types/titleBlock.types";

export interface HomeTeamPropsI {
  teamBlock: TitleBlockI;
  team: TeamPersonI[];
}
