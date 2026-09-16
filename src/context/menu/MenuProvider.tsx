import { useEffect, useState } from "react";

import { MenuContext, type MenuContextValueI } from "./MenuContext";
import type { MenuProviderI } from "./MenuProvider.types";

export function MenuProvider({ children }: MenuProviderI) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((open) => !open);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        document.documentElement.dataset.menuOpen = String(isMenuOpen);

        return () => {
            delete document.documentElement.dataset.menuOpen;
        };
    }, [isMenuOpen]);

    const value: MenuContextValueI = { isMenuOpen, toggleMenu, closeMenu };

    return (
        <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
    );
}
