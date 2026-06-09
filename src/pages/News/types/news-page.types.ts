import type { NewI } from "../../../types/news.types";
import type { TitleBlockPropsI } from "../../../types/titleBlock.types";

export type PageNewsI = {
    headerPage: TitleBlockPropsI;
    newsCategories: NewsCategoryI[];
};

export type PageNewsFullDataI = {
    news: NewI[];
    page: PageNewsI;
};

export type NewsTableI = {
    pageData: NewI[];
    className: string;
    useSiblingLinks?: boolean;
};

export type NewsCategoryI = {
    id: number;
    title: string;
};

export type NewsCategoriesI = {
    newsCategories: NewsCategoryI[];
    onFilterChange: (id: number) => void;
    activeCategory: number;
};

export type NewsFilterI = {
    news: NewI[];
};

export type NewsCategoriesDataI = {
    news: NewI[];
    activeCategory: number;
};
