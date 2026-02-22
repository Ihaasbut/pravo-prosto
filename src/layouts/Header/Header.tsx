import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./Header.module.css";
import Logo from "../../components/icons/Logo/Logo";
import ButtonTheme from "./ButtonTheme/ButtonTheme";
import ButtonLanguage from "./ButtonLanguage/ButtonLanguage";

interface HeaderPropsI {
    isMenuOpen: boolean;
    onToggleMenu: () => void;
}

function Header({ isMenuOpen, onToggleMenu }: HeaderPropsI) {
    return (
        <div className={styles["header"]}>
            <div className="container">
                <div className="content">
                    <div className={styles["wrapper-header"]}>
                        <Logo className={styles["header-logo"]} />

                        <div className={styles["header-buttons"]}>
                            <ButtonLanguage />
                            <ButtonTheme />
                        </div>
                    </div>
                </div>
            </div>
            <div
                onClick={onToggleMenu}
                className={styles["burger-mobile-wrapper"]}
            >
                <BurgerMenu
                    onToggleMenu={onToggleMenu}
                    isMenuOpen={isMenuOpen}
                />
            </div>
        </div>
    );
}

export default Header;
