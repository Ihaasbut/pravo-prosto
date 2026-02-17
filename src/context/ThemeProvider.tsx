import { useEffect, useState, type ReactNode } from "react";
import {
    ThemeContext,
    type Theme,
    type ThemeContextValue,
} from "./theme-context";

interface ThemeProviderI {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderI) => {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // const setDarkTheme: () => void = () => {
    //     if (theme === "light") {
    //         setTheme("dark");
    //     }
    // };
    // const setLightTheme: () => void = () => {
    //     if (theme === "dark") {
    //         setTheme("light");
    //     }
    // };

    const changeTheme = (theme: Theme) => {
        setTheme(theme);
    };

    const value: ThemeContextValue = { theme, changeTheme };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
