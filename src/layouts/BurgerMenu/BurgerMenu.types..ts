export type NavLinkI = {
    id: string;
    path: string;
    title: string;
};

export type BurgerMenuPropsI = {
    onToggleMenu: () => void;
    isMenuOpen: boolean;
};
