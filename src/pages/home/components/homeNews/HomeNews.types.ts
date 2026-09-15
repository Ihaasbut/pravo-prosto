import type { NewI } from "../../../../types/news.types";
import type { TitleBlockI } from "../../../../types/titleBlock.types";

export interface HomeNewsPropsI {
  newsBlock: TitleBlockI;
  news: NewI[];
}
