import cn from "classnames";

import Backdrop from "../../../../components/ui/backdrop/Backdrop";
import Cross from "../../../../components/ui/cross/Cross";
import Logo from "../../../../components/ui/icons/logo/Logo";
import type { BurgerMenuPanelPropsI } from "./BurgerMenuPanel.types";
import BurgerNavLinks from "./components/burgerNavLinks/BurgerNavLinks";

import styles from "./BurgerMenuPanel.module.css";

function BurgerMenuPanel({
  isOpened,
  onClose,
  navLinks,
}: BurgerMenuPanelPropsI) {
  return (
    <div
      id="burger-menu"
      className={cn(styles.menuWrapper, isOpened && styles.menuActive)}
    >
      <Backdrop onClose={onClose} isOpened={isOpened} />

      <div className={styles.inner}>
        <Logo className={styles.logo} />

        <BurgerNavLinks navLinks={navLinks} onLinkClick={onClose} />

        <Cross className={styles.close} onClick={onClose} />
      </div>
    </div>
  );
}

export default BurgerMenuPanel;
