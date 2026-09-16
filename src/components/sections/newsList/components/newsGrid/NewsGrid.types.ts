import type { NewDataI } from "../../../../../types/news.types";
import type { NewsItemVariant } from "../newsItem/NewsItem.types";

export interface NewsGridI {
  data: NewDataI[];
  variant: NewsItemVariant;
}
