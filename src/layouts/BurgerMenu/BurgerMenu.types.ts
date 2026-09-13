export interface NavLinkI {
    id: string;
    path: string;
    title: string;
}

export interface BurgerMenuPropsI {
    onToggleMenu: () => void;
    isMenuOpen: boolean;
}
