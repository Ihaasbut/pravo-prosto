import type { ServiceCategoryPropsI } from "../../ServiceCategory.types";

export interface ServiceCategorySliderPropsI {
  data: ServiceCategoryPropsI["data"]["services"];
  toPrefix?: string;
}
