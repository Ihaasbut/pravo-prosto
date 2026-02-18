import { useEffect, useState, type ReactNode } from "react";
import {
    LanguageContext,
    type Language,
    type LanguageContextValue,
} from "./language-context";
import { useLocation, useNavigate, useParams } from "react-router-dom";

type LanguageProviderI = {
    children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderI) => {
    const params = useParams<{ lang: Language }>();
    const [language, setLanguage] = useState<Language>(params.lang || "ru");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (params.lang !== language) {
            const pathname = location.pathname;
            const pathParts = pathname.split("/").filter(Boolean);
            const newPath =
                pathParts.length > 0
                    ? `/${language}/${pathParts.slice(1).join("/")}`
                    : `/${language}`;
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
