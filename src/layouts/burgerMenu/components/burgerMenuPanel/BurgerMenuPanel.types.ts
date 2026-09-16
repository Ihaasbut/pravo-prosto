import type { NavLinkDataI } from "./components/burgerNavLinks/BurgerNavLinks.types";

export interface BurgerMenuPanelPropsI {
  isOpened: boolean;
  onClose: () => void;
  navLinks: NavLinkDataI[];
}
