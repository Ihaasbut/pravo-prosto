import type { ElementType, ReactNode } from "react";
import styles from "./Typography.module.css";
import cn from "classnames";

type TypographyVariant =
    | "h1"
    | "h2"
    | "h3"
    | "footer-title"
    | "h1-footer"
    | "body-l"
    | "body-m"
    | "body-s"
    | "button";

interface TypographyPropsI {
    variant: TypographyVariant;
    children: ReactNode;
    className?: string;
    as?: ElementType;
    href?: string;
}

function Typography({
    variant,
    children,
    className = "",
    as: Component = "div",
}: TypographyPropsI) {
    return (
        <Component
            className={cn(styles["typography"], styles[variant], className)}
        >
            {children}
        </Component>
    );
}

export default Typography;
