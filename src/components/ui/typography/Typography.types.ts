import type { ElementType, ReactNode } from "react";

export type TypographyVariant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "footer-title"
    | "h1-footer"
    | "body-l"
    | "body-m"
    | "body-s"
    | "body-xs"
    | "button";

export interface TypographyPropsI {
    variant: TypographyVariant;
    children: ReactNode;
    className?: string;
    as?: ElementType;
    href?: string;
}
