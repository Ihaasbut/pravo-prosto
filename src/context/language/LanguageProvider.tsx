import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import {
  type Language,
  LanguageContext,
  type LanguageContextValue,
} from "./LanguageContext";
import { getPathForLanguage } from "./LanguageProvider.helpers";
import type { LanguageProviderI } from "./LanguageProvider.types";

function isLanguage(value: string | undefined): value is Language {
  return value === "ru" || value === "en";
}

export const LanguageProvider = ({ children }: LanguageProviderI) => {
  const params = useParams<{ lang: Language }>();
  const [language, setLanguage] = useState<Language>(params.lang || "ru");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (params.lang !== language) {
      const fromLanguage = isLanguage(params.lang) ? params.lang : language;
      const newPath = getPathForLanguage(
        location.pathname,
        fromLanguage,
        language,
      );
      navigate(newPath, { replace: true });
    }
  }, [language, params.lang, navigate, location.pathname]);

  useEffect(() => {
    window.localStorage.setItem("language", language);
  }, [language, params.lang]);

  const handleChangeLanguage = (language: Language) => {
    setLanguage(language);
  };

  const value: LanguageContextValue = {
    language,
    handleChangeLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
