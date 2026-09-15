import { NavLink } from "react-router-dom";
import Logo from "../../components/ui/icons/logo/Logo";
import Typography from "../../components/ui/typography/Typography";
import styles from "./BurgerMenu.module.css";
import cn from "classnames";
import { useLanguage } from "../../hooks/use-language";
import Backdrop from "../../components/ui/backdrop/Backdrop";
import Cross from "../../components/ui/cross/Cross";
import { useMenu } from "../../hooks/use-menu";
import { BURGER_MENU_DATA } from "./BurgerMenu.consts";

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
        <span />
        <span />
        <span />
      </button>
      <div
        id="burger-menu"
        className={cn(styles.menuWrapper, isMenuOpen && styles.menuActive)}
      >
        <Backdrop onClose={closeMenu} isOpened={isMenuOpen} />

        <div className={styles.inner}>
          <Logo className={styles.logo} />

          <ul className={styles.navLinks}>
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <NavLink
                  to={navLink.path}
                  end={navLink.path === ""}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(styles.navLink, isActive && styles.navLinkActive)
                  }
                >
                  <Typography variant="body-s">{navLink.title}</Typography>
                </NavLink>
              </li>
            ))}
          </ul>

          <Cross className={styles.close} onClick={closeMenu} />
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
