import type { ServiceBannerI } from "../pages/Service/types/service-page.types";

export type ServicesCategoryI = {
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
    banner: ServiceBannerI;
};

export type FeaturesI = {
    title: string;
    description: string;
};
