import type { ElementType, ReactNode } from "react";
import styles from "./Typography.module.css";
import cn from "classnames";

type TypographyVariant =
    | "h1"
    | "h2"
    | "h3"
    | "body-l"
    | "body-m"
    | "body-s"
    | "button"


interface TypographyPropsI {
    variant: TypographyVariant;
    children: ReactNode;
    className?: string;
    as?: ElementType;
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
