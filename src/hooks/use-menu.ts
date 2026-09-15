import { useContext } from "react";
import {
    MenuContext,
    type MenuContextValueI,
} from "../context/menu/MenuContext";

export const useMenu = (): MenuContextValueI => {
    const ctx = useContext(MenuContext);

    if (!ctx) {
        throw new Error("useMenu must be used within MenuProvider");
    }

    return ctx;
};
