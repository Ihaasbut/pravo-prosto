import type { TitleBlockPropsI } from "../../../types/titleBlock.types";
import type { NewsCategoryI } from "../types/news-page.types";

export const headerPage:TitleBlockPropsI = {
          title: "Новости"
}

export const newsCategories: NewsCategoryI[] = [
          {
              id: 1,
              title: "Все",
          },
          {
              id: 2,
              title: "Наши новости",
          },
          {
              id: 3,
              title: "Наши кейсы",
          },
          {
              id: 4,
              title: "Видео",
          },
          {
              id: 5,
              title: "Полезное",
          },
      ];

