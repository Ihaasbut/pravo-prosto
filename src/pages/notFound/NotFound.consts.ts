import type { Language } from "../../context/language/LanguageContext";
import { pageNotFound as pageNotFoundEn } from "./mockData/not-found.mockData.en.ts";
import { pageNotFound as pageNotFoundRu } from "./mockData/not-found.mockData.ru.ts";
import type { NotFoundDataI } from "./NotFound.types";

export const NOT_FOUND_DATA: Record<Language, NotFoundDataI> = {
  ru: pageNotFoundRu,
  en: pageNotFoundEn,
};
