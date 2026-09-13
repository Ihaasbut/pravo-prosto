import type { NewI } from "../../../../types/news.types";
import type { TitleBlockPropsI } from "../../../../types/titleBlock.types";

export interface HomeNewsPropsI {
  newsBlock: TitleBlockPropsI;
  news: NewI[];
}
