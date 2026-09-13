import BurgerMenu from "../burgerMenu/BurgerMenu";
import styles from "./Header.module.css";
import Logo from "../../components/icons/logo/Logo";
import ButtonTheme from "./buttonTheme/ButtonTheme";
import ButtonLanguage from "./buttonLanguage/ButtonLanguage";
import type { HeaderPropsI } from "./Header.types";

function Header({ isMenuOpen, onToggleMenu }: HeaderPropsI) {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className="content">
          <div className={styles.wrapper}>
            <Logo className={styles.logo} />

            <div className={styles.buttons}>
              <ButtonLanguage />
              <ButtonTheme />
            </div>
          </div>
        </div>
      </div>
      
      <div onClick={onToggleMenu} className={styles.burgerWrapper}>
        <BurgerMenu onToggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} />
      </div>
    </div>
  );
}

export default Header;
