interface SidebarItemI {
    id: string;
    link: string;
    title: string;
}

export interface SidebarItemsI {
    items: SidebarItemI[];
}

export interface BurgerMenuProps {
    toggleMenu?: () => void;
    openedMenu: boolean;
    items: SidebarItemI[];
    onClick?: ()=> void;
    classname: string;
}
