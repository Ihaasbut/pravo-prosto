import Logo from "../../components/icons/Logo/Logo";
import styles from "./Sidebar.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
interface SiderBarPropsI {
    isMenuOpen: boolean;
    onToggleMenu: () => void;
}

function Sidebar({ isMenuOpen, onToggleMenu }: SiderBarPropsI) {
    return (
        <nav className={styles["sidebar-wrapper"]}>
            <Logo className={styles["sidebar-logo"]} />

            <div
                className={styles["sidebar"]}
                onClick={onToggleMenu}
                // aria-expanded={isMenuOpen}
                // aria-controls="burger-menu"
                // aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            ></div>
            <BurgerMenu
                onToggleMenu={onToggleMenu}
                isMenuOpen={isMenuOpen}
            />
        </nav>
    );
}

export default Sidebar;
