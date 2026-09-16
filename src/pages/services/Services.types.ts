import type { RequestSectionDataI } from "../../components/sections/requestSection/RequestSection.types";
import type { ServicesCategoryI } from "../../types/mockData";
import type { TitleBlockI } from "../../types/titleBlock.types";
import type { ServicesForWhomDataI } from "./components/servicesForWhom/ServicesForWhom.types";

export interface PageServicesFullDataI {
  serviceCategories: ServicesCategoryI[];
  page: PageServicesI;
}

export interface PageServicesI {
  titleBlock: TitleBlockI;
  audiences: ServicesForWhomDataI;
  request: RequestSectionDataI;
}
