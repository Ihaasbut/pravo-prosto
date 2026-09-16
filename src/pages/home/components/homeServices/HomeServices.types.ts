import type { ServicesCategoryI } from "../../../../types/mockData";
import type { TitleBlockI } from "../../../../types/titleBlock.types";

export interface HomeServicesDataI {
  titleBlock: TitleBlockI;
  category: ServicesCategoryI;
}

export interface HomeServicesPropsI {
  data: HomeServicesDataI;
}
