import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./Header.module.css";
import { useTheme } from "../../hooks/use-theme";
import { useLanguage } from "../../hooks/use-language";
import { useLocation, useNavigate } from "react-router-dom";
import cn from "classnames";
import Logo from "../../components/icons/Logo/Logo";

interface HeaderPropsI {
    isMenuOpen: boolean;
    onToggleMenu: () => void;
}

function Header({ isMenuOpen, onToggleMenu }: HeaderPropsI) {
    const { theme, handleChangeTheme } = useTheme();
    const { language, handleChangeLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    const changeUrl = (newlang: string) => {
        const pathname = location.pathname;
        const segments = pathname.split("/").filter(Boolean);
        const newPath =
            segments.length > 0
                ? `/${newlang}/${segments.slice(1).join("/")}`
                : `/${newlang}`;
        navigate(newPath, { replace: true });
    };

    return (
        <div className={styles["header"]}>
            <Logo className={styles["header-logo"]} />
            <div className={styles["burger-mobile-wrapper"]}>
                <div onClick={onToggleMenu} className={styles["burger-mobile"]}>
                    <BurgerMenu
                        onToggleMenu={onToggleMenu}
                        isMenuOpen={isMenuOpen}
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
                            handleChangeTheme("dark");
                        }}
                        className={cn(styles["color-theme-1"], {
                            [styles["is-mobile"]]: theme === "dark",
                        })}
                    >
                        DARK
                    </button>
                    <button
                        onClick={() => {
                            handleChangeTheme("light");
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
                            handleChangeLanguage("en");
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
                            handleChangeLanguage("ru");
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
