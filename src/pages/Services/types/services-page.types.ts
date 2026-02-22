import type { ServicesCategoryI } from "../../../types/mockData";
import type { TitleBlockPropsI } from "../../../types/titleBlock.types";

export type PageServicesFullDataI = {
    serviceCategories: ServicesCategoryI[];
    page: PageServicesI;
};

export type PageServicesI = {
    headerPage: TitleBlockPropsI;
};
