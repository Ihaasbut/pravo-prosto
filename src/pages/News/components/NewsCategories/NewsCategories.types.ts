import type { NewsCategoryI } from "../../News.types";

export interface NewsCategoriesI {
    newsCategories: NewsCategoryI[];
    onFilterChange: (id: number) => void;
    activeCategory: number;
}
