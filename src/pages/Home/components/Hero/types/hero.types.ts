export type HeroPropsI = {
    hero: HeroI;
};

export type HeroI = {
    title: string;
    description: string;
    button: string;
    serviceKeywords: serviceKeywordI[];
};

export type serviceKeywordI = {
    name: string;
};

export type HeroEmblaPropsI = {
    serviceKeywords: serviceKeywordI[];
};
