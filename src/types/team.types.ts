export type TeamPersonI = {
    image: string;
    dataPerson: string;
    post: string;
    study: PatternInfoI;
    experience: PatternInfoI;
    area: PatternInfoI;
    comment: string;
};

export type PatternInfoI = {
    title: string;
    description: string;
};

export type TeamPersonsI = {
          teamData: TeamPersonI[];
}

