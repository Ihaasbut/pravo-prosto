import type { NewI } from "../../../../../types/news.types";
import type { NewsItemVariant } from "../newsItem/NewsItem.types";

export interface NewsGridI {
  pageData: NewI[];
  variant: NewsItemVariant;
}
