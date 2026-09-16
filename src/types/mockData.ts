import type { ServiceBannerI } from "../pages/service/components/serviceBanner/ServiceBanner.types";
import type { TitleBlockI } from "./titleBlock.types";

export interface ServicesCategoryI {
  area: string;
  services: ServiceI[];
}

export interface ServiceI {
  title: string;
  highlights: string[];
  slug: string;
  detailPage?: ServiceDetailI;
}

export interface FeaturesI {
  title: string;
  description: string;
}

export interface FaqItemI {
  question: string;
  answer: string;
}

export interface ServiceDetailI {
  titleBlock: TitleBlockI;
  whatWeDo: {
    title: string;
    features: FeaturesI[];
  };
  stages: {
    title: string;
    stages: FeaturesI[];
  };
  faq: {
    title: string;
    items: FaqItemI[];
  };
  banner: ServiceBannerI;
}
