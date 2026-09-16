import type { NewDataI } from "../../../../types/news.types";

export interface NewsOneSidebarDataI {
  title: string;
  news: NewDataI[];
}

export interface NewsOneSidebarPropsI {
  data: NewsOneSidebarDataI;
}
