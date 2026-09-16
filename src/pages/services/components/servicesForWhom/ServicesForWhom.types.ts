import type { TitleBlockI } from "../../../../types/titleBlock.types";

export interface ServicesForWhomItemI {
  title: string;
  description: string;
}

export interface ServicesForWhomDataI {
  titleBlock: TitleBlockI;
  items: ServicesForWhomItemI[];
}

export interface ServicesForWhomPropsI {
  data: ServicesForWhomDataI;
}
