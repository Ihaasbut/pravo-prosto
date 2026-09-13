import styles from "./Button.module.css";
import cn from "classnames";
import type { ButtonPropsI } from "./Button.types";
import Typography from "../typography/Typography";

function Button({ children, variant, onClick, className }: ButtonPropsI) {
  return (
    <button
      className={cn(
        styles.button,
        variant === "fill" ? styles.fill : styles.outline,
        className,
      )}
      onClick={onClick}
    >
      <Typography variant="button" as={"p"}>
        {children}
      </Typography>
    </button>
  );
}

export default Button;
