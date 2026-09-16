import type { NewDataI } from "../../../../../types/news.types";

export type NewsItemVariant = "allPage" | "detailPage";

export interface NewsItemI {
  news: NewDataI;
  variant: NewsItemVariant;
}
