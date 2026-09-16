import cn from "classnames";

import { useLanguage } from "../../hooks/use-language";
import { useMenu } from "../../hooks/use-menu";
import { BURGER_MENU_DATA } from "./BurgerMenu.consts";
import BurgerMenuPanel from "./components/burgerMenuPanel/BurgerMenuPanel";

import styles from "./BurgerMenu.module.css";

function BurgerMenu() {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();
  const { language } = useLanguage();
  const navLinks = BURGER_MENU_DATA[language];

  return (
    <>
      <button
        onClick={toggleMenu}
        className={cn(styles.burgerMenu, isMenuOpen && styles.menuOpen)}
      >
        {["top", "middle", "bottom"].map((line) => (
          <span key={line} />
        ))}
      </button>
      <BurgerMenuPanel
        isOpened={isMenuOpen}
        onClose={closeMenu}
        navLinks={navLinks}
      />
    </>
  );
}

export default BurgerMenu;
