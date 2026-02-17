import type { ElementType, ReactNode } from "react";
import styles from "./Typography.module.css";
import type React from "react";
import cn from "classnames";

type TypographyVariant =
    | "h1"
    | "h2"
    | "h3"
    | "text-24"
    | "text-20"
    | "text-16"
    | "button-close-menu";

interface TypographyPropsI {
    variant: TypographyVariant;
    children: ReactNode;
    className?: string;
    as?: ElementType;
    style?: React.CSSProperties;
    href?: string;
}

function Typography({
    variant,
    children,
    className = "",
    as: Component = "div",
    style,
    href,
}: TypographyPropsI) {
    return (
        <Component
            className={cn(styles["typography"], styles[variant], className)}
            style={style}
            href={href}
        >
            {children}
        </Component>
    );
}

export default Typography;
