import type { NewI } from "../../../../../types/news.types";

export type NewsItemVariant = "allPage" | "detailPage";

export interface NewsItemI {
  news: NewI;
  variant: NewsItemVariant;
}
