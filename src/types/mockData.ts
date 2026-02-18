export type ServiceCategoryI = {
    area: string;
    services: ServiceI[];
};
export type ServiceI = {
    title: string;
    highlights: string[];
    slug: string;
    detailPage?: ServiceDetailI;
};

export type ServiceDetailI = {
    title: string;
    description: string;
    features: FeaturesI[];
};

export type FeaturesI = {
    title: string;
    description: string;
};
