import styles from "./Button.module.css";
import cn from "classnames";
import type { ButtonPropsI } from "./Button.types";
import Typography from "../Typography/Typography";

function Button({ children, variant, onClick, className }: ButtonPropsI) {
    return (
        <button className={cn(styles["button"], styles[`button-${variant}`], className)} onClick={onClick}>
            <Typography variant="button" as={"p"}>
                {children}
            </Typography>
        </button>
    );
}

export default Button;
