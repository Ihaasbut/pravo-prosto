import { useEffect, useState } from "react";
import {
    ModalContext,
    type IsOpenI,
    type ModalContextValueI,
} from "./ModalContext";
import type { ModalProviderI } from "./ModalProvider.types";

export function ModalProvider({ children }: ModalProviderI) {
    const [isOpenModal, setIsOpenModal] = useState<IsOpenI>(false);

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    useEffect(() => {
        if (isOpenModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpenModal]);

    const value: ModalContextValueI = { isOpenModal, openModal, closeModal };

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
}
