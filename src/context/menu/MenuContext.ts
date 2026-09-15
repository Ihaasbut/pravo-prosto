import { createContext } from "react";

export interface MenuContextValueI {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
}

export const MenuContext = createContext<MenuContextValueI | undefined>(
    undefined,
);
