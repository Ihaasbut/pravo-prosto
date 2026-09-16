import type { TitleBlockI } from "../../../../types/titleBlock.types";

export interface HomeProcessStepI {
  title: string;
  description: string;
}

export interface HomeProcessDataI {
  titleBlock: TitleBlockI;
  steps: HomeProcessStepI[];
}

export interface HomeProcessPropsI {
  data: HomeProcessDataI;
}
