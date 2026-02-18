import styles from "./Button.module.css";
import cn from "classnames";
import type { ButtonPropsI } from "./Button.types";
import Typography from "../Typography/Typography";

function Button({ children, variant }: ButtonPropsI) {
    return (
        <button className={cn(styles["button"], styles[`button-${variant}`])}>
            <Typography variant="button" as={"span"}>
                {children}
            </Typography>
        </button>
    );
}

export default Button;
