import type { RequestSectionDataI } from "../../../components/sections/requestSection/RequestSection.types";
import type { TitleBlockI } from "../../../types/titleBlock.types";
import type { HeroDataI } from "../components/hero/Hero.types";
import type { HomeAboutDataI } from "../components/homeAbout/HomeAbout.types";
import type { HomeProcessDataI } from "../components/homeProcess/HomeProcess.types";

export const hero: HeroDataI = {
  title: "Математически точные\nюридические решения",
  description:
    "Право Просто — российская юридическая фирма с глубокой экспертизой в IT, инвестиционных сделках и юридических исследованиях. Мы решаем многоуровневые правовые задачи и управляем комплексными юридическими проектами для бизнеса и частных клиентов. Головной офис компании расположен в ИТ-Парке им. Б. Рамеева в Казани.",
  button: "Консультация",
  serviceKeywords: [
    "Договоры",
    "Сделки",
    "Претензии",
    "Инвестиции",
    "Авторское право",
    "Аудит",
    "Реорганизация",
    "Защита кода",
    "Аккредитация",
    "Правовой R&D",
    "ИТ-льготы",
    "Биометрия",
    "Due diligence",
    "Лицензия",
  ],
};

export const about: HomeAboutDataI = {
  titleBlock: {
    title: "Подход",
    description:
      "Встраиваемся в продуктовую команду и закрываем правовые задачи так, чтобы ими можно было пользоваться в работе, а не только хранить в папке.",
  },
  principles: [
    {
      title: "Сначала продукт",
      description:
        "Не начинаем с шаблона. Разбираем модель: SaaS, API, open source, данные, льготы — и только потом пишем документы.",
    },
    {
      title: "Понятный результат",
      description:
        "Договор, позиция или сделка с ясным эффектом и названными рисками. Без «сопроводим любой вопрос».",
    },
    {
      title: "Одна линия",
      description:
        "Юристы и бухгалтерия для ИТ в одном контуре: договоры, интеллектуальная собственность, аккредитация, учёт.",
    },
  ],
};

export const process: HomeProcessDataI = {
  titleBlock: {
    title: "Как работаем",
    description:
      "Короткий цикл: фиксируем задачу, отсекаем лишнее и ведём работу так, чтобы вы всегда понимали следующий шаг.",
  },
  steps: [
    {
      title: "Заявка",
      description:
        "Коротко описываете задачу. Созваниваемся и обозначаем границы: что входит, что нет, сколько займёт разбор.",
    },
    {
      title: "Разбор",
      description:
        "Смотрим документы, продукт и риски. Говорим, что реально нужно сейчас, а что можно отложить.",
    },
    {
      title: "План",
      description:
        "Состав работ, сроки и формат. Понятно, что будет на выходе и кто за что отвечает.",
    },
    {
      title: "Сопровождение",
      description:
        "Готовим документы, ведём переговоры или спор. Держим вас в курсе без лишней переписки.",
    },
  ],
};

export const teamBlock: TitleBlockI = {
  title: "Команда",
  description:
    "Юристы с практикой в ИТ, финтехе и интеллектуальной собственности. Работаем как часть вашей команды.",
  buttonText: "Подробнее",
};

export const servicesBlock: TitleBlockI = {
  title: "Услуги",
  description:
    "Юридические и бухгалтерские услуги для ИТ-компаний: договоры, сделки, интеллектуальная собственность и сопровождение бизнеса.",
  buttonText: "Все услуги",
};

export const newsBlock: TitleBlockI = {
  title: "Новости",
  buttonText: "Все новости",
};

export const request: RequestSectionDataI = {
  title: "Обсудить задачу",
  description:
    "Напишите, что происходит. Вернёмся с понятным следующим шагом — без общей консультации «обо всём».",
  label: "[ консультация ]",
};
