import { useContext } from "react";
import { LanguageContext, type LanguageContextValue } from "../context/language-context";

export const useLanguage = (): LanguageContextValue => {
    const ctx = useContext(LanguageContext);

    if (!ctx) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return ctx;
};
