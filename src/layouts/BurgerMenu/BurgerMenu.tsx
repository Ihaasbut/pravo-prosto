import { Link } from "react-router-dom";
import Logo from "../../components/icons/Logo";
import Typography from "../../components/Typography/Typography";
import styles from "./BurgerMenu.module.css";
import cn from "classnames";
import type { BurgerMenuProps } from "./BurgerMenu.types.";

function BurgerMenu(props: BurgerMenuProps) {
    const { toggleMenu, openedMenu, items, classname } = props;

    return (
        <>
            <button
                onClick={toggleMenu}
                className={cn(styles["sidebar-menu-burger"], styles[classname])}
            >
                <span> </span>
                <span> </span>
                <span> </span>
            </button>
            <div
                id="burger-menu"
                className={cn(styles["open-menu"], {
                    [styles.active]: openedMenu,
                })}
            >
                <div className={styles["open-menu-info"]}>
                    <a href="/" className={styles["sidebar-logo"]}>
                        <Logo />
                    </a>
                    <ul className={styles["open-menu-list"]}>
                        {items.map((el) => (
                            <li key={el.id}>
                                <Link
                                    to={el.link}
                                    onClick={toggleMenu}
                                    className={styles["open-menu-list-item"]}
                                >
                                    <Typography variant="text-16">
                                        {el.title}
                                    </Typography>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        className={styles["open-menu-close"]}
                        onClick={toggleMenu}
                    >
                        <Typography variant="button-close-menu" as={"p"}>
                            [ X ]
                        </Typography>
                    </button>
                </div>
                <div
                    className={styles["open-menu-overlay"]}
                    onClick={toggleMenu}
                ></div>
            </div>
        </>
    );
}

export default BurgerMenu;
