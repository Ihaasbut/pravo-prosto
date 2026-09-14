import type { RequestSectionDataI } from "../../components/sections/requestSection/RequestSection.types";
import type { ServicesCategoryI } from "../../types/mockData";
import type { TitleBlockPropsI } from "../../types/titleBlock.types";
import type { ServicesForWhomDataI } from "./components/servicesForWhom/ServicesForWhom.types";

export interface PageServicesFullDataI {
  serviceCategories: ServicesCategoryI[];
  page: PageServicesI;
}

export interface PageServicesI {
  headerPage: TitleBlockPropsI;
  audiences: ServicesForWhomDataI;
  request: RequestSectionDataI;
}
