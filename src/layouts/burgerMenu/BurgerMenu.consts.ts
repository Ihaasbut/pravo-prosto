import type { Language } from "../../context/language/LanguageContext";
import type { NavLinkDataI } from "./components/burgerMenuPanel/components/burgerNavLinks/BurgerNavLinks.types";
import { navLinksData as navLinksDataEn } from "./mockData/BurgerMenu.mockData.en.ts";
import { navLinksData as navLinksDataRu } from "./mockData/BurgerMenu.mockData.ru.ts";

export const BURGER_MENU_DATA: Record<Language, NavLinkDataI[]> = {
  ru: navLinksDataRu,
  en: navLinksDataEn,
};
