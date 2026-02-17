interface ServiceI {
    id: number;
    name: string;
    href: string;
}

export interface HeroDataI {
    title: string;
    description: string;
    button: string;
    services: ServiceI[];
}

export interface HeroPropsI {
    heroData: HeroDataI;
}

export interface HeroEmblaPropsI {
    services: ServiceI[];
}


export interface HomeDataI {
    heroData: HeroDataI
}