import { createContext } from "react";

export type IsOpenI = boolean;

export type ModalContextValueI = {
    isOpenModal: IsOpenI;
    openModal: () => void;
    closeModal: () => void;
};

export const ModalContext = createContext<ModalContextValueI | undefined>(
    undefined,
);
