import { useEffect, useState, type ReactNode } from "react";
import {
    ModalContext,
    type IsOpenI,
    type ModalContextValueI,
} from "./modal-context";

type ModalProviderI = {
    children: ReactNode;
};

function ModalProvider({ children }: ModalProviderI) {
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

export default ModalProvider;
