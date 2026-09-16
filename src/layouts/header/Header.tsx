import Logo from "../../components/ui/icons/logo/Logo";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import ButtonLanguage from "./buttonLanguage/ButtonLanguage";
import ButtonTheme from "./buttonTheme/ButtonTheme";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className="content">
          <div className={styles.wrapper}>
            <Logo className={styles.logo} />

            <div className={styles.burgerWrapper}>
              <BurgerMenu />
            </div>

            <div className={styles.buttons}>
              <ButtonLanguage />
              <ButtonTheme />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
