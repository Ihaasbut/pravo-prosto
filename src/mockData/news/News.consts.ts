import type { Language } from "../../context/language/LanguageContext";
import type { NewI } from "../../types/news.types";
import { news as newsEn } from "./News.mockData.en.ts";
import { news as newsRu } from "./News.mockData.ru.ts";

export const NEWS_DATA: Record<Language, NewI[]> = {
  ru: newsRu,
  en: newsEn,
};
