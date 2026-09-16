import type { Language } from "../../../context/language/LanguageContext";
import { formData as formDataEn } from "./mockData/RequestForm.mockData.en.ts";
import { formData as formDataRu } from "./mockData/RequestForm.mockData.ru.ts";
import type { RequestFormDataI, RequestFormFieldsI } from "./RequestForm.types";

export const REQUEST_FORM_DATA: Record<Language, RequestFormDataI> = {
  ru: formDataRu,
  en: formDataEn,
};

export const REQUEST_FORM_DEFAULT_VALUES: RequestFormFieldsI = {
  name: "",
  phone: "",
  company: "",
  description: "",
};
