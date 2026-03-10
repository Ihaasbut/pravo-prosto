import { useContext } from "react";
import {
    ModalContext,
    type ModalContextValueI,
} from "../context/modal-context";

export const useModal = (): ModalContextValueI => {
    const ctx = useContext(ModalContext);

    if (!ctx) {
        throw new Error("useTheme must be used within ModalProvider");
    }

    return ctx;
};
