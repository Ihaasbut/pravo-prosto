import { useEffect, useState, type ReactNode } from "react";
import {
    ThemeContext,
    type Theme,
    type ThemeContextValue,
} from "./theme-context";

type ThemeProviderI = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderI) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = window.localStorage.getItem("theme");

        return savedTheme === "dark" || savedTheme === "light"
            ? savedTheme
            : "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleChangeTheme = (theme: Theme) => {
        setTheme(theme);
    };

    const value: ThemeContextValue = { theme, handleChangeTheme };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
