import type { NewI } from "../../types/news.types";

export interface NewsTableI {
    pageData: NewI[];
    className: string;
    useSiblingLinks?: boolean;
}
