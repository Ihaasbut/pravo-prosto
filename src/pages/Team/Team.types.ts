import type { TeamPersonI } from "../../types/team.types";

export interface PageTeamI {
    title: string;
    buttonText: string;
}

export interface PageTeamFullDataI {
    team: TeamPersonI[];
    page: PageTeamI;
}
