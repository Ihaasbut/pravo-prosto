import type { TitleBlockI } from "../../../types/titleBlock.types";
import type { RequestSectionDataI } from "../../../components/sections/requestSection/RequestSection.types";
import type { ServicesForWhomDataI } from "../../services/components/servicesForWhom/ServicesForWhom.types";
import type { NewsCategoryI } from "../News.types";

export const headerPage: TitleBlockI = {
  title: "Новости",
  description:
    "Разборы договоров, кейсы и короткие материалы для ИТ-команд — без канцелярита.",
};

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

export const topics: ServicesForWhomDataI = {
  title: "О чём пишем",
  description:
    "Не дайджест «всего права», а то, с чем ИТ-команда сталкивается в работе: оферта, NDA, SLA, права на код.",
  items: [
    {
      title: "Наши новости",
      description:
        "Офис, выступления, новые форматы. Что происходит в фирме и чем можно воспользоваться.",
    },
    {
      title: "Кейсы",
      description:
        "Конкретная задача и что сделали: enterprise-сделка, seed, оферта площадки. Без имён, если нельзя называть.",
    },
    {
      title: "Видео",
      description:
        "Короткие разборы документов, которые можно показать фаундеру или продажам до консультации.",
    },
    {
      title: "Полезное",
      description:
        "Как читать счёт-оферту, какие пункты NDA работают, когда SLA уже нужен. Чек-листы, не лекции.",
    },
  ],
};

export const request: RequestSectionDataI = {
  title: "Есть похожая задача?",
  description:
    "Пришлите документ или коротко опишите ситуацию. Скажем, что с ним делать дальше — или что пока рано.",
  label: "[ консультация ]",
};
