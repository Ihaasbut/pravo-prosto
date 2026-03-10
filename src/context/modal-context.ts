import { createContext } from "react";

export type IsOpenI = boolean

export type ModalContextValueI = {
          isOpenModal: IsOpenI;
          onHandleClickModal: () => void;
}

export const ModalContext = createContext<ModalContextValueI | undefined> (undefined)