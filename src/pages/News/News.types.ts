import type { NewI } from "../../types/news.types";
import type { TitleBlockPropsI } from "../../types/titleBlock.types";

export interface PageNewsI {
    headerPage: TitleBlockPropsI;
    newsCategories: NewsCategoryI[];
}

export interface PageNewsFullDataI {
    news: NewI[];
    page: PageNewsI;
}

export interface NewsCategoryI {
    id: number;
    title: string;
}

export interface NewsFilterI {
    news: NewI[];
}

export interface NewsCategoriesDataI {
    news: NewI[];
    activeCategory: number;
}
