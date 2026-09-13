import type { ReactNode } from "react";

export interface ButtonPropsI {
    children: ReactNode;
    variant: "fill" | "outline";
    onClick?: () => void;
    className?: string;
}
