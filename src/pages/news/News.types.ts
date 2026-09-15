import type { RequestSectionDataI } from "../../components/sections/requestSection/RequestSection.types";
import type { ServicesForWhomDataI } from "../services/components/servicesForWhom/ServicesForWhom.types";
import type { NewI } from "../../types/news.types";
import type { TitleBlockI } from "../../types/titleBlock.types";

export interface PageNewsI {
  headerPage: TitleBlockI;
  newsCategories: NewsCategoryI[];
  topics: ServicesForWhomDataI;
  request: RequestSectionDataI;
}

export interface PageNewsFullDataI {
  news: NewI[];
  page: PageNewsI;
}

export interface NewsCategoryI {
  id: number;
  title: string;
}

export interface NewsFilterI {
  news: NewI[];
}

export interface NewsCategoriesDataI {
  news: NewI[];
  activeCategory: number;
}
