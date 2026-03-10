import type { ReactNode } from "react";

export type ButtonPropsI = {
    children: ReactNode;
    variant: "fill" | "outline";
    onClick?: () => void;
    className?: string;
};
