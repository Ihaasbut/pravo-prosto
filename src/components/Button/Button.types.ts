import type { ReactNode } from "react";

export type ButtonPropsI = {
    children: ReactNode;
    variant: "fill" | "outline";
    onOpenModal?: () => void;
};
