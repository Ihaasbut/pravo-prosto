import { useEffect, useState } from "react";
import Logo from "../../components/icons/Logo";
import styles from "./Sidebar.module.css";

import BurgerMenu from "../BurgerMenu/BurgerMenu";

import type { SidebarItemsI } from "../BurgerMenu/BurgerMenu.types.";
import { useLanguage } from "../../hooks/use-language";

interface SiderBarPropsI {
    openedMenu: boolean;
    toggleMenu: () => void;
}

function Sidebar({ openedMenu, toggleMenu }: SiderBarPropsI) {
    const [data, setData] = useState<SidebarItemsI | null>(null);
    const { language } = useLanguage();

    useEffect(() => {
        (async () => {
            const module = await import(`../BurgerMenu/mockData/BurgerMenu.mockData.${language}.ts`);
            const sidebarItems: SidebarItemsI = module.sidebarItems;
            setData(sidebarItems);
            console.log(module)
        })();
    }, [language]);

    if (!data) {
        return null;
    }

    return (
        <nav className={styles["sidebar-wrapper"]}>
            <a href="/" className={styles["sidebar-logo"]}>
                <Logo />
            </a>
            <div
                className={styles["sidebar"]}
                onClick={toggleMenu}
                aria-expanded={openedMenu}
                aria-controls="burger-menu"
                aria-label={openedMenu ? "Закрыть меню" : "Открыть меню"}
            ></div>
            <BurgerMenu
                classname="menu-dekstop"
                toggleMenu={toggleMenu}
                openedMenu={openedMenu}
                items={data.items}
            />
        </nav>
    );
}

export default Sidebar;
