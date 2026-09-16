import cn from "classnames";

import Typography from "../typography/Typography";
import type { ButtonPropsI } from "./Button.types";

import styles from "./Button.module.css";

function Button({
  children,
  variant,
  onClick,
  className,
  type = "button",
  disabled,
}: ButtonPropsI) {
  return (
    <button
      type={type}
      className={cn(styles.button, styles[variant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography variant="button" as="span">
        {children}
      </Typography>
    </button>
  );
}

export default Button;
