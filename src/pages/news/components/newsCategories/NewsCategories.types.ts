import type { NewsCategoryI } from "../../News.types";

export interface NewsCategoriesPropsI {
  data: NewsCategoryI[];
  onFilterChange: (id: number) => void;
  activeCategory: number;
}
