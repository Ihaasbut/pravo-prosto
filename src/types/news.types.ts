import type { ComponentType } from "react";

import type { TitleBlockI } from "./titleBlock.types";

export type NewDataI = TitleBlockI & {
  categoryId: number;
  categoryName: string;
  image: string;
  slug: string;
  date: string;
  blocks: NewsBlockI[];
};

export type NewsBlockI =
  | NewsTextBlockI
  | NewsImageBlockI
  | NewsTitleTextBlockI
  | NewsListBlockI;

export interface NewsBlockComponentPropsI {
  data: NewsBlockI;
}

interface NewsOneComponentBlock {
  component: ComponentType<NewsBlockComponentPropsI>;
}

export type NewsTextBlockI = NewsOneComponentBlock & {
  text: string;
};

export type NewsImageBlockI = NewsOneComponentBlock & {
  image: string;
};

export type NewsTitleTextBlockI = NewsOneComponentBlock & {
  title: string;
  text: string;
};

export type NewsListBlockI = NewsOneComponentBlock & {
  list: string[];
};
