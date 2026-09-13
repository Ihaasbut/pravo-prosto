import type { TeamPersonI } from "../../../../types/team.types";
import type { TitleBlockPropsI } from "../../../../types/titleBlock.types";

export interface HomeTeamPropsI {
  teamBlock: TitleBlockPropsI;
  team: TeamPersonI[];
}
