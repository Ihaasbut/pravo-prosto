import type { Language } from "../../context/language/LanguageContext";
import type { NavLinkI } from "./BurgerMenu.types";
import { navLinks as navLinksEn } from "./mockData/BurgerMenu.mockData.en.ts";
import { navLinks as navLinksRu } from "./mockData/BurgerMenu.mockData.ru.ts";

export const BURGER_MENU_DATA: Record<Language, NavLinkI[]> = {
  ru: navLinksRu,
  en: navLinksEn,
};
