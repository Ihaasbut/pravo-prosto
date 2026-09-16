import type { Language } from "../../context/language/LanguageContext";
import type { PageContactsI } from "./Contacts.types";
import { pageContacts as pageContactsEn } from "./mockData/contacts-page.mockData.en.ts";
import { pageContacts as pageContactsRu } from "./mockData/contacts-page.mockData.ru.ts";

export const CONTACTS_DATA: Record<Language, PageContactsI> = {
  ru: pageContactsRu,
  en: pageContactsEn,
};
