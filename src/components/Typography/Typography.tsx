import type { ElementType, HTMLAttributes, ReactNode } from "react";
import styles from "./Typography.module.css";
import cn from "classnames";

type TypographyVariant =
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

interface TypographyPropsI extends HTMLAttributes<HTMLElement> {
    variant: TypographyVariant;
    children: ReactNode;
    className?: string;
    as?: ElementType;
    href?: string;
    target?: string;
    rel?: string;
}

function Typography({
    variant,
    children,
    className = "",
    as: Component = "div",
    ...restProps
}: TypographyPropsI) {
    return (
        <Component
            className={cn(styles["typography"], styles[variant], className)}
            {...restProps}
        >
            {children}
        </Component>
    );
}

export default Typography;
