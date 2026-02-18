import { useContext } from "react";
import type { ThemeContextValue } from "../context/theme-context";
import { ThemeContext } from "../context/theme-context";

export const useTheme = (): ThemeContextValue => {
    const ctx = useContext(ThemeContext);

    if (!ctx) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return ctx;
};
