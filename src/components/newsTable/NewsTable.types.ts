import type { NewI } from "../../types/news.types";

export interface NewsTableI {
  pageData: NewI[];
  className: "newsAll" | "newsDetail";
  useSiblingLinks?: boolean;
  toPrefix?: string;
  compact?: boolean;
}

export interface NewsCardPropsI {
  news: NewI;
  to: string;
  relative?: "path";
}
