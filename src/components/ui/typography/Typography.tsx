import styles from "./Typography.module.css";
import cn from "classnames";
import type { TypographyPropsI } from "./Typography.types";

function Typography({
  variant,
  children,
  className = "",
  as: Component = "p",
  href,
}: TypographyPropsI) {
  return (
    <Component
      className={cn(styles.typography, styles[variant], className)}
      href={href}
    >
      {children}
    </Component>
  );
}

export default Typography;
