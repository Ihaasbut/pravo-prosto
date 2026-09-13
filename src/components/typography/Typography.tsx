import styles from "./Typography.module.css";
import cn from "classnames";
import type { TypographyPropsI, TypographyVariant } from "./Typography.types";

const variantClassName: Record<TypographyVariant, string> = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  "footer-title": styles.footerTitle,
  "h1-footer": styles.h1Footer,
  "body-l": styles.bodyL,
  "body-m": styles.bodyM,
  "body-s": styles.bodyS,
  "body-xs": styles.bodyXs,
  button: styles.button,
};

function Typography({
  variant,
  children,
  className = "",
  as: Component = "div",
  ...restProps
}: TypographyPropsI) {
  return (
    <Component
      className={cn(styles.typography, variantClassName[variant], className)}
      {...restProps}
    >
      {children}
    </Component>
  );
}

export default Typography;
