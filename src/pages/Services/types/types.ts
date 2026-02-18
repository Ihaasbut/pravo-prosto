import type { ServiceCategoryI } from "../../../types/mockData";
import type { TitleBlockPropsI } from "../../../types/TitleBlock.types";

export type PageServicesFullDataI = {
    servicesData: ServiceCategoryI[];
    pageServicesData: PageServices;
};
export type PageServices = {
    headerPage: TitleBlockPropsI;
};
