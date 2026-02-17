import type { ReactNode } from "react";
import styles from "./Button.module.css";
import cn from "classnames";

interface ButtonPropsI {
    children: ReactNode;
    variant: "fill" | "outline";
}

function Button({ children, variant }: ButtonPropsI) {
    return (
        <button className={cn(styles["button"], styles[`button-${variant}`])}>
            {children}
        </button>
    );
}

export default Button;
