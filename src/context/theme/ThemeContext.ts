import { createContext } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextValue {
    theme: Theme;
    handleChangeTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
    undefined,
);
