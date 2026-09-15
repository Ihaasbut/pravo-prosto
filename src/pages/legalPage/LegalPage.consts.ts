import type { Language } from "../../context/language/LanguageContext";
import type { LegalPagesDataI } from "./LegalPage.types";
import { legalPagesData as legalPagesDataEn } from "./mockData/legal-page.mockData.en.ts";
import { legalPagesData as legalPagesDataRu } from "./mockData/legal-page.mockData.ru.ts";

export const LEGAL_PAGES_DATA: Record<Language, LegalPagesDataI> = {
  ru: legalPagesDataRu,
  en: legalPagesDataEn,
};
