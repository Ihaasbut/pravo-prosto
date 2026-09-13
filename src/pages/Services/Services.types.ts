import type { ServicesCategoryI } from "../../types/mockData";
import type { TitleBlockPropsI } from "../../types/titleBlock.types";

export interface PageServicesFullDataI {
    serviceCategories: ServicesCategoryI[];
    page: PageServicesI;
}

export interface PageServicesI {
    headerPage: TitleBlockPropsI;
}
