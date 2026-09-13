import type { ServicesCategoryI } from "../../../types/mockData";

export interface ServiceCategoryPropsI extends ServicesCategoryI {
  toPrefix?: string;
  onGrey?: boolean;
}
