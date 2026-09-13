import type { TitleBlockPropsI } from "../../../types/titleBlock.types";
import type { HomeRequestDataI } from "../../home/components/homeRequest/HomeRequest.types";
import type { ServicesForWhomDataI } from "../components/servicesForWhom/ServicesForWhom.types";

export const headerPage: TitleBlockPropsI = {
  title: "Юридические и бухгалтерские услуги для ИТ",
  description: "Мы не просто юристы. Мы часть вашей ИТ-команды.",
  buttonText: "Консультация",
};

export const audiences: ServicesForWhomDataI = {
  title: "Для кого",
  description:
    "Работаем с ИТ-бизнесом, которому нужны договоры, льготы, IP и сделки без перевода с юридического на человеческий.",
  items: [
    {
      title: "Стартап и фаундеры",
      description:
        "Раунд, опционы, договоры с командой и первый серьёзный заказчик. Чтобы due diligence не начался с пустого репозитория прав.",
    },
    {
      title: "Продуктовые компании",
      description:
        "SaaS, лицензии, данные, аккредитация. Документы, которые совпадают с тем, как продукт реально продаётся.",
    },
    {
      title: "Студии и аутсорс",
      description:
        "Подряд, SLA, передача кода, споры по объёму работ. Чтобы результат принадлежал вам, а не «как получится».",
    },
    {
      title: "Финтех, AI, данные",
      description:
        "Нетипичные модели, биометрия, генеративный контент. Сначала карта рисков, потом бумаги, которые можно показать регулятору и клиенту.",
    },
  ],
};

export const request: HomeRequestDataI = {
  title: "Не нашли нужный контур?",
  description:
    "Опишите задачу своими словами. Разберём, какая услуга здесь нужна — или скажем, если это не к нам.",
  label: "[ консультация ]",
};
