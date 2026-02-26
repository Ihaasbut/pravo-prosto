import type { TeamPersonI } from "../../../types/team.types";

export type PageTeamI = {
          title: string;
          buttonText: string;
}

export type PageTeamFullDataI = {
          team: TeamPersonI[];
          page: PageTeamI;
}

export type TeamPersonPropsI = {
          props: TeamPersonI;
}