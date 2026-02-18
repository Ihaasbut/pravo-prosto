import { NavLink } from "react-router-dom";
import Logo from "../../components/icons/Logo/Logo";
import Typography from "../../components/Typography/Typography";
import styles from "./BurgerMenu.module.css";
import cn from "classnames";
import type { BurgerMenuPropsI, NavLinkI } from "./BurgerMenu.types.";
import { useEffect, useState } from "react";
import { useLanguage } from "../../hooks/use-language";
import Overlay from "../../components/Overlay/Overlay";
import ButtonClose from "../../components/ButtonClose/ButtonClose";

function BurgerMenu(props: BurgerMenuPropsI) {
    const { onToggleMenu, isMenuOpen} = props;
    const { language } = useLanguage();
    const [navLinks, setNavLinks] = useState<NavLinkI[] | null>(null);

    useEffect(() => {
        (async () => {
            const module = await import(
                `../BurgerMenu/mockData/BurgerMenu.mockData.${language}.ts`
            );
            const navLinksData: NavLinkI[] = module.navLinks;
            setNavLinks(navLinksData);
        })();
    }, [language]);

    if (!navLinks) {
        return null;
    }

    return (
        <>
            <button
                onClick={onToggleMenu}
                className={cn(styles["burger-menu"])}
            >
                <span> </span>
                <span> </span>
                <span> </span>
            </button>
            <div
                id="burger-menu"
                className={cn(styles["menu-wrapper"], {
                    [styles["menu-active"]]: isMenuOpen,
                })}
            >
                <Overlay onClosedOverlay={onToggleMenu} isOpened={isMenuOpen} />

                <div className={styles["inner"]}>
                    <Logo className={styles["logo"]} />

                    <ul className={styles["nav-links"]}>
                        {navLinks.map((navLink) => (
                            <li key={navLink.id}>
                                <NavLink
                                    to={navLink.path}
                                    end={navLink.path === ""}
                                    onClick={onToggleMenu}
                                    className={({ isActive }) =>
                                        cn(styles["nav-link"], {
                                            [styles["nav-link-active"]]:
                                                isActive,
                                        })
                                    }
                                >
                                    <Typography variant="body-s">
                                        {navLink.title}
                                    </Typography>
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <ButtonClose onToggleClose={onToggleMenu} />
                </div>
            </div>
        </>
    );
}

export default BurgerMenu;
