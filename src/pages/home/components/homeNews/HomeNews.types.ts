import type { NewDataI } from "../../../../types/news.types";
import type { TitleBlockI } from "../../../../types/titleBlock.types";

export interface HomeNewsDataI {
  titleBlock: TitleBlockI;
  news: NewDataI[];
}

export interface HomeNewsPropsI {
  data: HomeNewsDataI;
}
