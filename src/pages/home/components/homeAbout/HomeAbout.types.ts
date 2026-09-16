import type { TitleBlockI } from "../../../../types/titleBlock.types";

export interface HomeAboutItemDataI {
  title: string;
  description: string;
}

export interface HomeAboutDataI {
  titleBlock: TitleBlockI;
  principles: HomeAboutItemDataI[];
}

export interface HomeAboutPropsI {
  data: HomeAboutDataI;
}
