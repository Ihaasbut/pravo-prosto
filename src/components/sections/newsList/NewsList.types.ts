import type { NewDataI } from "../../../types/news.types";
import type { NewsItemVariant } from "./components/newsItem/NewsItem.types";

export interface NewsListI {
  data: NewDataI[];
  variant: NewsItemVariant;
}
