export interface HeroPropsI {
    hero: HeroI;
}

export interface HeroI {
    title: string;
    description: string;
    button: string;
    serviceKeywords: serviceKeywordI[];
}

export interface serviceKeywordI {
    name: string;
}
