import { useEffect, useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./Header.module.css";
import { useTheme } from "../../hooks/use-theme";
import { useLanguage } from "../../hooks/use-language";
import { useLocation, useNavigate } from "react-router-dom";
import type { SidebarItemsI } from "../BurgerMenu/BurgerMenu.types.";
import cn from "classnames";
import Logo from "../../components/icons/Logo";

interface HeaderPropsI {
    openedMenu: boolean;
    toggleMenu: () => void;
}

function Header({ openedMenu, toggleMenu }: HeaderPropsI) {
    const { theme, changeTheme } = useTheme();
    const { language, changeLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    const [data, setData] = useState<SidebarItemsI | null>(null);

    const changeUrl = (newlang: string) => {
        const pathname = location.pathname;
        const segments = pathname.split("/").filter(Boolean);
        const newPath =
            segments.length > 0
                ? `/${newlang}/${segments.slice(1).join("/")}`
                : `/${newlang}`;
        navigate(newPath, { replace: true });
    };

    useEffect(() => {
        (async () => {
            const module = await import(
                `./../BurgerMenu/mockData/BurgerMenu.mockData.${language}.ts`
            );
            const sidebarItems: SidebarItemsI = module.sidebarItems;
            setData(sidebarItems);
        })();
    }, [language]);

    if (!data) {
        return null;
    }

    return (
        <div className={styles["header"]}>
            <a href="/" className={styles["header-logo"]}>
                <Logo />
            </a>
            <div className={styles["burger-mobile-wrapper"]}>
                <div onClick={toggleMenu} className={styles["burger-mobile"]}>
                    <BurgerMenu
                        classname="menu-mobile"
                        toggleMenu={toggleMenu}
                        openedMenu={openedMenu}
                        items={data.items}
                    />
                </div>
            </div>

            <div className={styles["header-buttons"]}>
                <div
                    className={cn(styles["buttons-theme"], {
                        [styles["active"]]: theme === "dark",
                    })}
                >
                    <button
                        onClick={() => {
                            changeTheme("dark");
                        }}
                        className={cn(styles["color-theme-1"], {
                            [styles["is-mobile"]]: theme === "dark",
                        })}
                    >
                        DARK
                    </button>
                    <button
                        onClick={() => {
                            changeTheme("light");
                        }}
                        className={cn(styles["color-theme-2"], {
                            [styles["is-mobile"]]: theme === "light",
                        })}
                    >
                        LIGHT
                    </button>
                </div>

                <div
                    className={cn(styles["buttons-language"], {
                        [styles["active"]]: language === "en",
                    })}
                >
                    <button
                        onClick={() => {
                            changeLanguage("en");
                            changeUrl("en");
                        }}
                        className={cn(styles["color-language-1"], {
                            [styles["color-language-theme-light-1"]]:
                                theme === "light",
                            [styles["is-mobile"]]: language === "en",
                        })}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => {
                            changeLanguage("ru");
                            changeUrl("ru");
                        }}
                        className={cn(styles["color-language-2"], {
                            [styles["color-language-theme-light-2"]]:
                                theme === "light",
                            [styles["is-mobile"]]: language === "ru",
                        })}
                    >
                        RU
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
