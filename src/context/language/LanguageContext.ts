import { createContext } from "react";

export type Language = "ru" | "en";

export interface LanguageContextValue {
    language: Language;
    handleChangeLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(
    undefined,
);
