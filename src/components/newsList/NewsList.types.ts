import type { NewI } from "../../types/news.types";
import type { NewsItemVariant } from "./components/newsItem/NewsItem.types";

export interface NewsListI {
  pageData: NewI[];
  variant: NewsItemVariant;
}
