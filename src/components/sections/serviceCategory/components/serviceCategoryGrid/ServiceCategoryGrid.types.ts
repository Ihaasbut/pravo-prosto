import type { ServiceCategoryPropsI } from "../../ServiceCategory.types";

export interface ServiceCategoryGridPropsI {
  data: ServiceCategoryPropsI["data"]["services"];
  toPrefix?: string;
}
