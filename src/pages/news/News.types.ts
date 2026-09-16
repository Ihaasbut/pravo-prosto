import type { RequestSectionDataI } from "../../components/sections/requestSection/RequestSection.types";
import type { NewDataI } from "../../types/news.types";
import type { TitleBlockI } from "../../types/titleBlock.types";
import type { ServicesForWhomDataI } from "../services/components/servicesForWhom/ServicesForWhom.types";

export interface PageNewsI {
  titleBlock: TitleBlockI;
  newsCategories: NewsCategoryI[];
  topics: ServicesForWhomDataI;
  request: RequestSectionDataI;
  sidebarTitle: string;
}

export interface PageNewsFullDataI {
  news: NewDataI[];
  page: PageNewsI;
}

export interface NewsCategoryI {
  id: number;
  title: string;
}

export interface NewsFilterI {
  news: NewDataI[];
}

export interface NewsCategoriesDataI {
  news: NewDataI[];
  activeCategory: number;
}
