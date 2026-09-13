export interface TeamPersonI {
    image: string;
    dataPerson: string;
    post: string;
    study: PatternInfoI;
    experience: PatternInfoI;
    area: PatternInfoI;
    comment: string;
}

export interface PatternInfoI {
    title: string;
    description: string;
}

export interface TeamPersonsI {
    teamData: TeamPersonI[];
}
