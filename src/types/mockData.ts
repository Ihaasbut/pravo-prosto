import type { ServiceBannerI } from "../pages/service/components/serviceBanner/ServiceBanner.types";

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

export interface ServiceDetailI {
  title: string;
  description: string;
  features: FeaturesI[];
  banner: ServiceBannerI;
}

export interface FeaturesI {
  title: string;
  description: string;
}

export interface FaqItemI {
  question: string;
  answer: string;
}

export interface ServiceExtrasI {
  stages: FeaturesI[];
  faq: FaqItemI[];
}
