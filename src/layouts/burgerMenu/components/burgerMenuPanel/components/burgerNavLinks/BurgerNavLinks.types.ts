export interface NavLinkDataI {
  id: string;
  path: string;
  title: string;
}

export interface BurgerNavLinksPropsI {
  navLinks: NavLinkDataI[];
  onLinkClick: () => void;
}
