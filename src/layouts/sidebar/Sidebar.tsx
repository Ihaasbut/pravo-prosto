import cn from "classnames";
import Logo from "../../components/icons/logo/Logo";
import styles from "./Sidebar.module.css";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import type { SiderBarPropsI } from "./Sidebar.types";

function Sidebar({ isMenuOpen, onToggleMenu }: SiderBarPropsI) {
  return (
    <nav className={cn(styles.wrapper, isMenuOpen && styles.menuOpen)}>
      <Logo className={styles.logo} />

      <div className={styles.sidebar} onClick={onToggleMenu}></div>

      <div className={styles.dekstop}>
        <BurgerMenu onToggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
}

export default Sidebar;
