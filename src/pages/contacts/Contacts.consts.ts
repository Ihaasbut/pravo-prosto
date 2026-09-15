import type { Language } from "../../context/language/LanguageContext";
import type { ContactsPageI } from "./Contacts.types";
import { headerPage as headerPageEn } from "./mockData/contacts-page.mockData.en.ts";
import { headerPage as headerPageRu } from "./mockData/contacts-page.mockData.ru.ts";

export const CONTACTS_DATA: Record<Language, ContactsPageI> = {
  ru: headerPageRu,
  en: headerPageEn,
};
