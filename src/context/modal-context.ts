import { createContext } from "react";

export type IsOpenI = boolean;

export interface ModalContextValueI {
    isOpenModal: IsOpenI;
    openModal: () => void;
    closeModal: () => void;
}

export const ModalContext = createContext<ModalContextValueI | undefined>(
    undefined,
);
